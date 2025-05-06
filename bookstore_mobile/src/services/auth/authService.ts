import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import {jwtDecode} from 'jwt-decode';
import {ACCESS_TOKEN_KEY, AuthResponse, JwtPayload, REFRESH_TOKEN_KEY} from '@/types/auth/authTypes.ts';
import {API_URL} from "@queries/auth/apis.ts";
import {User} from "@/types/user/userTypes.ts";

// Replace with your actual API URL

/**
 * Authentication service for handling user authentication
 */
class AuthService {
	/**
	 * Login user with email and password
	 */
	async login(email: string, password: string): Promise<User> {
		try {
			const response = await axios.post<AuthResponse>(`${API_URL}/auth/login`, {
				email,
				password,
			});

			const {accessToken, refreshToken, user} = response.data;

			// Store tokens securely
			await this.storeTokens(accessToken, refreshToken);

			return user;
		} catch (error) {
			console.error('Login error:', error);
			throw error;
		}
	}

	/**
	 * Register a new user
	 */
	async register(name: string, email: string, password: string): Promise<User> {
		try {
			const response = await axios.post<AuthResponse>(`${API_URL}/auth/register`, {
				name,
				email,
				password,
			});

			const {accessToken, refreshToken, user} = response.data;

			// Store tokens securely
			await this.storeTokens(accessToken, refreshToken);

			return user;
		} catch (error) {
			console.error('Registration error:', error);
			throw error;
		}
	}

	/**
	 * Logout user by removing stored tokens
	 */
	async logout(): Promise<void> {
		try {
			await SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);
			await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);
		} catch (error) {
			console.error('Logout error:', error);
			throw error;
		}
	}

	/**
	 * Check if user is authenticated
	 */
	async isAuthenticated(): Promise<boolean> {
		try {
			const token = await this.getAccessToken();
			return !!token;
		} catch (error) {
			return false;
		}
	}

	/**
	 * Get current user from token
	 */
	async getCurrentUser(): Promise<User | null> {
		try {
			const token = await this.getAccessToken();

			if (!token) {
				return null;
			}

			const decoded = jwtDecode<JwtPayload>(token);

			return {
				id: decoded.sub,
				email: decoded.email,
				name: decoded.name,
				role: decoded.role,
			};
		} catch (error) {
			console.error('Get current user error:', error);
			return null;
		}
	}

	/**
	 * Get access token from secure storage
	 */
	async getAccessToken(): Promise<string | null> {
		try {
			return await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);
		} catch (error) {
			console.error('Get access token error:', error);
			return null;
		}
	}

	/**
	 * Store tokens in secure storage
	 */
	private async storeTokens(accessToken: string, refreshToken: string): Promise<void> {
		try {
			await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, accessToken);
			await SecureStore.setItemAsync(REFRESH_TOKEN_KEY, refreshToken);
		} catch (error) {
			console.error('Store tokens error:', error);
			throw error;
		}
	}

	/**
	 * Refresh access token using refresh token
	 */
	async refreshToken(): Promise<string | null> {
		try {
			const refreshToken = await SecureStore.getItemAsync(REFRESH_TOKEN_KEY);

			if (!refreshToken) {
				return null;
			}

			const response = await axios.post<{ accessToken: string }>(`${API_URL}/auth/refresh`, {
				refreshToken,
			});

			const {accessToken} = response.data;
			await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, accessToken);

			return accessToken;
		} catch (error) {
			console.error('Refresh token error:', error);
			return null;
		}
	}

	/**
	 * Setup http interceptors for automatic token refresh
	 */
	setupAxiosInterceptors(): void {
		axios.interceptors.request.use(
			async (config) => {
				const token = await this.getAccessToken();

				if (token) {
					config.headers.Authorization = `Bearer ${token}`;
				}

				return config;
			},
			(error) => Promise.reject(error)
		);

		axios.interceptors.response.use(
			(response) => response,
			async (error) => {
				const originalRequest = error.config;

				// If error is 401 and we haven't tried to refresh the token yet
				if (error.response?.status === 401 && !originalRequest._retry) {
					originalRequest._retry = true;

					const newToken = await this.refreshToken();

					if (newToken) {
						originalRequest.headers.Authorization = `Bearer ${newToken}`;
						return axios(originalRequest);
					}
				}

				return Promise.reject(error);
			}
		);
	}
}

export default new AuthService();
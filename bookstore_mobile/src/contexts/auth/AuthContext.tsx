import authService from '@/services/auth/authService';
import {AuthContextType} from '@/types/auth/authTypes';
import React, {createContext, useState, useContext, useEffect, ReactNode} from 'react';
import {User} from "@/types/user/userTypes.ts";

// Create the authentication context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Props for the AuthProvider component
interface AuthProviderProps {
	children: ReactNode;
}

/**
 * AuthProvider component that wraps the application and provides authentication state
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	// Initialize authentication state on app start
	useEffect(() => {
		const initAuth = async () => {
			try {
				// Setup http interceptors for token handling
				authService.setupAxiosInterceptors();

				// Check if user is authenticated
				const authenticated = await authService.isAuthenticated();
				setIsAuthenticated(authenticated);

				if (authenticated) {
					// Get current user from token
					const currentUser = await authService.getCurrentUser();
					setUser(currentUser);
				}
			} catch (error) {
				console.error('Auth initialization error:', error);
			} finally {
				setIsLoading(false);
			}
		};

		initAuth().then((r) => {
			console.log('AuthProvider:', r);
		});
	}, []);

	/**
	 * Login user with email and password
	 */
	const login = async (email: string, password: string) => {
		try {
			setIsLoading(true);
			const loggedInUser = await authService.login(email, password);
			setUser(loggedInUser);
			setIsAuthenticated(true);
		} catch (error) {
			console.error('Login error in context:', error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	};

	/**
	 * Register a new user
	 */
	const register = async (name: string, email: string, password: string) => {
		try {
			setIsLoading(true);
			const registeredUser = await authService.register(name, email, password);
			setUser(registeredUser);
			setIsAuthenticated(true);
		} catch (error) {
			console.error('Registration error in context:', error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	};

	/**
	 * Logout user
	 */
	const logout = async () => {
		try {
			setIsLoading(true);
			await authService.logout();
			setUser(null);
			setIsAuthenticated(false);
		} catch (error) {
			console.error('Logout error in context:', error);
			throw error;
		} finally {
			setIsLoading(false);
		}
	};

	// Context value
	const value = {
		user,
		isLoading,
		isAuthenticated,
		login,
		register,
		logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


// Define the shape of our authentication context
import {User} from "@/src/types/user/UserTypes";

export interface AuthContextType {
	user: User | null;
	isLoading: boolean;
	isAuthenticated: boolean;
	login: (email: string, password: string) => Promise<void>;
	register: (name: string, email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
}

// Auth response interface
export interface AuthResponse {
	accessToken: string;
	refreshToken: string;
	user: User;
}

// JWT payload interface
export interface JwtPayload {
	sub: string;
	email: string;
	name: string;
	role: string;
	exp: number;
}

// Token storage keys
export const ACCESS_TOKEN_KEY = 'auth_access_token';
export const REFRESH_TOKEN_KEY = 'auth_refresh_token';
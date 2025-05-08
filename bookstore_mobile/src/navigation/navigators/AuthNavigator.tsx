import React from 'react';
import {Stack} from 'expo-router';
import {useAuth} from "@/hooks/auth/useAuth.tsx";

/**
 * Authentication navigator component
 * Handles navigation for authentication-related screens (login, register)
 */
export function AuthNavigator() {
	const {isAuthenticated} = useAuth();

	return (
		<>
			{/* Public routes */}
			<Stack.Screen
				name="login"
				options={{
					title: 'Login',
					headerShown: !isAuthenticated, // Hide header if authenticated
				}}
			/>
			<Stack.Screen
				name="register"
				options={{
					title: 'Register',
					headerShown: !isAuthenticated, // Hide header if authenticated
				}}
			/>
		</>
	);
}
import React from 'react';
import {Stack} from 'expo-router';
import {useAuth} from '@/hooks/auth/useAuth.tsx';

/**
 * Main application navigator component
 * Handles navigation for authenticated user screens
 */
export function AppNavigator() {
	const {isAuthenticated} = useAuth();

	return (
		<>
			{/* Protected routes */}
			<Stack.Screen
				name="index"
				options={{
					title: 'Home',
					headerShown: isAuthenticated, // Show header if authenticated
				}}
			/>
			<Stack.Screen
				name="(tabs)"
				options={{
					headerShown: false, // Hide header for tab navigation
				}}
			/>
		</>
	);
}
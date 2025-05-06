import React, {useEffect} from 'react';
import {Stack} from 'expo-router';
import {AuthProvider} from '@/src/contexts/auth/AuthContext';
import {View, ActivityIndicator} from 'react-native';
import {useAuth} from "@/src/hooks/auth/useAuth";

/**
 * Root layout component that wraps the entire application
 */
export default function RootLayout() {
	return (
		<AuthProvider>
			<RootLayoutNav/>
		</AuthProvider>
	);
}

/**
 * Navigation component that handles authentication state
 */
function RootLayoutNav() {
	const {isLoading, isAuthenticated} = useAuth();

	// Show loading indicator while checking authentication state
	if (isLoading) {
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<ActivityIndicator size="large" color="#0000ff"/>
			</View>
		);
	}

	return (
		<Stack>
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
		</Stack>
	);
}
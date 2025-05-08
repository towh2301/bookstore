import React from 'react';
import {Redirect} from 'expo-router';
import LoginScreen from '../screens/auth/LoginScreen.tsx';
import {useAuth} from "../hooks/auth/useAuth.tsx";

/**
 * Login route component
 * Redirects to home if already authenticated
 */
export default function Login() {
	const {isAuthenticated} = useAuth();

	// Redirect to home if already authenticated
	if (isAuthenticated) {
		return <Redirect href="/"/>;
	}

	// Show login screen
	return <LoginScreen/>;
}
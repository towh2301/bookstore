import React from 'react';
import {Redirect} from 'expo-router';
import LoginScreen from '../src/screens/auth/LoginScreen';
import {useAuth} from "@/src/hooks/auth/useAuth";

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
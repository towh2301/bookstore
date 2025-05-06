import React from 'react';
import {Redirect} from 'expo-router';
import RegisterScreen from '../src/screens/auth/RegisterScreen';
import {useAuth} from "../src/hooks/auth/useAuth";

/**
 * Register route component
 * Redirects to home if already authenticated
 */
export default function Register() {
	const {isAuthenticated} = useAuth();

	// Redirect to home if already authenticated
	if (isAuthenticated) {
		return <Redirect href="/"/>;
	}

	// Show register screen
	return <RegisterScreen/>;
}
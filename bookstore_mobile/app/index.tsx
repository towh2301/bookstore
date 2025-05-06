import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Redirect} from 'expo-router';
import {useAuth} from "../src/hooks/auth/useAuth";

/**
 * Home screen component
 * Protected route - only accessible to authenticated users
 */
export default function HomeScreen() {
	const {user, isAuthenticated, logout} = useAuth();

	// Redirect to login if not authenticated
	if (!isAuthenticated) {
		// @ts-ignore
		return <Redirect href="/login"/>;
	}

	// Handle logout
	const handleLogout = async () => {
		try {
			await logout();
		} catch (error) {
			console.error('Logout error:', error);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.title}>Welcome to Bookstore</Text>

				{user && (
					<View style={styles.userInfo}>
						<Text style={styles.welcomeText}>
							Welcome back, <Text style={styles.userName}>{user.name}</Text>
						</Text>
						<Text style={styles.emailText}>{user.email}</Text>
					</View>
				)}

				<Text style={styles.description}>
					You are now logged in with JWT authentication.
				</Text>

				<TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
					<Text style={styles.logoutButtonText}>Logout</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	content: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		color: '#333',
	},
	userInfo: {
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 10,
		width: '100%',
		marginBottom: 20,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	welcomeText: {
		fontSize: 18,
		color: '#333',
		marginBottom: 5,
	},
	userName: {
		fontWeight: 'bold',
		color: '#007bff',
	},
	emailText: {
		fontSize: 16,
		color: '#666',
	},
	description: {
		fontSize: 16,
		color: '#666',
		textAlign: 'center',
		marginBottom: 30,
	},
	logoutButton: {
		backgroundColor: '#dc3545',
		padding: 15,
		borderRadius: 5,
		width: '100%',
		alignItems: 'center',
	},
	logoutButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
});
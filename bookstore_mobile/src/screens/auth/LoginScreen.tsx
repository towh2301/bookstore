import React, {useState} from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	ActivityIndicator,
	Alert,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
} from 'react-native';
import {useRouter} from 'expo-router';
import {useAuth} from "@/src/hooks/auth/useAuth";

/**
 * Login Screen Component
 */
const LoginScreen: React.FC = () => {
	// State for form inputs
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Get authentication context
	const {login, isLoading} = useAuth();

	// Router for navigation
	const router = useRouter();

	/**
	 * Handle login form submission
	 */
	const handleLogin = async () => {
		// Validate form inputs
		if (!email || !password) {
			Alert.alert('Error', 'Please enter both email and password');
			return;
		}

		try {
			setIsSubmitting(true);
			await login(email, password);
			// Navigate to home screen on successful login
			router.replace('/');
		} catch (error: any) {
			// Handle login errors
			const errorMessage = error.response?.data?.message || 'Failed to login. Please try again.';
			Alert.alert('Login Failed', errorMessage);
		} finally {
			setIsSubmitting(false);
		}
	};

	/**
	 * Navigate to registration screen
	 */
	const navigateToRegister = () => {
		router.push('/register');
	};

	// Show loading indicator if global auth state is loading
	if (isLoading) {
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicator size="large" color="#0000ff"/>
			</View>
		);
	}

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
		>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<View style={styles.formContainer}>
					<Text style={styles.title}>Bookstore Login</Text>

					<View style={styles.inputContainer}>
						<Text style={styles.label}>Email</Text>
						<TextInput
							style={styles.input}
							value={email}
							onChangeText={setEmail}
							placeholder="Enter your email"
							keyboardType="email-address"
							autoCapitalize="none"
							autoCorrect={false}
						/>
					</View>

					<View style={styles.inputContainer}>
						<Text style={styles.label}>Password</Text>
						<TextInput
							style={styles.input}
							value={password}
							onChangeText={setPassword}
							placeholder="Enter your password"
							secureTextEntry
						/>
					</View>

					<TouchableOpacity
						style={styles.loginButton}
						onPress={handleLogin}
						disabled={isSubmitting}
					>
						{isSubmitting ? (
							<ActivityIndicator size="small" color="#ffffff"/>
						) : (
							<Text style={styles.loginButtonText}>Login</Text>
						)}
					</TouchableOpacity>

					<View style={styles.registerContainer}>
						<Text style={styles.registerText}>Don't have an account?</Text>
						<TouchableOpacity onPress={navigateToRegister}>
							<Text style={styles.registerLink}>Register</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	scrollContainer: {
		flexGrow: 1,
		justifyContent: 'center',
	},
	formContainer: {
		padding: 20,
		backgroundColor: '#ffffff',
		borderRadius: 10,
		margin: 20,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		textAlign: 'center',
		color: '#333',
	},
	inputContainer: {
		marginBottom: 15,
	},
	label: {
		fontSize: 16,
		marginBottom: 5,
		color: '#333',
	},
	input: {
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 5,
		padding: 10,
		fontSize: 16,
		backgroundColor: '#fff',
	},
	loginButton: {
		backgroundColor: '#007bff',
		padding: 15,
		borderRadius: 5,
		alignItems: 'center',
		marginTop: 10,
	},
	loginButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	registerContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20,
	},
	registerText: {
		color: '#333',
		marginRight: 5,
	},
	registerLink: {
		color: '#007bff',
		fontWeight: 'bold',
	},
});

export default LoginScreen;
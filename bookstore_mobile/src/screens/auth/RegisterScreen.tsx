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
 * Registration Screen Component
 */
const RegisterScreen: React.FC = () => {
	// State for form inputs
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Get authentication context
	const {register, isLoading} = useAuth();

	// Router for navigation
	const router = useRouter();

	/**
	 * Handle registration form submission
	 */
	const handleRegister = async () => {
		// Validate form inputs
		if (!name || !email || !password || !confirmPassword) {
			Alert.alert('Error', 'Please fill in all fields');
			return;
		}

		if (password !== confirmPassword) {
			Alert.alert('Error', 'Passwords do not match');
			return;
		}

		if (password.length < 6) {
			Alert.alert('Error', 'Password must be at least 6 characters long');
			return;
		}

		try {
			setIsSubmitting(true);
			await register(name, email, password);
			// Navigate to home screen on successful registration
			router.replace('/');
		} catch (error: any) {
			// Handle registration errors
			const errorMessage = error.response?.data?.message || 'Failed to register. Please try again.';
			Alert.alert('Registration Failed', errorMessage);
		} finally {
			setIsSubmitting(false);
		}
	};

	/**
	 * Navigate to login screen
	 */
	const navigateToLogin = () => {
		router.push('/login');
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
					<Text style={styles.title}>Create Account</Text>

					<View style={styles.inputContainer}>
						<Text style={styles.label}>Name</Text>
						<TextInput
							style={styles.input}
							value={name}
							onChangeText={setName}
							placeholder="Enter your full name"
							autoCapitalize="words"
						/>
					</View>

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
							placeholder="Create a password"
							secureTextEntry
						/>
					</View>

					<View style={styles.inputContainer}>
						<Text style={styles.label}>Confirm Password</Text>
						<TextInput
							style={styles.input}
							value={confirmPassword}
							onChangeText={setConfirmPassword}
							placeholder="Confirm your password"
							secureTextEntry
						/>
					</View>

					<TouchableOpacity
						style={styles.registerButton}
						onPress={handleRegister}
						disabled={isSubmitting}
					>
						{isSubmitting ? (
							<ActivityIndicator size="small" color="#ffffff"/>
						) : (
							<Text style={styles.registerButtonText}>Register</Text>
						)}
					</TouchableOpacity>

					<View style={styles.loginContainer}>
						<Text style={styles.loginText}>Already have an account?</Text>
						<TouchableOpacity onPress={navigateToLogin}>
							<Text style={styles.loginLink}>Login</Text>
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
	registerButton: {
		backgroundColor: '#28a745',
		padding: 15,
		borderRadius: 5,
		alignItems: 'center',
		marginTop: 10,
	},
	registerButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	loginContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20,
	},
	loginText: {
		color: '#333',
		marginRight: 5,
	},
	loginLink: {
		color: '#007bff',
		fontWeight: 'bold',
	},
});

export default RegisterScreen;
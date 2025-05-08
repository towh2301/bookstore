import {Stack} from 'expo-router';
import {View, ActivityIndicator} from 'react-native';
import {AuthProvider} from "../src/contexts/auth/AuthContext";
import {useAuth} from "../src/hooks/auth/useAuth";
import {AuthNavigator, AppNavigator} from "../src/navigation/navigators";
import {NavigationContainer} from "expo-router/build/fork/NavigationContainer";
import {navigationRef} from "../src/navigation/navigationRef";

/**
 * Root layout component that wraps the entire application
 */
export default function RootLayout() {
	return (
		<NavigationContainer ref={navigationRef}>
			<AuthProvider>
				<RootLayoutNav/>
			</AuthProvider>
		</NavigationContainer>
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
			{/* Use AuthNavigator for authentication routes */}
			<AuthNavigator/>

			{/* Use AppNavigator for protected routes */}
			<AppNavigator/>
		</Stack>
	);
}

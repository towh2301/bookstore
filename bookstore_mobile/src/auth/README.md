# JWT Authentication Implementation

This document explains the JWT (JSON Web Token) authentication implementation in the Bookstore Mobile application.

## Overview

The authentication system uses JWT tokens for secure user authentication. The implementation includes:

1. **Authentication Service**: Handles API calls for login, registration, and token management
2. **Authentication Context**: Manages authentication state throughout the application
3. **Login and Registration Screens**: User interfaces for authentication
4. **Protected Routes**: Navigation system that restricts access to authenticated users only

## Components

### Authentication Service (`AuthService.ts`)

The authentication service is responsible for:

- Making API calls to the authentication endpoints
- Securely storing and retrieving JWT tokens
- Refreshing expired tokens
- Extracting user information from tokens
- Setting up axios interceptors for automatic token handling

```typescript
// Example usage
import authService from '../services/authService';

// Login
const user = await authService.login(email, password);

// Check if user is authenticated
const isAuthenticated = await authService.isAuthenticated();

// Get current user
const currentUser = await authService.getCurrentUser();

// Logout
await authService.logout();
```

### Authentication Context (`AuthContext.tsx`)

The authentication context provides:

- Global authentication state management
- Authentication methods (login, register, logout)
- Loading state for asynchronous operations
- User information from the JWT token

```typescript
// Example usage
import { useAuth } from '../contexts/auth';

function MyComponent() {
  const { user, isAuthenticated, isLoading, login, register, logout } = useAuth();
  
  // Use authentication state and methods
}
```

### Login and Registration Screens

The application includes user-friendly screens for:

- User login with email and password
- New user registration
- Form validation and error handling
- Loading indicators during authentication

### Protected Routes

The navigation system:

- Redirects unauthenticated users to the login screen
- Prevents authenticated users from accessing login/register screens
- Provides a seamless authentication flow

## JWT Token Handling

### Token Storage

JWT tokens are securely stored using `expo-secure-store`, which provides encrypted storage for sensitive information.

### Token Refresh

The system automatically refreshes expired tokens using:

1. A refresh token stored securely
2. Axios interceptors that catch 401 errors
3. Token refresh logic that gets a new access token

### User Information

User information is extracted from the JWT token payload, which typically includes:

- User ID
- Email
- Name
- Role
- Token expiration time

## Configuration

The authentication service is configured to work with a backend API. The API URL can be configured in the `AuthService.ts` file:

```typescript
const API_URL = 'https://api.bookstore.com'; // Replace with your actual API URL
```

## API Endpoints

The authentication system expects the following API endpoints:

- **POST /auth/login**: Authenticates a user and returns tokens
- **POST /auth/register**: Registers a new user and returns tokens
- **POST /auth/refresh**: Refreshes an expired access token

## Security Considerations

1. **Token Storage**: Tokens are stored securely using `expo-secure-store`
2. **HTTPS**: All API calls should use HTTPS
3. **Token Expiration**: Access tokens have a short lifespan
4. **Refresh Tokens**: Longer-lived tokens for obtaining new access tokens
5. **Automatic Logout**: Users are logged out when tokens cannot be refreshed

## Testing Authentication

To test the authentication system:

1. Start the application
2. Try to access a protected route (you should be redirected to login)
3. Register a new account or login with existing credentials
4. After successful authentication, you should be redirected to the home screen
5. Test the logout functionality
6. Verify that you cannot access protected routes after logout
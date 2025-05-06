# Contexts

This directory contains React Context providers and consumers used for state management across the bookstore application.

## Purpose
- Provides global or semi-global state management
- Avoids prop drilling through component trees
- Creates a centralized state for related components
- Enables components to share data without explicit props

## Structure
- `AuthContext/` - Authentication state management
  - `AuthContext.tsx` - Context definition and provider
  - `AuthReducer.ts` - State reducer for auth actions
  - `AuthTypes.ts` - Type definitions for auth context
- `CartContext/` - Shopping cart state management
  - `CartContext.tsx` - Context for cart items and operations
  - `CartReducer.ts` - State reducer for cart actions
  - `CartTypes.ts` - Type definitions for cart context
- `ThemeContext/` - Application theming
  - `ThemeContext.tsx` - Context for theme settings
  - `ThemeTypes.ts` - Type definitions for theme context
- `UserContext/` - User profile and preferences
  - `UserContext.tsx` - Context for user data
  - `UserReducer.ts` - State reducer for user actions
  - `UserTypes.ts` - Type definitions for user context
- `BookContext/` - Book browsing and filtering
  - `BookContext.tsx` - Context for book browsing state
  - `BookReducer.ts` - State reducer for book actions
  - `BookTypes.ts` - Type definitions for book context

Each context should be focused on a specific domain of the application and should provide a clear API for components to interact with that domain's state.
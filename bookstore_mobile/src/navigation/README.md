# Navigation

This directory contains all navigation-related code for the bookstore application.

## Purpose
- Defines the application's navigation structure
- Manages routing between different screens
- Handles navigation state and history
- Provides navigation utilities and helpers

## Structure
- `navigators/` - Contains navigator components (stack, tab, drawer navigators)
- `routes.ts` - Defines route names and parameters
- `linking.ts` - Configuration for deep linking
- `navigationRef.ts` - Reference for navigation outside of React components
- `navigationUtils.ts` - Helper functions for navigation

## Implementation
This application uses React Navigation for handling navigation between screens. The navigation structure is organized as follows:

1. Root Navigator - The main navigator that wraps all others
2. Auth Navigator - Handles authentication flows (login, register, etc.)
3. Main Tab Navigator - Bottom tabs for main app sections (Home, Browse, Cart, Profile)
4. Stack Navigators - For each main section, handling nested navigation

Navigation should be implemented in a way that provides a smooth and intuitive user experience while maintaining proper state management.
# Hooks

This directory contains custom React hooks used throughout the bookstore application.

## Purpose
- Encapsulates reusable stateful logic
- Promotes code reuse across components
- Separates concerns between UI and logic
- Simplifies component code by extracting complex logic

## Examples
- `useBooks.ts` - Hook for fetching and managing book data
- `useCart.ts` - Hook for shopping cart operations
- `useAuth.ts` - Hook for authentication state and operations
- `useUser.ts` - Hook for user profile data and operations
- `useForm.ts` - Hook for form state management
- `useSearch.ts` - Hook for search functionality
- `useCategories.ts` - Hook for fetching and filtering book categories
- `useOrders.ts` - Hook for order history and processing
- `useWishlist.ts` - Hook for wishlist operations
- `useNotifications.ts` - Hook for handling user notifications
- `useTheme.ts` - Hook for theme management
- `useNetwork.ts` - Hook for network status and connectivity
- `useDebounce.ts` - Hook for debouncing inputs
- `useLocalStorage.ts` - Hook for persistent storage operations

Custom hooks should follow React's naming convention (starting with "use") and should be focused on a specific piece of functionality. They should be well-documented with clear input/output specifications.
# Services

This directory contains service modules that handle external data operations and business logic for the bookstore application.

## Purpose
- Encapsulates API calls and data fetching logic
- Provides interfaces for interacting with external services
- Handles data transformation and normalization
- Separates business logic from UI components

## Structure
- `api/` - Base API configuration and utilities
  - `apiClient.ts` - Axios or fetch configuration
  - `interceptors.ts` - Request/response interceptors
- `book/` - Book-related services
  - `bookService.ts` - Functions for fetching and managing books
  - `categoryService.ts` - Functions for book categories
- `auth/` - Authentication services
  - `AuthService.ts` - Login, registration, token management
- `user/` - User-related services
  - `userService.ts` - User profile and preferences
- `cart/` - Shopping cart services
  - `cartService.ts` - Cart management functions
- `order/` - Order processing services
  - `orderService.ts` - Order creation and history
- `search/` - Search functionality
  - `searchService.ts` - Book search and filtering

Services should be designed to be reusable, testable, and independent of the UI layer. They should handle all the complexity of data operations, allowing components to remain focused on presentation.
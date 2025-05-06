# Types

This directory contains TypeScript type definitions and interfaces used throughout the bookstore application.

## Purpose
- Provides type safety across the application
- Centralizes type definitions for reuse
- Documents data structures and API contracts
- Improves developer experience with better autocomplete and error checking

## Structure
- `models/` - Core data models
  - `Book.ts` - Book entity type definitions
  - `User.ts` - User entity type definitions
  - `Order.ts` - Order and order item type definitions
  - `Cart.ts` - Shopping cart type definitions
  - `Category.ts` - Book category type definitions
  - `Review.ts` - Book review type definitions
- `api/` - API request and response types
  - `requests.ts` - Request payload type definitions
  - `responses.ts` - Response payload type definitions
  - `errors.ts` - API error type definitions
- `navigation/` - Navigation parameter types
  - `NavigationParams.ts` - Screen navigation parameter types
- `state/` - State management types
  - `AppState.ts` - Global application state types
- `props/` - Component prop types
  - `ComponentProps.ts` - Common component prop types
- `enums/` - Enumeration types
  - `StatusEnum.ts` - Status and state enumerations

Type definitions should be comprehensive, well-documented, and follow consistent naming conventions. They should accurately represent the data structures used in the application.
# Utilities

This directory contains utility functions and helper modules that are used throughout the bookstore application.

## Purpose
- Provides reusable helper functions
- Centralizes common operations
- Reduces code duplication
- Simplifies complex operations into manageable functions

## Structure
- `formatting/` - Text and data formatting utilities
  - `dateFormat.ts` - Date and time formatting functions
  - `currencyFormat.ts` - Price and currency formatting
  - `textFormat.ts` - Text manipulation utilities
- `validation/` - Input validation utilities
  - `formValidation.ts` - Form field validation
  - `inputValidation.ts` - General input validation
- `storage/` - Local storage utilities
  - `asyncStorage.ts` - AsyncStorage wrapper functions
  - `secureStorage.ts` - SecureStore wrapper for sensitive data
- `device/` - Device-specific utilities
  - `dimensions.ts` - Screen size and responsive layout helpers
  - `platform.ts` - Platform-specific code and detection
- `analytics/` - Analytics and tracking utilities
- `permissions/` - Permission handling utilities
- `error/` - Error handling and logging
- `testing/` - Test helpers

Utility functions should be pure, well-tested, and focused on a single responsibility. They should not contain business logic or UI components.
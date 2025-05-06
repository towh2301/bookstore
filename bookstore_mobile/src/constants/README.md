# Constants

This directory contains constant values and configuration settings used throughout the bookstore application.

## Purpose
- Centralizes hardcoded values
- Prevents magic numbers and strings
- Makes the codebase more maintainable
- Allows for easy updates to common values

## Structure
- `api.ts` - API endpoints and request constants
- `routes.ts` - Route names and paths
- `theme.ts` - Theme colors, typography, and spacing
- `validation.ts` - Validation rules and error messages
- `pagination.ts` - Pagination and list display settings
- `timeouts.ts` - Timeout durations for various operations
- `storage.ts` - Storage keys for local storage
- `errors.ts` - Error codes and messages
- `categories.ts` - Book category constants
- `filters.ts` - Search and filter constants
- `animations.ts` - Animation timing and easing values
- `defaults.ts` - Default values for various features
- `config.ts` - Environment-specific configuration

Constants should be organized by domain and should use clear, descriptive names. They should be exported as frozen objects or readonly values to prevent accidental modification.
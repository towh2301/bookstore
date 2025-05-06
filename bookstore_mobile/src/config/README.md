# Configuration

This directory contains configuration files for the bookstore application.

## Purpose
- Centralizes application configuration
- Separates environment-specific settings
- Provides a single source of truth for app settings
- Makes it easy to modify application behavior without changing code

## Structure
- `env.ts` - Environment-specific configuration (development, staging, production)
- `api.ts` - API configuration (base URLs, timeouts, retry settings)
- `theme.ts` - Theme configuration (colors, typography, spacing)
- `navigation.ts` - Navigation configuration
- `storage.ts` - Storage configuration (keys, persistence settings)
- `analytics.ts` - Analytics and tracking configuration
- `feature-flags.ts` - Feature flag configuration for enabling/disabling features
- `i18n.ts` - Internationalization configuration
- `permissions.ts` - Permission request configuration

## Usage
Configuration values should be imported from these files rather than hardcoded throughout the application. This makes it easier to change settings in one place and have those changes reflected throughout the app.

```typescript
// Example usage
import { API_BASE_URL } from '../config/api';

// Use the configuration value
fetch(`${API_BASE_URL}/books`);
```

Configuration files should be kept simple and should not contain business logic. They should primarily consist of constant values or simple factory functions that return configuration objects.
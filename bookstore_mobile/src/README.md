# Bookstore Mobile Application Source Code

This directory contains the source code for the Bookstore Mobile Application. The application is built using React Native with Expo, TypeScript, and follows a modular architecture for maintainability and scalability.

## Directory Structure

- `components/` - Reusable UI components
  - `common/` - Basic UI elements (buttons, inputs, etc.)
  - `layout/` - Layout components (headers, footers, etc.)
  - `book/` - Book-specific components
  - `cart/` - Shopping cart components
  - `user/` - User profile components

- `screens/` - Application screens/pages
  - `auth/` - Authentication screens
  - `home/` - Home screen
  - `browse/` - Book browsing screens
  - `book/` - Book detail screens
  - `cart/` - Cart and checkout screens
  - `profile/` - User profile screens

- `navigation/` - Navigation configuration
  - `navigators/` - Navigator components
  - Navigation utility files

- `services/` - API and business logic services
  - `api/` - API client configuration
  - Domain-specific service modules

- `utils/` - Utility functions and helpers
  - Various utility modules by domain

- `hooks/` - Custom React hooks
  - Domain-specific and utility hooks

- `contexts/` - React Context providers
  - Domain-specific context providers

- `types/` - TypeScript type definitions
  - `models/` - Data model types
  - Other type definition modules

- `constants/` - Application constants
  - Various constant files by domain

- `assets/` - Static assets
  - `images/` - Image assets
  - `fonts/` - Font files
  - Other asset types

- `config/` - Application configuration
  - Environment and feature configuration

## Architecture Overview

The application follows a feature-based architecture with clear separation of concerns:

1. **UI Layer** - Components and screens that handle rendering and user interaction
2. **State Management** - Contexts and hooks that manage application state
3. **Business Logic** - Services that handle data operations and business rules
4. **Data Access** - API clients and storage utilities
5. **Utilities** - Helper functions, constants, and configuration

## Development Guidelines

1. **Component Structure**:
   - Keep components small and focused on a single responsibility
   - Use composition over inheritance
   - Separate container and presentational components

2. **State Management**:
   - Use React Context for global state
   - Use hooks for component-specific state
   - Keep state as close as possible to where it's used

3. **Code Organization**:
   - Follow the established directory structure
   - Group related files together
   - Use clear, descriptive naming

4. **TypeScript**:
   - Define interfaces and types for all data structures
   - Use proper typing for function parameters and returns
   - Avoid using `any` type

5. **Testing**:
   - Write tests for business logic and components
   - Use test-driven development when appropriate
   - Ensure good test coverage for critical features

This structure provides a solid foundation for building a maintainable and scalable mobile application for the bookstore.
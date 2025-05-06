# Assets

This directory contains static assets used in the bookstore application.

## Purpose
- Centralizes all static resources
- Organizes assets by type
- Makes assets easily accessible throughout the application
- Simplifies asset management and updates

## Structure
- `images/` - Image assets
  - `logos/` - Application logos in various formats and sizes
  - `icons/` - UI icons and symbols
  - `placeholders/` - Placeholder images for books, users, etc.
  - `backgrounds/` - Background images and patterns
- `fonts/` - Custom font files
- `animations/` - Lottie animations and other animation files
- `sounds/` - Audio files for notifications and interactions
- `videos/` - Video assets for tutorials or promotions

## Notes
- This directory is for assets that are bundled with the application code.
- Large assets should be optimized for mobile use to reduce bundle size.
- Consider using remote assets for large files when appropriate.
- Follow a consistent naming convention for all assets.
- Ensure all assets have appropriate licensing for commercial use.

The main project may also have an assets directory at the root level. This src/assets directory is specifically for assets that are directly referenced in the source code.
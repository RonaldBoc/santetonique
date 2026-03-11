/// <reference types="astro/client" />

// Allow importing static assets (images, fonts, etc.) as modules.
// This prevents TypeScript from reporting "Cannot find module" for image imports.

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';
declare module '*.avif';
declare module '*.svg';
declare module '*.ico';

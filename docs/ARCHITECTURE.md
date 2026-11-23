# ORION architecture

## Current foundation

ORION is a static, framework-free web app. `public/index.html` provides the semantic page structure and links the stylesheet, JavaScript module, and web app manifest. `public/css/base.css` contains the mobile-first presentation, design tokens, and safe-area-aware viewport layout. `public/js/app.js` is the browser entry point; it reports startup and sets the system status line.

## Progressive web app readiness

`public/manifest.json` defines the app name, standalone display mode, theme color, background color, and launch scope. Icons are intentionally not included yet. A service worker is also intentionally not included, so this foundation does not cache assets or claim offline support.

## Constraints and next steps

The app has no framework, build step, or runtime dependencies. Serve the `public` directory from a static web server over HTTPS (or localhost during development). Keep browser APIs progressive and validate changes on mobile Safari, including safe-area and dynamic viewport behavior. Add icons and an appropriately scoped service worker only when those features are designed and tested.

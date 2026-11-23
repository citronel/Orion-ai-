# ORION

A static, mobile-first foundation for the ORION personal AI assistant.

## Run locally

Serve the `public` directory with any static web server, then open its URL in a browser. For example, from the repository root:

```sh
python3 -m http.server 8000 --directory public
```

Open <http://localhost:8000>. The app uses native HTML, CSS, and an ES module; it has no build step or dependencies.

## PWA status

The web app manifest is present and configures standalone display. Icons and a service worker are not included yet, and offline support is not provided.

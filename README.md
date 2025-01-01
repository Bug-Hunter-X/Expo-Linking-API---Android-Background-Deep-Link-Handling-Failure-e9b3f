# Expo Linking API - Android Background Deep Link Handling Failure

This repository demonstrates a bug in the Expo `Linking` API on Android where deep link events are not reliably triggered when the app is in the background.  The `Linking.addEventListener` listener may fail to fire, leading to missed deep links.

The `deepLinkBug.js` file contains a minimal reproducible example showcasing the issue. `deepLinkSolution.js` provides a potential workaround using a foreground service.
This bug occurs when using the Expo `Linking` API to handle deep links on Android.  If your app is in the background and a deep link is opened, the `Linking.addEventListener` listener might not trigger. This can lead to the deep link being missed entirely.
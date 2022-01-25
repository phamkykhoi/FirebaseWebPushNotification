importScripts('https://www.gstatic.com/firebasejs/9.6.4/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.4/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyA-Obw97yHVYasTK7DrOvavoGgX41zVebc",
    authDomain: "taskaji.firebaseapp.com",
    projectId: "taskaji",
    storageBucket: "taskaji.appspot.com",
    messagingSenderId: "720130567731",
    appId: "1:720130567731:web:8d46c2b7034c0d62463d46",
    measurementId: "G-C3Y5BVP4JJ"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);

    console.log('The end!')
});


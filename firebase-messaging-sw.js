

importScripts('https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.4/firebase-messaging.js');

var firebaseConfig = {
  apiKey: "AIzaSyABUARMB77lNHFbv1Za-yWOA7mfB2zJZqY",
  authDomain: "fir-45aff.firebaseapp.com",
  projectId: "fir-45aff",
  storageBucket: "fir-45aff.appspot.com",
  messagingSenderId: "227914508446",
  appId: "1:227914508446:web:1fa03dce9842e7fac6738f",
  measurementId: "G-NP729LE0L0"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});

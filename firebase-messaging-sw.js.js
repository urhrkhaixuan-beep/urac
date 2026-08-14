importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAvaff2RiYElkeg5Ym_zGaM9Am3Izv6oMY",
  authDomain: "urac-training-2580b.firebaseapp.com",
  projectId: "urac-training-2580b",
  storageBucket: "urac-training-2580b.firebasestorage.app",
  messagingSenderId: "363240215247",
  appId: "1:363240215247:web:2836e7f685e06c05c19dba",
});

// Just initializing Firebase here is enough for background push -- when a
// message includes a "notification" payload (which is what the Firebase
// Console's "Send test message" / campaign builder sends), the browser
// displays it automatically. We intentionally do NOT also call
// self.registration.showNotification() here, because doing so on top of
// the browser's automatic display is exactly what caused each message to
// show up twice.
firebase.messaging();

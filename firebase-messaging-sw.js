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

const messaging = firebase.messaging();

// Handles push messages that arrive while the app is closed/backgrounded.
messaging.onBackgroundMessage((payload) => {
  const title = (payload.notification && payload.notification.title) || 'URAC Training';
  const options = {
    body: (payload.notification && payload.notification.body) || '',
  };
  self.registration.showNotification(title, options);
});
 

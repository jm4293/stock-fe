importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

importScripts('/firebase-env.js');

const firebaseConfig = {
  apiKey: self.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: self.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: self.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: self.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: self.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: self.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: self.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(async (payload) => {
  await self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/peek.png',
  });
});

import firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BKT,
  messagingSenderId: process.env.FIREBASE_MESSENGING_SENDER_ID,
};

const firebaseApp = firebase.initializeApp(config);
export default firebaseApp;

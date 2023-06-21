import { initializeApp } from '../../node_modules/firebase/app';
import { getAuth } from '../../node_modules/firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get the authentication instance
export const auth = getAuth(app);

// Get the Firestore instance
export const firestore = getFirestore(app);

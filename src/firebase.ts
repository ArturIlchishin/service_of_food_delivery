import {initializeApp} from 'firebase/app';

interface IFirebase {
    apiKey: string | undefined
    authDomain: string | undefined
    projectId: string | undefined
    storageBucket: string | undefined
    messagingSenderId: string | undefined
    appId: string | undefined
}
export const firebaseConfig : IFirebase = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_API_STORAGE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_API_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_API_KEY_APP_ID,
};

const app = initializeApp(firebaseConfig);
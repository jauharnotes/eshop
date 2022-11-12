// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyCQ4x_f_ALzmV8r-smsu_4h-eLhF2GhrJs',
  authDomain: 'eshop-7b85c.firebaseapp.com',
  projectId: 'eshop-7b85c',
  storageBucket: 'eshop-7b85c.appspot.com',
  messagingSenderId: '819718567736',
  appId: '1:819718567736:web:0924656abf4f3f413433cd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

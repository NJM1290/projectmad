// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCxiNDKRn_BTtuCk4-zMsssNIQTs50W-Sk',
  authDomain: 'project-mad-71ad9.firebaseapp.com',
  databaseURL: 'https://project-mad-71ad9-default-rtdb.firebaseio.com',
  projectId: 'project-mad-71ad9',
  storageBucket: 'project-mad-71ad9.firebasestorage.app',
  messagingSenderId: '1020062310484',
  appId: '1:1020062310484:web:50db27055ef124429c0dc1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;

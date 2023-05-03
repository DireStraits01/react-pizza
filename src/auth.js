// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD_9diqySyP_eeDo1fUfqsH5TmcgE31zkU',
  authDomain: 'react-pizza-eb699.firebaseapp.com',
  projectId: 'react-pizza-eb699',
  storageBucket: 'react-pizza-eb699.appspot.com',
  messagingSenderId: '225173516449',
  appId: '1:225173516449:web:b5771cd540a66c41ae80e0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;

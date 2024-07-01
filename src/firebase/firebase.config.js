// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALbyEQXQ4H74buX6SZoNvvA1wGRwQO-N8",
  authDomain: "explore-the-world-a4a0f.firebaseapp.com",
  projectId: "explore-the-world-a4a0f",
  storageBucket: "explore-the-world-a4a0f.appspot.com",
  messagingSenderId: "232598777903",
  appId: "1:232598777903:web:fa568f2564769b1a1596da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
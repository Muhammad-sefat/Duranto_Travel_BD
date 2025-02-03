import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCCc2YbD6S8hPjBdNTVx8jgNXCIQNb9LEM",
  authDomain: "durantotravelbd.firebaseapp.com",
  projectId: "durantotravelbd",
  storageBucket: "durantotravelbd.firebasestorage.app",
  messagingSenderId: "978722622656",
  appId: "1:978722622656:web:da5237f919ca009d23f125",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

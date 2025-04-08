// src/firebaseConfig.jsx
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBpcALm8d6iM214sGaVqmQ2H8rV3-Puhc",
  authDomain: "teamsync-64696.firebaseapp.com",
  projectId: "teamsync-64696",
  storageBucket: "teamsync-64696.appspot.com",
  messagingSenderId: "820595648421",
  appId: "1:820595648421:web:a6fb43d1af7430a1796a4c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

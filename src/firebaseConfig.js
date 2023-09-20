/** @format */

import { initializeApp } from "firebase/app";
import { getAuth,signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXO2xJVLrT7nmWiGC5FUI91a22oNmjeGo",
  authDomain: "image-gallery-2249c.firebaseapp.com",
  projectId: "image-gallery-2249c",
  storageBucket: "image-gallery-2249c.appspot.com",
  messagingSenderId: "563227483272",
  appId: "1:563227483272:web:6ba14cef14645169acd33d",
  measurementId: "G-SB2ZBDFW5D",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const logout = () => {
  return signOut(auth);
};

export { auth, logout };
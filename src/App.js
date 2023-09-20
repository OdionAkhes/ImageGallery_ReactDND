/** @format */

import React,{useEffect, useState} from "react";

import Gallery from "./components/Gallery.js";
import Login from "./components/Login.js";
import { auth,logout } from "./firebaseConfig.js";
import { onAuthStateChanged } from "firebase/auth";
const App = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  if (!user) return <Login />;
  

  return (
    <>


      <button
        onClick={handleLogout}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Sign Out
      </button>
      <Gallery />
    </>
  );
};
export default App;

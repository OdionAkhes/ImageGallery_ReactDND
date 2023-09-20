/** @format */

import React, { useEffect, useState } from "react";
import { TailSpin as Loader } from "react-loader-spinner";


import Gallery from "./components/Gallery.js";
import Login from "./components/Login.js";
import { auth, logout } from "./firebaseConfig.js";
import { onAuthStateChanged } from "firebase/auth";
const App = () => {
  const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
       setLoading(false);
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
  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  if (!user) return <Login />;

  return (
    <div className="mx-8">
      <h2 className=" shadow-md p-2 text-3xl font-bold text-center mt-8 ">
        Image
        <span className="text-blue-600">Gallery</span>
      </h2>
      <button
        onClick={handleLogout}
        className="flex ml-auto m-8 bg-blue-500 shadow-sm text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200"
      >
        Sign Out
      </button>
      <Gallery />
    </div>
  );
};
export default App;

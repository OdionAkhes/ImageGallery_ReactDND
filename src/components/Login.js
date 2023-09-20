/** @format */

// Login.js

import React from "react";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
  const onSubmit = async (data) => {

    const toastId = toast.info("Signing in...", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
    });

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);


      toast.dismiss(toastId);

      toast.success("Successfully signed in!", {
        position: "bottom-center",
        autoClose: 1000,
      });
    } catch (error) {
      console.error("Error signing in:", error);


      toast.dismiss(toastId);


      toast.error(`Error signing in: ${error.message}`, {
        position: "bottom-center",
        autoClose: 1000,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only">Email address</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="sr-only">Password</label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { useLoginMutation } from "@/redux/api/authApi/authApi";
import { addAuthData } from "@/redux/features/auth/auth";
import { saveAuthDataToCookie } from "@/serverAction/auth.server";

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [login, { isLoading, error }] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      // Assuming your backend returns { user, userProfile }
      console.log(res);

      if (res.success) {
        await saveAuthDataToCookie(res.data.accessToken);
        dispatch(
          addAuthData({
            isLoading: false,
            userProfile: null,
            user: {
              email: res.data.userData.email,
              role: res.data.userData.role,
              token: res.data.accessToken,
              _id: res.data.userData._id,
            },
          })
        );
      }

      router.push("/main"); // redirect after login
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 space-y-4 p-6 border rounded"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </button>
      {error && (
        <div className="text-red-500 text-center">
          Login failed. Please check your credentials.
        </div>
      )}
    </form>
  );
};

export default Login;

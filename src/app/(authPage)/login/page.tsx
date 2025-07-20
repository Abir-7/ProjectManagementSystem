/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { useLoginMutation } from "@/redux/api/authApi/authApi";
import { addAuthData } from "@/redux/features/auth/auth";
import { saveAuthDataToCookie } from "@/serverAction/auth.server";
import { allowedRoles } from "@/middleware";
import { toast } from "sonner";
import { BaseForm } from "@/components/ShadCN_Form/BaseForm";
import { FormInput } from "@/components/ShadCN_Form/FormInput";

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (data: { email: string; password: string }) => {
    const { email, password } = data;
    try {
      const res = await login({ email, password }).unwrap();
      // Assuming your backend returns { user, userProfile }
      console.log(res);
      if (res.success) {
        if (allowedRoles.includes(res.data.userData.role)) {
          await saveAuthDataToCookie(
            res.data.accessToken,
            res.data.userData.email,
            res.data.userData.role
          );
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

          router.push(`/${res.data.userData.role.toLowerCase()}`); // redirect after login
        } else {
          toast.error("Something went wrong!");
        }
      }
    } catch (err: any) {
      console.log(err, "fffff");
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <BaseForm
          btnText="Login"
          isLoading={isLoading}
          onSubmit={handleSubmit}
          defaultValues={{ email: "", password: "" }}
        >
          <FormInput label="Email" name="email" />

          <FormInput label="Password" name="password" type="password" />
        </BaseForm>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

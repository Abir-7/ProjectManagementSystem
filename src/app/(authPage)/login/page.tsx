/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { useLoginMutation } from "@/redux/api/auth_api/auth_api";
import { addAuthData } from "@/redux/features/auth/auth";

import { toast } from "sonner";
import { BaseForm } from "@/components/ui_components/shadcn_form/base_form";
import { FormInput } from "@/components/ui_components/shadcn_form/form_input";
import { ModeToggle } from "@/components/ui_components/theme_toggle_button/mode_toggle";

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
        await fetch("/api/auth-data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: res.data.accessToken,
            email: res.data.userData.email,
            role: res.data.userData.role,
            id: res.data.userData._id,
          }),
        });
        dispatch(
          addAuthData({
            isLoading: false,
            userProfile: null,
            user: {
              email: res.data.userData.email,
              role: res.data.userData.role,
              token: res.data.accessToken,
              id: res.data.userData._id,
            },
          })
        );

        router.push(`/`); // redirect after login
      }
    } catch (err: any) {
      console.log(err, "fffff");
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen  w-full flex relative items-center justify-center px-4">
      <div className="absolute top-5 right-5">
        <ModeToggle></ModeToggle>
      </div>

      <div className="w-full max-w-md  rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center  mb-6">Login</h2>

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

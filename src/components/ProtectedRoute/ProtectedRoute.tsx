"use client";
import { useGetMeQuery } from "@/redux/api/authApi/authApi";
import {
  addAuthData,
  AuthRole,
  setAuthLoading,
} from "@/redux/features/auth/auth";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  role: AuthRole;
}

const ProtectedRoute = ({ children, role }: ProtectedRouteProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user, isLoading } = useAppSelector((state) => state.auth);
  const { data, isLoading: isMeLoading } = useGetMeQuery(undefined);

  // Handle and update user auth state based on API result
  useEffect(() => {
    if (data?.success && data.data.user) {
      dispatch(
        addAuthData({
          user: {
            _id: data.data.user._id,
            email: data.data.user.email,
            role: data.data.user.role,
            token: "", // Add token if available
          },
          userProfile: {
            fullName: data.data.fullName || "",
            image: data.data.image || "",
            mobile: data.data.mobile || "",
          },
          isLoading: false,
        })
      );
    } else if (!isMeLoading) {
      // Mark auth loading as false when done, if no user
      dispatch(setAuthLoading());
    }
  }, [data, dispatch, isMeLoading]);

  // Redirect if user is missing or has wrong role
  useEffect(() => {
    if (!isLoading && !isMeLoading) {
      if (!user || user.role !== role) {
        router.replace("/login");
      }
    }
  }, [user, role, isLoading, isMeLoading, router]);

  // Show loading while authenticating
  if (isMeLoading || isLoading) {
    return <p>Loading.......</p>;
  }

  //   // Optionally, return nothing while redirecting (prevents flash)
  //   if (!user || user.role !== role) {
  //     return null;
  //   }

  // Authenticated and correct role, show content
  return <>{children}</>;
};

export default ProtectedRoute;

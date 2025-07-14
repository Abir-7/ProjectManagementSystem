"use server";
import { cookies } from "next/headers";

export const saveAuthDataToCookie = async (token: string) => {
  (await cookies()).set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 24 * 60 * 60, // 60 days in seconds
  });
};

export const getTokenFromCookie = async (): Promise<string | undefined> => {
  console.log(
    (await cookies()).get("token")?.value,
    "------------------********--"
  );
  return (await cookies()).get("token")?.value;
};

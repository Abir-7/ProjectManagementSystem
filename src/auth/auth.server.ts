"use server";

import { cookies } from "next/headers";

export const getAuthDataFromCookie = async () => {
  const authCookie = (await cookies()).get("auth")?.value;
  console.log(
    authCookie,
    "-------------------------------fffff---------------"
  );
  if (!authCookie) return undefined;

  try {
    return JSON.parse(authCookie);
  } catch (error) {
    console.error("Failed to parse auth cookie:", error);
    return undefined;
  }
};

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuthDataFromCookie } from "@/serverAction/auth.server";

const DashboardRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectUser = async () => {
      try {
        const { role } = await getAuthDataFromCookie();

        switch (role) {
          case "ADMIN":
            router.replace("/admin");
            break;
          case "EMPLOYEE":
            router.replace("/employee");
            break;
          case "LEADER":
            router.replace("/leader");
            break;
          case "SUPERVISOR":
            router.replace("/supervisor");
            break;
          default:
            router.replace("/unauthorized");
        }
      } catch (error) {
        console.error("Failed to get auth data:", error);
        router.replace("/unauthorized");
      }
    };

    redirectUser();
  }, [router]);

  return (
    <div className="p-4 text-center">Redirecting to your dashboard...</div>
  );
};

export default DashboardRedirect;

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DashboardRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role") || "admin"; // or Redux/cookies

    switch (role) {
      case "admin":
        router.replace("/admin");
        break;
      case "employee":
        router.replace("/employee");
        break;
      case "leader":
        router.replace("/leader");
        break;
      case "supervisor":
        router.replace("/supervisor");
        break;
      default:
        router.replace("/unauthorized");
    }
  }, [router]);

  return (
    <div className="p-4 text-center">Redirecting to your dashboard...</div>
  );
};

export default DashboardRedirect;

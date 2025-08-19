"use client";

import { useAppDispatch } from "@/redux/hooks";
import { removeAuth } from "@/redux/features/auth/auth";
import { Button } from "@/components/ui/button"; // adjust if using a different button
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    // 2. Clear cookie
    await fetch("/api/auth-data", {
      method: "DELETE",
    });
    router.push("/login");
    dispatch(removeAuth());
  };

  return (
    <Button
      onClick={handleLogout}
      className="flex w-full items-center gap-2 bg-red-500 hover:bg-red-600 text-white"
    >
      <LogOut className="w-4 h-4" />
      Logout
    </Button>
  );
};

export default LogoutButton;

import React, { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/DashboardSideBar/AppSidebar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider className="flex h-screen overflow-hidden">
      <AppSidebar />

      <main className="w-full">
        {/* Top bar */}
        <div className="p-2 bg-emerald-400 flex justify-between">
          <SidebarTrigger className="text-white hover:text-emerald-400" />
          <div className="flex justify-center items-center gap-2">
            <p className="text-white font-semibold">Hello, Abir</p>
            <div className="w-10 h-10 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Scrollable content */}
        <div className=" ">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default layout;

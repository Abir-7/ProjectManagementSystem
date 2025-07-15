import React, { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/DashboardSideBar/AppSidebar";
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider className=" overflow-hidden">
      <AppSidebar />

      <main className="w-full">
        <div className="p-2 bg-emerald-400 flex justify-between">
          <SidebarTrigger className="text-white hover:text-emerald-400" />
          <div className="flex justify-center items-center gap-2">
            <p className="text-white font-semibold"> Hello, Abir</p>
            <div className="w-13 h-13 bg-white rounded-full"></div>
          </div>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
};

export default layout;

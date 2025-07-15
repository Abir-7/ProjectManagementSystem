import React, { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/DashboardSideBar/AppSidebar";
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider className=" overflow-hidden">
      <AppSidebar />

      <main className="w-full">
        <div className="p-2 bg-emerald-400">
          <SidebarTrigger className="text-white hover:text-emerald-400" />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
};

export default layout;

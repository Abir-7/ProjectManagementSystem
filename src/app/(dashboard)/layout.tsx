import React, { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import ProtectedRoute from "@/components/ui_components/ProtectedRoute/ProtectedRoute";
import { AppSidebar } from "@/components/ui_components/side_bar/app_sidebar";
import { ModeToggle } from "@/components/ui_components/theme_toggle_button/mode_toggle";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <ProtectedRoute>
      <SidebarProvider className="">
        <AppSidebar />
        <main className="w-full  ">
          <div className="flex items-center justify-between h-11  shadow-sm">
            <SidebarTrigger />
            <div>
              <ModeToggle></ModeToggle>
            </div>
          </div>
          <div className=" lg:container mx-auto p-4 h-[calc(100vh-48px)] overflow-y-auto">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </ProtectedRoute>
  );
};

export default layout;

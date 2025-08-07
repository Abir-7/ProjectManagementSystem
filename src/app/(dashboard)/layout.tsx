import React, { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/DashboardSideBar/AppSidebar";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <ProtectedRoute>
      <div className="h-full">
        <SidebarProvider className="flex h-full overflow-hidden">
          <AppSidebar />

          <main className="w-full h-full ">
            {/* Top bar */}
            <div className="p-2 bg-gray-900 flex justify-between">
              <SidebarTrigger className="text-white hover:text-gray-900" />
              <div className="flex justify-center items-center gap-2">
                <p className="text-white font-semibold">Hello, Abir</p>
                <div className="w-10 h-10 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="h-[calc(100vh-56px)] overflow-y-auto pb-1  ">
              {children}
            </div>
          </main>
        </SidebarProvider>
      </div>
    </ProtectedRoute>
  );
};

export default layout;

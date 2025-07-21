import RoleBasedRoute from "@/components/ProtectedRoute/RoleBasedRoute";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <RoleBasedRoute roles={["SUPERVISOR"]}>{children}</RoleBasedRoute>;
};

export default layout;

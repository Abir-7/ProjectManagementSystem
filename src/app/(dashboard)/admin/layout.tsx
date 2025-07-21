import RoleBasedRoute from "@/components/ProtectedRoute/RoleBasedRoute";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <RoleBasedRoute roles={["ADMIN"]}>{children}</RoleBasedRoute>;
};

export default layout;

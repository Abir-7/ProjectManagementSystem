import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ProtectedRoute role="USER">{children}</ProtectedRoute>
    </div>
  );
};

export default layout;

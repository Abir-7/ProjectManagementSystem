import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-4">
      <div className="bg-card shadow rounded-2xl p-8 text-center max-w-md">
        <h1 className="text-4xl font-bold text-destructive mb-4">403</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Unauthorized Access
        </h2>
      </div>
    </div>
  );
};

export default Page;

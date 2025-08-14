"use client";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageProjectSupervisor from "./_component/manage_project_supervisor";

const Page: React.FC = () => {
  return (
    <div className="flex w-full  flex-col gap-6 ">
      <Tabs defaultValue="manage-project">
        <TabsList className="mx-auto mt-2">
          <TabsTrigger value="manage-project">Manage Projects</TabsTrigger>
          <TabsTrigger value="add-project">Add Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="manage-project">
          <ManageProjectSupervisor></ManageProjectSupervisor>
        </TabsContent>
        <TabsContent value="add-project"></TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;

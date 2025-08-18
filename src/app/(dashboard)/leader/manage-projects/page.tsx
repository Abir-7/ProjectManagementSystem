/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddProject from "./_components/add_projects";
import ManageProjectLeader from "./_components/manage_project_leader";

const Page: React.FC = () => {
  return (
    <div className="flex w-full  flex-col gap-6 ">
      <Tabs defaultValue="Manage Projects">
        <TabsList className="mx-auto mt-2">
          <TabsTrigger value="Manage Projects">Manage Projects</TabsTrigger>
          <TabsTrigger value="Add Project">Add Project</TabsTrigger>
        </TabsList>
        <TabsContent value="Manage Projects">
          <ManageProjectLeader></ManageProjectLeader>
        </TabsContent>

        <TabsContent value="Add Project">
          <AddProject></AddProject>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;

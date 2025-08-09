/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import AddSupervisor from "./_adminComponent/add_supervisor";
import ManageSupervisor from "./_adminComponent/manage_supervisor";

const Page: React.FC = () => {
  return (
    <div className="flex w-full  flex-col gap-6 ">
      <Tabs defaultValue="manage-supervisor">
        <TabsList className="mx-auto mt-2">
          <TabsTrigger value="manage-supervisor">Manage Supervisor</TabsTrigger>
          <TabsTrigger value="add-supervisor">Add Supervisor</TabsTrigger>
        </TabsList>

        <TabsContent value="add-supervisor">
          <AddSupervisor></AddSupervisor>
        </TabsContent>

        <TabsContent value="manage-supervisor">
          <ManageSupervisor></ManageSupervisor>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;

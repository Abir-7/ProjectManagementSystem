/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddTeam from "./_components/add_team";
import ManageTeam from "./_components/manage_team";

const Page: React.FC = () => {
  return (
    <div className="flex w-full  flex-col gap-6 ">
      <Tabs defaultValue="manage-team">
        <TabsList className="mx-auto mt-2">
          <TabsTrigger value="manage-team">Manage Team</TabsTrigger>
          <TabsTrigger value="add-team">Add Team</TabsTrigger>
        </TabsList>

        <TabsContent value="manage-team">
          <ManageTeam></ManageTeam>
        </TabsContent>
        <TabsContent value="add-team">
          <AddTeam></AddTeam>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;

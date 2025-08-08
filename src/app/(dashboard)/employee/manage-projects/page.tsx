/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddProject from "./_components/add_projects";

const Page: React.FC = () => {
  return (
    <div className="flex w-full  flex-col gap-6 ">
      <Tabs defaultValue="Manage Projects">
        <TabsList className="mx-auto mt-2">
          <TabsTrigger value="Manage Projects">Branch</TabsTrigger>
          <TabsTrigger value="Add Project">Co-leader</TabsTrigger>
        </TabsList>

        <TabsContent value="co-leader">
          <AddProject></AddProject>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;

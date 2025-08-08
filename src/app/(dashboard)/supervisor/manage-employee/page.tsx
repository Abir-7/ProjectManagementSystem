"use client";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ManageEmployee from "./_components/ManageEmployee";

import AddEmployee from "./_components/add_employee";

const Page: React.FC = () => {
  return (
    <div className="flex w-full h-[calc(100vh-56px)]  flex-col gap-6 ">
      <Tabs defaultValue="manage-employee">
        <TabsList className="mx-auto mt-2">
          <TabsTrigger value="manage-employee">Manage Employee</TabsTrigger>
          <TabsTrigger value="add-employee">Add Employee</TabsTrigger>
        </TabsList>
        <TabsContent value="manage-employee" className="">
          <ManageEmployee></ManageEmployee>
        </TabsContent>
        <TabsContent value="add-employee">
          <AddEmployee></AddEmployee>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;

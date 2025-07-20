/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BaseForm } from "@/components/ShadCN_Form/BaseForm";
import { FormInput } from "@/components/ShadCN_Form/FormInput";

const Page: React.FC = () => {
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex w-full  flex-col gap-6 ">
      <Tabs defaultValue="branch">
        <TabsList className="mx-auto mt-2">
          <TabsTrigger value="add-supervisor">Add Supervisor</TabsTrigger>
          <TabsTrigger value="manage-supervisor">Manage Supervisor</TabsTrigger>
        </TabsList>

        <TabsContent value="add-supervisor">
          <BaseForm
            isLoading={false}
            btnText="Add"
            onSubmit={onSubmit}
            defaultValues={{ fullName: "", email: "", password: "" }}
          >
            <h1 className="font-semibold text-gray-900 ">Supervisor Details</h1>
            <FormInput name="fullName" label="Name"></FormInput>
            <FormInput name="email" label="Email"></FormInput>
            <FormInput name="password" label="Password"></FormInput>
          </BaseForm>
        </TabsContent>

        <TabsContent value="manage-supervisor">
          <div>Manage Supervisor</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;

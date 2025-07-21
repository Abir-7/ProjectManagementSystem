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
      <Tabs defaultValue="manage-team">
        <TabsList className="mx-auto mt-2">
          <TabsTrigger value="manage-team">Manage Team</TabsTrigger>
          <TabsTrigger value="add-team">Add Team</TabsTrigger>
        </TabsList>

        <TabsContent value="manage-team">Manage Team</TabsContent>
        <TabsContent value="add-team">
          <BaseForm
            isLoading={false}
            btnText="Add"
            onSubmit={onSubmit}
            defaultValues={{
              fullName: "",
              email: "",
              password: "",
              Branch: "",
            }}
          >
            <h1 className="font-semibold text-gray-900 ">Branch Details</h1>
            <FormInput name="Branch" label="Branch Name"></FormInput>
            <h1 className="font-semibold text-gray-900 ">User Details</h1>
            <FormInput name="fullName" label="Name"></FormInput>
            <FormInput name="email" label="Email"></FormInput>
            <FormInput name="password" label="Password"></FormInput>
          </BaseForm>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;

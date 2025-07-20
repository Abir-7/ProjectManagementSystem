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
          <TabsTrigger value="branch">Branch</TabsTrigger>
          <TabsTrigger value="manager">General Manager</TabsTrigger>
          <TabsTrigger value="supervisor">Supervisor</TabsTrigger>
          <TabsTrigger value="leader">Leader</TabsTrigger>
          <TabsTrigger value="co-leader">Co-leader</TabsTrigger>
        </TabsList>

        <TabsContent value="co-leader">
          <BaseForm
            isLoading={false}
            btnText="Add"
            onSubmit={onSubmit}
            defaultValues={{ fullName: "", email: "", password: "" }}
          >
            <h1 className="font-semibold text-gray-900 ">Co-Leader Details</h1>
            <FormInput name="fullName" label="Name"></FormInput>
            <FormInput name="email" label="Email"></FormInput>
            <FormInput name="password" label="Password"></FormInput>
          </BaseForm>
        </TabsContent>
        <TabsContent value="leader">
          <BaseForm
            isLoading={false}
            btnText="Add"
            onSubmit={onSubmit}
            defaultValues={{ fullName: "", email: "", password: "" }}
          >
            <h1 className="font-semibold text-gray-900 ">Leader Details</h1>
            <FormInput name="fullName" label="Name"></FormInput>
            <FormInput name="email" label="Email"></FormInput>
            <FormInput name="password" label="Password"></FormInput>
          </BaseForm>
        </TabsContent>
        <TabsContent value="supervisor">
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
        <TabsContent value="manager">
          <BaseForm
            isLoading={false}
            btnText="Add"
            onSubmit={onSubmit}
            defaultValues={{ fullName: "", email: "", password: "" }}
          >
            <h1 className="font-semibold text-gray-900 ">
              General Manager Details
            </h1>
            <FormInput name="fullName" label="Name"></FormInput>
            <FormInput name="email" label="Email"></FormInput>
            <FormInput name="password" label="Password"></FormInput>
          </BaseForm>
        </TabsContent>
        <TabsContent value="branch">
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

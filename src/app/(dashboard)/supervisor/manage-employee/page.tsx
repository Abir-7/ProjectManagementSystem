/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BaseForm } from "@/components/ShadCN_Form/BaseForm";
import { FormInput } from "@/components/ShadCN_Form/FormInput";
import { userRoles } from "@/interface/authinterface";
import { useCreateUserMutation } from "@/redux/api/authApi/authApi";
import { toast } from "sonner";
import { ApiResponse } from "@/redux/api/api.interface";

const Page: React.FC = () => {
  const [createUser, { isLoading }] = useCreateUserMutation();

  const onSubmit = async (data: any, reset: () => void) => {
    console.log(data);

    const res = (await createUser({
      ...data,
      role: userRoles.EMPLOYEE,
    })) as unknown as ApiResponse<any>;

    if (res.data?.success) {
      reset();
      toast.success(res?.data?.message);
    } else {
      console.log(res);
      toast.error(res.error?.data?.message || "Something went wrong! ");
    }
  };
  return (
    <div className="flex w-full  flex-col gap-6 ">
      <Tabs defaultValue="manage-employee">
        <TabsList className="mx-auto mt-2">
          <TabsTrigger value="manage-employee">Manage Employee</TabsTrigger>
          <TabsTrigger value="add-employee">Add Employee</TabsTrigger>
        </TabsList>
        <TabsContent value="manage-employee">Manage Employee</TabsContent>
        <TabsContent value="add-employee">
          <BaseForm
            isLoading={isLoading}
            btnText="Add Employee"
            onSubmit={onSubmit}
            defaultValues={{
              fullName: "",
              email: "",
              password: "",
            }}
          >
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

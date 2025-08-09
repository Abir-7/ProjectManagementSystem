/* eslint-disable @typescript-eslint/no-explicit-any */

import { userRoles } from "@/auth/authinterface";
import { BaseForm } from "@/components/ui_components/shadcn_form/base_form";
import { FormInput } from "@/components/ui_components/shadcn_form/form_input";
import { ApiResponse } from "@/redux/api/api.interface";
import { useCreateUserMutation } from "@/redux/api/auth_api/auth_api";
import React from "react";
import { toast } from "sonner";

const AddSupervisor = () => {
  const [createUser, { isLoading }] = useCreateUserMutation();

  const onSubmit = async (data: any, reset: () => void) => {
    console.log(data);

    const res = (await createUser({
      ...data,
      role: userRoles.SUPERVISOR,
    })) as unknown as ApiResponse<any>;

    if (res.data?.success) {
      reset();
      toast.success(res?.data?.message);
    } else {
      console.log(res);
      toast.error(res.error?.data?.message || "Something went wrong!");
    }
  };

  return (
    <BaseForm
      isLoading={isLoading}
      btnText="Add"
      onSubmit={onSubmit}
      defaultValues={{ fullName: "", email: "", password: "" }}
    >
      <h1 className="font-semibold text-foreground ">Supervisor Details</h1>
      <FormInput name="fullName" label="Name"></FormInput>
      <FormInput name="email" label="Email"></FormInput>
      <FormInput name="phone" label="Mobile"></FormInput>
      <FormInput name="password" label="Password"></FormInput>
    </BaseForm>
  );
};

export default AddSupervisor;

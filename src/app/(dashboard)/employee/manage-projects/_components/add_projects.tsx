/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseForm } from "@/components/ui_components/shadcn_form/base_form";
import { FormInput } from "@/components/ui_components/shadcn_form/form_input";
import React from "react";

const AddProject = () => {
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
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
  );
};

export default AddProject;

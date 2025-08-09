/* eslint-disable @typescript-eslint/no-explicit-any */

import { BaseForm } from "@/components/ui_components/shadcn_form/base_form";
import { FormInput } from "@/components/ui_components/shadcn_form/form_input";
import { FormSelect } from "@/components/ui_components/shadcn_form/form_select";
import React from "react";

const AddTeam = () => {
  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
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

      <FormSelect
        label="Leader"
        options={[
          { label: "abir", value: "131231" },
          { label: "abir2", value: "1312312" },
        ]}
        name="leader"
      ></FormSelect>
    </BaseForm>
  );
};

export default AddTeam;

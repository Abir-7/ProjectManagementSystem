/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

import { BaseForm } from "@/components/ShadCN_Form/BaseForm";
import { FormInput } from "@/components/ShadCN_Form/FormInput";

import MultiSelectDropdown from "@/components/ShadCN_Form/MultiSelectDropdown";

export default function Page() {
  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">Create Team</h1>
      <div>
        <BaseForm
          onSubmit={onSubmit}
          defaultValues={{ team_name: "", members: [], leader: "" }}
        >
          <FormInput
            name="team_name"
            label="Team Name"
            placeholder="Team Name"
          ></FormInput>
          <MultiSelectDropdown
            name="members"
            label="Members"
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
              { label: "Option 4", value: "option4" },
              { label: "Option 5", value: "option5" },
              { label: "Option 6", value: "option6" },
              { label: "Option 7", value: "option7" },
              { label: "Option 8", value: "option8" },
              { label: "Option 9", value: "option9" },
              { label: "Option 10", value: "option10" },
            ]}
          ></MultiSelectDropdown>
          <FormInput
            name="leader"
            label="Leader"
            placeholder="Leader"
          ></FormInput>
        </BaseForm>
      </div>
    </div>
  );
}

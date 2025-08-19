/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { BaseForm } from "@/components/ui_components/shadcn_form/base_form";
import { FormInput } from "@/components/ui_components/shadcn_form/form_input";
import { FormSelect } from "@/components/ui_components/shadcn_form/form_select";
import { useGetProjectStatusListQuery } from "@/redux/api/project_api/project_api";
import { FormInputArray } from "@/components/ui_components/shadcn_form/form_input_array";

const AddProject = () => {
  const { data: projectStatus } = useGetProjectStatusListQuery("");

  const onSubmit = async (data: any) => {
    console.log("Form Submitted:", data);
    // Here you would call your API mutation (e.g., createProjectMutation)
  };

  return (
    <div className="pb-6">
      <BaseForm
        isLoading={false}
        btnText="Create Project"
        onSubmit={onSubmit}
        defaultValues={{
          name: "",
          clientName: "",
          budget: "",
          duration: "",
          salesName: "",
          googleSheetLink: "",
          teamGrouplink: "",
          status: "",
          phase: [
            {
              name: "",
              budget: "",
              deadline: "", // or a date string if using date picker
            },
          ],
        }}
      >
        <FormInput
          required
          name="name"
          label="Project Name"
          placeholder="Enter project name"
        />

        <FormInput
          required
          name="clientName"
          label="Client Name"
          placeholder="Enter client name"
        />

        <FormInput
          required
          type="number"
          name="budget"
          label="Budget"
          placeholder="Enter budget amount"
        />

        <FormInput
          type="number"
          required
          name="duration"
          label="Duration (months)"
          placeholder="Enter project duration"
        />

        <FormInput
          name="salesName"
          label="Sales Name"
          placeholder="Enter sales representative"
        />

        <FormInput
          required={true}
          name="googleSheetLink"
          label="Google Sheet Link"
          placeholder="Enter sheet link"
        />

        <FormInput
          name="teamGrouplink"
          label="Team Group Link"
          placeholder="Enter group link"
        />
        <FormSelect
          required={true}
          label="Status"
          name="status"
          options={projectStatus?.data}
        ></FormSelect>
        <FormInputArray
          label="Phase"
          name="phase"
          fields={[
            {
              label: "Name",
              name: "name",
              placeholder: "Phase Name",
              required: true,
            },
            {
              label: "Budget",
              name: "budget",
              placeholder: "Budget",
              type: "number",
              required: true,
            },
            {
              label: "Deadline",
              name: "deadline",
              placeholder: "Date",
              type: "number",
              required: true,
            },
          ]}
        ></FormInputArray>
      </BaseForm>
    </div>
  );
};

export default AddProject;

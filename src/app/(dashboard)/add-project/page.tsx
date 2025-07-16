/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import FormArrayInput from "@/components/Form/FormArrayInput";
import FormInput, { FormInputType } from "@/components/Form/FormInput";
import FormProviders from "@/components/Form/FormProviders";
import FormSubmitButton from "@/components/Form/FormSubmitButton";
import React from "react";

const phaseOption = [
  "API+Integration",
  "Deployment",
  "R&D",
  "UI/UX",
  "Frontend",
  "AI Implement",
];

const page = () => {
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full h-[94vh] flex flex-col">
      {" "}
      {/* Full screen height */}
      <div className=" shadow ">
        <h1 className="text-center text-2xl font-bold text-emerald-400 mb-2">
          Add New Project
        </h1>
      </div>
      <div className="flex-1 mt-3 overflow-y-auto px-4">
        {" "}
        {/* Scrollable area */}
        <FormProviders onFormSubmit={onSubmit}>
          <FormInput name="projectName" label="Project Name" />
          <FormInput name="clientName" label="Client Name" />
          <FormInput name="teamGroupLink" label="Team Group Link" />
          <FormInput name="googleSheetLink" label="Google Sheet link" />
          <FormInput name="figmaLink" label="Figma Link" />
          <FormInput name="budget" label="Budget" type={FormInputType.Number} />
          <FormArrayInput
            name="phase"
            label="Phase"
            phaseOptions={phaseOption}
          />
          <FormSubmitButton text="Add New Project"></FormSubmitButton>
        </FormProviders>
      </div>
    </div>
  );
};

export default page;

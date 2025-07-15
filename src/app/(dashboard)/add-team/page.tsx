/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import FormArrayInput from "@/components/Form/FormArrayInput";
import FormInput, { FormInputType } from "@/components/Form/FormInput";
import FormProviders from "@/components/Form/FormProviders";
import React from "react";

const page = () => {
  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <div className="w-full flex-1">
      <h1 className="text-center text-2xl font-bold text-emerald-400 mb-2">
        Add New Project
      </h1>
      <div className="mx-4">
        <FormProviders onFormSubmit={onSubmit}>
          <FormInput name="name" label="Project Name"></FormInput>
          <FormInput name="name" label="Client Name"></FormInput>
          <FormInput name="name" label="Team Group Link"></FormInput>
          <FormInput name="name" label="Google Sheet link"></FormInput>
          <FormInput name="name" label="Figma Link"></FormInput>
          <FormInput
            name="name"
            label="Budget"
            type={FormInputType.Number}
          ></FormInput>
          <FormArrayInput
            name="Phase"
            label="Phase"
            phaseOptions={["abc", "ccc"]}
          ></FormArrayInput>
        </FormProviders>
      </div>
    </div>
  );
};

export default page;

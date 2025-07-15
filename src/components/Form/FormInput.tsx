"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { FieldValues, useFormContext } from "react-hook-form";

// Enum for input types
export enum FormInputType {
  Text = "text",
  Password = "password",
  Email = "email",
  Number = "number",
  Tel = "tel",
  Url = "url",
  Date = "date",
  Time = "time",
  Search = "search",
  Checkbox = "checkbox",
  Radio = "radio",
  File = "file",
  Range = "range",
}

type FormInputProps = {
  name: string;
  label?: string;
  type?: FormInputType;
  placeholder?: string;
};

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  type = FormInputType.Text,
  placeholder,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block mb-1">
          {label}
        </label>
      )}
      <input
        {...register(name)}
        id={name}
        type={type}
        placeholder={placeholder}
        className={`border rounded p-2 w-full ${
          errors[name] ? "border-red-500" : ""
        }`}
      />
      {errors[name] && (
        <span className="text-red-500 text-xs">
          {(errors[name] as any).message}
        </span>
      )}
    </div>
  );
};

export default FormInput;

"use client";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type FormInputProps = {
  name: string;
  label: string;
  placeholder?: string;
  type?: "date" | "text" | "email" | "password" | "number";
  required?: boolean; // optional, default false
};

export const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={required ? { required: `${label} is required` } : undefined}
      render={({ field, fieldState }) => (
        <div className="flex flex-col">
          <FormLabel className="pb-2">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </FormLabel>
          <Input
            {...field}
            placeholder={placeholder}
            type={type}
            className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          {fieldState.error && (
            <span className="text-sm text-red-500 mt-1">
              {fieldState.error.message}
            </span>
          )}
        </div>
      )}
    />
  );
};

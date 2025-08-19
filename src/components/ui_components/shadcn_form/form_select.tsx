"use client";

import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FormLabel } from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type Option = { name: string; value: string };

type FormSelectProps = {
  name: string;
  label: string;
  options: Option[];
  required?: boolean; // optional, default false
};

export const FormSelect: React.FC<FormSelectProps> = ({
  name,
  label,
  options,
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

          <Select
            value={field.value || ""}
            onValueChange={field.onChange}
            defaultValue=""
          >
            <SelectTrigger className="w-full border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
              <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent>
              {options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

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

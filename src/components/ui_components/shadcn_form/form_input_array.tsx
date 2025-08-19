/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect } from "react";
import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Trash2 } from "lucide-react";
import { FormLabel } from "@/components/ui/form";

type FieldDefinition = {
  name: string;
  label: string;
  type?: "text" | "number" | "select" | "date";
  placeholder?: string;
  options?: { name: string; value: string }[];
  required?: boolean;
};

type FormInputArrayProps = {
  name: string;
  label: string;
  fields: FieldDefinition[];
};

export const FormInputArray: React.FC<FormInputArrayProps> = ({
  name,
  label,
  fields,
}) => {
  const { control, register, formState } = useFormContext();
  const { errors } = formState;

  const {
    fields: arrayFields,
    append,
    remove,
  } = useFieldArray({
    control,
    name,
  });

  // Ensure at least one row exists
  useEffect(() => {
    if (arrayFields.length === 0) {
      append(Object.fromEntries(fields.map((f) => [f.name, ""])));
    }
  }, [arrayFields.length, append, fields]);

  return (
    <div className="space-y-2">
      <FormLabel className="">{label}</FormLabel>

      {arrayFields.map((item, index) => (
        <div
          key={item.id}
          className="flex gap-2 border p-2 rounded-lg flex-wrap"
        >
          {fields.map((fieldDef) => {
            const fieldError = (errors as any)?.[name]?.[index]?.[fieldDef.name]
              ?.message;

            return (
              <div className="flex-1 min-w-[150px]" key={fieldDef.name}>
                <FormLabel className="block font-medium pb-2">
                  {fieldDef.label}
                  {fieldDef.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </FormLabel>

                {fieldDef.type === "select" ? (
                  <Controller
                    name={`${name}.${index}.${fieldDef.name}`}
                    control={control}
                    rules={
                      fieldDef.required
                        ? { required: `${fieldDef.label} is required` }
                        : undefined
                    }
                    render={({ field }) => (
                      <Select
                        value={field.value || ""}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                          <SelectValue
                            placeholder={`Select ${fieldDef.label}`}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {fieldDef.options?.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                ) : (
                  <Input
                    {...register(`${name}.${index}.${fieldDef.name}`, {
                      required: fieldDef.required
                        ? `${fieldDef.label} is required`
                        : false,
                    })}
                    type={fieldDef.type || "text"}
                    placeholder={fieldDef.placeholder}
                    className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                )}

                {fieldError && (
                  <span className="text-sm text-red-500 mt-1 block">
                    {fieldError}
                  </span>
                )}
              </div>
            );
          })}

          <Button
            variant="ghost"
            type="button"
            className="text-red-500"
            onClick={() => remove(index)}
            disabled={arrayFields.length === 1}
          >
            <Trash2 />
          </Button>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={() =>
          append(Object.fromEntries(fields.map((f) => [f.name, ""])))
        }
        className="w-full"
      >
        + Add {label.slice(0, -1)}
      </Button>
    </div>
  );
};

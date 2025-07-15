/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import {
  useFormContext,
  useFieldArray,
  FieldValues,
  Controller,
} from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"; // Update this import as needed

type PhasesInputProps = {
  name: string;
  label?: string;
  phaseOptions: string[];
};

const FormArrayInput: React.FC<PhasesInputProps> = ({
  name,
  label,
  phaseOptions,
}) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FieldValues>();
  const { fields, append, remove } = useFieldArray({ control, name });

  return (
    <div className="mb-4">
      {label && <label className="block mb-2">{label}</label>}
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="flex flex-col md:flex-row gap-2 mb-2 border p-2 rounded"
        >
          {/* Shadcn Select for phase name */}
          <div className="w-96">
            <Controller
              control={control}
              name={`${name}.${index}.name`}
              render={({ field: selectField }) => (
                <Select
                  onValueChange={selectField.onChange}
                  value={selectField.value || ""}
                >
                  {/* ----------- HERE'S THE FIX: w-full flex-1 ------------ */}
                  <SelectTrigger className="w-full flex-1 border rounded p-2">
                    <SelectValue placeholder="Select Phase Name" />
                  </SelectTrigger>
                  <SelectContent>
                    {phaseOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* Other fields */}
          <input
            {...register(`${name}.${index}.budget` as const, {
              valueAsNumber: true,
            })}
            type="number"
            placeholder="Budget"
            className="border rounded p-2 w-24" // keep fixed width or add flex-1 if you want all columns to match
          />
          <input
            {...register(`${name}.${index}.startTime` as const)}
            type="datetime-local"
            className="border rounded p-2 flex-1"
          />
          <input
            {...register(`${name}.${index}.endTime` as const)}
            type="datetime-local"
            className="border rounded p-2 flex-1"
          />
          <button
            type="button"
            className="text-red-600 ml-2"
            onClick={() => remove(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="bg-blue-500 text-white px-3 py-1 rounded"
        onClick={() =>
          append({ name: "", budget: 0, startTime: "", endTime: "" })
        }
      >
        Add Phase
      </button>
      {/* Show errors if needed */}
      {errors[name] && (
        <span className="text-red-500 text-xs">
          {(errors[name] as any).message}
        </span>
      )}
    </div>
  );
};

export default FormArrayInput;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ChevronDown } from "lucide-react";
import React from "react";
import { useFormContext, useFieldArray, FieldValues } from "react-hook-form";

type PhasesInputProps = {
  name: string; // path in form, e.g. "phases"
  label?: string;
  phaseOptions: string[]; // list of selectable phase names
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
    <div className="mb-4 relative">
      {label && <label className="block mb-2">{label}</label>}
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="flex flex-col   lg:flex-row gap-2 mb-2 border p-2   rounded"
        >
          {/* Select input for phase name */}

          <div>
            {label && <label className="block mb-2">{"Phase Name"}</label>}
            <div className="relative w-max ">
              <select
                {...register(`${name}.${index}.name` as const)}
                className="border appearance-none pe-10 rounded p-2 flex-1"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Phase Name
                </option>
                {phaseOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <ChevronDown
                className="absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none"
                size={15}
              ></ChevronDown>
            </div>
          </div>
          <div>
            {label && <label className="block mb-2">{"Phase Budget"}</label>}
            <input
              {...register(`${name}.${index}.budget` as const, {
                valueAsNumber: true,
              })}
              type="number"
              placeholder="Budget"
              className="border rounded p-2 w-24"
            />
          </div>
          <div>
            {label && <label className="block mb-2">{"Phase Deadline"}</label>}
            <input
              {...register(`${name}.${index}.endTime` as const)}
              type="date"
              className="border rounded p-2"
            />
          </div>

          <button
            type="button"
            className="text-white mt-auto mb-1 py-1 px-3 h-9 rounded-md bg-red-500 ml-2"
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

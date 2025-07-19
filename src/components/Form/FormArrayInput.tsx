/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
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
    <div className="mb-4">
      {label && <label className="block mb-2">{label}</label>}
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="flex flex-col md:flex-row gap-2 mb-2 border p-2 rounded"
        >
          {/* Select input for phase name */}
          <select
            {...register(`${name}.${index}.name` as const)}
            className="border rounded p-2 flex-1"
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
          <input
            {...register(`${name}.${index}.budget` as const, {
              valueAsNumber: true,
            })}
            type="number"
            placeholder="Budget"
            className="border rounded p-2 w-24"
          />
          <input
            {...register(`${name}.${index}.startTime` as const)}
            type="datetime-local"
            className="border rounded p-2"
          />
          <input
            {...register(`${name}.${index}.endTime` as const)}
            type="datetime-local"
            className="border rounded p-2"
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
        className="  shadow  bg-gray-100 px-2 py-0.5 rounded-sm hover:bg-gray-200"
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

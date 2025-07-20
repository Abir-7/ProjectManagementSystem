"use client";

import React from "react";
import {
  useForm,
  FormProvider,
  UseFormProps,
  FieldValues,
} from "react-hook-form";

type BaseFormProps<T extends FieldValues> = {
  defaultValues: UseFormProps<T>["defaultValues"];
  onSubmit: (data: T, reset: () => void) => void;
  children: React.ReactNode;
  className?: string;
  isLoading: boolean;
  btnText: string;
};

export function BaseForm<T extends FieldValues>({
  defaultValues,
  onSubmit,
  children,
  className = "",
  isLoading,
  btnText,
}: BaseFormProps<T>) {
  const methods = useForm<T>({ defaultValues });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => onSubmit(data, methods.reset))}
        className={`space-y-6 mx-2 md:mx-4 lg:mx-6  mt-8 ${className}`}
      >
        {children}
        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800"
        >
          {isLoading ? "Processing..." : btnText}
        </button>
      </form>
    </FormProvider>
  );
}

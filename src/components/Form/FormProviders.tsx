"use client";
import React, { ReactNode } from "react";
import {
  useForm,
  FormProvider,
  FieldValues,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

interface FormProvidersProps<T extends FieldValues> {
  children: ReactNode;
  onFormSubmit: (data: T, methods: UseFormReturn<T>) => Promise<void> | void;
}

const FormProviders = <T extends FieldValues = FieldValues>({
  children,
  onFormSubmit,
}: FormProvidersProps<T>) => {
  const methods = useForm<T>();
  const onSubmit: SubmitHandler<T> = async (data) => {
    console.log(data);
    await onFormSubmit(data, methods);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FormProviders;

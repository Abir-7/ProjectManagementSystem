/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TeamForm = () => {
  const form = useForm({
    defaultValues: {
      teamName: "",
      description: "",
      phases: [{ name: "", price: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "phases",
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-lg mx-auto mt-8"
      >
        {/* Team Name */}
        <FormField
          control={form.control}
          name="teamName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter team name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Describe your team" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Dynamic Phases */}
        <div>
          <FormLabel className="text-lg font-medium">Phases</FormLabel>
          <div className="space-y-4 mt-2">
            {fields.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center gap-2 border p-2 rounded-xl"
              >
                {/* Phase Name */}
                <FormField
                  control={form.control}
                  name={`phases.${index}.name`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Phase Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Phase name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Phase Price */}
                <FormField
                  control={form.control}
                  name={`phases.${index}.price`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Price"
                          {...field}
                          onChange={(e) =>
                            field.onChange(
                              e.target.value === ""
                                ? ""
                                : Number(e.target.value)
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Remove Button */}
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => remove(index)}
                  className="h-10"
                  disabled={fields.length === 1}
                  title="Remove phase"
                >
                  -
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() => append({ name: "", price: "" })}
              className="w-full"
            >
              + Add Phase
            </Button>
          </div>
        </div>
        <Button type="submit" className="w-full">
          Create Team
        </Button>
      </form>
    </Form>
  );
};

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">Create Team</h1>
      <TeamForm />
    </div>
  );
}

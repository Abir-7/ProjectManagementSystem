/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { userRoles, userStatus } from "@/auth/authinterface";
import { BaseForm } from "@/components/ui_components/shadcn_form/base_form";
import { FormSelect } from "@/components/ui_components/shadcn_form/form_select";
import React from "react";

const ActionModalData = ({
  userId,
  teamId,
}: {
  userId: string | null;
  teamId: string | null;
}) => {
  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <h1>{userId}</h1>
      <h1>{teamId}</h1>
      <BaseForm
        btnText="Update"
        isLoading={false}
        defaultValues={{}}
        onSubmit={onSubmit}
      >
        <FormSelect
          name="teamId"
          label="Asign to a team"
          options={[{ label: "team a", value: "sdas" }]}
        ></FormSelect>
        <FormSelect
          name="role"
          label="Change Role"
          options={[
            { label: "Leader", value: userRoles.LEADER },
            { label: "Employee", value: userRoles.EMPLOYEE },
          ]}
        ></FormSelect>

        <FormSelect
          name="status"
          label="Change user status"
          options={[
            { label: "Working", value: userStatus.WORKING },
            { label: "Block", value: userStatus.BLOCKED },
            { label: "Deleted", value: userStatus.DELETED },
          ]}
        ></FormSelect>
      </BaseForm>
    </div>
  );
};

export default ActionModalData;

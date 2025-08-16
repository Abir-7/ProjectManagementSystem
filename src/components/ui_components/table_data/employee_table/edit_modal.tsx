"use client";

import React, { useState } from "react";
import { useGetUserRoleQuery } from "@/redux/api/auth_api/auth_api";
import { useGetEmployeeStatusListQuery } from "@/redux/api/employee_api/employee_api";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUpdateUserRoleStatusMutation } from "@/redux/api/supervisor_api/supervisor_api";
import { DialogClose } from "@radix-ui/react-dialog";
import TableLoading from "../../loading/table_loading";
import LoadingModal from "../../loading/loading_modal";

interface EditModalProps {
  userId: string;
  userStatus: string;
  userRole: string;
}

interface DropdownProps {
  label: string;
  placeholder: string;
  options: { name: string; value: string }[];
  value?: string;
  onChange?: (val: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  placeholder,
  options,
  value,
  onChange,
}) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full mt-1">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options?.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

const EditModal: React.FC<EditModalProps> = ({
  userId,
  userStatus,
  userRole,
}) => {
  const { data: employeeRoleList, isLoading: isRoleLoading } =
    useGetUserRoleQuery("");
  const { data: employeeStatusList, isLoading: isStatusLoading } =
    useGetEmployeeStatusListQuery("");
  const [updateUser] = useUpdateUserRoleStatusMutation();

  const [selectedRole, setSelectedRole] = useState<string>(userRole);
  const [selectedStatus, setSelectedStatus] = useState<string>(userStatus);

  const handleSave = async () => {
    await updateUser({ userId, role: selectedRole, status: selectedStatus });
  };

  if (isRoleLoading || isStatusLoading) {
    return <LoadingModal></LoadingModal>;
  }

  return (
    <div className="space-y-4">
      <p className="text-sm">
        <span className="font-medium">User ID:</span> {userId}
      </p>

      <Dropdown
        label="Role"
        placeholder="Select role"
        options={employeeRoleList?.data || []}
        value={selectedRole}
        onChange={setSelectedRole}
      />
      <Dropdown
        label="Status"
        placeholder="Select status"
        options={employeeStatusList?.data || []}
        value={selectedStatus}
        onChange={setSelectedStatus}
      />

      <DialogClose
        className="
    px-2 py-1 rounded-md font-medium
    bg-foreground text-background
    hover:opacity-90
    transition
  "
        type="button"
        onClick={handleSave}
      >
        {" "}
        Save{" "}
      </DialogClose>
    </div>
  );
};

export default EditModal;

"use client";
export type TUserRoles = "ADMIN" | "EMPLOYEE" | "LEADER" | "SUPERVISOR";

export const userRoles = {
  ADMIN: "ADMIN",
  EMPLOYEE: "EMPLOYEE",
  LEADER: "LEADER",
  SUPERVISOR: "SUPERVISOR",
} as const;

export type TUserStatus = "DELETED" | "BLOCKED" | "WORKING";

export const userStatus = {
  DELETED: "DELETED",
  BLOCKED: "BLOCKED",
  WORKING: "WORKING",
};

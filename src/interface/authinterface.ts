export type UserRole = "ADMIN" | "EMPLOYEE" | "LEADER" | "SUPERVISOR";

export const userRole = {
  ADMIN: "ADMIN",
  EMPLOYEE: "EMPLOYEE",
  LEADER: "LEADER",
  SUPERVISOR: "SUPERVISOR",
} as const;

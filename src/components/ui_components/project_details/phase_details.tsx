"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface Employee {
  _id: string;
  email: string;
  role: string;
  status: string;
}

interface Profile {
  _id: string;
  fullName: string;
  phone: string;
  image: string;
  user: string;
}

interface AssignTo {
  employee: Employee;
  profile: Profile;
  progress: number;
}

interface Phase {
  _id: string;
  name: string;
  budget: number;
  deadline: string;
  status: string;
  project: string;
  assignTo: AssignTo[];
}

function getBadgeStyle(status: string) {
  switch (status) {
    case "ACTIVE":
      return "bg-green-700 text-green-50 px-2 py-0.5 text-sm font-medium";
    case "HOLD":
      return "bg-yellow-700 text-yellow-50  px-2 py-0.5 text-sm font-medium";
    case "PENDING":
      return "bg-gray-700 text-gray-50  px-2 py-0.5 text-sm font-medium";
    default:
      return "bg-gray-700 text-gray-50  px-2 py-0.5 text-sm font-medium";
  }
}

export default function PhaseDetails({ phase }: { phase: Phase }) {
  return (
    <div className="space-y-2 p-4 border rounded-xl dark:text-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold dark:text-gray-200">
          {phase.name}
        </h2>

        <Badge className={getBadgeStyle(phase.status)}>{phase.status}</Badge>
      </div>

      <Separator className="border-gray-700" />

      {/* Phase Info */}
      <div>
        <h3 className="text-md font-semibold mb-1 dark:text-gray-200">
          Phase Info
        </h3>
        <div className="flex gap-3 text-sm">
          <div className="dark:text-gray-200">
            <span className="font-medium">Budget: </span>$
            {phase.budget.toLocaleString()}
          </div>
          <div className="dark:text-gray-200">
            <span className="font-medium">Deadline: </span>
            {new Date(phase.deadline).toLocaleDateString()}
          </div>
        </div>
      </div>

      <Separator className="border-gray-700" />

      {/* Assigned Employees */}
      <div>
        <h3 className="text-md font-semibold mb-2 dark:text-gray-200">
          Assigned Employees
        </h3>
        {phase.assignTo && phase.assignTo.length > 0 ? (
          <ul className="space-y-2">
            {phase.assignTo.map((assignment) => (
              <li
                key={assignment.employee._id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border"
              >
                {/* Profile */}
                <div className="flex items-center gap-3">
                  {assignment.profile.image ? (
                    <Image
                      src={assignment.profile.image}
                      alt={assignment.profile.fullName}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-sm font-semibold text-green-50">
                      {assignment.profile.fullName[0]}
                    </div>
                  )}
                  <div>
                    <p className="font-medium dark:text-gray-200 text-sm">
                      {assignment.profile.fullName}
                    </p>
                    <p className="dark:text-gray-300 text-sm">
                      {assignment.employee.email}
                    </p>
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-2 sm:mt-0 sm:w-1/3">
                  <div className="flex justify-between text-sm mb-1 dark:text-gray-200">
                    <span>Progress</span>
                    <span>{assignment.progress}%</span>
                  </div>
                  <Progress
                    value={assignment.progress}
                    className="h-2 rounded-full"
                  />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="italic text-gray-600 dark:text-gray-400 text-sm">
            No one assigned yet.
          </p>
        )}
      </div>
    </div>
  );
}

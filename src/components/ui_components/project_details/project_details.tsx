"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import PhaseDetails from "./phase_details";

const demoPhases = [
  {
    _id: "68987f1c011ba44ebcc0c9ef",
    name: "Development Phase",
    budget: 35000,
    deadline: "2026-03-01T00:00:00.000Z",
    status: "HOLD",
    project: "68987f1c011ba44ebcc0c9ec",
    assignTo: [
      {
        employee: {
          _id: "68981c5081afa8a06426545b",
          email: "md.tazwarul.islam.07@gmail.com",
          role: "EMPLOYEE",
          status: "WORKING",
        },
        profile: {
          _id: "68981c5181afa8a06426545d",
          fullName: "Md. Tazwarul Islam Abir",
          phone: "123123123",
          image: "",
          user: "68981c5081afa8a06426545b",
          __v: 0,
        },
        progress: 30,
      },
    ],
  },
  {
    _id: "68987f1c011ba44ebcc0c9f0",
    name: "Testing Phase",
    budget: 15000,
    deadline: "2026-04-15T00:00:00.000Z",
    status: "ACTIVE",
    project: "68987f1c011ba44ebcc0c9ec",
    assignTo: [],
  },
];

const project = {
  name: "AI SaaS Platform",
  clientName: "OpenAI Inc.",
  budget: 12000,
  duration: 6,
  salesName: "John Doe",
  googleSheetLink: "https://docs.google.com/spreadsheets/...",
  teamGrouplink: "https://teams.microsoft.com/...",
  status: "ACTIVE",
  createdAt: "2025-07-01",
  updatedAt: "2025-08-01",
  phase: [1, 2, 3, 4],
};

const ProjectDetails = ({ projectId }: { projectId: string }) => {
  return (
    <div className="container mx-auto pb-8 space-y-3 text-sm">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold dark:text-gray-200">
            {project.name}
          </h1>
          <section className="text-xs text-gray-500">
            <p>Created: {project.createdAt}</p>
            <p>Last Updated: {project.updatedAt}</p>
          </section>
        </div>
        <Badge
          variant={project.status === "ACTIVE" ? "default" : "secondary"}
          className=" text-sm "
        >
          {project.status}
        </Badge>
      </div>

      <Separator />

      {/* Project Info */}
      <div className="flex gap-4 justify-between flex-wrap">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold dark:text-gray-200">
            Project Info
          </h2>
          <div className="grid gap-1.5 ">
            <div className="dark:text-gray-200">
              <span className="font-medium">Client: </span>
              {project.clientName}
            </div>
            <div className="dark:text-gray-200">
              <span className="font-medium">Sales Person: </span>
              {project.salesName}
            </div>
            <div className="dark:text-gray-200">
              <span className="font-medium">Budget: </span>$
              {project.budget.toLocaleString()}
            </div>
            <div className="dark:text-gray-200">
              <span className="font-medium">Duration: </span>
              {project.duration} months
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold hidden  dark:text-gray-200">
            Resources
          </h2>
          <div className="flex flex-col gap-1.5 text-sm">
            <Link
              href={project.googleSheetLink}
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              📊 Google Sheet
            </Link>
            <Link
              href={project.teamGrouplink}
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              👥 Team Group
            </Link>
          </div>
        </section>
      </div>

      <Separator />

      {/* Phases */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold dark:text-gray-200">
          Project Phases
        </h2>
        <div className="space-y-6">
          {demoPhases.map((phase) => (
            <PhaseDetails key={phase._id} phase={phase} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;

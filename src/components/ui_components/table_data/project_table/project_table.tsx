/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import PhaseTooltip from "./phase_tooltip";
import TableLoading from "../../loading/table_loading";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";

const ProjectTable = ({
  projects,
  isTooltip,
  isFetching,
}: {
  projects: any;
  isTooltip: boolean;
  isFetching: boolean;
}) => {
  const { user } = useAppSelector((state) => state.auth);

  if (isFetching) {
    return <TableLoading></TableLoading>;
  }

  return (
    <div className="p-2">
      {/* Table wrapper with scroll */}
      <div className="overflow-x-auto border border-border rounded-lg max-h-[calc(100vh-270px)] custom-scroll">
        <table className="w-full min-w-full divide-y divide-border">
          {/* Table Head */}
          <thead className="sticky bg-accent top-0  z-2 ">
            <tr>
              {[
                "Project Name",
                "Client",
                "Budget",
                "Duration",
                "Sales",
                "Status",
                "Phases",
              ].map((header) => (
                <th
                  key={header}
                  className="px-4 py-2 text-left text-sm font-medium text-foreground/80"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-border ">
            {projects.map((project: any, i: number) => (
              <tr key={i}>
                <td className="px-4 py-2">
                  <Link
                    href={`/${user?.role.toLocaleLowerCase()}/manage-projects/${
                      project._id
                    }`}
                  >
                    {project.name}
                  </Link>
                </td>
                <td className="px-4 py-2">{project.clientName}</td>
                <td className="px-4 py-2">${project.budget}</td>
                <td className="px-4 py-2">{project.duration}</td>
                <td className="px-4 py-2">{project.salesName}</td>
                <td className="px-4 py-2">{project.status}</td>
                <td className="px-4 py-2 space-y-1 min-w-[500px]">
                  {project.phases.map((phase: any) => (
                    <PhaseTooltip
                      key={phase._id}
                      phase={phase}
                      isTooltip={isTooltip}
                    />
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;

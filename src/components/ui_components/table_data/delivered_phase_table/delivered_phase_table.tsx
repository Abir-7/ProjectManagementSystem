/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import TableLoading from "../../loading/table_loading";

const DeliveredPhaseTable = ({
  projects,
  isFetching,
}: {
  projects: any[];
  isFetching: boolean;
}) => {
  if (isFetching) {
    return <TableLoading />;
  }

  return (
    <div className="p-2">
      <div className="overflow-x-auto border border-border rounded-lg max-h-[calc(100vh-270px)] custom-scroll">
        <table className="w-full min-w-full divide-y divide-border">
          {/* Table Head */}
          <thead className="sticky bg-accent top-0 z-2">
            <tr>
              {[
                "Project Name",
                "Client Name",
                "Status",
                "Budget",
                "Employee Name",
                "Phase",
                "Team",
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
          <tbody className="divide-y divide-border">
            {projects?.map((project) => (
              <tr key={project._id}>
                {/* Project Name */}
                <td className="px-4 py-2">{project.name}</td>

                {/* Client Name */}
                <td className="px-4 py-2">{project.client}</td>

                {/* Status */}
                <td className="px-4 py-2">
                  {project.status} - {project.createdAt}
                </td>

                {/* Budget */}
                <td className="px-4 py-2">
                  {project.budget ? `$${project.budget}` : "—"}
                </td>

                {/* Employee Name */}
                <td className="px-4 py-2">{project.employee?.name || "—"}</td>
                <td className="px-4 py-2">{project?.phase?.name || "—"}</td>
                <td className="px-4 py-2">{project.team?.name || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveredPhaseTable;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React from "react";

const TeamTable = ({
  teams,
  isFetching,
}: {
  teams: any[];
  isFetching: boolean;
}) => {
  const { user } = useAppSelector((state) => state.auth);

  if (isFetching) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <div className="p-2">
      <div className="overflow-x-auto border border-border rounded-lg max-h-[calc(100vh-270px)] custom-scroll">
        <table className="w-full min-w-full divide-y divide-border">
          {/* Table Head */}
          <thead className="sticky bg-accent top-0 z-10">
            <tr>
              {["Team Name", "Total Members", "Status"].map((header) => (
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
            {teams.map((team: any) => (
              <tr key={team._id}>
                <td className="px-4 py-2">
                  <Link
                    href={`/${user?.role.toLocaleLowerCase()}/manage-team/${
                      team._id
                    }`}
                  >
                    {team.name}
                  </Link>
                </td>
                <td className="px-4 py-2">{team.totalWorkingEmployees}</td>
                <td className="px-4 py-2">{team.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamTable;

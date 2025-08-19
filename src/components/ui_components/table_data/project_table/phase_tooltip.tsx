/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useMemo } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useGetPhaseDetailsQuery } from "@/redux/api/project_api/project_api";

interface Assignment {
  profile?: {
    fullName?: string;
    phone?: string;
  };
  employee?: {
    email?: string;
  };
  progress?: number;
}

interface Phase {
  _id: string;
  name: string;
  budget: number;
  status: string;
}

interface PhaseTooltipProps {
  phase: Phase;
  isTooltip?: boolean;
}

const PhaseTooltip = ({ phase, isTooltip = false }: PhaseTooltipProps) => {
  // Query will run only when tooltip mode is enabled
  const { data, isFetching, isError } = useGetPhaseDetailsQuery(phase._id, {
    skip: !isTooltip,
  });

  const details = data?.data;

  const phaseBlock = (
    <div
      className={`grid grid-cols-3 gap-4 border px-2 py-1 rounded ${
        isTooltip ? "hover:shadow cursor-pointer" : ""
      }`}
    >
      <span>{phase.name}</span>
      <span>${phase.budget}</span>
      <span>{phase.status}</span>
    </div>
  );

  const assignments = useMemo(() => {
    if (!details?.assignTo?.length) return null;
    return (
      <ul className="list-disc pl-4 space-y-1">
        {details.assignTo.map((assignment: Assignment, idx: number) => (
          <li key={idx}>
            <div>
              <strong>{assignment.profile?.fullName || "Unnamed"}</strong> (
              {assignment.employee?.email || "No email"})
            </div>
            <div>📱 {assignment.profile?.phone || "No phone"}</div>
            <div>📊 Progress: {assignment.progress ?? 0}%</div>
          </li>
        ))}
      </ul>
    );
  }, [details?.assignTo]);
  // If tooltip is disabled, just render block
  if (!isTooltip) return phaseBlock;

  return (
    <HoverCard openDelay={300} closeDelay={300}>
      <HoverCardTrigger asChild>{phaseBlock}</HoverCardTrigger>
      <HoverCardContent className="max-w-sm bg-popover text-popover-foreground border border-border shadow-md p-4 w-96">
        {isFetching ? (
          <span>Loading...</span>
        ) : isError ? (
          <span className="text-red-500">Error loading details</span>
        ) : details ? (
          <div className="space-y-2 text-sm">
            <p>
              <strong>Deadline:</strong>{" "}
              {details.deadline
                ? new Date(details.deadline).toLocaleDateString()
                : "No deadline set"}
            </p>
            <p>
              <strong>Assigned To:</strong>
            </p>
            {assignments || (
              <p className="italic text-muted-foreground">Not assigned yet</p>
            )}
          </div>
        ) : (
          <span>No details available</span>
        )}
      </HoverCardContent>
    </HoverCard>
  );
};

export default PhaseTooltip;

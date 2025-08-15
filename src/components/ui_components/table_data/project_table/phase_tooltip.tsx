/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useGetPhaseDetailsQuery } from "@/redux/api/project_api/project_api";

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
  const [phaseId, setPhaseId] = useState("");

  const {
    data,
    isFetching: isLoading,
    isError,
  } = useGetPhaseDetailsQuery(phaseId, {
    skip: !phaseId,
  });

  const details = data?.data;

  const handleMouseEnter = () => {
    if (!phaseId) {
      console.log("Hovered phase ID:", phase._id);
      setPhaseId(phase._id);
    }
  };

  const handleMouseLeave = () => {
    setPhaseId("");
  };

  const phaseBlock = (
    <div
      onMouseEnter={isTooltip ? handleMouseEnter : undefined}
      onMouseLeave={isTooltip ? handleMouseLeave : undefined}
      className={`grid grid-cols-3 gap-4 border px-2 py-1 rounded ${
        isTooltip ? "hover:shadow cursor-pointer" : ""
      }`}
    >
      <span>{phase.name}</span>
      <span>${phase.budget}</span>
      <span>{phase.status}</span>
    </div>
  );

  if (!isTooltip) return phaseBlock;

  return (
    <HoverCard openDelay={300} closeDelay={300}>
      <HoverCardTrigger asChild>{phaseBlock}</HoverCardTrigger>
      <HoverCardContent className="max-w-sm bg-popover text-popover-foreground border border-border shadow-md p-4 w-96">
        {isLoading ? (
          <span>Loading...</span>
        ) : isError ? (
          <span>Error loading details</span>
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
            {details.assignTo && details.assignTo.length > 0 ? (
              <ul className="list-disc pl-4 space-y-1">
                {details.assignTo.map((assignment: any, idx: number) => (
                  <li key={idx}>
                    <div>
                      <strong>
                        {assignment.profile?.fullName || "Unnamed"}
                      </strong>{" "}
                      ({assignment.employee?.email || "No email"})
                    </div>
                    <div>📱 {assignment.profile?.phone || "No phone"}</div>
                    <div>📊 Progress: {assignment.progress ?? 0}%</div>
                  </li>
                ))}
              </ul>
            ) : (
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

"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  const details = {
    startDate: "asdas",
    endDate: "asdas",
    description: "adsdasdas",
  };
  const isLoading = false;
  const isError = false;

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

  if (!isTooltip) return phaseBlock;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{phaseBlock}</TooltipTrigger>
        <TooltipContent className="max-w-sm bg-popover text-popover-foreground border border-border shadow-md p-4 w-96">
          {isLoading ? (
            <span>Loading...</span>
          ) : isError ? (
            <span>Error loading details</span>
          ) : details ? (
            <div className="space-y-1 text-sm">
              <p>
                <strong>Start:</strong> {details.startDate}
              </p>
              <p>
                <strong>End:</strong> {details.endDate}
              </p>
              <p>
                <strong>Description:</strong> {details.description}
              </p>
            </div>
          ) : (
            <span>No details available</span>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default PhaseTooltip;

"use client";

import ProjectDetails from "@/components/ui_components/project_details/project_details";

import { useParams } from "next/navigation";
import React from "react";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();

  return (
    <div>
      <ProjectDetails projectId={projectId as string}></ProjectDetails>
    </div>
  );
};

export default ProjectDetailsPage;

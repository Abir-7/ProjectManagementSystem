"use client";
import React from "react";
import DeliveredPhaseTable from "@/components/ui_components/table_data/delivered_phase_table/delivered_phase_table";

const DeliveredData = () => {
  // Demo projects (static just for showing table)
  const demoProjects = [
    {
      _id: "1",
      name: "Website Redesign",
      client: "Acme Corp",
      status: "Delivered",
      budget: 5000,
      employee: { name: "John Doe" },
      team: { name: "JVAI" },
      createdAt: "2025-08-12",
    },
    {
      _id: "2",
      name: "Mobile App Development",
      client: "Tech Solutions",
      status: "In Progress",
      budget: 12000,
      employee: { name: "Jane Smith" },
      team: { name: "JVAI" },
      createdAt: "2025-08-16",
    },
  ];

  return (
    <div className="p-4 space-y-4">
      <DeliveredPhaseTable projects={demoProjects} isFetching={false} />
    </div>
  );
};

export default DeliveredData;

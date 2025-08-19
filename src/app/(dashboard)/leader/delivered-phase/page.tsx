"use client";
import React, { useState } from "react";
import DeliveredPhaseTable from "@/components/ui_components/table_data/delivered_phase_table/delivered_phase_table";
import SearchFilters from "@/components/ui_components/search_filter/search_filter";

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
      phase: { name: "Back-End" },
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
      phase: { name: "Back-End" },
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [timeFilter, setTimeFilter] = useState<string | undefined>("monthly");
  const timeOptions = [
    { name: "Daily", value: "daily" },
    { name: "Weekly", value: "weekly" },
    { name: "Monthly", value: "monthly" },
  ];

  return (
    <div className="p-4 space-y-4">
      <SearchFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        optionOne={timeOptions}
        filterOne={timeFilter}
        setFilterOne={setTimeFilter}
        placeHolderOne="Select Team"
        isAllOne={false}
      />
      <DeliveredPhaseTable projects={demoProjects} isFetching={false} />
    </div>
  );
};

export default DeliveredData;

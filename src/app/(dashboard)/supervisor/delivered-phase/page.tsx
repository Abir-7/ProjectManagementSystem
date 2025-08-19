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

  // States for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [teamFilter, setTeamFilter] = useState<string | undefined>("");
  const [timeFilter, setTimeFilter] = useState<string | undefined>("monthly");

  // Team options
  const teamOptions = [
    { name: "Team 1", value: "team-1" },
    { name: "Team 2", value: "team-2" },
  ];

  // Time filter options
  const timeOptions = [
    { name: "Daily", value: "daily" },
    { name: "Weekly", value: "weekly" },
    { name: "Monthly", value: "monthly" },
  ];

  // 🚀 Later you'll send these values (searchTerm, teamFilter, timeFilter) to API query
  console.log({ searchTerm, teamFilter, timeFilter });

  return (
    <div className="p-4 space-y-4">
      {/* Filters (Team + Time + Search) */}
      <SearchFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        optionOne={teamOptions}
        filterOne={teamFilter}
        setFilterOne={setTeamFilter}
        placeHolderOne="Select Team"
        optionTwo={timeOptions}
        filterTwo={timeFilter}
        setFilterTwo={setTimeFilter}
        placeHolderTwo="Select Range"
        isAllTwo={false}
      />

      {/* Table with demo data */}
      <DeliveredPhaseTable projects={demoProjects} isFetching={false} />
    </div>
  );
};

export default DeliveredData;

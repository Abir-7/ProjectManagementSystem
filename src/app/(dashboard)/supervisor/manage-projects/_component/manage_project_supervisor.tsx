/* eslint-disable @typescript-eslint/no-explicit-any */
import { DynamicPagination } from "@/components/ui_components/pagination/DynamicPagination";
import SearchFilters from "@/components/ui_components/search_filter/search_filter";
import ProjectTable from "@/components/ui_components/table_data/project_table/project_table";
import React, { useMemo, useState } from "react";

const ManageProjectSupervisor = () => {
  const projects = [
    {
      _id: "68987f1c011ba44ebcc0c9ec",
      name: "Website Redesign",
      clientName: "Acme Corp",
      budget: 5000,
      duration: 3,
      salesName: "John Doe",
      googleSheetLink: "https://docs.google.com/spreadsheets/d/abc123",
      teamGrouplink: "https://teams.microsoft.com/l/team/xyz789",
      status: "HOLD",
      createdAt: "2025-08-10T11:14:36.206Z",
      updatedAt: "2025-08-10T11:14:36.206Z",
      __v: 0,
      teamProjects: [
        {
          _id: "68987f1c011ba44ebcc0c9f1",
          team: "6898286e77e19f160a4d211c",
          project: "68987f1c011ba44ebcc0c9ec",
          createdAt: "2025-08-10T11:14:36.376Z",
          updatedAt: "2025-08-10T11:14:36.376Z",
          __v: 0,
        },
      ],
      phases: [
        {
          _id: "68987f1c011ba44ebcc0c9ee",
          name: "Design Phase",
          budget: 15000,
          deadline: "2025-10-01T00:00:00.000Z",
          status: "HOLD",
          project: "68987f1c011ba44ebcc0c9ec",
          __v: 0,
          createdAt: "2025-08-10T11:14:36.292Z",
          updatedAt: "2025-08-10T11:14:36.292Z",
        },
        {
          _id: "68987f1c011ba44ebcc0c9ef",
          name: "Development Phase",
          budget: 35000,
          deadline: "2026-03-01T00:00:00.000Z",
          status: "ONGOING",
          project: "68987f1c011ba44ebcc0c9ec",
          __v: 0,
          createdAt: "2025-08-10T11:14:36.292Z",
          updatedAt: "2025-08-11T16:13:35.237Z",
          fixed_kpi: 0,
          kpi: 0,
        },
      ],
    },
    {
      _id: "68987f1c011ba44ebcc0c9ec",
      name: "Website Redesign",
      clientName: "Acme Corp",
      budget: 5000,
      duration: 3,
      salesName: "John Doe",
      googleSheetLink: "https://docs.google.com/spreadsheets/d/abc123",
      teamGrouplink: "https://teams.microsoft.com/l/team/xyz789",
      status: "HOLD",
      createdAt: "2025-08-10T11:14:36.206Z",
      updatedAt: "2025-08-10T11:14:36.206Z",
      __v: 0,
      teamProjects: [
        {
          _id: "68987f1c011ba44ebcc0c9f1",
          team: "6898286e77e19f160a4d211c",
          project: "68987f1c011ba44ebcc0c9ec",
          createdAt: "2025-08-10T11:14:36.376Z",
          updatedAt: "2025-08-10T11:14:36.376Z",
          __v: 0,
        },
      ],
      phases: [
        {
          _id: "68987f1c011ba44ebcc0c9ee",
          name: "Design Phase",
          budget: 15000,
          deadline: "2025-10-01T00:00:00.000Z",
          status: "HOLD",
          project: "68987f1c011ba44ebcc0c9ec",
          __v: 0,
          createdAt: "2025-08-10T11:14:36.292Z",
          updatedAt: "2025-08-10T11:14:36.292Z",
        },
        {
          _id: "68987f1c011ba44ebcc0c9ef",
          name: "Development Phase",
          budget: 35000,
          deadline: "2026-03-01T00:00:00.000Z",
          status: "ONGOING",
          project: "68987f1c011ba44ebcc0c9ec",
          __v: 0,
          createdAt: "2025-08-10T11:14:36.292Z",
          updatedAt: "2025-08-11T16:13:35.237Z",
          fixed_kpi: 0,
          kpi: 0,
        },
      ],
    },

    {
      _id: "68987f1c011ba44ebcc0c9ec",
      name: "Website Redesign",
      clientName: "Acme Corp",
      budget: 5000,
      duration: 3,
      salesName: "John Doe",
      googleSheetLink: "https://docs.google.com/spreadsheets/d/abc123",
      teamGrouplink: "https://teams.microsoft.com/l/team/xyz789",
      status: "HOLD",
      createdAt: "2025-08-10T11:14:36.206Z",
      updatedAt: "2025-08-10T11:14:36.206Z",
      __v: 0,
      teamProjects: [
        {
          _id: "68987f1c011ba44ebcc0c9f1",
          team: "6898286e77e19f160a4d211c",
          project: "68987f1c011ba44ebcc0c9ec",
          createdAt: "2025-08-10T11:14:36.376Z",
          updatedAt: "2025-08-10T11:14:36.376Z",
          __v: 0,
        },
      ],
      phases: [
        {
          _id: "68987f1c011ba44ebcc0c9ee",
          name: "Design Phase",
          budget: 15000,
          deadline: "2025-10-01T00:00:00.000Z",
          status: "HOLD",
          project: "68987f1c011ba44ebcc0c9ec",
          __v: 0,
          createdAt: "2025-08-10T11:14:36.292Z",
          updatedAt: "2025-08-10T11:14:36.292Z",
        },
        {
          _id: "68987f1c011ba44ebcc0c9ef",
          name: "Development Phase",
          budget: 35000,
          deadline: "2026-03-01T00:00:00.000Z",
          status: "ONGOING",
          project: "68987f1c011ba44ebcc0c9ec",
          __v: 0,
          createdAt: "2025-08-10T11:14:36.292Z",
          updatedAt: "2025-08-11T16:13:35.237Z",
          fixed_kpi: 0,
          kpi: 0,
        },
      ],
    },
    {
      _id: "68987f1c011ba44ebcc0c9ec",
      name: "Website Redesign",
      clientName: "Acme Corp",
      budget: 5000,
      duration: 3,
      salesName: "John Doe",
      googleSheetLink: "https://docs.google.com/spreadsheets/d/abc123",
      teamGrouplink: "https://teams.microsoft.com/l/team/xyz789",
      status: "HOLD",
      createdAt: "2025-08-10T11:14:36.206Z",
      updatedAt: "2025-08-10T11:14:36.206Z",
      __v: 0,
      teamProjects: [
        {
          _id: "68987f1c011ba44ebcc0c9f1",
          team: "6898286e77e19f160a4d211c",
          project: "68987f1c011ba44ebcc0c9ec",
          createdAt: "2025-08-10T11:14:36.376Z",
          updatedAt: "2025-08-10T11:14:36.376Z",
          __v: 0,
        },
      ],
      phases: [
        {
          _id: "68987f1c011ba44ebcc0c9ee",
          name: "Design Phase",
          budget: 15000,
          deadline: "2025-10-01T00:00:00.000Z",
          status: "HOLD",
          project: "68987f1c011ba44ebcc0c9ec",
          __v: 0,
          createdAt: "2025-08-10T11:14:36.292Z",
          updatedAt: "2025-08-10T11:14:36.292Z",
        },
        {
          _id: "68987f1c011ba44ebcc0c9ef",
          name: "Development Phase",
          budget: 35000,
          deadline: "2026-03-01T00:00:00.000Z",
          status: "ONGOING",
          project: "68987f1c011ba44ebcc0c9ec",
          __v: 0,
          createdAt: "2025-08-10T11:14:36.292Z",
          updatedAt: "2025-08-11T16:13:35.237Z",
          fixed_kpi: 0,
          kpi: 0,
        },
      ],
    },
    {
      _id: "68987f1c011ba44ebcc0c9ec",
      name: "Website Redesign",
      clientName: "Acme Corp",
      budget: 5000,
      duration: 3,
      salesName: "John Doe",
      googleSheetLink: "https://docs.google.com/spreadsheets/d/abc123",
      teamGrouplink: "https://teams.microsoft.com/l/team/xyz789",
      status: "HOLD",
      createdAt: "2025-08-10T11:14:36.206Z",
      updatedAt: "2025-08-10T11:14:36.206Z",
      __v: 0,
      teamProjects: [
        {
          _id: "68987f1c011ba44ebcc0c9f1",
          team: "6898286e77e19f160a4d211c",
          project: "68987f1c011ba44ebcc0c9ec",
          createdAt: "2025-08-10T11:14:36.376Z",
          updatedAt: "2025-08-10T11:14:36.376Z",
          __v: 0,
        },
      ],
      phases: [
        {
          _id: "68987f1c011ba44ebcc0c9ee",
          name: "Design Phase",
          budget: 15000,
          deadline: "2025-10-01T00:00:00.000Z",
          status: "HOLD",
          project: "68987f1c011ba44ebcc0c9ec",
          __v: 0,
          createdAt: "2025-08-10T11:14:36.292Z",
          updatedAt: "2025-08-10T11:14:36.292Z",
        },
        {
          _id: "68987f1c011ba44ebcc0c9ef",
          name: "Development Phase",
          budget: 35000,
          deadline: "2026-03-01T00:00:00.000Z",
          status: "ONGOING",
          project: "68987f1c011ba44ebcc0c9ec",
          __v: 0,
          createdAt: "2025-08-10T11:14:36.292Z",
          updatedAt: "2025-08-11T16:13:35.237Z",
          fixed_kpi: 0,
          kpi: 0,
        },
      ],
    },
    {
      _id: "68987f1c011ba44ebcc0c9ec",
      name: "Website Redesign",
      clientName: "Acme Corp",
      budget: 5000,
      duration: 3,
      salesName: "John Doe",
      googleSheetLink: "https://docs.google.com/spreadsheets/d/abc123",
      teamGrouplink: "https://teams.microsoft.com/l/team/xyz789",
      status: "HOLD",
      createdAt: "2025-08-10T11:14:36.206Z",
      updatedAt: "2025-08-10T11:14:36.206Z",
      __v: 0,
      teamProjects: [
        {
          _id: "68987f1c011ba44ebcc0c9f1",
          team: "6898286e77e19f160a4d211c",
          project: "68987f1c011ba44ebcc0c9ec",
          createdAt: "2025-08-10T11:14:36.376Z",
          updatedAt: "2025-08-10T11:14:36.376Z",
          __v: 0,
        },
      ],
      phases: [
        {
          _id: "68987f1c011ba44ebcc0c9ee",
          name: "Design Phase",
          budget: 15000,
          deadline: "2025-10-01T00:00:00.000Z",
          status: "HOLD",
          project: "68987f1c011ba44ebcc0c9ec",
          __v: 0,
          createdAt: "2025-08-10T11:14:36.292Z",
          updatedAt: "2025-08-10T11:14:36.292Z",
        },
        {
          _id: "68987f1c011ba44ebcc0c9ef",
          name: "Development Phase",
          budget: 35000,
          deadline: "2026-03-01T00:00:00.000Z",
          status: "ONGOING",
          project: "68987f1c011ba44ebcc0c9ec",
          __v: 0,
          createdAt: "2025-08-10T11:14:36.292Z",
          updatedAt: "2025-08-11T16:13:35.237Z",
          fixed_kpi: 0,
          kpi: 0,
        },
      ],
    },
    {
      _id: "68987f1c011ba44ebcc0c9ec",
      name: "Website Redesign",
      clientName: "Acme Corp",
      budget: 5000,
      duration: 3,
      salesName: "John Doe",
      googleSheetLink: "https://docs.google.com/spreadsheets/d/abc123",
      teamGrouplink: "https://teams.microsoft.com/l/team/xyz789",
      status: "HOLD",
      createdAt: "2025-08-10T11:14:36.206Z",
      updatedAt: "2025-08-10T11:14:36.206Z",
      __v: 0,
      teamProjects: [
        {
          _id: "68987f1c011ba44ebcc0c9f1",
          team: "6898286e77e19f160a4d211c",
          project: "68987f1c011ba44ebcc0c9ec",
          createdAt: "2025-08-10T11:14:36.376Z",
          updatedAt: "2025-08-10T11:14:36.376Z",
          __v: 0,
        },
      ],
      phases: [
        {
          _id: "68987f1c011ba44ebcc0c9ee",
          name: "Design Phase",
          budget: 15000,
          deadline: "2025-10-01T00:00:00.000Z",
          status: "HOLD",
          project: "68987f1c011ba44ebcc0c9ec",
          __v: 0,
          createdAt: "2025-08-10T11:14:36.292Z",
          updatedAt: "2025-08-10T11:14:36.292Z",
        },
        {
          _id: "68987f1c011ba44ebcc0c9ef",
          name: "Development Phase",
          budget: 35000,
          deadline: "2026-03-01T00:00:00.000Z",
          status: "ONGOING",
          project: "68987f1c011ba44ebcc0c9ec",
          __v: 0,
          createdAt: "2025-08-10T11:14:36.292Z",
          updatedAt: "2025-08-11T16:13:35.237Z",
          fixed_kpi: 0,
          kpi: 0,
        },
      ],
    },
    {
      _id: "68987f1c011ba44ebcc0c9ec",
      name: "Website Redesign",
      clientName: "Acme Corp",
      budget: 5000,
      duration: 3,
      salesName: "John Doe",
      googleSheetLink: "https://docs.google.com/spreadsheets/d/abc123",
      teamGrouplink: "https://teams.microsoft.com/l/team/xyz789",
      status: "HOLD",
      createdAt: "2025-08-10T11:14:36.206Z",
      updatedAt: "2025-08-10T11:14:36.206Z",
      __v: 0,
      teamProjects: [
        {
          _id: "68987f1c011ba44ebcc0c9f1",
          team: "6898286e77e19f160a4d211c",
          project: "68987f1c011ba44ebcc0c9ec",
          createdAt: "2025-08-10T11:14:36.376Z",
          updatedAt: "2025-08-10T11:14:36.376Z",
          __v: 0,
        },
      ],
      phases: [
        {
          _id: "68987f1c011ba44ebcc0c9ee",
          name: "Design Phase",
          budget: 15000,
          deadline: "2025-10-01T00:00:00.000Z",
          status: "HOLD",
          project: "68987f1c011ba44ebcc0c9ec",
          __v: 0,
          createdAt: "2025-08-10T11:14:36.292Z",
          updatedAt: "2025-08-10T11:14:36.292Z",
        },
        {
          _id: "68987f1c011ba44ebcc0c9ef",
          name: "Development Phase",
          budget: 35000,
          deadline: "2026-03-01T00:00:00.000Z",
          status: "ONGOING",
          project: "68987f1c011ba44ebcc0c9ec",
          __v: 0,
          createdAt: "2025-08-10T11:14:36.292Z",
          updatedAt: "2025-08-11T16:13:35.237Z",
          fixed_kpi: 0,
          kpi: 0,
        },
      ],
    },
    {
      _id: "68987f1c011ba44ebcc0c9ec",
      name: "Website Redesign",
      clientName: "Acme Corp",
      budget: 5000,
      duration: 3,
      salesName: "John Doe",
      googleSheetLink: "https://docs.google.com/spreadsheets/d/abc123",
      teamGrouplink: "https://teams.microsoft.com/l/team/xyz789",
      status: "HOLD",
      createdAt: "2025-08-10T11:14:36.206Z",
      updatedAt: "2025-08-10T11:14:36.206Z",
      __v: 0,
      teamProjects: [
        {
          _id: "68987f1c011ba44ebcc0c9f1",
          team: "6898286e77e19f160a4d211c",
          project: "68987f1c011ba44ebcc0c9ec",
          createdAt: "2025-08-10T11:14:36.376Z",
          updatedAt: "2025-08-10T11:14:36.376Z",
          __v: 0,
        },
      ],
      phases: [
        {
          _id: "68987f1c011ba44ebcc0c9ee",
          name: "Design Phase",
          budget: 15000,
          deadline: "2025-10-01T00:00:00.000Z",
          status: "HOLD",
          project: "68987f1c011ba44ebcc0c9ec",
          __v: 0,
          createdAt: "2025-08-10T11:14:36.292Z",
          updatedAt: "2025-08-10T11:14:36.292Z",
        },
        {
          _id: "68987f1c011ba44ebcc0c9ef",
          name: "Development Phase",
          budget: 35000,
          deadline: "2026-03-01T00:00:00.000Z",
          status: "ONGOING",
          project: "68987f1c011ba44ebcc0c9ec",
          __v: 0,
          createdAt: "2025-08-10T11:14:36.292Z",
          updatedAt: "2025-08-11T16:13:35.237Z",
          fixed_kpi: 0,
          kpi: 0,
        },
      ],
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | undefined>(
    undefined
  );
  const [teamFilter, setTeamFilter] = useState<string | undefined>(undefined);

  const teamOptions = useMemo(
    () =>
      Array.from(
        new Set(projects.flatMap((p) => p.teamProjects.map((t: any) => t.team)))
      ),
    [projects]
  );

  const meta = {
    limit: 10,
    page: 10,
    total: 100,
  };
  const [page, setPage] = useState(meta.page);
  return (
    <div>
      <SearchFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        teamFilter={teamFilter}
        setTeamFilter={setTeamFilter}
        teamOptions={teamOptions}
      ></SearchFilters>

      <div className="">
        <ProjectTable isTooltip={true} projects={projects}></ProjectTable>
      </div>

      <div className="pt-5">
        <DynamicPagination
          page={page}
          limit={meta.limit}
          total={meta.total}
          onPageChange={(p) => setPage(p)}
        />
      </div>
    </div>
  );
};

export default ManageProjectSupervisor;

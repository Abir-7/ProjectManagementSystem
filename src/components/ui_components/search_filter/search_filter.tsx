import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProjectFiltersProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  statusFilter?: string;
  setStatusFilter: (val?: string) => void;
  teamFilter?: string;
  setTeamFilter: (val?: string) => void;
  teamOptions: string[];
}

const SearchFilters: React.FC<ProjectFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  teamFilter,
  setTeamFilter,
  teamOptions,
}) => {
  return (
    <div className="flex flex-wrap gap-2 py-2">
      {/* Status Filter */}
      <Select onValueChange={setStatusFilter} value={statusFilter}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Filter by Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="HOLD">HOLD</SelectItem>
          <SelectItem value="ONGOING">ONGOING</SelectItem>
          <SelectItem value="COMPLETED">COMPLETED</SelectItem>
        </SelectContent>
      </Select>

      {/* Team Filter */}
      <Select onValueChange={setTeamFilter} value={teamFilter}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Filter by Team" />
        </SelectTrigger>
        <SelectContent>
          {teamOptions.map((teamId) => (
            <SelectItem key={teamId} value={teamId}>
              {teamId}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        className="w-96"
        placeholder="Search by Project or Client"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchFilters;

"use client";

import * as React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type Team = {
  id: string;
  name: string;
};

type SelectedTeam = "all" | "no-team" | string;

interface TeamSelectProps {
  teams: Team[];
  selectedTeam: SelectedTeam | null;
  onSelect: (value: SelectedTeam | null) => void;
}

export function TeamSelect({ teams, selectedTeam, onSelect }: TeamSelectProps) {
  const [search, setSearch] = React.useState("");

  // Filter teams by search term (case-insensitive)
  const filteredTeams = React.useMemo(() => {
    if (!search) return teams;
    return teams.filter((team) =>
      team.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, teams]);

  return (
    <Select
      value={selectedTeam ?? ""}
      onValueChange={(value) => onSelect(value || null)}
      onOpenChange={() => setSearch("")} // Clear search when dropdown closes/opens
    >
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Select a team" />
      </SelectTrigger>

      <SelectContent>
        {/* Search input */}
        <input
          type="text"
          placeholder="Search team..."
          className="p-2 m-2 border rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
        />

        {/* Special options */}
        <SelectItem value="all">All Teams</SelectItem>
        <SelectItem value="no-team">No Team</SelectItem>

        {/* Filtered team options */}
        {filteredTeams.length > 0 ? (
          filteredTeams.map((team) => (
            <SelectItem key={team.id} value={team.id}>
              {team.name}
            </SelectItem>
          ))
        ) : (
          <div className="p-2 text-center text-muted-foreground">
            No teams found
          </div>
        )}
      </SelectContent>
    </Select>
  );
}

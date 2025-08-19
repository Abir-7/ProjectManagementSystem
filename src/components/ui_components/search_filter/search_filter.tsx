"use client";

import React, { useMemo } from "react";
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

  filterOne?: string;
  optionOne: { name: string; value: string }[];
  setFilterOne: (val?: string) => void;

  filterTwo?: string;
  optionTwo?: { name: string; value: string }[];
  setFilterTwo?: (val?: string) => void;

  placeHolderOne: string;
  placeHolderTwo?: string;

  isAllOne?: boolean;
  isAllTwo?: boolean;
}

const SearchFilters: React.FC<ProjectFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  optionOne,
  optionTwo = [],
  setFilterOne,
  setFilterTwo,
  filterOne,
  filterTwo,
  placeHolderOne,
  placeHolderTwo,
  isAllOne = true,
  isAllTwo = true,
}) => {
  // Memoize select options to prevent re-renders
  const teamOptions = useMemo(
    () =>
      isAllTwo ? [{ name: "ALL", value: "ALL" }, ...optionTwo] : optionTwo,
    [optionTwo, isAllTwo]
  );

  const statusOptions = useMemo(
    () =>
      isAllOne ? [{ name: "ALL", value: "ALL" }, ...optionOne] : optionOne,
    [optionOne, isAllOne]
  );

  return (
    <div className="flex flex-wrap gap-2 py-2">
      {/* Status Filter */}
      <Select value={filterOne} onValueChange={setFilterOne}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder={placeHolderOne} />
        </SelectTrigger>
        <SelectContent>
          {statusOptions.map((status) => (
            <SelectItem key={status.value} value={status.value}>
              {status.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Team Filter */}
      {optionTwo.length > 0 && setFilterTwo && (
        <Select value={filterTwo} onValueChange={setFilterTwo}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder={placeHolderTwo} />
          </SelectTrigger>
          <SelectContent>
            {teamOptions.map((team) => (
              <SelectItem key={team.value} value={team.value}>
                {team.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      {/* Search Input */}
      <Input
        className="w-96"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchFilters;

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

  filterOne?: string;
  optionOne: { name: string; value: string }[];
  setFilterOne: (val?: string) => void;
  optionTwo?: { name: string; value: string }[];
  setFilterTwo?: (val?: string) => void;
  filterTwo?: string;
  placeHolderOne: string;
  placeHolderTwo?: string;
  isAllTwo?: boolean;
}

const SearchFilters: React.FC<ProjectFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  optionOne,
  optionTwo,
  setFilterOne,
  setFilterTwo,
  filterOne,
  filterTwo,
  placeHolderOne,
  placeHolderTwo,
  isAllTwo = true,
}) => {
  return (
    <div className="flex flex-wrap gap-2 py-2">
      {/* Status Filter */}
      <Select onValueChange={setFilterOne} value={filterOne}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder={placeHolderOne} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem key={"ALL"} value="ALL">
            ALL
          </SelectItem>
          {optionOne?.map((status) => (
            <SelectItem key={status.value} value={status.value}>
              {status.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Team Filter */}
      {optionTwo && optionTwo?.length > 0 && (
        <Select onValueChange={setFilterTwo} value={filterTwo}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder={placeHolderTwo} />
          </SelectTrigger>
          <SelectContent>
            {" "}
            {isAllTwo && (
              <SelectItem key={"ALL"} value="ALL">
                ALL
              </SelectItem>
            )}
            {optionTwo?.map((team) => (
              <SelectItem key={team.value} value={team.value}>
                {team.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
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

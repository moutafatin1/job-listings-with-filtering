import { useState } from "react";
import { companies } from "../data";

export function useJobs() {
  const [filters, setFilters] = useState<string[]>([]);
  const addFilter = (filter: string) => {
    if (filters.includes(filter)) return;
    setFilters((old) => [...old, filter]);
  };
  const deleteFilter = (filter: string) => {
    setFilters((old) => [...old.filter((f) => f != filter)]);
  };
  const clearFilter = () => {
    setFilters([]);
  };

  const filteredJobs = companies.filter((company) => {
    return filters.every((f) =>
      [
        ...company.languages,
        ...company.tools,
        company.role,
        company.level,
      ].includes(f)
    );
  });

  return {
    filters,
    filteredJobs,
    addFilter,
    deleteFilter,
    clearFilter,
  };
}

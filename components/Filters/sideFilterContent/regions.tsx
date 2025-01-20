"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { regions } from "@/db/regions";
import { useQueryState } from "nuqs";

export function Regions() {
  const [filter, setFilter] = useQueryState("regions");

  const handleCheckboxChange = (e: React.ChangeEvent<any>) => {
    const checked = e.target.getAttribute("data-state") == "unchecked";
    const value = e.target.getAttribute("id");
    const filters = filter ? filter.split(",") : [];

    if (checked) {
      const updatedFilters = [...filters, value];
      setFilter(updatedFilters.join(","));
    } else {
      const updatedFilters = filters.filter((item) => item !== value);
      setFilter(updatedFilters.length > 0 ? updatedFilters.join(",") : "");
    }
  };

  return (
    <div className="h-60 overflow-y-scroll w-full">
      {regions.map((region) => (
        <div className="flex items-center space-x-2 mt-3" key={region.id}>
          <Checkbox
            id={region.name}
            onClick={handleCheckboxChange}
            checked={filter?.split(",").includes(region.name)}
          />
          <label
            htmlFor={region.name}
            className="text-sm leading-none opacity-70"
          >
            {region.name}
          </label>
        </div>
      ))}
    </div>
  );
}

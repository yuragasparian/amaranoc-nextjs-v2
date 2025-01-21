"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { OfferProperty } from "@/db/offers";
import { fetchAPI } from "@/lib/fetch";
import { useQueryState } from "nuqs";
import React, { useState, useEffect } from "react";

interface RegionProperty {
  name: string;
  id: number;
  count: number;
}

export function Regions() {
  
  const [regions, setRegions] = useState<RegionProperty[] | null>(null);

  useEffect(() => {
    // setRegions(null)
    const fetchRegions = async () => {
      const data = await fetchAPI({
        url:
          `http://localhost:3000/api/regions-data`,
      });
       setRegions(data);     
    };

    fetchRegions();
    
  }, []);

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

  return (regions &&
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
            <span className="ml-3 text-xs">{region.count}</span>
          </label>
        </div>
      ))}
    </div>
  );
}

import React from "react";
import { DatePickerWithRange } from "./datePicker";
import Map from "./map";
import SideFilter from "./sideFilter";
import { SearchBar } from './../Header/searchBar';

function Filters() {
  return (
    <div className="flex gap-2 sm:justify-start  justify-center items-center">
      <SideFilter />
      <Map className="max-[640px]:hidden "/>
      <SearchBar className="sm:hidden flex w-full" />
      <DatePickerWithRange />
    </div>
  );
}

export default Filters;

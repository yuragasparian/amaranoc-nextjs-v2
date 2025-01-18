import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";



export function SearchBar() {
  return (
    <div className="relative items-center sm:flex hidden">
      <Input type="text" placeholder="Search" className="w-68 rounded-2xl" />
      <Search size={20} strokeWidth={1.5} className="absolute right-4" />
    </div>
  );
}

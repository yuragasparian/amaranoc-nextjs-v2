import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";



export function SearchBar({className}:React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(className, "relative items-center")}>
      <Input type="text" placeholder="Search" className=" rounded-3xl h-11" />
      <Search size={20} strokeWidth={1.5} className="absolute right-4" />
    </div>
  );
}

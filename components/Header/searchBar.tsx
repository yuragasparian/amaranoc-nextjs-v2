"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React, {useRef} from "react";
import { useQueryState } from "nuqs";

export function SearchBar({ className }: React.HtmlHTMLAttributes<HTMLDivElement>) {

  const [query, setQuery] = useQueryState("query");
  
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && inputRef.current) {
      console.log("Search value:", inputRef.current.value);
      setQuery(inputRef.current.value)
    }
  };

  return (
    <div
      className={cn(className, "relative items-center")}
      onKeyDown={handleSearch}
    >
      <Input
        ref={inputRef}
        type="text"
        placeholder="Search"
        className="rounded-3xl h-11"
      />
      <Search
        size={20}
        strokeWidth={1.5}
        className="absolute right-4"
        tabIndex={0}
      />
    </div>
  );
}


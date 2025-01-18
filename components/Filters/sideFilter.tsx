import React from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  // SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";

function SideFilter() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="rounded_div sm:px-8 px-[10px] xl:hidden block">
          <span className="sm:block hidden">Filter</span>
          <SlidersHorizontal size={20} strokeWidth={1.5} />
        </div>
      </SheetTrigger>
      <SheetContent className="p-36" side={"left"}>
        <SheetTitle></SheetTitle>

        <SheetDescription></SheetDescription>
      </SheetContent>
    </Sheet>
  );
}

export default SideFilter;

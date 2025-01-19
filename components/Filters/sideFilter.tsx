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
import SideFilterContent from './sideFilterContent/index';

function SideFilter() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="rounded_div sm:px-8 px-[10px] xl:hidden block">
          <span className="sm:block hidden">Filter</span>
          <SlidersHorizontal size={20} strokeWidth={1.5} />
        </div>
      </SheetTrigger>
      <SheetContent side={"left_full"}>
        <SheetTitle></SheetTitle>
        <SideFilterContent className="my-16"/>
        <SheetDescription></SheetDescription>
      </SheetContent>
    </Sheet>
  );
}

export default SideFilter;

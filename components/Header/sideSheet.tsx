import React from "react";
import Hamburger from "./hamburger";
import { Navigation } from "./navbar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  // SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function SideSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <Hamburger />
      </SheetTrigger>
      <SheetContent className="p-36">
        <SheetTitle>
        <Navigation className="flex flex-col gap-16"/>
        </SheetTitle>
      
        <SheetDescription>
          
        </SheetDescription>
        
      </SheetContent>
    </Sheet>
  );
}

export default SideSheet;

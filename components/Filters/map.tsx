import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MapIcon } from "lucide-react";
import React from "react";
import { cn } from '@/lib/utils';


function Map({
  className
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <AlertDialog >
      <AlertDialogTrigger>
        <div className={cn(className, "rounded_div px-5")}>
        Map
        <MapIcon size={20} strokeWidth={1.5} />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>No map!</AlertDialogTitle>
          <AlertDialogDescription>
            There is only an alert dialog.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Map;

import React, { FC } from "react";
import { cn } from "./../lib/utils";

interface SectionTitleProps {
  title: string;
  color: string;
  className?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, color, className }) => {
  const Line = () => (
    <div className={cn("flex-1 h-px w-full bg-secondary", `bg-${color}`)}></div>
  );
  return (
    <div className={cn(className, "flex items-center w-full lg:px-8 px-3")}>
      <Line />
      <div
        className={cn(
          "px-5 xs:px-10 md:px-20 w-max text-[26px] xs:text-h4 sm:text-h3 max-sm:text-base uppercase font-bold text-center ",
          `text-${color}`
        )}
      >
        {title}
      </div>
      <Line />
    </div>
  );
};

export default SectionTitle;

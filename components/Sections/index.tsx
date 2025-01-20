"use client";

import React, { useCallback, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { sections } from "@/db/sections";
import { useQueryState } from "nuqs";

export function Sections() {
  const [currentSection, setCurrentSection] = useQueryState("section", {
    defaultValue: "",
  });

  return (
    <div className="sm:px-12 border-y my-5">
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: "auto",
        }}
        className="w-full"
      >
        <CarouselContent>
          {sections.map((section) => {
            let isActive = currentSection == section.path;
            return (
              <CarouselItem key={section.id} className="basis-28 :">
                <div className="">
                  <Card className="shadow-none border-none ">
                    <CardContent
                      className="flex flex-col aspect-square items-center justify-center p-0 group cursor-pointer"
                      onClick={() => {
                        setCurrentSection(section.path);
                      }}
                    >
                      <Image
                        src={`sections/${section.path}.svg`}
                        alt=""
                        width={40}
                        height={40}
                      />
                      <span className="text-[13px] whitespace-nowrap">
                        {section.name}
                      </span>
                      <div
                        className={cn(
                          "w-8 h-[2px] mt-2 rounded-lg",
                          isActive
                            ? "bg-orange-500"
                            : "group-hover:bg-slate-200"
                        )}
                      ></div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="sm:flex hidden" />
        <CarouselNext className="sm:flex hidden" />
      </Carousel>
    </div>
  );
}

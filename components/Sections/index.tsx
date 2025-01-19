"use client";

import React, { useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { set } from "date-fns";

export function Sections() {
  const sections: { name: string; path: string; id: number }[] = [
    { name: "Houses", id: 1, path: "houses" },
    { name: "Frame houses", id: 2, path: "frame_houses" },
    { name: "Tiny homes", id: 3, path: "tiny_homes" },
    { name: "Closed pool", id: 4, path: "closed_pool" },
    { name: "Seclusion", id: 5, path: "seclusion" },
    { name: "Amazing view", id: 6, path: "amazing_view" },
    { name: "Trending", id: 7, path: "trending" },
    { name: "Lakefront", id: 8, path: "lakefront" },
    { name: "Riverside", id: 9, path: "riverside" },
    { name: "Pavilion", id: 10, path: "pavilion" },
    { name: "Hotels", id: 11, path: "hotels" },
    { name: "Design", id: 12, path: "design" },
    { name: "New", id: 13, path: "new" },
    { name: "Apartments", id: 14, path: "apartments" },
  ];

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams();
  const currentSection = searchParams.get("section");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
  
  createQueryString("section", "design")
  // const newPathObject = {
  //   pathname: router.usePathname,
  //   query: "params"
  // }
  // router.push(newPathObject, undefined, { shallow: true });
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
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-0 group cursor-pointer"
                    onClick={()=> {router.push(pathname + '?' + createQueryString('section', section.path))}}
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
                          isActive ? "bg-orange-500" : "group-hover:bg-slate-200"
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

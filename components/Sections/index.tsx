import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import  Image  from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  return (
    <div className="px-12 border-y my-5">
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: "auto",
        }}
        className="w-full"
      >
        <CarouselContent>
          {sections.map((section) => (
            <CarouselItem key={section.id} className="basis-28">
              <div className="">
                <Card className="shadow-none border-none">
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-0">
                    <Image src={`sections/${section.path}.svg`} alt="" width={40} height={40}  />
                    <span className="text-[13px] whitespace-nowrap">{section.name}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

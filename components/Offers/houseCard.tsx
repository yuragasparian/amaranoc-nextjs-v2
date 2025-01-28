import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import { Banknote, MapPin, PersonStanding, Star } from "lucide-react";
import  Link  from 'next/link';

interface CardProps {
  id: number;
  address: string;
  maxPeople: number;
  rate: number;
  price: number;
}

const rooms = ["_frontal", "_kitchen", "_bedroom", "_bathroom"];

const HouseCard = ({ id, address, maxPeople, rate, price }: CardProps) => {
  return (
    <Card className="w-full">
      <Link href={"/houses/"+id}>
      <CardContent>
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: "auto",
          }}
          className="w-full rounded-xl overflow-hidden"
        >
          <CarouselContent className="">
            {rooms.map((room) => (
              <CarouselItem key={room} className="h-64">
                <div className="w-full h-full relative">
                  <Image
                    src={`/house_images/${id}${room}.jpg`}
                    alt={`House image ${id} ${room}`}
                    layout="fill"
                    objectFit="cover"
                    priority={false}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots />
        </Carousel>
        <CardTitle className="flex p-5 justify-between">
          <div className="flex items-center ">
            <MapPin size={20} strokeWidth={1.5} color="#ff8000" />
            <span className="ml-1">{address}</span>
          </div>
          <div className="flex items-center">
            <PersonStanding size={24} strokeWidth={1.5} color="#ff8000" />
            <span className="ml-1">{maxPeople}</span>
          </div>
          <div className="flex gap-1 items-center bg-orange-400 py-1 pl-2 pr-3 rounded-md">
            <Star size={20} color="#fff" strokeWidth={1.5} />
            <span className="ml-1 text-white font-bold">{rate}</span>
          </div>
        </CardTitle>
        <div className="flex px-5 pb-5 items-center">
          <Banknote size={25} strokeWidth={1.5} color="#ff8000" />
          <span className="ml-2 font-black text-xl text-slate-700">
            {price} $
          </span>
        </div>
      </CardContent>
      </Link>
    </Card>
  );
};

export default HouseCard;

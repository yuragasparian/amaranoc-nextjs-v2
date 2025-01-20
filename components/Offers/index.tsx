"use client";

import { fetchAPI } from "@/lib/fetch";
import React, { useEffect, useState } from "react";
import { OfferProperty } from "./../../db/offers";
import HouseCard from "./houseCard";
import { useSearchParams } from 'next/navigation';

const Offers = () => {


const params = useSearchParams();

const [houses, setHouses] = useState<OfferProperty[] | null>(null);

  useEffect(() => {
    console.log(`Route changed to: ${params}`);
    const fetchHouses = async () => {
      const data = await fetchAPI({
        url:
          `http://localhost:3000/api/best-offers?${params}`,
      });
       setHouses(data);
    };

    fetchHouses();
    
  }, [params]);
  
  return (
    <div className="">
      <div className="mt-5 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {houses ? (
          houses.map((house: OfferProperty) => (
            <HouseCard
              key={house.id}
              id={house.id}
              address={house.address}
              maxPeople={house.maxPeopleCount}
              rate={house.rating}
              price={house.price}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Offers;

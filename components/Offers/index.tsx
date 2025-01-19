import { fetchAPI } from "@/lib/utils";
import React from "react";
import { OfferProperty } from "./../../db/offers";
import HouseCard from './houseCard';

const Offers = async () => {
  const houuses = await fetchAPI({
    url: "http://localhost:3000/api/best-offers",
  });

  return (
    <div className="">
      <div className="mt-5 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {houuses.slice(0, 6).map((house: OfferProperty) => (
        <HouseCard key={house.id} id={house.id} address={house.address} maxPeople={house.maxPeopleCount} rate={house.rating} price={house.price} />
      ))}
    </div>
    
    </div>

    
  );
};
export default Offers;

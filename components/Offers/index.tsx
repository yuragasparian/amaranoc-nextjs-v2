"use client";

import { fetchAPI } from "@/lib/fetch";
import React, { useEffect, useState } from "react";
import { OfferProperty } from "./../../db/offers";
import HouseCard from "./houseCard";
import { useSearchParams } from 'next/navigation';
import {FourSquare} from "react-loading-indicators"
import  PagePagination from './pagePagination';
import { useQueryState } from "nuqs";

const Offers = () => {


const params = useSearchParams();

const [houses, setHouses] = useState<OfferProperty[] | null>(null);
const [pageCount, setPageCount] = useState<number | null>(null);
// const [page, setPage] = useQueryState("page", { defaultValue: "1" });

  useEffect(() => {
    console.log(`Route changed to: ${params}`);
    setHouses(null)
    const fetchHouses = async () => {
      const res = await fetchAPI({
        url:
          `http://localhost:3000/api/best-offers?${params}`,
      });
      setHouses(res.data)
      setPageCount(res.pagesCount)
      console.log(res.pagesCount);
      
    };

    fetchHouses();
    
  }, [params]);
  
  return (
    <div className="">
        <p className="text-base font-bold" >Best offers</p>
      <div className="mt-5 mb-9 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
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
        ) :  (
          <div className="w-full h-full flex items-center justify-center mt-16 col-span-3">
          <FourSquare color="#FFA500" size="medium" text="" textColor="" />
          </div>
        )}
      </div>
      {houses && (pageCount && pageCount>1) && <PagePagination totalPages={pageCount || 1}/>}
    </div>
  );
};

export default Offers;

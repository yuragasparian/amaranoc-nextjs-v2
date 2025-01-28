"use client";

import { fetchAPI } from "@/lib/fetch";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { OfferProperty } from "@/db/offers";


const OfferPage =  () => {
  const [house, setHouse] = useState<OfferProperty[] | null>(null);
  const { id } = useParams();  

  useEffect(() => {
    const fetchHouse = async () => {
      const res = await fetchAPI({
        url: `http://localhost:3000/api/house?id=${id}`,
      });
      setHouse(res);
      console.log(res);
    };

    fetchHouse()
  }, []);
  return (
    <div className="p-16">
      <div className="rounded_div">{house && <p>{JSON.stringify(house)}</p>}</div>
    </div>
  );
};

export default OfferPage;

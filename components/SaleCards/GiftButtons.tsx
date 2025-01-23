"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import OrderCard from './OrderCard';

 const GiftButtons = ({ giftCards }: { giftCards: number[] }) => {

  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const handleSelect = (val: number) => {
    setSelectedButton(val);
  };
  return (
    <>
    <div className="grid grid-cols-3 grid-rows-2 gap-3 sm:mx-8">
      {giftCards.map((card) => (
        <Button
          key={card}
          onClick={() => handleSelect(card)}
          variant={card === selectedButton ? "outline" : "orange"}
          size="sm"
          className="border border-white font-black max-sm:text-xs"
        >
          {card} Դ
        </Button>
      ))}
    </div>

    {/* <Button variant={"orange"} size={"sm"} className={cn("bg-orange-400 ", selectedButton? "" :"cursor-default")}>
      Order
    </Button> */}
    <OrderCard selectedButton={selectedButton}/>
    </>
  );
};

export default GiftButtons


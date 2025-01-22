import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const SaleCards = () => {
    const gifCards = [50000, 60000, 70000, 80000, 90000, 100000]
  return (
    <div className="flex justify-between max-lg:flex-col gap-4 lg:px-8 mt-10" >
      <Card className="w-full md:px-10 px-5 md:py-6 py-3 bg-primary-foreground">
        <CardContent>
          <CardTitle className="text-3xl max-md:text-xl uppercase font-black  my-4">
            Order a <span className="text-orange-400">gift card </span>
            sales.gift-card.for-you-and-or-friends
          </CardTitle>
          <hr className="border-orange-400" />
          <p className="my-4 max-md:text-sm">
            Don't miss our exclusive discount cards. If you're planning your
            next holiday with friends or family, our discount cards offer
            unbeatable savings on a wide range of holiday homes and services.
            Choose the discount amount on the card.
          </p>
        </CardContent>
      </Card>

      <Card className="w-full p-8 bg-gradient-to-r from-orange-400 to-orange-600 ">
        <CardContent className="flex flex-col items-center justify-center gap-6">
            <img src="/white-logo.svg" alt="AMARANOC" />
            <div className="grid grid-cols-3 grid-rows-2 gap-3 sm:mx-8">
               {gifCards.map(card => (
                <Button variant={"outline"} size={"sm"} key={card} className="bg-transparent border-white text-white font-black max-sm:text-xs">
                    {card} Դ
                </Button>
               ))}
            </div>
            <Button variant={"orange"} size={"sm"} className="bg-orange-400">
                Order
            </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SaleCards;

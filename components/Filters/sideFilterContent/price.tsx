"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQueryState } from "nuqs";
import { ChangeEvent, useRef } from "react";

export default function Price() {
  const currencies: string[] = ["AMD", "USD", "EUR", "RUB"];

  const [currency, setCurrency] = useQueryState("curr");
  const [minPrice, setMinPrice] = useQueryState("min_price");
  const [maxPrice, setMaxPrice] = useQueryState("max_price");

  const minPriceRef = useRef<HTMLInputElement>(null);
  const maxPriceRef = useRef<HTMLInputElement>(null);

  const handleCurrencyChange = (val: string) => {
    setCurrency(val);
  };

  const handleMinPriceInput = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && minPriceRef.current && +minPriceRef.current.value>0) {
      console.log("Min Price:", minPriceRef.current.value);
      setMinPrice(minPriceRef.current.value);
    }
  }
  const handleMaxPriceInput = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && maxPriceRef.current && +maxPriceRef.current.value>0) {
      console.log("Max Price:", maxPriceRef.current.value);
      setMaxPrice(maxPriceRef.current.value);
    }
  }

  const handleInputs = (e: React.KeyboardEvent<HTMLDivElement>) => {
    handleMinPriceInput(e)
    handleMaxPriceInput(e)
  }
  const defaultCurr: string = currencies.filter((curr) => curr == currency)[0];

  return (
    <div className="py-4 my-6 border-y">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold py-3">Price</span>
        <Select onValueChange={handleCurrencyChange} defaultValue={defaultCurr}>
          <SelectTrigger className="w-[170px]">
            <SelectValue placeholder="Select a currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {currencies.map((curr) => (
                <SelectItem key={curr} value={curr}>
                  <span>{curr}</span>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-between items-center gap-2 py-3" onKeyDown={handleInputs} >
        <Input min={0} type="number" placeholder="From"  ref={minPriceRef}/>
        <span>-</span>
        <Input min={0} type="number" placeholder="To" ref={maxPriceRef}/>
      </div>
    </div>
  );
}

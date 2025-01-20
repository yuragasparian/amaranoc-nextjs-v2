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
import { ChangeEvent } from "react";

export default function Price() {
  const currencies: string[] = ["AMD", "USD", "EUR", "RUB"];

  const [currency, setCurrency] = useQueryState("curr");
  const [minPrice, setMinPrice] = useQueryState("min_price");
  const [maxPrice, setMaxPrice] = useQueryState("max_price");

  const handleCurrencyChange = (val: string) => {
    setCurrency(val);
  };

  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMinPrice(+e.target.value>0? e.target.value:null);
  }
  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(+e.target.value>0? e.target.value:null);
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
      <div className="flex justify-between items-center gap-2 py-3">
        <Input min={0} type="number" placeholder="From" onChange={handleMinPriceChange}/>
        <span>-</span>
        <Input min={0} type="number" placeholder="To" onChange={handleMaxPriceChange}/>
      </div>
    </div>
  );
}

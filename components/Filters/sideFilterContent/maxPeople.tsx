"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQueryState } from "nuqs";

const MaxPeople = () => {
  const [maxPeople, setMaxPeople] = useQueryState("permissible_people_number");
  const [inputValue, setInputValue] = useState(maxPeople || "0");


  useEffect(() => {
    if (inputValue !== maxPeople) {
      setMaxPeople(inputValue);
    }
  }, [inputValue, maxPeople, setMaxPeople]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) && Number(value) >= 0) {
      setInputValue(value);
    }
  };

  const updateMaxPeople = (operation: "+" | "-") => {
    const current = Number(inputValue) || 0;
    const newValue = operation === "+" ? current + 1 : Math.max(0, current - 1);
    setInputValue(String(newValue));
  };

  return (
    <div className="flex items-center gap-4 w-3/4 h-10 mb-8">
      <Button
        variant="secondary"
        size="base"
        onClick={() => updateMaxPeople("-")}
      >
        -
      </Button>
      <Input
        type="number"
        min={0}
        className="h-full"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button
        variant="secondary"
        size="base"
        onClick={() => updateMaxPeople("+")}
      >
        +
      </Button>
    </div>
  );
};

export default MaxPeople;

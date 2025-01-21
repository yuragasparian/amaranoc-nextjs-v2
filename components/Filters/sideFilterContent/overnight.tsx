"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useQueryState } from "nuqs";

const Overnight = () => {
    const [overnightStatus, setOvernightStatus] = useQueryState("overnight");
  const [activeButton, setActiveButton] = useState<string>(overnightStatus || "All");

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
    setOvernightStatus(button)
  };

  return (
    <div className="flex gap-2 my-4">
      <Button
        variant={activeButton === "All" ? "default" : "outline"} 
        size="sm"
        onClick={() => handleButtonClick("All")}
      >
        All
      </Button>
      <Button
        variant={activeButton === "Yes" ? "default" : "outline"}
        size="sm"
        onClick={() => handleButtonClick("Yes")}
      >
        Yes
      </Button>
      <Button
        variant={activeButton === "No" ? "default" : "outline"}
        size="sm"
        onClick={() => handleButtonClick("No")}
      >
        No
      </Button>
    </div>
  );
};

export default Overnight;

import React, { FC, memo } from "react";
import Image from "next/image";
import { Navigation } from "./navbar";
import { Globe, UserRound } from "lucide-react";
import { SearchBar } from "./searchBar";
import SideSheet from './sideSheet';
import  Link  from 'next/link';

const  Header: React.FC = () =>  {
  
  return (
    <div className="w-full flex justify-center shadow-sm">
    <div className="flex items-center justify-between w-[90%] mx-auto md:h-28 h-16 ">
      <Image
        src={"logo.svg"}
        alt={"Amaranoc"}
        width={160}
        height={44}
        priority={false}
      />

      <Navigation className="lg:flex hidden"/>

      <div className="flex gap-8 items-center">
        <Globe size={20} strokeWidth={1.5} className="sm:block hidden"/>
        <Link href={"/login"}>
        <UserRound size={20} strokeWidth={1.5} className="md:block hidden"/>
        </Link>
        <SearchBar className="sm:flex hidden"/>
        <SideSheet />
      </div>
      
    </div>
    </div>
  );
}

export default React.memo(Header);

import React from "react";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import SectionTitle from './../SectionTitle';

const Footer = () => {
  return (
    <footer className="w-full">
      <div
        className="mt-24 h-[80vh] bg-no-repeat bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(/forest-bg.jpg)` }}
      >
        <div className="w-[90%] h-3/5 backdrop-blur-md rounded-3xl border border-white flex flex-col justify-center gap-8 max-lg:gap-4 items-center">
          <SectionTitle color="secondary" title="Post announcement" className="text-white"/>

          <h4 className="text-white text-center text-xs lg:text-base">
            Enter your information in the indicated fields and we will contact
            you
          </h4>

          <form action="" className="flex max-lg:flex-col max-md:gap-1 items-center justify-center gap-5">
            <Input placeholder="Full name" className="text-white placeholder:text-gray-200"/> 
            <Input type="tel" placeholder="Phone" className="text-white placeholder:text-gray-200"/> 
            <Input placeholder="Email" className="text-white placeholder:text-gray-200"/> 
            <Button variant={"orange"} size={"default"} className="max-lg:w-full">Send</Button>
          </form>
        </div>
      </div>
      <div className="bg-[#241D3C] h-96 w-full bg-bottom bg-no-repeat object-center" style={{backgroundImage:"url(/footer-background.png)"}}>

      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import SectionTitle from "./../../components/SectionTitle";
import { sales } from "@/db/sales";
import DiscountItem from "@/components/DiscountItem";
import SaleCards from './../../components/SaleCards';

const Sales = () => {
  return (
    <div className="lg:p-8 p-3">
      <SectionTitle
        className="my-5"
        title="Special discounts"
        color="primary"
      />
      <div className="flex max-lg:flex-col items-center justify-center gap-3 lg:px-8 my-10">
      {sales.map(sale => (
        <DiscountItem {...sale} key={sale.id}/>
      ))}
      </div>
     < SaleCards />
    </div>
  );
};

export default Sales;

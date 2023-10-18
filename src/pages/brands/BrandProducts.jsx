import React from "react";
import BrandProductCard from "./BrandProductCard";

const BrandProducts = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      {" "}
      <div className="grid grid-cols-12 gap-5 my-10">
        <BrandProductCard />
        <BrandProductCard />
        <BrandProductCard />
        <BrandProductCard />
        <BrandProductCard />
      </div>
    </div>
  );
};

export default BrandProducts;

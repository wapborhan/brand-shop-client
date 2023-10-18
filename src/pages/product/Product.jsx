import React from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="liner-container mt-5 flex justify-center border-b-2 border-[rgba(119,119,119,.17)]">
        <h1 className="mb-[-2px] inline-block border-b-2 border-primary pb-3 text-2xl font-bold uppercase">
          Products
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Product;

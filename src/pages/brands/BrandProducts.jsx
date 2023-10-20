import React from "react";
import BrandProductCard from "./BrandProductCard";
import { useLoaderData } from "react-router-dom";
import AdvSlider from "./AdvSlider";

const BrandProducts = () => {
  const loadbrandsProduct = useLoaderData();
  console.log(loadbrandsProduct);

  return (
    <>
      {" "}
      <div className="max-w-screen-xl mx-auto">
        <AdvSlider />
        <div className="grid grid-cols-12 gap-5 my-10">
          {loadbrandsProduct.map((brandprdt) => {
            return (
              <BrandProductCard brandprdt={brandprdt} key={brandprdt?.__id} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BrandProducts;

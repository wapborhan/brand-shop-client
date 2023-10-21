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
      <div className="lg:max-w-screen-xl lg:mx-auto ">
        <AdvSlider />
        <div className="lg:px-0 px-5">
          <div className="grid grid-cols-12 gap-5 my-10">
            {loadbrandsProduct?.map((brandprdt) => {
              return (
                <BrandProductCard brandprdt={brandprdt} key={brandprdt?.__id} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandProducts;

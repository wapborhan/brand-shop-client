import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import DetailsSec from "./DetailsSec";
import Brands from "./brands/Brands";
import Product from "./product/Product";
import CatBanner from "./CatBanner";
import About from "./About";

const HomePage = () => {
  const [brands, setBrands] = useState();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  // const loadBrands = useLoaderData();
  return (
    <div>
      <Banner />
      <div className="max-w-screen-xl mx-auto">
        <DetailsSec />
        <About />
        <div className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-4 my-10">
          {brands?.map((brand) => {
            return <Brands key={brand?.id} brand={brand} />;
          })}
        </div>
        <CatBanner />
      </div>
      <Product />
    </div>
  );
};

export default HomePage;

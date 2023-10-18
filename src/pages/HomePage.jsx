import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import DetailsSec from "./DetailsSec";
import ProductDetails from "./product/ProductDetails";
import Brands from "./brands/Brands";
import Product from "./product/Product";
import CatBanner from "./CatBanner";

const HomePage = () => {
  const loadBrands = useLoaderData();
  return (
    <div>
      <Banner />
      <div className="max-w-screen-xl mx-auto">
        <DetailsSec />
        <div className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-4 my-10">
          {loadBrands.map((brand) => {
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

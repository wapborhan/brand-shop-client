import { NavLink } from "react-router-dom";

const CatBanner = () => {
  return (
    <div className="banners-section-2 container mx-auto my-5 ">
      <div className="grid grid-cols-12 gap-5">
        <div className="group relative col-span-12 h-[300px] overflow-hidden rounded-lg sm:col-span-6">
          <div className="overlay-gradient absolute z-[1] h-full w-full"></div>
          <img
            className="transition-all-300 h-full w-full object-cover hover:transform group-hover:scale-110"
            src="https://i.ibb.co/vL74bkp/sec-notebooks.jpg"
            alt="banner-img"
          />
          <div className="absolute top-0 left-0 flex h-full w-full items-center">
            <div className="z-[2] p-5">
              <h3 className="text-lg font-bold uppercase text-primary-color drop-shadow-xl">
                Notebooks
              </h3>
              <p className="my-5 text-white drop-shadow-md">
                Choose the ideal laptop for you!
              </p>
              <NavLink
                to="/product"
                className="btn-effect inline-block rounded-lg bg-primary py-2 px-3 text-white"
                href="#"
              >
                <span>Show more</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="group relative col-span-12 h-[300px] overflow-hidden rounded-lg sm:col-span-6">
          <div className="overlay-gradient absolute z-[1] h-full w-full"></div>
          <img
            className="transition-all-300 h-full w-full object-cover hover:transform group-hover:scale-110"
            src="https://i.ibb.co/hcZnmx2/sec-desktops.jpg"
            alt="banner-img"
          />
          <div className="absolute top-0 left-0 flex h-full w-full items-center">
            <div className="z-[2] p-5">
              <h3 className="text-lg font-bold uppercase text-primary-color drop-shadow-xl">
                Desktops
              </h3>
              <p className="my-5 text-white drop-shadow-md">
                Build your PC at the best price!
              </p>
              <NavLink
                to="/product"
                className="btn-effect inline-block rounded-lg bg-primary py-2 px-3 text-white"
                href="#"
              >
                <span>Show more</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatBanner;

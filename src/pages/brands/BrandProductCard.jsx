import { NavLink } from "react-router-dom";

const BrandProductCard = () => {
  return (
    <div className="col-span-6">
      <div className="cardlist-container transition-all-300 translateY-2 relative overflow-hidden rounded-lg bg-white p-5 shadow-md hover:z-[2]">
        <div className="absolute top-[10px] right-[10px]">
          <div className="favorite-product p-[2px]">
            <a className="tippy tippy-left-wishlist btn-wishlist transition-all-300 flex h-9 w-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[rgba(0,0,0,.3)] hover:bg-primary-hover">
              <i className="bi bi-heart pointer-events-none flex text-white"></i>
            </a>
          </div>
          <div className="quick-view p-[2px]">
            <a className="tippy tippy-left-card-view btn-open-modal transition-all-300 flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-[rgba(0,0,0,.3)] hover:bg-primary-hover">
              <i className="bi bi-eye pointer-events-none flex text-xl text-white"></i>
            </a>
          </div>
        </div>
        <div className="absolute top-0 left-0 flex h-[35px] w-[90px] items-center justify-center rounded-br-lg bg-primary-color">
          <span className="text-md text-center font-semibold uppercase text-white">
            25% Off
          </span>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="h-[240px] overflow-hidden rounded-lg sm:min-w-[240px]">
            <a href="#">
              <img
                className="card-object-fit h-full w-full"
                src="https://megabyte.andevfrontend.com/images/cards/notebooks/note_1.jpg"
                alt="product"
              />
            </a>
          </div>
          <div className="w-full">
            <div className="my-1">
              <a className="clamp break-all text-lg font-medium" href="#">
                Apple Macbook Air 13
              </a>
            </div>
            <div className="my-1">
              <span className="price-now text-lg font-bold">$37.00</span>
              <span className="prev-price text-sm text-primary-color line-through">
                $50.00
              </span>
            </div>
            <div className="my-2">
              <div className="fav-group flex">
                <i className="bi bi-star-fill flex text-base text-star"></i>
                <i className="bi bi-star-fill flex text-base text-star"></i>
                <i className="bi bi-star-fill flex text-base text-star"></i>
                <i className="bi bi-star-fill flex text-base text-star"></i>
                <i className="bi bi-star-fill flex text-base text-gray-200"></i>
              </div>
            </div>
            <div className="my-2">
              <span className="rounded-md bg-green-300 py-1 px-2 text-xs font-bold uppercase text-white">
                instock
              </span>
            </div>
            <div className="my-1">
              <p className="clamp-2 text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                culpa, odio, qui praesentium dignissimos eaque dolorum porro
                alias neque, eius animi ipsa voluptates. Optio repellat tempora
                voluptas, dolores ipsam ad!
              </p>
            </div>

            <div className="mt-2">
              <NavLink
                to="/product/1"
                className="btn-effect transition-all-300  inline-block items-center justify-center rounded-lg bg-primary p-2"
                href="#"
              >
                <span className="font-bold uppercase text-white">
                  View details
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProductCard;

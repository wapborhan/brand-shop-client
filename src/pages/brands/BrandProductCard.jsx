import { NavLink } from "react-router-dom";
import { FaHeart, FaCartPlus, FaStar, FaRegHeart } from "react-icons/fa";

const BrandProductCard = ({ brandprdt }) => {
  const { _id, name, photoUrl, description, price, brand, type } = brandprdt;
  const desc = description?.split("\n");
  return (
    <div className="lg:col-span-6 col-span-12">
      <div className="cardlist-container transition-all-300 translateY-2 relative overflow-hidden rounded-lg  p-5 shadow-md hover:z-[2]">
        <div className="absolute top-[10px] right-[10px]">
          {/* <div className="favorite-product p-[2px]">
            <a className="tippy tippy-left-card-view btn-open-modal transition-all-300 flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-[rgba(78,131,237,0.87)] hover:bg-primary-hover">
              <i className="bi bi-eye pointer-events-none flex text-xl text-white">
                <FaCartPlus />
              </i>
            </a>
          </div> */}
        </div>
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="h-[240px] overflow-hidden rounded-lg sm:min-w-[240px]">
            <a href="#">
              <img
                className="card-object-fit h-full w-full"
                src={photoUrl}
                alt={name}
              />
            </a>
          </div>
          <div className="w-full">
            <div className="my-1">
              <a className="clamp break-all text-lg font-medium" href="#">
                {name}
              </a>
            </div>
            <div className="my-1">
              <span className="price-now text-lg font-bold">
                Price: {price} ৳
              </span>
            </div>
            <div className="my-2">
              <div className="flex text-red-600">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className="my-2">
              <span className="rounded-md bg-green-300 py-1 px-2 text-xs font-bold uppercase text-white">
                {brand}
              </span>
            </div>
            <div className="my-1">
              <div className="clamp-2 text-sm text-gray-400">
                <ul>
                  {desc?.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-2">
              <NavLink
                to={`/product/${_id}`}
                className="btn-effect transition-all-300  inline-block items-center justify-center rounded-lg bg-primary p-2"
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

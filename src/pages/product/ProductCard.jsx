import { FaHeart, FaCartPlus, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="card-container transition-all-300 translateY-2 relative flex h-full flex-col overflow-hidden rounded-lg bg-white p-5 shadow-md hover:z-[2] ">
      <div className="absolute top-[10px] right-[10px]">
        <div className="p-[2px]">
          <a className="tippy tippy-left-wishlist btn-wishlist transition-all-300 flex h-9 w-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[rgba(246,77,77,0.9)] hover:bg-primary-hover">
            <i className="bi bi-heart pointer-events-none flex text-white">
              <FaHeart />
            </i>
          </a>
        </div>
        <div className="p-[2px]">
          <a className="tippy tippy-left-card-view btn-open-modal transition-all-300 flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-[rgba(78,131,237,0.87)] hover:bg-primary-hover">
            <i className="bi bi-eye pointer-events-none flex text-xl text-white">
              <FaCartPlus />
            </i>
          </a>
        </div>
      </div>
      <div className="h-[190px] overflow-hidden rounded-lg">
        <a href="#">
          <img
            className="card-object-fit h-full w-full"
            src="https://megabyte.andevfrontend.com/images/cards/phones/phone_5.jpg"
            alt="product"
          />
        </a>
      </div>
      <div className="my-2 flex justify-between">
        <div className="flex text-red-600">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div>
          <span className="rounded-md bg-green-300 py-1 px-2 text-xs font-bold uppercase text-white">
            instock
          </span>
        </div>
      </div>
      <div className="my-1">
        <a className="clamp break-all font-medium" href="#">
          Ryzen 5 3600x
        </a>
      </div>
      <div className="my-1">
        <span className="text-lg font-bold">$37.00</span>
        <span className="text-sm text-primary-color line-through">$50.00</span>
      </div>
      <div className="my-1">
        <p className="clamp-2 text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa,
          odio, qui praesentium dignissimos eaque dolorum porro alias neque,
          eius animi ipsa voluptates. Optio repellat tempora voluptas, dolores
          ipsam ad!
        </p>
      </div>

      <div className=" mt-4">
        <NavLink
          to="/product/1"
          className="btn-effect transition-all-300 flex w-full items-center justify-center rounded-lg bg-primary p-2"
          href="#"
        >
          <span className="font-bold uppercase text-white">View details</span>
        </NavLink>
      </div>
    </div>
  );
};

export default ProductCard;

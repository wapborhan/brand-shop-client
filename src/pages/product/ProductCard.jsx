import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContex } from "../../provider/AuthProvider";

const ProductCard = ({ product }) => {
  const { user } = useContext(AuthContex);

  const { _id, name, photoUrl, description, price, brand, type } = product;

  const desc = description?.split("\n");

  const updateProduct = () => {
    console.log("click");
  };

  return (
    <div className="card-container transition-all-300 translateY-2 relative flex h-full flex-col overflow-hidden rounded-lg border-2 p-5 shadow-md hover:z-[2] ">
      <div className="absolute top-[10px] right-[10px]">
        {/* <div className="p-[2px]">
          <a className="tippy tippy-left-card-view btn-open-modal transition-all-300 flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-[rgba(78,131,237,0.87)] hover:bg-primary-hover">
            <i className="bi bi-eye pointer-events-none flex text-xl text-white">
              <FaCartPlus />
            </i>
          </a>
        </div> */}
      </div>
      <div className="h-[190px] overflow-hidden rounded-lg">
        <img
          className="card-object-fit h-full w-full"
          src={photoUrl}
          alt={name}
        />
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
          <span className="rounded-md bg-green-300 py-1 px-2 text-xs font-bold uppercase text-black">
            {brand}
          </span>
        </div>
      </div>
      <div className="my-1">
        <span className="clamp break-all font-medium" href="#">
          {name}
        </span>
      </div>
      <div className="my-1">
        <span className="text-lg font-bold">Price: {price} ৳</span>
      </div>
      <div>
        <span className="rounded-md text-xs font-bold uppercase text-black">
          {type}
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

      <div className=" mt-4 space-y-3">
        <NavLink
          to={`/product/${_id}`}
          className="btn-effect transition-all-300 flex w-full items-center justify-center rounded-lg bg-primary p-2"
          href="#"
        >
          <span className="font-bold uppercase text-white">View details</span>
        </NavLink>
        {user && (
          <NavLink
            to={`/update-product/${_id}`}
            onClick={updateProduct}
            className="btn-effect transition-all-300 flex w-full items-center justify-center rounded-lg bg-primary p-2"
          >
            <span className="font-bold uppercase text-white">
              Update Products
            </span>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

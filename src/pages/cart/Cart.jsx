import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [cartdata, setCartdata] = useState([]);

  useEffect(() => {
    fetch("https://server-sr-brand-shop.vercel.app/cart")
      .then((res) => res.json())
      .then((data) => {
        setCartdata(data);
      });
  }, []);

  const handedeleteCartPrdt = (_id) => {
    fetch(`https://server-sr-brand-shop.vercel.app/cart/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast("Your file has been deleted.");
          const remaining = cartdata.filter((item) => item._id !== _id);
          setCartdata(remaining);
        }
      });
  };
  return (
    <div className="max-w-screen-xxl mx-auto">
      <div className="banner-title-section container mx-auto my-5 px-2 sm:px-8">
        <div className="liner-container my-5 flex justify-center border-b-2 border-[rgba(119,119,119,.17)]">
          <h1 className="mb-[-2px] inline-block border-b-2 border-primary-color pb-3 text-2xl font-bold uppercase">
            Shopping Cart
          </h1>
        </div>
      </div>
      <div className="shopping-cart-page container mx-auto my-5 px-2 sm:px-8">
        {/* <!-- If the Shopping Cart is empty (replace hidden with flex) --> */}

        {cartdata.length > 0 ? (
          <div className="grid grid-cols-12 gap-5 rounded-lg  p-2 xs:p-5">
            <div className="col-span-12 lg:col-span-12">
              <div className=" overflow-x-auto lg:block">
                <table className="w-full min-w-[800px] text-left">
                  <thead>
                    <tr>
                      <th className="p-2"> Picture</th>
                      <th className="p-2">Product Name</th>
                      <th className="p-2">Brand</th>
                      <th className="p-2">Categories</th>
                      <th className="p-2">Subtotal</th>
                      <th className="p-2"> Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartdata?.map((item) => {
                      return (
                        <tr className="hover:bg-gray-100" key={item._id}>
                          <td className="p-2">
                            <div className="h-[100px] w-[100px] min-w-[100px] overflow-hidden rounded-lg border">
                              <img
                                className="h-full w-full object-cover"
                                src={item?.photoUrl}
                                alt="product"
                              />
                            </div>
                          </td>
                          <td className="p-2">
                            <a className="clamp-2 break-all font-bold" href="#">
                              {item?.name}
                            </a>
                          </td>
                          <td className="p-2">
                            <span className="font-bold text-primary-color">
                              {item?.brand}
                            </span>
                          </td>
                          <td className="p-2">
                            <div className="quantity inline-flex font-bold">
                              {item?.type}
                            </div>
                          </td>
                          <td className="p-2">
                            <span className="font-bold text-primary-color">
                              {item?.price} ৳
                            </span>
                          </td>
                          <td className="p-2">
                            <button
                              onClick={() => handedeleteCartPrdt(item?._id)}
                              className="tippy tippy-remove btn-delete transition-all-300 text-slate-400 hover:text-primary-color"
                            >
                              X
                            </button>
                            <ToastContainer />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="shopping-cart-empty  flex-col items-center justify-center gap-4 p-5">
            <i className="bi bi-cart-x text-8xl text-gray-200"></i>
            <p className="text-lg font-semibold">
              There are no products in the cart.
            </p>
            <NavLink
              className="btn-effect transition-all-300 flex items-center justify-center gap-2 rounded-lg bg-primary-color p-2"
              to="/product"
            >
              <span className="font-bold uppercase text-black">
                Go to the store
              </span>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

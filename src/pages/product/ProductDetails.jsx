import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const [cartdata, setCartdata] = useState([]);

  const product = useLoaderData();

  const { _id, name, photoUrl, description, price, brand, type, rating } =
    product;

  const desc = description?.split("\n");

  useEffect(() => {
    fetch("https://server-sr-brand-shop.vercel.app/cart")
      .then((res) => res.json())
      .then((data) => {
        setCartdata(data);
      });
  }, []);

  const handleAddtoCart = () => {
    const matchProduct = cartdata.find((product) => product._id === _id);

    if (matchProduct) {
      toast("This Product already exists.");
    } else {
      fetch("https://server-sr-brand-shop.vercel.app/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast("Product Added to Cart");
        });
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="product-details container mx-auto my-5 px-2 sm:px-8">
        <div className="grid grid-cols-12 gap-5 rounded-lg  p-2 xs:p-8">
          <div className="col-span-12 max-h-[500px] md:col-span-6">
            <div className="swiper swiper-top group relative flex items-center rounded-lg swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-5477c5a41d7b2dbe"
                aria-live="polite"
              >
                <div
                  className="swiper-slide swiper-slide-visible swiper-slide-active"
                  role="group"
                  aria-label="1 / 3"
                >
                  <div className="swiper-zoom-container">
                    <img src={photoUrl} alt={name} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="my-1 text-3xl font-bold">{name}</div>

            <div className="my-5 flex items-center justify-between gap-5">
              <div className="flex text-primary-color ">
                <span className="text-2xl font-semibold leading-7">
                  Price: {price}
                  {" ৳"}
                </span>
              </div>
            </div>
            <div className="mt-5 border-t border-gray-200 pt-5">
              <div>
                <b>Categories: </b>
                <span>{type}</span>
              </div>
            </div>
            <div className="mt-5 border-t border-gray-200 pt-5">
              <div>
                <b>Brand: </b>
                <span>{brand}</span>
              </div>
            </div>
            <div className="mt-5 border-t border-gray-200 pt-5">
              <div>
                <b>Rating: </b>
                <span>{rating}</span>
              </div>
            </div>

            <div className="my-4">
              <div className="clamp-5 break-all space-x-3">
                {/* <input
                  className="border-2 py-2 px-2 rounded-md w-20"
                  type="number"
                  name="cartqty"
                  id=""
                />{" "} */}
                <button
                  onClick={handleAddtoCart}
                  className="bg-success py-2 px-4 twct-white font-bold rounded-lg"
                >
                  Add to Cart
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>

          <div className="col-span-12">
            <div className="liner-container mb-5 flex border-b-2 border-[rgba(119,119,119,.17)]">
              <h1 className="mb-[-2px] inline-block border-b-2 border-primary-color pb-3 text-xl font-bold uppercase">
                Description
              </h1>
            </div>
            <div className="see-more relative pb-5">
              <div className="see-more-container gradient-bottom max-h-[220px] overflow-hidden">
                <div className="see-more-content">
                  <ul>
                    {desc?.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

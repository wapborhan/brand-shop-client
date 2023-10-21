import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="flex flex-col  font-poppins">
      <div className="w-full bg-green-700 dark:bg-gray-900 ">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0">
          <div className="flex flex-wrap py-10 -mx-3">
            <div className="w-full px-4 mb-11 md:w-1/2 lg:w-4/12 lg:mb-0 space-y-3">
              <a
                href="#"
                className="inline-block mb-4 text-xl font-bold text-gray-200 dark:text-gray-400"
              >
                About Company
              </a>

              <p className="text-base font-normal leading-6 text-gray-300 lg:w-64 dark:text-gray-400">
                SR Brand Shop has been founded on 1 October 2023. From then to
                now, SR Brand Shop has won the heart of many people and now is a
                country-wide renowned brand.
              </p>
            </div>
            <div className="w-full px-4 md:w-1/4 lg:w-2/12 mb-11 lg:mb-0">
              <h2 className="mb-4 text-xl font-bold text-gray-200 dark:text-gray-400">
                Quick Links{" "}
              </h2>
              <ul>
                <li className="flex items-center mb-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <NavLink
                    to="/"
                    className="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="flex items-center mb-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <NavLink
                    to="/about"
                    className="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="flex items-center mb-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <NavLink
                    to="/product"
                    className="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                  >
                    Product
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 md:w-1/4 lg:w-2/12  lg:mb-0">
              <h2 className="mb-4 text-xl font-bold text-gray-200 dark:text-gray-400">
                Features{" "}
              </h2>
              <ul>
                <li className="flex items-center mb-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <NavLink
                    to="/add-product"
                    className="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                  >
                    Add Products
                  </NavLink>
                </li>
                <li className="flex items-center mb-4 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <NavLink
                    to="/cart"
                    className="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                  >
                    Cart
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 lg:block hidden  mb-2 lg:mb-0 md:w-1/3 lg:w-4/12">
              <h2 className="mb-4 text-lg font-bold text-gray-200 dark:text-gray-400">
                Payment With{" "}
              </h2>
              <div className="flex items-center mt-4 ">
                <img
                  src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png"
                  alt=""
                  className="object-cover h-16 mr-2 w-26"
                />

                <img
                  src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png"
                  alt=""
                  className="object-cover h-16 mr-2 w-26"
                />

                <img
                  src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png"
                  alt=""
                  className="object-cover h-16 mr-2 w-26"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-gray-300 bg-green-900 dark:bg-gray-800 dark:text-gray-400">
        <span>© Copyright 2022 . SR Brand Shop All Rights Reserved</span>
      </div>
    </section>
  );
};

export default Footer;

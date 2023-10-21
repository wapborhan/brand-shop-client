import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <section className="bg-white max-w-screen mx-auto">
      <Slider {...settings}>
        <div>
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
                Samsung Galaxy S21
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
                Let's give a big hand to Galaxy S21 FE 5G, the newest member of
                the epic Galaxy S21 Series. We took what you love most and built
                the ultimate fan-inspired phone so you can experience your
                everyday passions to the absolute fullest. Our fastest chipset?
                Check. Pro-grade camera? You got it.
              </p>
              <NavLink
                to="/product"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg border-2 border-transparent bg-primary hover:bg-white hover:text-black hover:border-2 hover:border-gray-600"
              >
                Buy Now
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </NavLink>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src="https://i.ibb.co/NmH9M8N/phone-mockup.png"
                alt="mockup"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
                Samsung Galaxy A03
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
                Let's give a big hand to Galaxy S21 FE 5G, the newest member of
                the epic Galaxy S21 Series. We took what you love most and built
                the ultimate fan-inspired phone so you can experience your
                everyday passions to the absolute fullest. Our fastest chipset?
                Check. Pro-grade camera? You got it.
              </p>
              <NavLink
                to="/product"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg border-2 border-transparent bg-primary hover:bg-white hover:text-black hover:border-2 hover:border-gray-600"
              >
                Buy Now
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </NavLink>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src="https://i.ibb.co/tKhpGwZ/a03-core-002-500x500.webp"
                alt="mockup"
                className="w-9/12"
              />
            </div>
          </div>
        </div>
        {/* <div>
          <img src="/images/3.jpeg" alt="" />
        </div> */}
        <div>
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
                Asus Vivobook S15 S513EA
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
                Model: Vivobook S15 S513EA Processor: Intel Core i5-1135G7 (8M
                Cache, 2.40 GHz up to 4.20 GHz) RAM: 8GB DDR4, Storage: 512G SSD
                Display: 15.6" OLED FHD Features: Backlit Keyboard, Fingerprint
              </p>
              <NavLink
                to="/product"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg border-2 border-transparent bg-primary hover:bg-white hover:text-black hover:border-2 hover:border-gray-600"
              >
                Buy Now
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </NavLink>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src="https://i.ibb.co/Hd8fttq/vivobook-s15-s513ea-gold-01-500x500.webp"
                alt="mockup"
              />
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Banner;

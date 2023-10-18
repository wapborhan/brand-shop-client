const ProductDetails = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="product-details container mx-auto my-5 px-2 sm:px-8">
        <div className="grid grid-cols-12 gap-5 rounded-lg bg-white p-2 xs:p-8">
          <div className="col-span-12 max-h-[500px] md:col-span-6">
            <div className="swiper swiper-top group relative flex items-center rounded-lg swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-5477c5a41d7b2dbe"
                aria-live="polite"
              >
                <div
                  className="swiper-slide swiper-slide-visible swiper-slide-active"
                  // style="width: 566px; opacity: 1; transform: translate3d(0px, 0px, 0px);"
                  role="group"
                  aria-label="1 / 3"
                >
                  <div
                    className="swiper-zoom-container"
                    // style="transition-duration: 300ms; transform: translate3d(0px, 0px, 0px);"
                  >
                    <img
                      src="https://megabyte.andevfrontend.com/images/product/prod-1.jpg"
                      alt="product"
                      // style="transition-duration: 300ms; transform: translate3d(0px, 0px, 0px) scale(1);"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="my-1">
              <a
                className="clamp-2 transition-all-300 break-all text-2xl font-medium hover:text-primary-color"
                href="#"
              >
                Ryzen 5 3600x
              </a>
            </div>
            <div className="product-val-stock my-2 flex justify-between">
              <div className="flex">
                <i className="bi bi-star-fill flex text-base text-star"></i>
                <i className="bi bi-star-fill flex text-base text-star"></i>
                <i className="bi bi-star-fill flex text-base text-star"></i>
                <i className="bi bi-star-fill flex text-base text-star"></i>
                <i className="bi bi-star-fill flex text-base text-gray-200"></i>
              </div>
              <div className="ml-auto">
                <span className="rounded-md bg-green-300 px-2 py-1 text-xs font-bold uppercase text-white">
                  instock
                </span>
              </div>
            </div>
            <div className="my-5 flex items-center gap-5">
              <div className="flex rounded-lg bg-white px-3 py-2 text-primary-color shadow">
                <span className="text-sm">$</span>
                <span className="text-2xl font-semibold leading-7">37.00</span>
              </div>
              <div className="flex flex-col">
                <span className="text-md font-semibold uppercase text-green-400">
                  25% Off
                </span>
                <span className="prev-price text-sm text-primary-color line-through">
                  $50.00
                </span>
              </div>
            </div>
            <div className="my-4">
              <p className="clamp-5 break-all">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                cupiditate repellat magni exercitationem non, quaerat
                consequatur. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Earum cupiditate.
              </p>
            </div>

            <div className="mt-5 border-t border-gray-200 pt-5">
              <div>
                <b>Categories: </b>
                <span>
                  <a href="#" className="text-zinc-500">
                    Hardware
                  </a>
                  ,
                  <a href="#" className="text-zinc-500">
                    Processors
                  </a>
                </span>
              </div>
              <div className="flex gap-2">
                <b>Share:</b>
                <div className="flex items-center gap-[10px]">
                  <a href="#">
                    <i className="bi bi-facebook transition-all-300 flex text-zinc-500 hover:text-primary-color"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-twitter transition-all-300 flex text-zinc-500 hover:text-primary-color"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-whatsapp transition-all-300 flex text-zinc-500 hover:text-primary-color"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-link-45deg transition-all-300 flex text-zinc-500 hover:text-primary-color"></i>
                  </a>
                </div>
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
                  <p>
                    Lorem Unde sapiente quisquam placeat excepturi sunt mollitia
                    vero cumque, aliquam libero ipsum dolor sit amet consectetur
                    adipisicing elit. Unde sapiente quisquam placeat excepturi
                    sunt mollitia vero cumque, aliquam libero veniam odit
                    inventore totam quis! Hic quis perferendis quaerat enim
                    magni.
                  </p>
                  <p>
                    Lorem Unde sapiente quisquam placeat excepturi sunt mollitia
                    vero cumque, aliquam libero ipsum dolor sit amet consectetur
                    adipisicing elit. Repellat culpa quidem reprehenderit dolor
                    aperiam, eius consequatur est deserunt. Nisi nesciunt
                    repellendus dolorem quam obcaecati atque animi quas debitis
                    qui harum.
                  </p>
                  <p>
                    Lorem Unde sapiente quisquam placeat excepturi sunt mollitia
                    vero cumque, aliquam libero ipsum, dolor sit amet
                    consectetur adipisicing elit. Aut, veritatis. Ea
                    voluptatibus eveniet, quam dicta quisquam repellat maxime
                    libero. Enim omnis quis, cumque facilis doloremque doloribus
                    tempore expedita quia accusantium.
                  </p>
                  <p>
                    Lorem Unde sapiente quisquam placeat excepturi sunt mollitia
                    vero cumque, aliquam libero ipsum dolor sit amet consectetur
                    adipisicing elit. Unde sapiente quisquam placeat excepturi
                    sunt mollitia vero cumque, aliquam libero veniam odit
                    inventore totam quis! Hic quis perferendis quaerat enim
                    magni.
                  </p>
                  <p>
                    Lorem Unde sapiente quisquam placeat excepturi sunt mollitia
                    vero cumque, aliquam libero ipsum dolor sit amet consectetur
                    adipisicing elit. Repellat culpa quidem reprehenderit dolor
                    aperiam, eius consequatur est deserunt. Nisi nesciunt
                    repellendus dolorem quam obcaecati atque animi quas debitis
                    qui harum.
                  </p>
                  <p>
                    Lorem Unde sapiente quisquam placeat excepturi sunt mollitia
                    vero cumque, aliquam libero ipsum, dolor sit amet
                    consectetur adipisicing elit. Aut, veritatis. Ea
                    voluptatibus eveniet, quam dicta quisquam repellat maxime
                    libero. Enim omnis quis, cumque facilis doloremque doloribus
                    tempore expedita quia accusantium.
                  </p>
                </div>
              </div>
              <button className="btn-see-more absolute bottom-0 z-10 flex w-full justify-center hover:text-primary-color">
                <i className="bi bi-chevron-compact-down text-stroke-medium transition-all-300 flex text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

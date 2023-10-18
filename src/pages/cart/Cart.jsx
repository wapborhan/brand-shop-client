const Cart = () => {
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
        <div className="shopping-cart-empty hidden flex-col items-center justify-center gap-4 p-5">
          <i className="bi bi-cart-x text-8xl text-gray-200"></i>
          <p className="text-lg font-semibold">
            There are no products in the cart.
          </p>
          <a
            className="btn-effect transition-all-300 flex items-center justify-center gap-2 rounded-lg bg-primary-color p-2"
            href="#"
          >
            <span className="font-bold uppercase text-white">
              Go to the store
            </span>
          </a>
        </div>

        <form
          className="grid grid-cols-12 gap-5 rounded-lg bg-white p-2 xs:p-5"
          action="#"
        >
          <div className="col-span-12 lg:col-span-8">
            <div className="transition-all-300 flex w-full flex-col gap-2 p-2 hover:bg-gray-100 xs:flex-row lg:hidden">
              <div className="content flex items-center">
                <div className="flex items-center">
                  <div className="h-[100px] w-[100px] min-w-[100px] overflow-hidden rounded-lg border">
                    <a href="#">
                      <img
                        className="h-full w-full object-cover"
                        src="images/product/prod-1.jpg"
                        alt="product"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-2 sm:flex-row">
                <div className="flex w-full flex-col gap-2">
                  <div className="content">
                    <div className="flex flex-col">
                      <span className="text-xs font-light xs:hidden">
                        Product Name
                      </span>
                      <a className="clamp-2 break-all font-bold" href="#">
                        Ryzen 5 3600x
                      </a>
                    </div>
                  </div>
                  <div className="content">
                    <div className="flex flex-col">
                      <span className="text-xs font-light lg:hidden">
                        Unit Price
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary-color">
                          $37.00
                        </span>
                        <small className="text-xs text-primary-color line-through">
                          $50.00
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="flex flex-col">
                      <span className="text-xs font-light">Subtotal</span>
                      <span className="font-bold text-primary-color">
                        $37.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content flex items-center">
                  <div className="flex items-center gap-x-4 gap-y-1">
                    <div className="flex flex-col">
                      <span className="text-xs font-light">Quantity</span>
                      <div className="quantity inline-flex rounded-lg bg-white shadow">
                        <input
                          className="quantity-value input-number w-12 border-none bg-transparent p-1 text-center text-lg text-gray-400 focus:border-none focus:ring-0"
                          type="number"
                          value="0"
                        />
                        <div className="flex w-5 flex-col justify-between">
                          <button
                            className="quantity-btn increment text-primary-color"
                            type="button"
                          >
                            <i className="bi bi-caret-up-fill"></i>
                          </button>
                          <button
                            className="quantity-btn decrement text-primary-color"
                            type="button"
                          >
                            <i className="bi bi-caret-down-fill"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="tippy tippy-remove transition-all-300 cursor-pointer text-slate-400 hover:text-primary-color">
                      <i className="bi bi-trash-fill pointer-events-none inline text-xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="transition-all-300 flex w-full flex-col gap-2 p-2 hover:bg-gray-100 xs:flex-row lg:hidden">
              <div className="content flex items-center">
                <div className="flex items-center">
                  <div className="h-[100px] w-[100px] min-w-[100px] overflow-hidden rounded-lg border">
                    <a href="#">
                      <img
                        className="h-full w-full object-cover"
                        src="images/cards/mousepad.jpg"
                        alt="product"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-2 sm:flex-row">
                <div className="flex w-full flex-col gap-2">
                  <div className="content">
                    <div className="flex flex-col">
                      <span className="text-xs font-light xs:hidden">
                        Product Name
                      </span>
                      <div>
                        <a className="clamp-2 break-all font-bold" href="#">
                          Mousepad Hyperx Fury S Pro Speed
                        </a>
                        <small className="block">
                          <span className="font-semibold">Size:</span> XL
                        </small>
                        <small className="block">
                          <span className="font-semibold">Color:</span> Black
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="flex flex-col">
                      <span className="text-xs font-light lg:hidden">
                        Unit Price
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary-color">
                          $37.00
                        </span>
                        <small className="text-xs text-primary-color line-through">
                          $50.00
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="flex flex-col">
                      <span className="text-xs font-light">Subtotal</span>
                      <span className="font-bold text-primary-color">
                        $37.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content flex items-center">
                  <div className="flex items-center gap-x-4 gap-y-1">
                    <div className="flex flex-col">
                      <span className="text-xs font-light">Quantity</span>
                      <div className="quantity inline-flex rounded-lg bg-white shadow">
                        <input
                          className="quantity-value input-number w-12 border-none bg-transparent p-1 text-center text-lg text-gray-400 focus:border-none focus:ring-0"
                          type="number"
                          value="0"
                        />
                        <div className="flex w-5 flex-col justify-between">
                          <button
                            className="quantity-btn increment text-primary-color"
                            type="button"
                          >
                            <i className="bi bi-caret-up-fill"></i>
                          </button>
                          <button
                            className="quantity-btn decrement text-primary-color"
                            type="button"
                          >
                            <i className="bi bi-caret-down-fill"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="tippy tippy-remove transition-all-300 cursor-pointer text-slate-400 hover:text-primary-color">
                      <i className="bi bi-trash-fill pointer-events-none inline text-xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden overflow-x-auto lg:block">
              <table className="w-full min-w-[800px] text-left">
                <thead>
                  <tr>
                    <th></th>
                    <th className="p-2">Product Name</th>
                    <th className="p-2">Unit Price</th>
                    <th className="p-2">Quantity</th>
                    <th className="p-2">Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-100">
                    <td className="p-2">
                      <div className="h-[100px] w-[100px] min-w-[100px] overflow-hidden rounded-lg border">
                        <a href="#">
                          <img
                            className="h-full w-full object-cover"
                            src="images/product/prod-1.jpg"
                            alt="product"
                          />
                        </a>
                      </div>
                    </td>
                    <td className="p-2">
                      <a className="clamp-2 break-all font-bold" href="#">
                        Ryzen 5 3600x
                      </a>
                    </td>
                    <td className="p-2">
                      <span className="font-bold text-primary-color">
                        $37.00
                      </span>
                    </td>
                    <td className="p-2">
                      <div className="quantity inline-flex rounded-lg bg-white shadow">
                        <input
                          className="quantity-value input-number w-12 border-none bg-transparent p-1 text-center text-lg text-gray-400 focus:border-none focus:ring-0"
                          type="number"
                          value="0"
                        />
                        <div className="flex w-5 flex-col justify-between">
                          <button
                            className="quantity-btn increment text-primary-color"
                            type="button"
                          >
                            <i className="bi bi-caret-up-fill"></i>
                          </button>
                          <button
                            className="quantity-btn decrement text-primary-color"
                            type="button"
                          >
                            <i className="bi bi-caret-down-fill"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <span className="font-bold text-primary-color">
                        $37.00
                      </span>
                    </td>
                    <td className="p-2">
                      <button className="tippy tippy-remove btn-delete transition-all-300 text-slate-400 hover:text-primary-color">
                        <i className="bi bi-trash-fill pointer-events-none inline text-xl"></i>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="p-2">
                      <div className="h-[100px] w-[100px] min-w-[100px] overflow-hidden rounded-lg border">
                        <a href="#">
                          <img
                            className="h-full w-full object-cover"
                            src="images/cards/mousepad.jpg"
                            alt="product"
                          />
                        </a>
                      </div>
                    </td>
                    <td className="p-2">
                      <div>
                        <a className="clamp-2 break-all font-bold" href="#">
                          Mousepad Hyperx Fury S Pro Speed
                        </a>
                        <small className="block">
                          <span className="font-semibold">Size:</span> XL
                        </small>
                        <small className="block">
                          <span className="font-semibold">Color:</span> Black
                        </small>
                      </div>
                    </td>
                    <td className="p-2">
                      <span className="font-bold text-primary-color">
                        $37.00
                      </span>
                    </td>
                    <td className="p-2">
                      <div className="quantity inline-flex rounded-lg bg-white shadow">
                        <input
                          className="quantity-value input-number w-12 border-none bg-transparent p-1 text-center text-lg text-gray-400 focus:border-none focus:ring-0"
                          type="number"
                          value="0"
                        />
                        <div className="flex w-5 flex-col justify-between">
                          <button
                            className="quantity-btn increment text-primary-color"
                            type="button"
                          >
                            <i className="bi bi-caret-up-fill"></i>
                          </button>
                          <button
                            className="quantity-btn decrement text-primary-color"
                            type="button"
                          >
                            <i className="bi bi-caret-down-fill"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <span className="font-bold text-primary-color">
                        $37.00
                      </span>
                    </td>
                    <td className="p-2">
                      <button className="tippy tippy-remove btn-delete transition-all-300 text-slate-400 hover:text-primary-color">
                        <i className="bi bi-trash-fill pointer-events-none inline text-xl"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="mb-5">
              <span className="text-lg font-semibold">Discount Coupon</span>
              <div className="my-3 flex">
                <input
                  className="input-rounded-l"
                  type="text"
                  placeholder="Your code here"
                />
                <button
                  className="btn-view-shopping-cart btn-effect transition-all-300 flex min-w-max items-center justify-center rounded-r-lg bg-primary-color px-3"
                  type="submit"
                >
                  <span className="font-bold uppercase text-white">Apply</span>
                </button>
              </div>
            </div>
            <div className="rounded-lg border-2 p-4">
              <span className="mb-10 inline-block text-center text-lg font-bold">
                Summary of your purchase:
              </span>
              <div className="py-4">
                <div className="my-2 flex justify-between">
                  <span>Subtotal:</span>
                  <span>$37.00</span>
                </div>
                <div className="my-2 flex justify-between">
                  <span>Vat:</span>
                  <span>$22.72</span>
                </div>
                <div className="my-2 flex justify-between">
                  <span>Shipping:</span>
                  <span>$0.00</span>
                </div>
              </div>
              <div className="flex justify-between border-t-2 border-gray-200 py-4 text-xl font-bold uppercase">
                <span>Total:</span>
                <span>$59.72</span>
              </div>
              <button
                className="btn-view-shopping-cart btn-effect transition-all-300 flex w-full items-center justify-center rounded-lg bg-primary-color p-2"
                type="submit"
              >
                <span className="font-bold uppercase text-white">Continue</span>
              </button>
            </div>
            <a
              className="transition-all-300 my-5 flex items-center justify-center gap-2 hover:text-primary-color"
              href="shopping-cart.html"
            >
              <i className="bi bi-arrow-repeat flex text-xl"></i>
              <span>Update Cart</span>
            </a>
            <a
              className="transition-all-300 my-5 flex items-center justify-center gap-2 hover:text-primary-color"
              href="shopping-cart.html"
            >
              <i className="bi bi-cart-plus flex text-xl"></i>
              <span>Add more products</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cart;

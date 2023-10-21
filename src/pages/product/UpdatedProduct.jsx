import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdatedProduct = () => {
  const updateProduct = useLoaderData();

  const { _id, name, photoUrl, description, rating, price, brand, type } =
    updateProduct;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const photoUrl = form.photo.value;

    const updateData = {
      name,
      brand,
      type,
      price,
      rating,
      description,
      photoUrl,
    };

    fetch(`https://server-sr-brand-shop.vercel.app/product/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast("Product Updated");
        } else if (data.modifiedCount === 0) {
          toast("Nothing Modified");
        }
      });
  };
  return (
    <div className="container max-w-6xl mx-auto">
      <div className="sect  py-4 w-full mx-auto">
        <div className="content space-y-5">
          <h2 className="text-center text-3xl"> Update Product</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form  lg:mx-40 mx-5 lg:my-10 space-y-4">
            <div className="frist flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Product Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter Product Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold"> Brand Name</span>
                </label>
                <input
                  type="text"
                  name="brand"
                  defaultValue={brand}
                  placeholder="Enter Brand Name"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="second flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Product Type </span>
                </label>
                <input
                  type="text"
                  name="type"
                  defaultValue={type}
                  placeholder="Enter Product Type"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Product Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  placeholder="Enter Product Price"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="third flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Product Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  placeholder="Enter Product Rating"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photoUrl}
                  placeholder="Enter Product Photo URL"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="third flex gap-5 justify-between">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">
                    {" "}
                    Short description
                  </span>
                </label>
                <textarea
                  type="text"
                  name="description"
                  defaultValue={description}
                  placeholder="Enter Short description"
                  className="input input-bordered w-full h-40"
                />
              </div>
            </div>
            <div className="submit">
              <input
                type="submit"
                value="Update Product"
                className="rounded-lg font-h2 border-2-[#331A15] bg-[#D2B48C] w-full p-3 font-bold text-[18px] text-[#331A15] cursor-pointer"
              />
              <ToastContainer />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatedProduct;

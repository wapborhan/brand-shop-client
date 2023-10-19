import { NavLink } from "react-router-dom";

const Brands = ({ brand }) => {
  const { brand_name, image } = brand;
  return (
    <NavLink to={`/brand/${brand_name}`}>
      <div className="card border-2 p-5 flex justify-center items-center space-y-3">
        <img src={image} className="w-20" alt="" />
        <h2>{brand_name}</h2>
      </div>
    </NavLink>
  );
};

export default Brands;

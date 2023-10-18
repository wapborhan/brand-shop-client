import { NavLink } from "react-router-dom";

const Brands = ({ brand }) => {
  const { name, image } = brand;
  return (
    <NavLink to={`/brand/${name}`}>
      <div className="card border-2 p-5 flex justify-center items-center space-y-3">
        <img src={image} className="w-20" alt="" />
        <h2>{name}</h2>
      </div>
    </NavLink>
  );
};

export default Brands;

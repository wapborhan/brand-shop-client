import { NavLink, useNavigate } from "react-router-dom";
import CartList from "./CartList";
import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContex);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/product">Product</NavLink>
      </li>
      <li>
        <NavLink to="/add-product">Add Product</NavLink>
      </li>{" "}
      <li>
        <NavLink to="/cart">Cart</NavLink>
      </li>{" "}
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 border-b-2">
        <div className="container max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <a className=" normal-case text-xl">SR Brand Shop</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
          </div>
          <div className="navbar-end flex justify-end items-center gap-3">
            {/* <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle border-gray-300"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-80 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <CartList />
                  <CartList />
                  <CartList />
                  <div className="card-actions">
                    <NavLink to="/cart" className="btn btn-primary btn-block">
                      View All
                    </NavLink>
                  </div>
                </div>
              </div>
            </div> */}

            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {user?.photoURL ? (
                      <img src={user?.photoURL} className="w-10" alt="" />
                    ) : (
                      <img
                        src="https://i.ibb.co/mCZdpyy/no-image.jpg"
                        className="w-10"
                        alt=""
                      />
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <NavLink to="/profile" className="justify-between">
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/settings">Settings</NavLink>
                  </li>
                  <li>
                    <a onClick={handleLogout}>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <NavLink to="/signup">
                  <button className="btn btn-outline btn-sm btn-success">
                    Register
                  </button>
                </NavLink>
                <NavLink to="signin">
                  <button className="btn btn-outline btn-sm btn-error">
                    Login
                  </button>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

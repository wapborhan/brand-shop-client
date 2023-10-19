import { NavLink } from "react-router-dom";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";

const SIgnUp = () => {
  return (
    <div className="sign-up-section container mx-auto my-5 px-2 sm:px-8">
      <div className="mx-auto text-center max-w-[500px] rounded-lg bg-white p-5 shadow-lg">
        <div className="my-5 text-3xl font-bold">Create Account</div>
        <form action="#">
          <div className="flex flex-col gap-4">
            <div className="relative flex h-[40px]  items-center">
              <i className="bi bi-envelope absolute ml-2 flex text-[24px] text-gray-400">
                <FaEnvelope />
              </i>
              <input
                className="input border-2 border-gray-700 pl-10"
                type="text"
                placeholder="Email"
                required=""
              />
            </div>
            <div className="relative flex h-[40px] items-center">
              <i className="bi bi-lock absolute ml-2 flex text-[24px] text-gray-400">
                <FaLock />
              </i>
              <input
                className="input border-2 border-gray-700 pl-10"
                type="password"
                placeholder="Password"
                required=""
              />
            </div>

            <button
              className="btn-effect transition-all-300 h-full w-full rounded-lg bg-primary hover:bg-info p-2"
              type="submit"
            >
              <span className="font-bold uppercase text-white">Sign Up</span>
            </button>
          </div>
        </form>

        <div className="flex flex-col flex-wrap justify-center gap-5 mt-5 sm:flex-row">
          <button className="transition-all-300 flex flex-auto gap-4 h-[50px] w-fill items-center justify-center rounded-lg bg-success hover:bg-primary text-white font-bold">
            <i className="bi bi-facebook flex text-3xl text-white">
              <FaGoogle />
            </i>{" "}
            Create Account With Google
          </button>
        </div>
        <div className="mt-5 flex flex-row items-center justify-center border-t border-t-gray-400 pt-5">
          <span>Do you already have an account?</span>
          <NavLink
            to="/signin"
            className="  text-black font-bold ml-4 underline"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SIgnUp;

import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const { loginUser, createUserByGoogle } = useContext(AuthContex);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          navigate(location?.state ? location.state : "/settings");
        }
        toast("Successfully logged in");
        form.reset();
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  const handleGoogleLogin = () => {
    createUserByGoogle()
      .then((result) => {
        const user = result.user;
        if (user) {
          navigate(location?.state ? location.state : "/profile");
        }
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  return (
    <div className="sign-up-section container mx-auto my-5 px-2 sm:px-8">
      <div className="mx-auto text-center max-w-[500px] rounded-lg bg-white p-5 shadow-lg">
        <div className="my-5 text-3xl font-bold">Log In</div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="relative flex h-[40px]  items-center">
              <i className="bi bi-envelope absolute ml-2 flex text-[24px] text-gray-400">
                <FaEnvelope />
              </i>
              <input
                className="input border-2 border-gray-700 pl-10"
                type="email"
                placeholder="Email"
                name="email"
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
                name="password"
              />
            </div>

            <button
              className="btn-effect transition-all-300 h-full w-full rounded-lg bg-primary hover:bg-info p-2"
              type="submit"
            >
              <span className="font-bold uppercase text-white">Sign In</span>
            </button>
          </div>
          <ToastContainer />
        </form>

        <div className="flex flex-col flex-wrap justify-center gap-5 mt-5 sm:flex-row">
          <button
            onClick={handleGoogleLogin}
            className="transition-all-300 flex flex-auto gap-4 h-[50px] w-fill items-center justify-center rounded-lg bg-success hover:bg-primary text-white font-bold"
          >
            <i className="bi bi-facebook flex text-3xl text-white">
              <FaGoogle />
            </i>{" "}
            Login With Google
          </button>
        </div>
        <div className="mt-5 flex flex-row items-center justify-center border-t border-t-gray-400 pt-5">
          <span>Don't have a account?</span>
          <NavLink
            to="/signup"
            className="  text-black font-bold ml-4 underline"
          >
            Create One
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

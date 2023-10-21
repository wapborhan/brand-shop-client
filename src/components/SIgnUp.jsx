import { NavLink } from "react-router-dom";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SIgnUp = () => {
  const { createUser } = useContext(AuthContex);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      toast("Password is less than 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast("Password don't have a capital letter");

      return;
    } else if (!/[!@#$%^&*()_+[\]{}|;:'"<>,.?/~`]/.test(password)) {
      toast("Password don't have a special character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;

        toast(errorMessage);
      });
  };

  return (
    <div className="sign-up-section container mx-auto my-5 px-2 sm:px-8">
      <div className="mx-auto text-center max-w-[500px] rounded-lg bg-white p-5 shadow-lg">
        <div className="my-5 text-3xl font-bold">Create Account</div>
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
              <span className="font-bold uppercase text-white">Sign Up</span>
            </button>
          </div>
          <ToastContainer />
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

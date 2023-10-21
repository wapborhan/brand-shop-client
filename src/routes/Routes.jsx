import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../components/ErrorPage";
import HomePage from "../pages/HomePage";
import AddProduct from "../pages/product/AddProduct";
import Product from "../pages/product/Product.jsx";
import ProductDetails from "../pages/product/ProductDetails";
import BrandProducts from "../pages/brands/BrandProducts";
import SIgnUp from "../components/SIgnUp";
import SignIn from "../components/SignIn";
import Cart from "../pages/cart/Cart";
import About from "../pages/About";
import Profile from "../pages/profile/Profile";
import UpdateProfile from "../pages/profile/UpdateProfile";
import PrivateRoutes from "./PrivateRoutes";
import UpdatedProduct from "../pages/product/UpdatedProduct";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("https://server-sr-brand-shop.vercel.app/products"),
      },
      {
        path: "/signup",
        element: <SIgnUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoutes>
            <AddProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: "/product",
        element: <Product />,
        loader: () => fetch("https://server-sr-brand-shop.vercel.app/products"),
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://server-sr-brand-shop.vercel.app/product/${params.id}`),
      },
      {
        path: "/update-product/:id",
        element: (
          <PrivateRoutes>
            <UpdatedProduct />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://server-sr-brand-shop.vercel.app/product/${params.id}`),
      },
      {
        path: "/brand/:name",
        element: <BrandProducts />,
        loader: ({ params }) =>
          fetch(
            `https://server-sr-brand-shop.vercel.app/brands/${params.name}`
          ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/settings",
        element: (
          <PrivateRoutes>
            <UpdateProfile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default routes;

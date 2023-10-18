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

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("/data.json"),
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
        element: <AddProduct />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/1",
        element: <ProductDetails />,
      },
      {
        path: "/brand/apple",
        element: <BrandProducts />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default routes;

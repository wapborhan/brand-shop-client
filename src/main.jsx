import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);

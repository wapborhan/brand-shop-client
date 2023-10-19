import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContex);
  const location = useLocation();

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/signin" />;
};

export default PrivateRoutes;

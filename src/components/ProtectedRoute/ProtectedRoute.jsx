import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isSignedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isSignedIn, children }) => {
  return isSignedIn ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;

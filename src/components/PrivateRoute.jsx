import { Navigate } from "react-router";

export default function PrivateRoute(props) {
  const { children } = props;
  const email = localStorage.getItem("email");
  return email ? children : <Navigate to="/login" replace />;
}

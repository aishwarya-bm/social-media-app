import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function RequiresAuth({ children }) {
  const { isLoggedIn } = useSelector(store => store.auth);
  return <>{isLoggedIn ? children : <Navigate to="/login" replace />}</>;
}

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "../pages/Login";
import Dashboard from "../layouts/Dashboard";
import SingleInvite from "../pages/SingleInvite";

const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );

  // checking localStorage every refresh
  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(localStorage.getItem("auth") === "true");
    };

    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to={isAuthenticated ? "/single-invite" : "/login"} />
          }
        />
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/single-invite" />
            ) : (
              <Login setAuth={setIsAuthenticated} />
            )
          }
        />

        {/* Protected Routes */}
        <Route
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        >
          <Route path="/single-invite" element={<SingleInvite />} />
        </Route>

        {/* Catch-All Route if you redirect and random route */}
        <Route
          path="*"
          element={<ProtectedRedirect isAuthenticated={isAuthenticated} />}
        />
      </Routes>
    </Router>
  );
};

// go back to last visited route if authenticated, otherwise to login logic
const ProtectedRedirect = ({ isAuthenticated }) => {
  const location = useLocation();
  return isAuthenticated ? (
    <Navigate to="/single-invite" />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default AppRoutes;

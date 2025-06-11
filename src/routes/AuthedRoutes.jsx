import { Route, Routes, useNavigate } from "react-router";
import { Dashboard } from "../pages/Dashboard/Dashboard.page";
import { useEffect } from "react";

const AuthedRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<h1>Profile</h1>} />
    </Routes>
  );
};

export { AuthedRoutes };

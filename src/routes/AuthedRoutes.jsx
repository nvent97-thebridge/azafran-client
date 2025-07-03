import { Route, Routes, Navigate } from "react-router";
import { Dashboard } from "../pages/Dashboard/Dashboard.page";
import { Ingredients } from "../pages/Ingredients/Ingredients.jsx";

const AuthedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<h1>Profile</h1>} />
      <Route path="/pantry" element={<Ingredients />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export { AuthedRoutes };

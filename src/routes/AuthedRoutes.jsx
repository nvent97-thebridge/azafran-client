import { Route, Routes } from "react-router";
import { Dashboard } from "../pages/Dashboard/Dashboard.page";

const AuthedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<h1>Profile</h1>} />
    </Routes>
  );
};

export { AuthedRoutes };

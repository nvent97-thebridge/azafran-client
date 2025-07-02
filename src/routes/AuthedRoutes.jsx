import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard.page";
import PantryPage from "../pages/Pantry/Pantry.page";

export function AuthedRoutes() {
    return (
        <Routes>
            {/* Ruta raíz redirige a dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pantry" element={<PantryPage />} />
            <Route path="/profile" element={<h1>Profile</h1>} />
            {/* Cualquier otra ruta vuelve a dashboard */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
    );
}

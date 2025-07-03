import React from "react";
import { Routes, Route, Navigate } from "react-router";
import { Dashboard } from "../pages/Dashboard/Dashboard.page";
import { Ingredient } from "../components/Ingredient/Ingredient"
import { PantryPage } from "../pages/Pantry/Pantry.page";
import { useEffect } from "react";

export function AuthedRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ingredient" element={<Ingredient/>} />
            <Route path="/pantry" element={<PantryPage />} />
            <Route path="/profile" element={<h1>Profile</h1>} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
    );
}

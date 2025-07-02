import React from "react";
import "./Ingredient.css";

export default function Ingredient({ name }) {
    return <div className="ingredient-card">{name}</div>;
}

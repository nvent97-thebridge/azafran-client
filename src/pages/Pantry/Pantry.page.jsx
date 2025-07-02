import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Ingredient from "../../components/Ingredient/Ingredient";
import "./Pantry.page.css";

export default function PantryPage() {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        fetch("http://localhost:8080/ingredients", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Error al cargar ingredientes");
                return res.json();
            })
            .then((data) => setIngredients(data))
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div className="pantry-wrapper">
            <div className="pantry-card">
                <div className="pantry-header">
                    <h1 className="pantry-title">Pantry</h1>
                    <Button onClick={() => {}}>+ Ingredient</Button>
                </div>

                <div className="pantry-grid">
                    {ingredients.map((ing) => (
                        <Ingredient key={ing.id} name={ing.name} />
                    ))}
                </div>

                <div className="pantry-footer">
                    <Button onClick={() => {}}>Create recipe</Button>
                </div>
            </div>
        </div>
    );
}

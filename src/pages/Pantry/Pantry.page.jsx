import { useEffect, useState } from "react";
import { Ingredient } from "../../components/Ingredient/Ingredient";
import { Button } from "../../components/Button/Button";
import "./Pantry.page.css";

const PantryPage = () => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        fetch("http://localhost:8080/ingredients", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: accessToken,
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Error loading ingredients");
                return res.json();
            })
            .then((data) => setIngredients(data))
            .catch(console.error);
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
};

export { PantryPage };

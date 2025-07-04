import React, { useEffect, useState } from "react";
import { fetchUserRecipes } from "../../services/recipes";
import "./RecipesPage.css";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    fetchUserRecipes(token)
      .then(setRecipes)
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <div className="recipes-wrapper">
        <p className="recipes-error">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="recipes-wrapper">
      <div className="recipes-card">
        <div className="recipes-header">
          <h1 className="recipes-title">My Recipes</h1>
        </div>
        <div className="recipes-list">
          {recipes.length === 0 ? (
            <p className="recipes-loading">Loading recipes…</p>
          ) : (
            recipes.map((r) => (
              <div key={r.id} className="recipe-item">
                <h2 className="recipe-title">{r.title}</h2>
                <p className="recipe-description">{r.description}</p>
                <p className="recipe-ingredients">
                  <strong>Ingredients:</strong> {r.ingredients}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export { RecipesPage };

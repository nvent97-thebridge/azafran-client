import { useEffect, useState } from "react";
import { Ingredient } from "../../components/molecules/Ingredient/Ingredient";
import { Button } from "../../components/atom/Button/Button";
import { ModalBase } from "../../components/molecules/Modal/Modal";
import { Input } from "../../components/atom/Input/Input";
import { Flex } from "antd";
import "./Pantry.page.css";

const PantryPage = () => {
  const [ingredients, setIngredients] = useState([]);
  const [showAddIngredientModal, setShowAddIngredientModal] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
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

          <Button
            className="btn-primary"
            onClick={() => {
              setShowAddIngredientModal(true);
            }}
          >
            + Ingredient
          </Button>
        </div>
        <div className="pantry-grid">
          {ingredients.map((ing) => (
            <Ingredient key={ing.id} name={ing.name} />
          ))}
        </div>
        <div className="pantry-footer">
          <Button className="btn-primary" onClick={() => {}}>
            Create recipe
          </Button>
        </div>
        {showAddIngredientModal && (
          <ModalBase
            open={showAddIngredientModal}
            onClose={() => setShowAddIngredientModal(false)}
            title="Add Ingredient"
            maxWidth={600}
          >
            <Input type="text" children="Insert ingredient name" />
            <Flex horizontal gap={10}>
              <Button className="btn-primary" children="Save" />
              <Button
                className="btn-secondary"
                onClick={() => setShowAddIngredientModal(false)}
                children="Cancel"
              />
            </Flex>
          </ModalBase>
        )}
      </div>
    </div>
  );
};

export { PantryPage };

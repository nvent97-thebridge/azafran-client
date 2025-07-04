import "./Ingredient.css";
import ingredientIcon from "../../../assets/ingredienticon.svg";
import { useState } from "react";

const Ingredient = ({ name, quantity, unit }) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <button
      className={`ingredient-card ${selected ? "ingredient-card-selected" : ""}`}
      onClick={handleSelect}
    >
      <div className="ingredient-card-icon">
        <img src={ingredientIcon} alt="Icon of ingredient" />
      </div>
      <div className="ingredient-card-info">
        <h4>{name}</h4>
        {quantity ? <h5>{quantity} left</h5> : unit ? <h5>{unit} left</h5> : ""}
      </div>
    </button>
  );
};

export { Ingredient };

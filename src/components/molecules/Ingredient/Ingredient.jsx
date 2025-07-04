import "./Ingredient.css";
import ingredientIcon from "../../../assets/ingredienticon.svg";

const Ingredient = ({ name, quantity, unit }) => (
  <div className="ingredient-card">
    <div className="ingredient-card-icon">
      <img src={ingredientIcon} alt="Icon of ingredient" />
    </div>
    <div className="ingredient-card-info">
      <h4>{name}</h4>
      {quantity ? <h5>{quantity} left</h5> : unit ? <h5>{unit} g left</h5> : ""}
    </div>
  </div>
);

export { Ingredient };

import { useState, useEffect, } from "react";
import './Ingredients-pretty.css';

const Ingredients_pretty = ( {name = "Potatoe", quantity = 1} ) => {

    const [getquantity, setquantity] = useState(quantity);

  const addIngredient = () => {
    setquantity( getquantity + 1);
  };

  return (
      <main className="main_ingredient">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5450/5450088.png"
          alt="ingredients-image"
          onClick={ addIngredient }
        />
        <p> {name} </p>
        <p> Quantity: <span>{getquantity}</span> </p>
      </main>
  );
};

export { Ingredients_pretty };

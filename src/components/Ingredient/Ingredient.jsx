import { useState, useEffect } from "react";
import { Flex, Typography } from "antd";
import { useNavigate } from "react-router-dom";
//import { DashboardNav } from "../../pages/DashboardNav/DashboardNav"
const { Paragraph } = Typography;

const Ingredient = ({ name, handleButtonClick }) => {
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    fetch("http://localhost:8080/ingredients", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: accessToken,
      },
    }).then((res) => res.json())
      .then((data) => {
        setIngredients(data);
        console.log(data)
      })
  }, [])

  return (
    <>
      <Flex
        justify="center"
        vertical gap="5px"
        align="center"
        style={{
          border: "1px solid black",
          borderRadius: "8px",
          padding: "5px",
        }}>
        <p>Ingredient</p>
        {ingredients.map((ingredient, index) => {
          return (<Paragraph key={index}>{ingredient.name}</Paragraph>
          );
        })}
        {/*<button onClick={handleButtonClick}>Algo</button>*/}
      </Flex>
    </>
  )
}

import "./Ingredient.css";

const Ingredient = ({ name }) => <div className="ingredient-card">{name}</div>;


export { Ingredient }
import { useEffect, useState } from "react";
import { Flex, Typography } from "antd";
import { Ingredient } from "../../components/Ingredient/Ingredient";
const { Title } = Typography;

const Dashboard = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    fetch("http://localhost:8080/ingredients", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: accessToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIngredients(data);
      });
  }, []);

  return (
    <Flex vertical gap={"5px"}>
      <Title>Dashboard</Title>
      {ingredients.map((ingredient, index) => {
        return (
          <Ingredient
            name={ingredient.name}
            key={index}
          />
        );
      })}
    </Flex>
  );
};

export { Dashboard };

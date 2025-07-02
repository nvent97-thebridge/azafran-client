import React, { useEffect, useState } from "react";
import { Flex, Typography } from "antd";
import Ingredient from "../../components/Ingredient/Ingredient";
const { Title } = Typography;

export default function Dashboard() {
    const [ingredients, setIngredients] = useState([]);

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
                if (!res.ok) throw new Error("Error al cargar ingredientes");
                return res.json();
            })
            .then((data) => {
                setIngredients(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <Flex direction="column" gap="5px">
            <Title>Dashboard</Title>
            {ingredients.map((ingredient, index) => (
                <Ingredient key={index} name={ingredient.name} />
            ))}
        </Flex>
    );
}

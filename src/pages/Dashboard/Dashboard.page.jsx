import { useEffect, useState } from "react";
import { Flex, Typography } from "antd";
import { Ingredient } from "../../components/Ingredient/Ingredient";

const { Title } = Typography;

const Dashboard = () => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        fetch("http://localhost:8080/ingredients", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load ingredients");
                return res.json();
            })
            .then((data) => setIngredients(data))
            .catch(console.error);
    }, []);

    return (
        <Flex direction="column" gap="10px" style={{ padding: "1rem" }}>
            <Title level={2}>Dashboard</Title>
            <Flex wrap="wrap" gap="10px">
                {ingredients.map((ing) => (
                    <Ingredient key={ing.id} name={ing.name} />
                ))}
            </Flex>
        </Flex>
    );
};

export { Dashboard };

import { useEffect, useState } from "react";
import { Button, Flex, Typography } from "antd";
import { Ingredient } from "../../components/Ingredient/Ingredient";
import { ModalBase } from "../../components/Modal/ModalBase";
const { Title } = Typography;

const Dashboard = () => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAccept = () => {
        // Lógica para aceptar (puedes agregar aquí lo que necesites)
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Flex vertical gap={"5px"}>
            <Title>Dashboard</Title>
            {ingredients.map((ingredient, index) => {
                return <Ingredient name={ingredient.name} key={index} />;
            })}
            <Button type="primary" onClick={() => setIsModalOpen(true)}>
                Abrir Modal
            </Button>
            <ModalBase
                open={isModalOpen}
                onClose={handleCancel}
                title="Agregar ingrediente"
            >
                {/* Contenido del modal aquí */}
                <p>Contenido del ModalBase</p>
                <Button type="primary" onClick={handleAccept}>
                    Accept
                </Button>
                <Button onClick={handleCancel}>Cancel</Button>
            </ModalBase>
        </Flex>
    );
};

export { Dashboard };

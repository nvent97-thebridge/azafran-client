import { useState } from "react";
import { BrowserRouter } from "react-router";
import { UnAuthedRoutes } from "./routes/UnAuthedRoutes";
import { AuthedRoutes } from "./routes/AuthedRoutes";
import { Modal } from "./components/Modal/Modal"; // Ajusta la ruta si es distinta
import { Button, Flex, Input, Typography } from "antd";
import "./App.css";

function App() {
  const userLoggedIn = localStorage.getItem("accessToken");

  const [modalOpen, setModalOpen] = useState(false);

  const handleCancel = () => setModalOpen(false);
  const handlePrimary = () => {
    alert("Confirmado.");
    setModalOpen(false);
  };

  return (
    <BrowserRouter>
      {/* Botón de ejemplo para abrir el modal */}
      <div style={{ position: "absolute", top: 150, right: 330 }}>
        <Button onClick={() => setModalOpen(true)}><Typography.Text>Abrir Modal</Typography.Text></Button>
      </div>

      {userLoggedIn ? <AuthedRoutes /> : <UnAuthedRoutes />}

      {/* Modal compartido en el layout general */}
      <Modal
        open={modalOpen}
        cancelFn={handleCancel}
        primaryFn={handlePrimary}
        titleContent={<h2><Typography.Text>¿Confirmar acción?</Typography.Text></h2>}
        content={<p><Typography.Text>Esto es una prueba de integración del modal.</Typography.Text></p>}
        closeIcon="✖"
      />
    </BrowserRouter>
  );
}

export default App;

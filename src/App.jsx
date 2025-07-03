import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom"; // Importamos BrowserRouter para el enrutamiento
import Modal from "./components/modal/modal"; // Importación del modal
import { UnAuthedRoutes } from "./routes/UnAuthedRoutes"; // Rutas no autenticadas
import { AuthedRoutes } from "./routes/AuthedRoutes"; // Rutas autenticadas
import "./App.css";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setUserLoggedIn(true);
    }
  }, []);

  const handleModalClose = (accepted) => {
    setShowModal(false);
    if (accepted) {
      setUserLoggedIn(true);
    } else {
      console.log("User canceled the modal");
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <BrowserRouter>
      <div>
        {}
        <button onClick={handleShowModal}>Mostrar Modal</button>

        {}
        {!userLoggedIn && (
          <Modal
            title="Please Log In"
            showModal={showModal}
            onClose={handleModalClose}
          />
        )}

        {}
        {userLoggedIn ? <AuthedRoutes /> : <UnAuthedRoutes />}
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./modal.scss";

const Modal = ({ title, showModal, onClose }) => {
  const [isModalVisible, setIsModalVisible] = useState(showModal);

  useEffect(() => {
    setIsModalVisible(showModal);
  }, [showModal]);

  const handleAccept = () => {
    console.log("Has aceptado");
    setIsModalVisible(false);
    onClose(true);
  };

  const handleCancel = () => {
    console.log("Modal canceled!");
    setIsModalVisible(false);
    onClose(false);
  };

  if (!isModalVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">{title}</h2>
        <div className="modal-buttons">
          <button className="button primary" onClick={handleAccept}>
            Accept
          </button>
          <button className="button secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

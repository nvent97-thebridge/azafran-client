import React, { useEffect } from 'react';
import { Button, Flex, Input, Typography } from "antd";
import './Modal.css';

export const Modal = ({
  open,
  cancelFn,
  primaryFn,
  closeIcon,
  content,
  titleContent,
  className
}) => {

  // Detecta la tecla ESC para cerrar el modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && open && cancelFn) {
        cancelFn();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, cancelFn]);

  if (!open) return null;

  return (
    <div className="modalBackground">
      <div className={`modalContainer ${className || ''}`}>
        {titleContent && (
          <div className="title">
            {titleContent}
            <div className="titleCloseBtn">
              <Button onClick={cancelFn}>{closeIcon || 'X'}</Button>
            </div>
          </div>
        )}

        <div className="body">
          {content}
        </div>

        <div className="footer">
          {cancelFn && (
            <Button onClick={cancelFn} id="cancelBtn">
              <Typography.Text>Cancel</Typography.Text>
            </Button>
          )}
          {primaryFn && (
            <Button onClick={primaryFn}>
              <Typography.Text>Continue</Typography.Text>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

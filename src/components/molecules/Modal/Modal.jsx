import { Modal, Typography } from "antd";

const { Title } = Typography;

const ModalBase = ({ open, onClose, title, children, maxWidth }) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title={
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Title level={5} style={{ margin: 0 }}>
            {title}
          </Title>
        </div>
      }
      width={maxWidth || 400}
      styles={{ maxHeight: "70vh", overflowY: "auto" }}
      destroyOnHidden
    >
      {children}
    </Modal>
  );
};

export { ModalBase };

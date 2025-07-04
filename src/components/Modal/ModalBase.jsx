import { Modal, Typography } from "antd";

const { Title } = Typography;

const ModalBase = ({
    showModal,
    handleAccept,
    handleCancel,
    title,
    children,
}) => {
    return (
        <Modal
            open={showModal}
            onCancel={handleCancel}
            footer={[
                <button
                    key="cancel"
                    style={{
                        backgroundColor: "#fff",
                        color: "#000",
                        border: "none",
                        padding: "6px 16px",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                    onClick={handleCancel}
                >
                    Cancel
                </button>,
                <button
                    key="accept"
                    type="button"
                    style={{
                        backgroundColor: "#1677ff",
                        color: "#fff",
                        border: "none",
                        padding: "6px 16px",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                    onClick={handleAccept}
                >
                    Accept
                </button>,
            ]}
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
        >
            {children}
        </Modal>
    );
};

export { ModalBase };

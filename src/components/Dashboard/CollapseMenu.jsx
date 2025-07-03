import { useState } from 'react';
import { Modal } from 'antd';
import { Link } from "react-router";
import Sider from 'antd/es/layout/Sider';

const CollapseMenu = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showConfirm = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    localStorage.removeItem("accessToken");
    setIsModalVisible(false);
    window.location.href = ("/");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Sider 
      breakpoint="md"
      collapsedWidth="0"
      width={256}
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        backgroundColor: '#920202',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        fontFamily: 'Roboto'
      }}
    >
      <div style={{ marginTop: '20%', display: 'flex', flexDirection: 'column', gap: '10px'}} className="viewContainer">
        <h2 style={{color: '#fff'}}>MENU</h2>
        <Link style={{color: '#fff'}} to={"/recipes"}>Recipes</Link>
        <Link style={{color: '#fff'}} to={"/pantry"}>Pantry</Link>
        <Link style={{color: '#fff'}} to={"/settings"}>Settings</Link>
        <span onClick={showConfirm} style={{color: '#fff', cursor: 'pointer'}} >Log out</span>
      </div>

      <Modal
        title="Log out"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Yes"
        cancelText="No"
      >
        <p>Are you sure you want to log out?</p>
      </Modal>

    </Sider>
  );

}

export { CollapseMenu }
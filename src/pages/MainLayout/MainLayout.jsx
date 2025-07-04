import { Flex, Typography } from "antd";
import { CollapseMenu } from "../../components/MainLayout/CollapseMenu";
import "../../Styles/Font-google-icons.css"

const MainLayout = () => {

  return (
    <div style={{ marginLeft: 256}}>
      <Flex>
        <CollapseMenu />
        <div>
          <h2>View container</h2>
        </div>
      </Flex>
    </div>
  );
};

export { MainLayout };

import { Flex, Typography } from "antd";
import { CollapseMenu } from "../../components/Dashboard/CollapseMenu";

const Dashboard = () => {

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

export { Dashboard };

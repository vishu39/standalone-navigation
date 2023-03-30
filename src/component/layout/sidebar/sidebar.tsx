import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";

const Sidebar = (props: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const { items } = props;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
    </Layout>
  );
};

export default Sidebar;

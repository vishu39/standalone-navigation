import { Layout, Menu } from "antd";

const Topbar = (props: any) => {
  const { items } = props;
  const { Header } = Layout;

  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={items}
      />
    </Header>
  );
};

export default Topbar;

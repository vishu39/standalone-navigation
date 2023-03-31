import Content from "./content/content";
import Sidebar from "./sidebar/sidebar";
import Topbar from "./topbar/topbar";
import "./layout.css";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";

const Layout = (props: any, children: any) => {
  const { layout, setLayout } = props;
  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  const items: MenuItem[] = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("User", "sub1", <UserOutlined />, [
      getItem("Tom", "3"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    ]),
    getItem("Team", "sub2", <TeamOutlined />, [
      getItem("Team 1", "6"),
      getItem("Team 2", "8"),
    ]),
    getItem("Files", "9", <FileOutlined />),
  ];

  return (
    <div
      className={layout === "vertical" ? "vert" : "hori"}
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="left">
        {layout === "vertical" && <Sidebar items={items} />}
        {layout === "horizontal" && <Topbar items={items} />}
      </div>
      <div className="right">
        <Content props={props} />
      </div>
    </div>
  );
};

export default Layout;

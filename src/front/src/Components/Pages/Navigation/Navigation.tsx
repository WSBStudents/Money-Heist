import { Layout, Menu } from "antd";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./Navigation.scss";
import { NavigationItem } from "../../../Utils/Types/Navigation.types";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const { Sider } = Layout;

  const navbarItems: NavigationItem[] = [
    {
      id: 1,
      label: "Strona główna",
      icon: <UserOutlined />,
      url: "/",
    },
    {
      id: 2,
      label: "Budżet",
      icon: <VideoCameraOutlined />,
      url: "/budget",
    },
    {
      id: 3,
      label: "Dodaj Transakcję",
      icon: <UploadOutlined />,
      url: "/add-transaction",
    },
    {
      id: 4,
      label: "Historia Transakcji",
      icon: <UploadOutlined />,
      url: "/transaction-history",
    },
    {
      id: 5,
      label: "Ustawienia",
      icon: <UserOutlined />,
      url: "/settings",
    },
  ];

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="navigation__marginTop-20"
      >
        {navbarItems.map((navbarItem) => {
          return (
            <Menu.Item key={navbarItem.id} icon={navbarItem.icon}>
              <Link to={navbarItem.url}>{navbarItem.label}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default Navigation;

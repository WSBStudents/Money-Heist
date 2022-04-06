import { Layout, Menu } from "antd";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./Navigation.scss";

const Navigation: React.FC = () => {
  const { Sider } = Layout;

  const navbarItems = [
    {
      id: 1,
      label: "Strona główna",
      icon: <UserOutlined />,
    },
    {
      id: 2,
      label: "Budżet",
      icon: <VideoCameraOutlined />,
    },
    {
      id: 3,
      label: "Dodaj Transakcję",
      icon: <UploadOutlined />,
    },
    {
      id: 4,
      label: "Historia Transakcji",
      icon: <UploadOutlined />,
    },
    {
      id: 5,
      label: "Ustawienia",
      icon: <UserOutlined />,
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
              {navbarItem.label}
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default Navigation;

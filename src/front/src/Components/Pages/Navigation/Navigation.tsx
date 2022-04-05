import { Layout, Menu } from "antd";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
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
      label: "Historia Transakcji",
      icon: <VideoCameraOutlined />,
    },
    {
      id: 3,
      label: "Dodaj Transakcję",
      icon: <UploadOutlined />,
    },
    {
      id: 4,
      label: "Ustawienia",
      icon: <UserOutlined />,
    },
  ];

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      {/**TODO: Add Logo or name of application or sth  */}
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
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

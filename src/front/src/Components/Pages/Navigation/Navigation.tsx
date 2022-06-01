import { Layout, Menu } from "antd";
import "./Navigation.scss";
import { NavigationItem } from "../../../Utils/Types/Navigation.types";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  WalletOutlined,
  ShoppingCartOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext/AuthContext";

const Navigation: React.FC = () => {
  const { Sider } = Layout;

  const navbarItems: NavigationItem[] = [
    {
      id: 1,
      label: "Strona główna",
      icon: <AppstoreOutlined />,
      url: "/",
    },
    {
      id: 6,
      label: "Dodaj Budżet",
      icon: <ShoppingCartOutlined />,
      url: "/add-budget",
    },
    {
      id: 2,
      label: "Budżet",
      icon: <WalletOutlined />,
      url: "/budget",
    },
    {
      id: 3,
      label: "Dodaj Transakcję",
      icon: <ShoppingCartOutlined />,
      url: "/add-transaction",
    },
    {
      id: 4,
      label: "Historia Transakcji",
      icon: <OrderedListOutlined />,
      url: "/transaction-history",
    },
  ];
  const { logout } = useContext(AuthContext);

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
        <Menu.Item>
          <span onClick={logout}>Logout</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Navigation;

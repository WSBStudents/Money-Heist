import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Navigation from "./Components/Pages/Navigation/Navigation";
const App: React.FC = () => {
  const { Content, Sider } = Layout;

  return (
    <Layout style={{ height: "100vh" }}>
      <Navigation />
      <Layout>
        <Content style={{ margin: "24px 16px 0", background: "red" }}></Content>
      </Layout>
    </Layout>
  );
};

export default App;

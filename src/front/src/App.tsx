import { Layout } from "antd";

import Navigation from "./Components/Pages/Navigation/Navigation";
const App: React.FC = () => {
  const { Content } = Layout;

  return (
    <Layout style={{ height: "100vh" }}>
      <Navigation />
      <Layout>
        <Content style={{ margin: "24px 16px", background: "red" }}></Content>
      </Layout>
    </Layout>
  );
};

export default App;

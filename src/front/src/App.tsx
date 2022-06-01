import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navigation from "./Components/Pages/Navigation/Navigation";
import "./App.scss";

const App: React.FC = () => {
  document.title = "Zaliczenie na 5";

  return (
    <Layout className="app__wrapper">
      <Navigation />
      <Layout className="app__contentMargin">
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default App;

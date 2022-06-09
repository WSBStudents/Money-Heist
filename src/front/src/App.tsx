import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navigation from "./pages/sidebar/sidebar";
import "./App.scss";
import axios from "axios";
import { HEADER } from "./utils/types/api-types";

const App: React.FC = () => {
  document.title = "Zaliczenie na 5";

  axios.interceptors.request.use((request) => {
    if (request.headers) {
      request.headers["Authorization"] = `${localStorage.getItem("userToken")}`;
      request.headers["Access-Control-Allow-Origin"] = HEADER;
    }
    return request;
  });

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

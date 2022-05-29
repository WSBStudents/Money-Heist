import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.interceptors.response.use((res) => {
  res.headers["Access-Control-Allow-Origin"] = "*";
  res.headers["Access-Control-Allow-Credentials"] = "true";
  res.headers["Access-Control-Request-Method"] = "POST";
  return res;
});
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

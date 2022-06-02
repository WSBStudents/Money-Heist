import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/auth-context/auth-provider";
import AppRoutes from "./routes/app-routes";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

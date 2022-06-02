import { Layout, Row, Col } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useContext } from "react";
import AuthContext from "../../context/auth-context/auth-context";
import Login from "../login-page/login";
import Register from "../register-page/register";

const InitialLoginPage: React.FC = () => {
  const { loginPage } = useContext(AuthContext);
  return (
    <Layout>
      <Content className="login__wrapper">
        <Row className="login__height-100" align="middle" justify="center">
          <Col className="login__column login__column__form ">
            {loginPage ? <Login /> : <Register />}
          </Col>
          <Col className="login__column login__column__image " />
        </Row>
      </Content>
    </Layout>
  );
};

export default InitialLoginPage;

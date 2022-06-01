import { Layout, Row, Col } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext/AuthContext";
import Login from "../Login/Login";
import Register from "../Register/Register";

const UserManage: React.FC = () => {
  const { loginPage } = useContext(AuthContext);
  return (
    <Layout>
      <Content className="login__wrapper">
        <Row className="login__height-100" align="middle" justify="center">
          <Col className="login__column login__column__form ">
            {loginPage ? <Login /> : <Register />}
          </Col>
          <Col className="login__column login__column__image "></Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default UserManage;

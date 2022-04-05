import { Button, Col, Form, Input, Layout, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import "./Login.scss";
import { LoginTypes } from "./LoginTypes";

const Login: React.FC = () => {
  const onFinish = (values: LoginTypes): void => {
    console.log(values);
  };
  return (
    <Layout>
      <Content className="login__wrapper">
        <Row className="login__height-100" align="middle" justify="center">
          <Col className="login__column login__column__form ">
            <div className="login__column__headerContainer">
              <Title level={1}>Zaloguj się do MoneyHeist</Title>
            </div>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item
                label="Login"
                name="login"
                rules={[{ required: true, message: "Wprowadź login!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Hasło"
                name="password"
                rules={[{ required: true, message: "Wprowadź hasło!" }]}
              >
                <Input.Password />
              </Form.Item>
              <div className="login__column__forgetPasswordContainer">
                <div>
                  <span className="login__column__forgetPasswordContainer-cursorPointer">
                    Przypomnij hasło
                  </span>
                </div>
              </div>
              <Form.Item className="login__column__paddingTop-20">
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  className="login__column__button"
                >
                  Zaloguj
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col className="login__column login__column__image "></Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Login;

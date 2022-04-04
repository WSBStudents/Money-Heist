import { Button, Checkbox, Col, Form, Input, Layout, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import "./Login.scss";
type Login = {
  login: string;
  password: string;
};
const Login: React.FC = () => {
  const onFinish = (values: Login): void => {
    console.log(values);
  };
  return (
    <Layout>
      <Content className="login__wrapper">
        <Row style={{ height: "100vh" }} align="middle">
          <Col className="login__column ">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              //   onFinishFailed={onFinishFailed}
              autoComplete="off"
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
              <Form.Item wrapperCol={{ offset: 11 }}>
                <Button type="primary" htmlType="submit">
                  Zaloguj
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Login;

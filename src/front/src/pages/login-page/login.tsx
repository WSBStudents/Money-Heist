import { Button, Form, Input } from "antd";
import Title from "antd/lib/typography/Title";
import { useContext } from "react";
import AuthContext from "../../context/auth-context/auth-context";
import useBreakpoint from "../../hooks/use-breakpoint/use-breakpoint";
import "./login.scss";
import { LoginTypes } from "./login-types";

const Login: React.FC = () => {
  const { login, handleUserPage } = useContext(AuthContext);
  const onFinish = (values: LoginTypes): void => {
    login();
  };

  const { md } = useBreakpoint();
  return (
    <>
      <div className="login__column__headerContainer">
        <Title level={md ? 3 : 1}>Zaloguj się do MoneyHeist</Title>
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
            <span
              onClick={handleUserPage}
              className="login__column__forgetPasswordContainer-cursorPointer"
            >
              Nie masz konta? Zarejestruj się!
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
    </>
  );
};

export default Login;

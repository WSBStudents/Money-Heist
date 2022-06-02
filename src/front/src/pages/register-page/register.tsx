import { Form, Input, Button } from "antd";
import Title from "antd/lib/typography/Title";

import { useContext } from "react";
import AuthContext from "../../context/auth-context/auth-context";
import useBreakpoint from "../../hooks/use-breakpoint/use-breakpoint";
import { LoginTypes } from "../login-page/login-types";

const Register: React.FC = () => {
  const { login, handleUserPage } = useContext(AuthContext);
  const onFinish = (values: LoginTypes): void => {
    login();
  };

  const { md } = useBreakpoint();
  return (
    <>
      <div className="login__column__headerContainer">
        <Title level={md ? 3 : 2}>Zarejestruj się do MoneyHeist</Title>
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
        <Form.Item
          label="Powtórz Hasło"
          name="password"
          rules={[{ required: true, message: "Potwórz hasło!" }]}
        >
          <Input.Password />
        </Form.Item>
        <div className="login__column__forgetPasswordContainer">
          <div>
            <span
              onClick={handleUserPage}
              className="login__column__forgetPasswordContainer-cursorPointer"
            >
              Masz konto? Zaloguj się!
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
            Zarejestruj
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Register;

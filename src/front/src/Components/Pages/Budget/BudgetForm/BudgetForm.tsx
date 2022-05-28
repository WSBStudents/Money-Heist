import { Form, Input, Button, Spin } from "antd";
import TextArea from "antd/lib/input/TextArea";
import useBudget from "../../../../Hooks/UseBudget/UseBudget";

import HeaderTitle from "../../../Atoms/HeaderTitle/HeaderTilte";

const BudgetForm: React.FC = () => {
  const { saveBudget, isLoading } = useBudget();

  return (
    <>
      <HeaderTitle title="Dodaj Budżet" />
      <Spin spinning={isLoading}>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          size={"middle"}
          onFinish={saveBudget}
        >
          <Form.Item
            rules={[{ required: true, message: "Podaj nazwę budżetu!" }]}
            name="label"
            label="Nazwa budżetu"
          >
            <Input disabled={isLoading} type={"text"} />
          </Form.Item>
          <Form.Item name="amount" label="Kwota początkowa (PLN)">
            <Input disabled={isLoading} type={"number"} />
          </Form.Item>
          <Form.Item name="description" label="Opis">
            <TextArea disabled={isLoading} />
          </Form.Item>
          <Form.Item style={{ marginLeft: "220px" }}>
            <Button disabled={isLoading} type="primary" htmlType="submit">
              Dodaj Budżet
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </>
  );
};

export default BudgetForm;

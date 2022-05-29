import { Form, Input, Select, Button, Spin } from "antd";
import TextArea from "antd/lib/input/TextArea";
import useBudget from "../../../../Hooks/UseBudget/UseBudget";
import useTransaction from "../../../../Hooks/UseTransaction/UseTransaction";
import HeaderTitle from "../../../Atoms/HeaderTitle/HeaderTilte";
import { TransactionType } from "./TransactionForm.types";

const TransactionForm: React.FC = () => {
  const { isLoading, saveTransaction } = useTransaction();
  const { budgets } = useBudget();

  return (
    <>
      <HeaderTitle title="Dodaj Transakcję" />
      <Spin spinning={isLoading}>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          size={"middle"}
          onFinish={saveTransaction}
        >
          <Form.Item
            name="label"
            label="Nazwa transakcji"
            rules={[
              { required: true, message: "Nazwa transakcji jest wymagana!" },
            ]}
          >
            <Input type={"text"} />
          </Form.Item>
          <Form.Item
            rules={[
              { required: true, message: "Kwota transakcji jest wymagana!" },
            ]}
            name="amount"
            label="Kwota transakcji (PLN)"
          >
            <Input type={"number"} />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Proszę wybrać budżet!" }]}
            name="budgetId"
            label="Wybierz budżet"
          >
            <Select>
              {budgets.map((budget) => {
                return (
                  <Select.Option key={budget.id} value={budget.id}>
                    {budget.label}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item name="description" label="Opis">
            <TextArea />
          </Form.Item>
          <Form.Item
            name="type"
            label="Wybierz typ transakcji"
            rules={[
              { required: true, message: "Proszę wybrać typ transakcji!" },
            ]}
          >
            <Select>
              <Select.Option value={TransactionType.EXPENSE}>
                Wydatek
              </Select.Option>
              <Select.Option value={TransactionType.INCOME}>Zysk</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item style={{ marginLeft: "220px" }}>
            <Button disabled={false} type="primary" htmlType="submit">
              Dodaj Transakcję
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </>
  );
};

export default TransactionForm;

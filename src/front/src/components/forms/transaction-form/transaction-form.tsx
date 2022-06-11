import { Form, Input, Select, Button, Spin, Radio } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useContext } from "react";
import BudgetContext from "../../../context/budget-context/budget-context";
import TransactionContext from "../../../context/transaction-context/transaction-context";
import HeaderTitle from "../../header-title/header-tilte";
import { TransactionType } from "./transaction-form-types";

const TransactionForm: React.FC = () => {
  const { isLoading, saveTransaction, form } = useContext(TransactionContext);
  const budget = useContext(BudgetContext);

  return (
    <>
      <HeaderTitle title="Dodaj Transakcję" />
      <Spin spinning={isLoading && budget.isLoading}>
        <Form
          form={form}
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
            <Select
              placeholder="Proszę wybrać budżet z listy"
              disabled={budget.budgets.length < 0}
            >
              {budget.budgets.map((budget) => {
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
            <Radio.Group>
              <Radio.Button value={TransactionType.EXPENSE}>
                Wydatek
              </Radio.Button>
              <Radio.Button value={TransactionType.INCOME}>Zysk</Radio.Button>
            </Radio.Group>
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

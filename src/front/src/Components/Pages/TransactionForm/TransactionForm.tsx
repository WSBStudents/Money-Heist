import {
  Form,
  Radio,
  Input,
  Select,
  TreeSelect,
  Cascader,
  DatePicker,
  InputNumber,
  Switch,
  Button,
  Spin,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import useTransaction from "../../../Hooks/UseTransaction/UseTransaction";
import HeaderTitle from "../../Atoms/HeaderTitle/HeaderTilte";

const TransactionForm: React.FC = () => {
  const { isLoading, saveTransaction } = useTransaction();
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
          <Form.Item name="label" label="Nazwa transakcji">
            <Input type={"text"} />
          </Form.Item>
          <Form.Item name="label" label="Kwota transakcji (PLN)">
            <Input type={"number"} />
          </Form.Item>
          <Form.Item name="budget" label="Wybierz budżet" required>
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="description" label="Opis">
            <TextArea />
          </Form.Item>
          <Form.Item name="budget" label="Wybierz typ transakcji" required>
            <Select>
              <Select.Option value="demo">Wydatek</Select.Option>
              <Select.Option value="demo">Zysk</Select.Option>
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

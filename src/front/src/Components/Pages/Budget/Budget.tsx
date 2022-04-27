import { Button, Card, Col, Row, Space, Table } from "antd";
import Title from "antd/lib/typography/Title";
import HeaderTitle from "../../Atoms/HeaderTitle/HeaderTilte";

const Budget: React.FC = () => {
  const columns = [
    {
      title: "Budżet",
      dataIndex: "budget_title",
      key: "budget_title",
    },
    {
      title: "Kwota",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Opis",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Zarządzaj",
      key: "action",
      render: () => {
        return (
          <Space size="middle">
            <a>Usuń</a>
          </Space>
        );
      },
    },
  ];

  const data = [
    {
      key: "1",
      budget_title: "Rachunki",
      amount: "502 zł",
      description: "",
    },
  ];
  return (
    <>
      <HeaderTitle title="Twoje Budżety" />
      <Table
        size="large"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </>
  );
};

export default Budget;

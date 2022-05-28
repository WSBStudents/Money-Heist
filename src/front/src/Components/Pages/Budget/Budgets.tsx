import { Space, Table } from "antd";

import { useEffect } from "react";
import useBudget from "../../../Hooks/UseBudget/UseBudget";
import HeaderTitle from "../../Atoms/HeaderTitle/HeaderTilte";

const Budget: React.FC = () => {
  const { getBudgets, budgets } = useBudget();
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

  useEffect(() => {
    getBudgets();
  }, []);

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

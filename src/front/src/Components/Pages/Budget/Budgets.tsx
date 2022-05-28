import { Space, Table } from "antd";
import { Link } from "react-router-dom";

import useBudget from "../../../Hooks/UseBudget/UseBudget";
import HeaderTitle from "../../Atoms/HeaderTitle/HeaderTilte";

import { BudgetData } from "./BudgetForm/BudgetForm.types";

const Budget: React.FC = () => {
  const { isLoading, budgets, deleteBudget } = useBudget();
  const columns = [
    {
      title: "Budżet",
      dataIndex: "label",
      key: "label",
      render: (_: any, record: BudgetData) => {
        return <Link to={`/budget/${record.id}`}>{record.label}</Link>;
      },
    },
    {
      title: "Kwota",
      dataIndex: "amount",
      key: "amount",
      render: (_: any, record: BudgetData) => {
        return <Space>{`${record.amount}zł`}</Space>;
      },
    },
    {
      title: "Opis",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Zarządzaj",
      key: "action",
      render: (_: any, record: BudgetData) => {
        return (
          <span
            onClick={() => deleteBudget(record.id)}
            style={{ cursor: "pointer" }}
          >
            Usuń
          </span>
        );
      },
    },
  ];

  return (
    <>
      <HeaderTitle title="Twoje Budżety" />
      <Table
        size="large"
        loading={isLoading}
        columns={columns}
        dataSource={budgets}
      />
    </>
  );
};

export default Budget;

import { Space, Table } from "antd";
import { Link } from "react-router-dom";

import useBudget from "../../hooks/use-budget/use-budget";
import HeaderTitle from "../../components/header-title/header-tilte";
import { BudgetData } from "../../components/forms/budget-form/budget-form-types";
import React from "react";

const Budget: React.FC = React.memo(() => {
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
});

export default Budget;

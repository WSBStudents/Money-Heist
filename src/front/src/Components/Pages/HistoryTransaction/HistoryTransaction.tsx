import { Table, Tag, Space } from "antd";
import { useEffect, useState } from "react";
import useBudget from "../../../Hooks/UseBudget/UseBudget";
import useTransaction from "../../../Hooks/UseTransaction/UseTransaction";
import HeaderTitle from "../../Atoms/HeaderTitle/HeaderTilte";
import {
  TransactionFormData,
  TransactionType,
} from "../TransactionForm/TransactionForm.types";

type HistoryTransactionProps = {
  manageHistory?: boolean;
  disableHeader?: boolean;
  transactionsNumber?: number;
};

const HistoryTransaction: React.FC<HistoryTransactionProps> = ({
  manageHistory,
  disableHeader,
  transactionsNumber,
}) => {
  const { isLoading, transactions, deleteTransaction } =
    useTransaction(transactionsNumber);

  const columns = [
    {
      title: "Tytuł transakcji",
      dataIndex: "label",
      key: "label",
    },
    {
      title: "Kwota",
      dataIndex: "amount",
      key: "amount",
      render: (_: any, record: TransactionFormData) => {
        return <span>{record.amount}zł</span>;
      },
    },
    {
      title: "Opis",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Budżet",
      dataIndex: "budgetId",
      key: "budgetId",
      render: (_: any, record: TransactionFormData) => {
        return <span>{record.budgetId}</span>;
      },
    },
    {
      title: "Transakcja",
      key: "type",
      dataIndex: "type",
      render: (tag: string) => (
        <Tag
          color={tag === TransactionType.EXPENSE ? "red" : "green"}
          key={tag}
        >
          {tag === TransactionType.EXPENSE ? "WYDATEK" : "ZYSK"}
        </Tag>
      ),
    },
    {
      title: "Zarządzaj",
      key: "action",
      render: (_: any, record: TransactionFormData) => {
        return (
          <Space size="middle">
            <p onClick={() => deleteTransaction(record.id)}>Usuń</p>
          </Space>
        );
      },
    },
  ];

  const filteredColumns = columns.filter(
    (column) => column.title !== "Zarządzaj"
  );

  return (
    <>
      {!disableHeader && <HeaderTitle title="Historia Transakcji" />}
      <Table
        loading={isLoading}
        columns={manageHistory ? columns : filteredColumns}
        dataSource={transactions}
        pagination={false}
      />
    </>
  );
};

export default HistoryTransaction;

import { Table, Tag, Space } from "antd";
import useTransaction from "../../hooks/use-transaction/use-transaction";
import HeaderTitle from "../header-title/header-tilte";
import {
  TransactionFormData,
  TransactionType,
} from "../forms/transaction-form/transaction-form-types";
import React from "react";

type HistoryTransactionProps = {
  manageHistory?: boolean;
  disableHeader?: boolean;
  transactions: TransactionFormData[];
  isLoading: boolean;
};

const HistoryTransaction: React.FC<HistoryTransactionProps> = React.memo(
  ({ manageHistory, disableHeader, transactions, isLoading }) => {
    const { deleteTransaction } = useTransaction();

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
          key={"1"}
          loading={isLoading}
          columns={manageHistory ? columns : filteredColumns}
          dataSource={transactions}
          pagination={false}
        />
      </>
    );
  }
);

export default HistoryTransaction;

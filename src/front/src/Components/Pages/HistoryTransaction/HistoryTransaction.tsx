import { Table, Tag, Space } from "antd";
import useTransaction from "../../../Hooks/UseTransaction/UseTransaction";
import HeaderTitle from "../../Atoms/HeaderTitle/HeaderTilte";
import { TransactionFormData } from "../TransactionForm/TransactionForm.types";

type HistoryTransactionProps = {
  manageHistory?: boolean;
  disableHeader?: boolean;
  transactionsData?: TransactionFormData[];
};

const HistoryTransaction: React.FC<HistoryTransactionProps> = ({
  manageHistory,
  disableHeader,
  transactionsData,
}) => {
  const { isLoading, transactions, deleteTransaction } = useTransaction();
  const columns = [
    {
      title: "Tytuł transakcji",
      dataIndex: "transaction_title",
      key: "transaction_title",
    },
    {
      title: "Kwota",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Opis",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Transakcja",
      key: "transaction",
      dataIndex: "transaction",
      render: (tag: string) => (
        <Tag
          color={tag.toLowerCase() === "wydatek" ? "red" : "green"}
          key={tag}
        >
          {tag.toUpperCase()}
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
        dataSource={transactionsData ?? transactions}
        pagination={false}
      />
    </>
  );
};

export default HistoryTransaction;

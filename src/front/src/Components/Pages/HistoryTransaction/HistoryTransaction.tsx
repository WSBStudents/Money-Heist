import { Table, Tag, Space } from "antd";
import HeaderTitle from "../../Atoms/HeaderTitle/HeaderTilte";

type HistoryTransactionProps = {
  manageHistory?: boolean;
  disableHeader?: boolean;
};

const HistoryTransaction: React.FC<HistoryTransactionProps> = ({
  manageHistory,
  disableHeader,
}) => {
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
      render: () => {
        return (
          <Space size="middle">
            <a>Usuń</a>
          </Space>
        );
      },
    },
  ];

  const filteredColumns = columns.filter(
    (column) => column.title !== "Zarządzaj"
  );
  const data = [
    {
      key: "1",
      transaction_title: "Patelnia",
      price: "502 zł",
      description: "w sumie to nie wiem czy opis potrzebny",
      transaction: "Wydatek",
    },
    {
      key: "2",
      transaction_title: "Matula mi przelała",
      price: "5 zł",
      description: "w sumie to nie wiem czy opis potrzebny",
      transaction: "Zysk",
    },
    {
      key: "3",
      transaction_title: "Skarpety",
      price: "50 zł",
      description: "w sumie to nie wiem czy opis potrzebny",
      transaction: "Wydatek",
    },
  ];

  return (
    <>
      {!disableHeader && <HeaderTitle title="Historia Transakcji" />}
      <Table
        columns={manageHistory ? columns : filteredColumns}
        dataSource={data}
        pagination={false}
      />
    </>
  );
};

export default HistoryTransaction;

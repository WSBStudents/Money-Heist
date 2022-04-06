import { Table, Tag, Space } from "antd";
const HistoryTransaction: React.FC = () => {
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

  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default HistoryTransaction;

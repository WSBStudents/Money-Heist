import { Col, Row, Space } from "antd";
import Title from "antd/lib/typography/Title";

const Budget: React.FC = () => {
  return (
    <Row
      gutter={[24, 24]}
      justify="space-between"
      style={{
        padding: "0px 100px",
        height: "100vh",
      }}
    >
      <Col
        span={11}
        style={{
          border: "1px black solid",
          borderRadius: "25px",
          backgroundColor: "#1890FF",
        }}
      >
        <Space
          style={{
            margin: "20px",
          }}
        >
          <Title level={3}>Rachunki</Title>
        </Space>
      </Col>
      <Col span={11} style={{ border: "1px black solid" }}>
        <Space>
          <Title level={3}>Rachunki</Title>
        </Space>
      </Col>

      <Col span={11} style={{ border: "1px black solid" }}>
        chuj
      </Col>
      <Col span={11} style={{ border: "1px black solid" }}>
        chuj
      </Col>
    </Row>
  );
};

export default Budget;

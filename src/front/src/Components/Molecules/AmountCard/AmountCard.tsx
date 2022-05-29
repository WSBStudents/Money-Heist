import { Row, Col, Card, Statistic } from "antd";
import {
  WalletOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { Currency, Units } from "../../../Utils/Types/UnitEntities";

const AmountCard: React.FC<{ budgetAmount: number }> = ({ budgetAmount }) => {
  const isBalancePositive = budgetAmount > 0;

  return (
    <div className="site-statistic-demo-card">
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Saldo"
              value={!isNaN(budgetAmount) ? budgetAmount : 0}
              precision={2}
              prefix={<WalletOutlined />}
              suffix={Currency.PLN}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Balans"
              value={isBalancePositive ? budgetAmount : budgetAmount * -1}
              precision={2}
              valueStyle={{ color: isBalancePositive ? "green" : "#cf1322" }}
              prefix={
                isBalancePositive ? <ArrowUpOutlined /> : <ArrowDownOutlined />
              }
              suffix={Units.PROCENT}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AmountCard;

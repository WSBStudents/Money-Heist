import { Row, Col, Card, Statistic } from "antd";
import {
  WalletOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { Currency, Units } from "../../../Utils/Types/UnitEntities";
const AmountCard: React.FC = () => {
  // TODO: pass in a props balanceValue and replace all the hardcoded things
  const balanceValue = 10;
  const isBalancePositive = balanceValue > 0;
  return (
    <div className="site-statistic-demo-card">
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Saldo"
              value={2137.69}
              precision={2}
              prefix={<WalletOutlined />}
              suffix={Currency.PLN}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Balans w skali roku"
              value={isBalancePositive ? balanceValue : balanceValue * -1}
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

import { ArrowLeftOutlined, DeleteFilled } from "@ant-design/icons";
import { Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import "./header-title.scss";
const HeaderTitle: React.FC<{
  title: string;
  deleteBudgetId?: () => void;
}> = ({ title, deleteBudgetId }) => {
  const navigation = useNavigate();

  const goToPreviousSite = () => {
    navigation(-1);
  };

  return (
    <div className="headerTitle__wrapper">
      <span className="headerTitle__title">{title}</span>
      <div>
        <Tooltip title="Wróć do poprzedniej strony" placement="left">
          <ArrowLeftOutlined
            onClick={goToPreviousSite}
            className="headerTitle__arrow"
          />
        </Tooltip>
        {deleteBudgetId && (
          <Tooltip title="Usuń budżet" placement="left">
            <DeleteFilled
              className="headerTitle__arrow"
              onClick={deleteBudgetId}
            />
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default HeaderTitle;

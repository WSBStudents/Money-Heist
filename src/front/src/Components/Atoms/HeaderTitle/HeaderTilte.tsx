import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./HeaderTitle.scss";
const HeaderTitle: React.FC<{ title: string }> = ({ title }) => {
  const navigation = useNavigate();

  const goToPreviousSite = () => {
    navigation(-1);
  };

  return (
    <div className="headerTitle__wrapper">
      <span className="headerTitle__title">{title}</span>
      <ArrowLeftOutlined
        onClick={goToPreviousSite}
        className="headerTitle__arrow"
      />
    </div>
  );
};

export default HeaderTitle;

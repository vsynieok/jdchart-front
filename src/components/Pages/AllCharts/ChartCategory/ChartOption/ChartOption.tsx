import { useNavigate } from "react-router-dom";
import "./ChartOption.css";

interface ChartOptionProps {
  title: string;
  subtitle?: string;
  gradient?: [string, string];
}

const ChartOption: React.FC<ChartOptionProps> = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chart/id");
  };

  const gradientVars = {
    "--chart-option-gr-a": props.gradient?.[0] ?? "#000000",
    "--chart-option-gr-b": props.gradient?.[1] ?? "#FFFFFF",
    "--chart-option-shadow": props.gradient?.[1] + "88",
  } as React.CSSProperties;

  return (
    <div
      onClick={handleClick}
      style={gradientVars}
      className="cOptionContainer"
    >
      <div className="optionBody">
        <h2 className="optionSubtitle">{props.subtitle}</h2>
        <h1 className="optionTitle">{props.title}</h1>
      </div>
      <div className="cOptionBgA"></div>
      <div className="cOptionBgB"></div>
    </div>
  );
};

export default ChartOption;

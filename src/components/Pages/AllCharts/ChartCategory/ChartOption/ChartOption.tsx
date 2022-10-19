import "./ChartOption.css";

interface ChartOptionProps {
  title: string;
  subtitle?: string;
  gradient?: [string, string];
}

const ChartOption: React.FC<ChartOptionProps> = (props) => {
  const gradientVars = {
    "--chart-option-gr-a": props.gradient?.[0] ?? "#000000",
    "--chart-option-gr-b": props.gradient?.[1] ?? "#FFFFFF",
    "--chart-option-shadow": props.gradient?.[1] + "88",
  } as React.CSSProperties;

  return (
    <div style={gradientVars} className="optionBody">
      <h2 className="optionSubtitle">{props.subtitle}</h2>
      <h1 className="optionTitle">{props.title}</h1>
    </div>
  );
};

export default ChartOption;

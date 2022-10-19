import React from "react";
import "./ChartCategory.css";
import ChartOption from "./ChartOption/ChartOption";

interface CategoryProps {
  name: string;
}

const ChartCategory: React.FC<CategoryProps> = (props) => {
  return (
    <div className="categoryContainer">
      <h1 className="categoryTitle">{props.name}</h1>
      <div className="itemsContainer">
        <ChartOption
          subtitle="Week of"
          title="October 17th"
          gradient={["#c400ff", "#5e00ff"]}
        />
        <ChartOption title="October 10th" gradient={["#1aff00", "#007d00"]} />
        <ChartOption title="October 3rd" gradient={["#00f5ff", "#0034ff"]} />
        <ChartOption title="September 26th" gradient={["#ffa200", "#ff0000"]} />
      </div>
    </div>
  );
};

export default ChartCategory;

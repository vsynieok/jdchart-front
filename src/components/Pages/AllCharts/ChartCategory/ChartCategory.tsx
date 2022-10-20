import React, { useState } from "react";
import "./ChartCategory.css";
import ChartOption from "./ChartOption/ChartOption";

interface CategoryProps {
  name: string;
}

const ChartCategory: React.FC<CategoryProps> = (props) => {
  const [isFaded, setFaded] = useState<boolean>(true);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    let scrollPosition =
      e.currentTarget.clientWidth + e.currentTarget.scrollLeft;
    setFaded(scrollPosition !== e.currentTarget.scrollWidth);
  };

  const containerStyle = {
    "--charts-category-fade": isFaded ? 1 : 0,
    "--charts-category-fade-idx": isFaded ? 1 : -1,
  } as React.CSSProperties;

  return (
    <div className="categoryContainer" style={containerStyle}>
      <h1 className="categoryTitle">{props.name}</h1>
      <div className="itemsContainerWrapper" onScroll={handleScroll}>
        <div className="itemsContainer">
          <ChartOption
            subtitle="Week of"
            title="September 21st"
            gradient={["#c400ff", "#5e00ff"]}
          />
          <ChartOption title="October 10th" gradient={["#1aff00", "#007d00"]} />
          <ChartOption title="October 3rd" gradient={["#00f5ff", "#0034ff"]} />
          <ChartOption
            subtitle="Week of"
            title="October 17th"
            gradient={["#c400ff", "#5e00ff"]}
          />
          <ChartOption title="October 10th" gradient={["#1aff00", "#007d00"]} />
          <ChartOption title="October 3rd" gradient={["#00f5ff", "#0034ff"]} />
          <ChartOption
            subtitle="Week of"
            title="October 17th"
            gradient={["#c400ff", "#5e00ff"]}
          />
          <ChartOption title="October 10th" gradient={["#1aff00", "#007d00"]} />
          <ChartOption title="October 3rd" gradient={["#00f5ff", "#0034ff"]} />
        </div>
      </div>
      <div className={`itemsContainerFade${isFaded ? "" : " hidden"}`}></div>
    </div>
  );
};

export default ChartCategory;

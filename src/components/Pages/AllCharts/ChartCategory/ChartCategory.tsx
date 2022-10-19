import React from "react";
import "./ChartCategory.css";

interface CategoryProps {
  name: string;
}

const ChartCategory: React.FC<CategoryProps> = (props) => {
  return (
    <div className="categoryContainer">
      <h1>{props.name}</h1>
    </div>
  );
};

export default ChartCategory;

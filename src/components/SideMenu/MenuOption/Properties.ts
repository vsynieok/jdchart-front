import React from "react";
import IconProperties from "../../../assets/icons/IconProperties";

interface MenuOptionProperties {
  id: number;
  selected: number;

  gradientColors: [string, string];
  text: string;
  icon: React.FC<IconProperties>;

  onClick: (key: number) => void;
}

export default MenuOptionProperties;

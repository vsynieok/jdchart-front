import React, { useEffect, useRef, useState } from "react";
import "./MenuOption.css";
import MenuOptionProperties from "./Properties";

const MenuOption: React.FC<MenuOptionProperties> = (
  properties: MenuOptionProperties
) => {
  const buttonElement = useRef<HTMLDivElement>(null);
  const [isSelected, setSelected] = useState<boolean>(false);

  useEffect(() => {
    setSelected(properties.selected === properties.id);
    // eslint-disable-next-line
  }, [properties.selected]);

  return (
    <div
      className="optionContainer"
      onClick={(evt) => {
        if (properties.onClick !== undefined) properties.onClick(properties.id);
      }}
    >
      <div
        className={`button${isSelected ? " selectedButton" : ""}`}
        ref={buttonElement}
      >
        <div className="text">{properties.text}</div>
        <properties.icon className="icon" />
      </div>
      <div
        style={
          isSelected
            ? {
                backgroundImage: `repeating-linear-gradient(90deg,
                                ${properties.gradientColors[1]},
                                ${properties.gradientColors[0]},
                                ${properties.gradientColors[1]})`,
                opacity: 100,
              }
            : {
                opacity: 0,
              }
        }
        className="buttonBg"
      ></div>
    </div>
  );
};

export default MenuOption;

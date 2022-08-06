import React from "react";
import MenuOption from "./MenuOption/MenuOption";
import "./SideMenu.css";

const SideMenu: React.FunctionComponent = () => {
    return (
        <div className="menuBody">
            <MenuOption></MenuOption>
            <MenuOption></MenuOption>
            <MenuOption></MenuOption>
        </div>
    )
}

export default SideMenu;
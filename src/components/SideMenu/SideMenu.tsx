import React, { useState } from "react";
import Icons from "../../assets/icons/Icons";
import MenuOption from "./MenuOption/MenuOption";
import "./SideMenu.css";

const SideMenu: React.FunctionComponent = () => {
    const [selectedOption, setSelectedOption] = useState<number>(1);

    return (
        <div className="menuBody">
            <MenuOption
                id={1}
                selected={selectedOption}
                text="Home"
                icon={Icons.Home}
                gradientColors={["#7700ff", "#ff00ac"]}
                onClick={(key) => setSelectedOption(key)}
            />
            <MenuOption
                id={2}
                selected={selectedOption}
                text="All charts"
                icon={Icons.Charts}
                gradientColors={["#000eff", "#00ecff"]}
                onClick={(key) => setSelectedOption(key)}
            />
            <MenuOption
                id={3}
                selected={selectedOption}
                text="About"
                icon={Icons.About}
                gradientColors={["#ff8400", "#ff0000"]}
                onClick={(key) => setSelectedOption(key)}
            />
        </div>
    )
}

export default SideMenu;
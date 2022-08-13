import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Icons from "../../assets/icons/Icons";
import MenuOption from "./MenuOption/MenuOption";
import "./SideMenu.css";

const SideMenu: React.FunctionComponent = () => {
  const [selectedOption, setSelectedOption] = useState<number>(1);
  const [isOnTop, setOnTop] = useState<boolean>(false);
  const navigate = useNavigate();

  const switchPages = (key: number) => {
    setSelectedOption(key);

    switch (key) {
      case 1:
        navigate("/");
        break;
      case 2:
        navigate("charts");
        break;
      case 3:
        navigate("about");
        break;
      default:
        navigate("/");
        break;
    }
  };

  return (
    <>
      <div
        className="menuBody"
        onMouseEnter={() => setOnTop(true)}
        onMouseLeave={() => setOnTop(false)}
      >
        <MenuOption
          id={1}
          selected={selectedOption}
          text="Home"
          icon={Icons.Home}
          gradientColors={["#7700ff", "#ff00ac"]}
          onClick={(key) => switchPages(key)}
        />
        <MenuOption
          id={2}
          selected={selectedOption}
          text="All charts"
          icon={Icons.Charts}
          gradientColors={["#000eff", "#00ecff"]}
          onClick={(key) => switchPages(key)}
        />
        <MenuOption
          id={3}
          selected={selectedOption}
          text="About"
          icon={Icons.About}
          gradientColors={["#ff8400", "#ff0000"]}
          onClick={(key) => switchPages(key)}
        />
      </div>
      <TransitionGroup>
        {isOnTop ? (
          <CSSTransition timeout={250} classNames="backdropBlur" unmountOnExit>
            <div className="backdrop"></div>
          </CSSTransition>
        ) : null}
      </TransitionGroup>
    </>
  );
};

export default SideMenu;

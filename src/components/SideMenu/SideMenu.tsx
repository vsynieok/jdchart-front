import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createHook } from "react-sweet-state";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Icons from "../../assets/icons/Icons";
import MenuOption from "./MenuOption/MenuOption";
import "./SideMenu.css";
import { SideMenuOption } from "./SideMenuOptions";
import SideMenuStore from "./SideMenuStore";

const useSideMenu = createHook(SideMenuStore);

const SideMenu: React.FunctionComponent = () => {
  const [state, actions] = useSideMenu();
  const [isOnTop, setOnTop] = useState<boolean>(false);
  const navigate = useNavigate();

  const switchPages = (key: number) => {
    actions.setCurrentOption(key);

    switch (key) {
      case SideMenuOption.Home:
        navigate("/");
        break;
      case SideMenuOption.Charts:
        navigate("charts");
        break;
      case SideMenuOption.About:
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
          id={SideMenuOption.Home}
          selected={state.currentOption}
          text="Home"
          icon={Icons.Home}
          gradientColors={["#7700ff", "#ff00ac"]}
          onClick={(key) => switchPages(key)}
        />
        <MenuOption
          id={SideMenuOption.Charts}
          selected={state.currentOption}
          text="All charts"
          icon={Icons.Charts}
          gradientColors={["#000eff", "#00ecff"]}
          onClick={(key) => switchPages(key)}
        />
        <MenuOption
          id={SideMenuOption.About}
          selected={state.currentOption}
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

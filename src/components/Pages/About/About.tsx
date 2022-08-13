import React, { useEffect } from "react";
import { createHook } from "react-sweet-state";
import { SideMenuOption } from "../../SideMenu/SideMenuOptions";
import SideMenuStore from "../../SideMenu/SideMenuStore";

const useSideMenu = createHook(SideMenuStore);

const About: React.FC = () => {
  const [sideMenuStore, sideMenuActions] = useSideMenu();

  useEffect(() => {
    sideMenuActions.setCurrentOption(SideMenuOption.About);
  }, []);

  return <div>ABOUT</div>;
};

export default About;

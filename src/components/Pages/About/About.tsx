import React, { useEffect } from "react";
import { SideMenuOption } from "../../SideMenu/SideMenuOptions";
import useSideMenu from "../../SideMenu/SideMenuStore";

const About: React.FC = () => {
  const [sideMenuStore, sideMenuActions] = useSideMenu();

  useEffect(() => {
    sideMenuActions.setCurrentOption(SideMenuOption.About);
  }, []);

  return <div>ABOUT</div>;
};

export default About;

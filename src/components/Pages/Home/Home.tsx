import React, { useEffect } from "react";
import { SideMenuOption } from "../../SideMenu/SideMenuOptions";
import useSideMenu from "../../SideMenu/SideMenuStore";
import "./Home.css";

const Home: React.FC = () => {
  const [sideMenuStore, sideMenuActions] = useSideMenu();

  useEffect(() => {
    sideMenuActions.setCurrentOption(SideMenuOption.Home);
  }, []);

  return (
    <div className="main">
      <div className="header">
        <div className="header-button"></div>
        <div className="header-button"></div>
      </div>
      <div className="container">
        <div className="bigTile"></div>
        <div className="drawer"></div>
      </div>
    </div>
  );
};

export default Home;

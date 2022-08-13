import React, { useEffect } from "react";
import { createHook } from "react-sweet-state";
import { SideMenuOption } from "../../SideMenu/SideMenuOptions";
import SideMenuStore from "../../SideMenu/SideMenuStore";

const useSideMenu = createHook(SideMenuStore);

const AllCharts: React.FC = () => {
  const [sideMenuStore, sideMenuActions] = useSideMenu();

  useEffect(() => {
    sideMenuActions.setCurrentOption(SideMenuOption.Charts);
  }, []);

  return <div>CHARTS</div>;
};

export default AllCharts;

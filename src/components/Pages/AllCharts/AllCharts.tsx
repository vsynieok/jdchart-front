import React, { useEffect } from "react";
import { SideMenuOption } from "../../SideMenu/SideMenuOptions";
import useSideMenu from "../../SideMenu/SideMenuStore";

const AllCharts: React.FC = () => {
  const [sideMenuStore, sideMenuActions] = useSideMenu();

  useEffect(() => {
    sideMenuActions.setCurrentOption(SideMenuOption.Charts);
  }, []);

  return <div>CHARTS</div>;
};

export default AllCharts;

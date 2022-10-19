import React, { useEffect } from "react";
import { SideMenuOption } from "../../SideMenu/SideMenuOptions";
import useSideMenu from "../../SideMenu/SideMenuStore";
import "./AllCharts.css";
import ChartCategory from "./ChartCategory/ChartCategory";

const AllCharts: React.FC = () => {
  const [sideMenuStore, sideMenuActions] = useSideMenu();

  useEffect(() => {
    sideMenuActions.setCurrentOption(SideMenuOption.Charts);
  }, []);

  return (
    <div className="chartsContainer">
      <ChartCategory name="Weekly" />
      <ChartCategory name="Monthly" />
      <ChartCategory name="Yearly" />
    </div>
  );
};

export default AllCharts;

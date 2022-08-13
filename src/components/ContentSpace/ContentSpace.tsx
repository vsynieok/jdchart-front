import React from "react";
import { Outlet } from "react-router-dom";
import "./ContentSpace.css";
import ContentSpaceProperties from "./Properties";

const ContentSpace: React.FC<ContentSpaceProperties> = (p) => {
  return (
    <div className="contentSpace">
      <Outlet />
    </div>
  );
};

export default ContentSpace;

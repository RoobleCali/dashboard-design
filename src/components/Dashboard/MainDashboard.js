import React, { useContext } from "react";
import "../../App";

import { ThemeContext } from "../darkTheme/Context";
import Center from "./CenterDashboard/CenterDashboard";
import Sidebar from "./leftDashboard/Dashboard-Sidebar";
import Right from "./RightDashboard/Dashboard-Right";

function Dashboard() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="main">
      <div
        className="dashboard"
        style={{
          backgroundColor: darkMode ? "rgb(12, 12, 12)" : "white",
          color: darkMode && "white",
          transition: "0.4s",
        }}
      >
        <Sidebar />
        <Center />
        <Right />
      </div>
    </div>
  );
}

export default Dashboard;

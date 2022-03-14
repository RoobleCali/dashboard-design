import React, { useContext, useState } from "react";
import { MdGridView, MdHome, MdOutlineLocalGasStation } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import { RiBillLine, RiTeamLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { RiMenu5Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import DarkTheme from "../../darkTheme/DarkTheme";
import { ThemeContext } from "../../darkTheme/Context";
function Sidebar() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="side-bar">
      <div className="humbager" onClick={() => setShowLinks(!showLinks)}>
        <RiMenu5Fill />
      </div>
      <div
        className="nav-items"
        style={{ color: darkMode ? "white" : "black" }}
        id={showLinks ? "hidden" : ""}
      >
        <ul>
          <li
            className="nav-link"
            style={{ color: darkMode ? "white" : "black" }}
          >
            <NavLink
              to="/"
              className="nav-link "
              id="active"
              style={{ color: darkMode ? "white" : "black" }}
            >
              <MdHome />
              <div className="link-name ">
                <span> Home</span>
              </div>
            </NavLink>
          </li>
          <li className="nav-link ">
            <NavLink
              to="/"
              className="nav-link"
              style={{ color: darkMode ? "white" : "black" }}
            >
              <GiTrophyCup />
              <div className="link-name">
                <span>Projects</span>
              </div>
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/"
              className="nav-link"
              style={{ color: darkMode ? "white" : "black" }}
            >
              <RiBillLine />
              <div className="link-name">
                <span>Billing</span>
              </div>
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/"
              className="nav-link"
              style={{ color: darkMode ? "white" : "black" }}
            >
              <RiTeamLine />
              <div className="link-name">
                <span>Team</span>
              </div>
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/"
              className="nav-link"
              style={{ color: darkMode ? "white" : "black" }}
            >
              <MdOutlineLocalGasStation />
              <div className="link-name">
                <span>Stats</span>
              </div>
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/"
              className="nav-link "
              style={{ color: darkMode ? "white" : "black" }}
            >
              <FiSettings />
              <div className="link-name">
                <span> Settings</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

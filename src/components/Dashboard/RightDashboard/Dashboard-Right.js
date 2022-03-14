import React, { useContext } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsFillPersonFill, BsFillCalendarEventFill } from "react-icons/bs";
import Chart from "./Chart";
import { ThemeContext } from "../../darkTheme/Context";

function Right() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="right-bar" style={{ paddingtop: "10px" }}>
      <h2 style={{ color: darkMode ? "white " : "white" }}>Sales Revenue</h2>{" "}
      <br />
      <div className="items-right-bar">
        <div className="item">
          <div
            className="item-left"
            style={{ color: darkMode ? "black " : "black" }}
          >
            <AiFillDollarCircle />
          </div>
          <div
            className="item-right"
            style={{ color: darkMode ? "white " : "white" }}
          >
            <h3>370k</h3> <p>sells</p>
          </div>
        </div>
        <div className="item">
          <div
            className="item-left"
            style={{ color: darkMode ? "black " : "black" }}
          >
            <BsFillPersonFill />
          </div>
          <div
            className="item-right"
            style={{ color: darkMode ? "white " : "white" }}
          >
            <h3>370k</h3> <p>customers</p>
          </div>
        </div>
        <div className="item">
          <div
            className="item-left"
            style={{ color: darkMode ? "black " : "black" }}
          >
            <BsFillCalendarEventFill />
          </div>
          <div
            className="item-right"
            style={{ color: darkMode ? "white " : "white" }}
          >
            <h3>370k</h3> <p>revenue</p>
          </div>
        </div>
      </div>
      <div className="graph">
        <Chart />
      </div>
    </div>
  );
}

export default Right;

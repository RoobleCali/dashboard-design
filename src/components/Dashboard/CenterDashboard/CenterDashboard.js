import React, { useContext, useState } from "react";
// icons
import { FaAngleDoubleUp, FaAngleUp, FaAngleDoubleDown } from "react-icons/fa";
import { BsSearch, BsFillEyeFill, BsSliders } from "react-icons/bs";
import { IoIosApps } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
// progress bar
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DarkTheme from "../../darkTheme/DarkTheme";
import { ThemeContext } from "../../darkTheme/Context";
function Center() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  // data
  const Data = [
    {
      views: 3021,
      visit: 3430,
      order: "9,320",
      sales: "3,681",
      profit: "9,281",
      visits: "9,389",
      orders: "7,920",
    },
  ];
  let price = Data;
  return (
    <div className="center-bar">
      {" "}
      {Data.map((d) => (
        <>
          <div className="up-center">
            <form>
              <div
                className="search"
                style={{ color: darkMode ? "#333" : "#333" }}
              >
                <BsSearch />
                <input type="text" placeholder="search" />
              </div>
              <DarkTheme />
            </form>
          </div>
          <div className="top-center">
            <div className="user-info">
              <h2>Hello abdulaahi</h2>
              <p>welcome back !</p>
            </div>
            <div className="search-filter">
              <p>Filter</p>
              <div className="filter-icon">
                <BsSliders />
              </div>
            </div>
          </div>
          <div
            className="data-display"
            style={{
              color: darkMode ? "#333" : "#333",
            }}
          >
            {/* data */}
            <div className="data-cards">
              <div className="data-card-overview">
                <div className="data-card-left">
                  <div className="viewers">
                    <div className="view-icon">
                      <BsFillEyeFill />
                    </div>
                    <small>views</small>
                  </div>
                  <h2>{d.views}</h2>
                  <small>per Day</small>
                </div>
                <div className="data-card-right">
                  <div className="visits">
                    <div className="visit-icon">
                      <IoIosApps />
                    </div>
                    <small>visits</small>
                  </div>
                  <h2>{d.visit}</h2>
                  <small>per Day</small>
                </div>
              </div>
              <div className="data-card-orders">
                <div className="data-card-right">
                  <div className="visits">
                    <div className="visit-icon">
                      <AiOutlineShoppingCart />
                      <div className="ordered-icon"></div>
                    </div>
                    <small>orders</small>
                  </div>
                  <h2>{d.order}</h2>
                  <small>per Day</small>
                </div>
                <div className="menu-icon">
                  <BiMenu />
                </div>
              </div>

              {/* overview data about viewers and visits */}

              {/* overview data about orders */}
            </div>
            {/* overview sales, profit, orders and vists data */}
            <div className="overview-details">
              <div className="detail-card sales">
                <div className="detail-card-left">
                  <h2>Sales</h2>
                  <small>Total sales</small>
                  <h2>{d.sales}</h2>
                </div>
                <div className="detail-card-right">
                  <div className="data-arrow" style={{ color: "red" }}>
                    <FaAngleDoubleDown />
                  </div>
                  <div
                    className="progress"
                    style={{
                      width: 50,
                      height: 50,
                      textColor: "#f88",
                      trailColor: "#d6d6d6",
                      pathColor: "white",
                      strokeWidth: "10",
                    }}
                  >
                    <CircularProgressbar value={90} text={"90%"} />
                  </div>
                </div>
              </div>
              <div className="detail-card profit">
                <div className="detail-card-left">
                  <h2>profit</h2>
                  <small>Total profit today</small>
                  <h2>${d.profit}</h2>
                </div>
                <div className="detail-card-right ">
                  <div className="data-arrow">
                    <FaAngleDoubleUp />
                  </div>
                  <div
                    className="progress"
                    style={{
                      width: 50,
                      height: 50,
                      textColor: "#f88",
                      trailColor: "#d6d6d6",
                      pathColor: "white",
                    }}
                  >
                    <CircularProgressbar value={70} text={"70%"} />
                  </div>
                </div>
              </div>
            </div>
            {/* detail data overview */}
            <div className="overview-details">
              <div className="detail-card orders">
                <div className="detail-card-left">
                  <h2>orders</h2>
                  <small>Total orders today</small>
                  <h2>{d.orders}</h2>
                </div>
                <div className="detail-card-right">
                  <div className="data-arrow">
                    <FaAngleUp />
                  </div>
                  <div
                    className="progress"
                    style={{
                      width: 50,
                      height: 50,
                      textColor: "#f88",
                      trailColor: "#d6d6d6",
                      pathColor: "white",
                      strokeWidth: "10",
                    }}
                  >
                    <CircularProgressbar value={50} text={"50%"} />
                  </div>
                </div>
              </div>
              <div className="detail-card visits">
                <div className="detail-card-left">
                  <h2>visits</h2>
                  <small>Total visits today</small>
                  <h2>{d.visits}</h2>
                </div>
                <div className="detail-card-right">
                  <div className="data-arrow">
                    <FaAngleDoubleUp />
                  </div>
                  <div
                    className="progress"
                    style={{
                      width: 50,
                      height: 50,
                      textColor: "#f88",
                      trailColor: "#d6d6d6",
                      pathColor: "white",
                      strokeWidth: "20",
                    }}
                  >
                    <CircularProgressbar value={40} text={"40%"} />
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      ))}
    </div>
  );
}

export default Center;

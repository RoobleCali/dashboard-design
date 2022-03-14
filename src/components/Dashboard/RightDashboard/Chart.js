import React from "react";
import "../../../App";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const Chart = () => {
  const data = [
    { name: "sales", total: 210 },
    { name: "profit", total: 320 },
    { name: "orders", total: 403 },
    { name: "visit", total: 490 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <div
        className="Chart"
        style={{ marginLeft: "-100px", textAlign: "center" }}
      >
        <h1
          style={{ marginLeft: "70%", paddingBottom: "10px", color: "white" }}
        >
          Statistics
        </h1>
        <BarChart
          width={360}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 34,
            left: 90,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="total" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default Chart;

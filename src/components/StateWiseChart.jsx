import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const StateWiseChart = ({ data }) => {
  const chartData = Object.keys(data).map((state) => ({
    name: state,
    value: data[state],
  }));

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
  );
};

export default StateWiseChart;

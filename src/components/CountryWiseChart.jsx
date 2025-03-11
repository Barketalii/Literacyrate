import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const CountryWiseChart = ({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [{
      label: "Country Wise Students",
      data: Object.values(data),
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
    }],
  };

  return <Pie data={chartData} />;
};

export default CountryWiseChart;

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const LiteracyChart = ({ literacyData }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={literacyData}>
        <XAxis dataKey="country" stroke="#FF9800" />
        <YAxis stroke="#FF9800" />
        <Tooltip />
        <Bar dataKey="literacyRate" fill="#FF9800" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default LiteracyChart;

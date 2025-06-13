// components/DoughnutChart.tsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["سلبي", "ايجابي", "محايد"],
  datasets: [
    {
      label: "نسبة المشاعر",
      data: [12, 19, 5],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      borderColor: "#1f2937",
      borderWidth: 2,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      labels: {
        color: "#ffffff",
        font: {
          size: 14,
        },
      },
    },
    tooltip: {
      backgroundColor: "#1f2937",
      titleColor: "#fff",
      bodyColor: "#e5e7eb",
    },
  },
};

const DoughnutChart = () => {
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;

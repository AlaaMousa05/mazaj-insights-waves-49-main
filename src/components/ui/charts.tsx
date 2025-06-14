import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { analysisData } from "@/data/analysisData";

ChartJS.register(ArcElement, Tooltip, Legend);

const total =
  analysisData.overall_positive +
  analysisData.overall_negative +
  analysisData.overall_neutral;

const data = {
  labels: ["سلبي", "ايجابي", "محايد"],
  datasets: [
    {
      label: "نسبة المشاعر",
      data: [
        Math.round((analysisData.overall_negative / total) * 100),
        Math.round((analysisData.overall_positive / total) * 100),
        Math.round((analysisData.overall_neutral / total) * 100),
      ],
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
      callbacks: {
        label: function (context: any) {
          return `${context.label}: ${context.parsed}%`;
        },
      },
    },
  },
};

const DoughnutChart = () => {
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;

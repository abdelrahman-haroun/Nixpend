import React, { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const BarChart = () => {
  const [value, setValue] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8080/label");
      setValue(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const labels = value.map((el) => el.title);
  const dataA = value.map((el) => el.taskId.length);
  const colors = value.map((el) => el.color);

  const data = {
    labels: labels.reverse(),
    datasets: [
      {
        label: "Tasks",
        backgroundColor: colors.reverse(),
        borderColor: "rgb(255, 99, 132)",
        data: dataA.reverse(),
      },
    ],
  };

  const options = {
    indexAxis: "y",
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;

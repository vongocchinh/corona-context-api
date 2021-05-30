/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Line } from "react-chartjs-2";
import { useState } from "react";

export const Chart = ({getAll, optionCounty, dailyData, country, setOption }) => {
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    if (e.target.value === "1") {
      setShow(false);
      getAll();
    } else {
      e.preventDefault();
      setOption(e.target.value);
      setShow(true);
    }
  };

  const lineChart = dailyData&&dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map((data) => data.Country),
        datasets: [
          {
            data: dailyData.map((data) => data.TotalConfirmed),
            label: "Lấy Nhiễm",
            borderColor: "#3333ff",
            fill: false,
          },
          {
            data: dailyData.map((data) => data.TotalDeaths),
            label: "Tử Vong",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: false,
          },
          {
            data: dailyData.map((data) => data.TotalRecovered),
            label: "Hồi Phuc",
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            fill: false,
          },
        ],
      }}
    />
  ) : null;

  const lineChart2 = optionCounty[0] ? (
    <Line
      data={{
        labels: optionCounty.map((data) => data.Date),
        datasets: [
          {
            data: optionCounty.map((data) => data.Confirmed),
            label: "Lây Nhiễm",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: optionCounty.map((data) => data.Deaths),
            label: "Tử Vong",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
          {
            data: optionCounty.map((data) => data.Recovered),
            label: "Hồi Phục",
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : <p className="ld">Quốc Gia Chưa Có Dữ Liệu</p>;

  return (
    <div className="chart-container">
      <div className="option-chart">
        <select onChange={handleChange}>
          <option value={"1"}>Global</option>
          {country &&
            country.map((value, key) => {
              return (
                <option key={key} value={value && value.Slug}>
                  {value.Country}
                </option>
              );
            })}
        </select>
      </div>
      {show ? lineChart2 : lineChart}
    </div>
  );
};

export default Chart;

// const barChart = (
//   optionCounty ? (
//       <Bar
//         data={{
//           labels: ['Infected', 'Recovered', 'Deaths'],
//           datasets: [
//             {
//               label: 'People',
//               backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
//               data: [confirmed.value, recovered.value, deaths.value],
//             },
//           ],
//         }}
//         options={{
//           legend: { display: false },
//           title: { display: true, text: `Current state in ${country}` },
//         }}
//       />
//     ) : null
//   );
// console.log(optionCounty&&dailyData[0].Date);new Date(data.Date).toLocaleDateString()

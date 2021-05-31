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

  optionCounty=optionCounty&&optionCounty.slice(optionCounty.length-14,optionCounty.length);

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
  ) : <p className="ld">Đang Chờ Dữ Liệu</p>;

  const lineChart2 = optionCounty[0] ? (
    <Line
      data={{
        labels: optionCounty.map((data) => (new Date(data.Date)).toLocaleString().split(',')[1]),
        datasets: [
          {
            data: optionCounty.map((data) => data.Confirmed),
            label: "Lây Nhiễm",
            borderColor: "#3333ff",
            fill: false,
          },
          {
            data: optionCounty.map((data) => data.Deaths),
            label: "Tử Vong",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: false,
          },
          {
            data: optionCounty.map((data) => data.Recovered),
            label: "Hồi Phục",
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            fill: false,
          },
        ],
      }}
    />
  ) : <p className="ld">Đang Chờ Dữ Liệu</p>;
  country&&country.sort((a,b)=>(a.Country>b.Country) ? 1 : ((b.Country>a.Country) ?  -1 : 0 ));
  return (
    <div className="chart-container">
      <h4>Thống Kê Thế Giới</h4>
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
      <div className="chart-model">
      {show ? lineChart2 : lineChart}
      </div>
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

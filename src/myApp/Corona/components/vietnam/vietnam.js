import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FORMAT_CURRENT } from "./../../constant/corona";
import { Line, Bar } from "react-chartjs-2";
export const VietNam = ({ item, arr }) => {
  // console.log(item);
  // console.log(arr);

  if (!arr) return <p className="ld">Loading</p>;
  arr = arr.slice(arr.length - 14, arr.length);
  const lineChart =
    arr && arr[0] ? (
      <Line
        data={{
          labels: arr.map(
            (data) => new Date(data.Date).toLocaleString().split(",")[1]
          ),
          datasets: [
            {
              data: arr.map((data) => data.Confirmed),
              label: "Lấy Nhiễm",
              borderColor: "#3333ff",
              fill: false,
            },
            {
              data: arr.map((data) => data.Deaths),
              label: "Tử Vong",
              borderColor: "red",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              fill: false,
            },
            {
              data: arr.map((data) => data.Recovered),
              label: "Hồi Phuc",
              borderColor: "green",
              backgroundColor: "rgba(0, 255, 0, 0.5)",
              fill: false,
            },
          ],
        }}
      />
    ) : null;

  const barChart = item ? (
    <Bar
      data={{
        labels: ["Lây Nhiễm", "Phục Hồi", "Tử Vong"],
        datasets: [
          {
            label: "Thống Kê Chung",
            backgroundColor: [
              "#007DF2",
              "#0ACC0A",
              "#CC0A0A",
            ],
            data: [
              item.cases && item.cases,
              item.recovered&&item.recovered,
              item.deaths && item.deaths,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in Viet Nam` },
      }}
    />
  ) : null;
  const barChart2 = item ? (
    <Bar
      data={{
        labels: ["Lây Nhiễm", "Phục Hồi", "Tử Vong"],
        datasets: [
          {
            label: "Hôm Nay",
            backgroundColor: [
              "#007DF2",
              "#0ACC0A",
              "#CC0A0A",
              
            ],
            data: [
              item.todayCases && item.todayCases,
              item.todayRecovered&&item.todayRecovered,
              item.todayDeaths && item.todayDeaths,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in Viet Nam` },
      }}
    />
  ) : null;
  return (
    <div className="vn-layout-container">
      <h4>Thống Kê Việt Nam</h4>

      <div className="vn-container">
        <div className="vn-container-left">
          <Card className="card-app-vn">
            <CardActionArea className="CardActionArea-vn">
              <CardContent>
                <Typography gutterBottom variant="h6" component="h4">
                  Việt Nam
                </Typography>
                <Typography variant="h6" component="h6">
                  Số Ca Lây Nhiễm:{" "}
                  {item.cases ? FORMAT_CURRENT(item.cases) : <p>...</p>}
                </Typography>
                <Typography variant="body2" component="h4">
                  Số Dân Số :{" "}
                  {item.population && FORMAT_CURRENT(item.population)}
                </Typography>
                <Typography variant="body2" component="h4">
                  Số Ca Chết : {item.deaths && FORMAT_CURRENT(item.deaths)}
                </Typography>
                <Typography variant="body2" component="h4">
                  Số Ca Khỏi :{" "}
                  {item.recovered && FORMAT_CURRENT(item.recovered)}
                </Typography>
                <Typography variant="body2" component="h4">
                  Số Ca Lây Nhiễm Hôm Nay:{" "}
                  {item.todayCases && FORMAT_CURRENT(item.todayCases)}
                </Typography>
                <Typography variant="body2" component="h4">
                  Số Ca Chết Hôm Nay :{" "}
                  {item.todayDeaths && FORMAT_CURRENT(item.todayDeaths)}
                </Typography>
                <Typography variant="body2" component="h4">
                  Số Ca Khỏi Hôm Nay :{" "}
                  {item.todayRecovered && FORMAT_CURRENT(item.todayRecovered)}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Cập Nhật: {new Date(item.updated).toDateString()}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="vn-container-right">{lineChart}</div>
      </div>
      <div className="bar-chart">
        <div className="bar-chart-1">
        {barChart}
        </div>
        <div className="bar-chart-2">
        {barChart2}
        </div>
      </div>
    </div>
  );
};

export default VietNam;

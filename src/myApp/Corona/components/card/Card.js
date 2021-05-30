import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FORMAT_CURRENT } from "../../constant/corona";

export const Cards = ({ item }) => {
    if(!item) return <p className="ld">Loading</p>
  return (
    <div className="card-container">
      <div className="card">
        <Card className="card-app">
          <CardActionArea className="CardActionArea">
            <CardContent>
              <Typography gutterBottom variant="h6" component="h4">
               Tổng Số Ca Lây Nhiễm
              </Typography>
              <Typography variant="h6" component="h6">
                {item.cases ? FORMAT_CURRENT(item.cases) : <p>...</p>}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {new Date(item.updated).toDateString()}
              </Typography>
              <Typography variant="body2" component="h4">
              Số Ca Lây Nhiễm Hôm Nay: {item.todayCases&&FORMAT_CURRENT(item.todayCases)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="card-app">
          <CardActionArea className="CardActionArea">
            <CardContent>
              <Typography gutterBottom variant="h6" component="h4">
              Tổng Số Ca Phục Hồi
              </Typography>
              <Typography variant="h6" component="h6">
                {item.recovered ? FORMAT_CURRENT(item.recovered) : <p>...</p>}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {new Date(item.updated).toDateString()}
              </Typography>
              <Typography variant="body2" component="p">
              Số Ca Phục Hồi Mới : {item.todayRecovered&&FORMAT_CURRENT(item.todayRecovered)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="card-app">
          <CardActionArea className="CardActionArea">
            <CardContent>
              <Typography gutterBottom variant="h6" component="h4">
              Tổng Số Người Chết
              </Typography>
              <Typography variant="h6" component="h6">
                {item.deaths ? FORMAT_CURRENT(item.deaths ): <p>...</p>}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {new Date(item.updated).toDateString()}
              </Typography>
              <Typography variant="body2" component="h4">
               Số Người Chết Mới : {item.todayDeaths&&FORMAT_CURRENT(item.todayDeaths)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="card-app">
          <CardActionArea className="CardActionArea">
            <CardContent>
              <Typography gutterBottom variant="h6" component="h4">
              Tổng Dân Số Thế Giới  
              </Typography>
              <Typography variant="h6" component="h6">
                {item.population ? FORMAT_CURRENT(item.population ): <p>...</p>}
              </Typography>
              <Typography variant="body2" component="h4">
               Số Quốc Gia Ảnh Hưởng : {item.affectedCountries&&FORMAT_CURRENT(item.affectedCountries)}
              </Typography>
              <Typography variant="body2" component="h4">
               Cách Ly Xét Nghiệm : {item.tests&&FORMAT_CURRENT(item.tests)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Cards;

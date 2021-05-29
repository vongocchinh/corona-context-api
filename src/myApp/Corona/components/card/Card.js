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
              <Typography gutterBottom variant="h5" component="h2">
               Tổng Số Ca Lây Nhiễm
              </Typography>
              <Typography variant="h6" component="h6">
                {item.global ? FORMAT_CURRENT(item.global.TotalConfirmed) : <p>...</p>}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {new Date(item.date).toDateString()}
              </Typography>
              <Typography variant="body2" component="h4">
              Số Ca Lây Nhiễm Mới: {item.global&&FORMAT_CURRENT(item.global.NewConfirmed)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="card-app">
          <CardActionArea className="CardActionArea">
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Tổng Số Ca Phục Hồi
              </Typography>
              <Typography variant="h6" component="h6">
                {item.global ? FORMAT_CURRENT(item.global.TotalRecovered) : <p>...</p>}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {new Date(item.date).toDateString()}
              </Typography>
              <Typography variant="body2" component="p">
              Số Ca Phục Hồi Mới : {item.global&&FORMAT_CURRENT(item.global.NewRecovered)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="card-app">
          <CardActionArea className="CardActionArea">
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Tổng Số Người Chết
              </Typography>
              <Typography variant="h6" component="h6">
                {item.global ? FORMAT_CURRENT(item.global.TotalDeaths ): <p>...</p>}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {new Date(item.date).toDateString()}
              </Typography>
              <Typography variant="body2" component="h4">
               Số Người Chết Mới : {item.global&&FORMAT_CURRENT(item.global.NewDeaths)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Cards;

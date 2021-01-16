import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const useStyles = makeStyles({
  media: {
    height: 240,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Styled.MediaCard>
      <Card className="card__item">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image || ""}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.subtitle}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
            Share
          </Button> */}
          <Button size="small" color="primary">
            더 보기
          </Button>
        </CardActions>
      </Card>
    </Styled.MediaCard>
  );
}

const Styled = {
  MediaCard: styled.div`
    .card__item {
      /* float: left; */
      /* max-width: 360px; */
      width: 100%;
      margin-right: 10px;
      margin-bottom: 15px;
      /* &:last-child {
        margin-right: 0;
      } */
    }
  `,
};

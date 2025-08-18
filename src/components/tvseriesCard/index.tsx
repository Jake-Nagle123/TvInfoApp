import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import img from '../../images/film-poster-placeholder.png';
import { BaseTvSeriesProps } from "../../types/interfaces";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
};

const TvSeriesCard: React.FC<BaseTvSeriesProps> = (series) => { 
  return (
    <Card sx={styles.card}>
      <CardHeader title={series.name} />
      <CardMedia
        sx={styles.media}
        image={
          series.poster_path
            ? `https://image.tmdb.org/t/p/w500/${series.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {series.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
                {"  "} {series.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/tvseries/${series.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default TvSeriesCard;
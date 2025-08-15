import React from "react";
import TvSeriesHeader from "../components/headerTvSeriesList";
import Grid from "@mui/material/Grid";
import TvSeriesList from "../components/tvSeriesList";
import { BaseTvSeriesListProps } from "../types/interfaces";
 
const styles = {
  root: {
    padding: "20px",
  },
};

const TvSeriesMainPage: React.FC<BaseTvSeriesListProps> = ({series}) => {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <TvSeriesHeader name={"Tv Series Home Page"} />
      </Grid>
      <Grid item container spacing={5}>
        <TvSeriesList series={series}></TvSeriesList>
      </Grid>
    </Grid>
  );
};

export default TvSeriesMainPage;
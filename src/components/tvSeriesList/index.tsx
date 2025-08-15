import React from "react";
import TvSeries from "../tvseriesCard";
import Grid from "@mui/material/Grid";
import { BaseTvSeriesListProps } from "../../types/interfaces";

const TvSeriesList: React.FC<BaseTvSeriesListProps> = ({series}) => {
  const tvSeriesCards = series.map((s) => (
    <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TvSeries key={s.id} {...s} />
    </Grid>
  ));
  return tvSeriesCards;
}

export default TvSeriesList;
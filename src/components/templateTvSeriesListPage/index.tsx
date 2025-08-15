import React from "react";
import TvSeriesHeader from "../headerTvSeriesList";
import Grid from "@mui/material/Grid";
import TvSeriesList from "../tvSeriesList";
import { TvSeriesListPageTemplateProps } from "../../types/interfaces";

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

const TvSeriesListPageTemplate: React.FC<TvSeriesListPageTemplateProps> = ({ series, name }) => {
  return (
   <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <TvSeriesHeader name={name} />
        </Grid>
        <Grid item container spacing={5}>
          <TvSeriesList
            series={series}
          />
        </Grid>
      </Grid>
    </>  
  );
}
export default TvSeriesListPageTemplate;
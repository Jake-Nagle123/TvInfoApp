import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import DateRangeIcon from '@mui/icons-material/DateRange';
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import TvIcon from '@mui/icons-material/Tv';
import Typography from "@mui/material/Typography";
import { TvSeriesDetailsProps } from "../../types/interfaces";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import TvSeriesReviews from '../tvSeriesReviews';

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: {
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const TvSeriesDetails: React.FC<TvSeriesDetailsProps> = (series) => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {series.overview}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {series.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <Chip icon={<DateRangeIcon />} label={`${series.number_of_seasons} seasons.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`Ep: ${series.number_of_episodes}`}
        />
        <Chip
          icon={<TvIcon />}
          label={`${series.vote_average} (${series.vote_count}`}
        />
        <Chip label={`Last Episode Date: ${series.last_air_date}`} />
      </Paper>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="bottom" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <TvSeriesReviews {...series} />
      </Drawer>
    </>
  );
};

export default TvSeriesDetails;
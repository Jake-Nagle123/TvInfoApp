import React, { useState } from "react";
import FilterCard from "../filterMoviesCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import { Filters } from "../../types/interfaces";

export const titleFilter = (item: Filters, value: string): boolean => {
  return ("title" in item ? item.title : item.name).toLowerCase().search(value.toLowerCase()) !== -1;
};

export const genreFilter = (item: Filters, value: string) => {
  const genreId = Number(value);
  const genreIds = item.genre_ids;
  return genreId > 0 && genreIds ? genreIds.includes(genreId) : true;
};

export const voteFilter = (item: Filters, value: string): boolean => {
  return item.vote_average > Number(value);
};

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 20,
    right: 2,
  },
};

interface MovieFilterUIProps {
  onFilterValuesChange: (f: string, s: string) => void;
  titleFilter: string;
  genreFilter: string;
  voteFilter?: string;
}

const MovieFilterUI: React.FC<MovieFilterUIProps> = ({ onFilterValuesChange, titleFilter, genreFilter }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={onFilterValuesChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
        />
      </Drawer>
    </>
  );
};

export default MovieFilterUI;
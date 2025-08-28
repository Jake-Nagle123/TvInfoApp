import React, { useContext } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { BaseActorProps } from "../../types/interfaces";
import Avatar from "@mui/material/Avatar";
import GradeIcon from '@mui/icons-material/Grade';
import { ActorsContext } from "../../contexts/actorsContext";

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
    },
    avatar: {
      backgroundColor: "rgb(255, 0, 0)",
    },
  };

const ActorHeader: React.FC<BaseActorProps> = (actor) => {
  const { favourites } = useContext(ActorsContext);

  const favouriteActors = favourites.find((id) => id === actor.id)? true : false;
  
  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>
      {
        favouriteActors ? (
          <Avatar sx={styles.avatar}>
            <GradeIcon />
          </Avatar>
        ) : null
      }
      <Typography variant="h4" component="h3">
        {actor.name}{"   "}
        <a href={actor.homepage}>
          <HomeIcon color="primary" fontSize="large"/>
        </a>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default ActorHeader;
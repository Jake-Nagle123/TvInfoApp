import React from "react";
import Actors from "../actorCard";
import Grid from "@mui/material/Grid";
import { BaseActorListProps } from "../../types/interfaces";

const ActorList: React.FC<BaseActorListProps> = ({actors}) => {
  const actorCards = actors.map((a) => (
    <Grid key={a.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Actors key={a.id} {...a} />
    </Grid>
  ));
  return actorCards;
}

export default ActorList;
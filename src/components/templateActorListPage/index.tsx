import React from "react";
import ActorHeader from "../headerActorList";
import Grid from "@mui/material/Grid";
import ActorList from "../actorList";
import { ActorListPageTemplateProps } from "../../types/interfaces";

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  }
};

const ActorListPageTemplate: React.FC<ActorListPageTemplateProps> = ({ actors, name }) => {
  return (
   <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <ActorHeader name={name} />
        </Grid>
        <Grid item container spacing={5}>
          <ActorList
            actors={actors}
          ></ActorList>
        </Grid>
      </Grid>
    </>  
  );
};

export default ActorListPageTemplate;
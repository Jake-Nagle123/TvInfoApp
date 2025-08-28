import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import PlaceIcon from '@mui/icons-material/Place';
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { BaseActorProps } from "../../types/interfaces";

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
};

enum Gender {
  NotSet = 0,
  Female = 1,
  Male = 2,
  NonBinary = 3,
}

const ActorDetails: React.FC<BaseActorProps> = (actor) => {

  const genderLabel = Gender[actor.gender]

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label={`Birthday: ${actor.birthday}`} sx={styles.chipLabel} />
        </li>
        <li>
          <Chip label={`Deathday: ${actor.deathday}`} />
        </li>
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <Chip
          icon={<PlaceIcon />}
          label={`${actor.place_of_birth}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${actor.popularity}`}
        />
        <Chip label={`Gender: ${genderLabel}`} />
      </Paper>
    </>
  );
};

export default ActorDetails;
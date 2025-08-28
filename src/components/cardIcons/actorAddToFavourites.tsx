import React, {MouseEvent, useContext} from "react";
import { ActorsContext } from "../../contexts/actorsContext";
import IconButton from "@mui/material/IconButton";
import GradeIcon from '@mui/icons-material/Grade';
import { BaseActorProps } from "../../types/interfaces";

const AddToFavouritesActorIcon: React.FC<BaseActorProps> = (actor) => {
  const context = useContext(ActorsContext);

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.addToFavourites(actor);
  };
  return (
    <IconButton aria-label="add to actor favorites" onClick={onUserSelect}>
      <GradeIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesActorIcon;
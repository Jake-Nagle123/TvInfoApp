import React from "react";
import PageTemplate from "../components/templateActorListPage";
import { getActors } from "../api/tmdb-api";
import { PopularActors } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
// import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'; -feature to add later

const ActorPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<PopularActors, Error>("popular", getActors);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actors = data ? data.results : [];
  
  return (
    <>
      <PageTemplate
        name="Popular Actors"
        actors={actors}
      />
    </>
  );
};

export default ActorPage;
import React, { useContext } from "react";
import PageTemplate from "../components/templateActorListPage";
import { ActorsContext } from "../contexts/actorsContext";
import { useQueries } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/actorRemoveFromFavourites";


const FavouriteActorsPage: React.FC = () => {
const { favourites: actorIds } = useContext(ActorsContext);

  // Create an array of queries and run them in parallel.
  const favouriteActorQueries = useQueries(
    actorIds.map((actorId) => {
      return {
        queryKey: ["actor", actorId],
        queryFn: () => getActor(actorId.toString()),
      };
    })
  );

  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteActorQueries.find((a) => a.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const allFavourites = favouriteActorQueries.map((q) => q.data);
  const displayedActors = allFavourites || [];
 
  return (
    <>
      <PageTemplate
        name="Favourite Actors"
        actors={displayedActors}
        action={(actor) => {
          return (
            <>
              <RemoveFromFavourites {...actor} />
            </>
          );
        }}
      />
    </>
  );
};

export default FavouriteActorsPage;
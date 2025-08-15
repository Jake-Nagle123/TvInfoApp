import React from "react";
import { useParams } from "react-router-dom";
import TvSeriesDetails from "../components/tvSeriesDetails";
import PageTemplate from "../components/templateTvSeriesPage";
import { getOneTvSeries } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { TvSeriesDetailsProps } from "../types/interfaces";

const TvSeriesDetailsPage: React.FC = () => {
  const { id } = useParams();
const { data: series, error, isLoading, isError } = useQuery<TvSeriesDetailsProps, Error>(
    ["series", id],
    () => getOneTvSeries(id || "")
  );
  
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {series ? (
      <>
        <PageTemplate series={series}>
          <TvSeriesDetails {...series} />
        </PageTemplate>
      </>
      ) : (
        <p>Waiting for tv series details</p>
      )}
    </>
  );
};

export default TvSeriesDetailsPage;
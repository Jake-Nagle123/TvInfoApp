import React from "react";
import PageTemplate from "../components/templateTvSeriesListPage";
import { getAllTvServies } from "../api/tmdb-api";
import { DiscoverTvSeries } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";


const TvSeriesMainPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverTvSeries, Error>("DiscoverSeries", getAllTvServies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const series = data ? data.results : [];

  return (
    <>
      <PageTemplate
        name="Discover Tv Series"
        series={series}
      />
    </>
  );
};

export default TvSeriesMainPage;
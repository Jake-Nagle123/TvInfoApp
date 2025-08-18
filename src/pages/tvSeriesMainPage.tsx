import React from "react";
import PageTemplate from "../components/templateTvSeriesListPage";
import { getAllTvServies } from "../api/tmdb-api";
import { DiscoverTvSeries } from "../types/interfaces";
import { useQuery } from "react-query";
import useFiltering from "../hooks/useFiltering";
import Spinner from "../components/spinner";
import TvSeriesFilterUI, {
  titleFilter,
  genreFilter
} from "../components/tvSeriesFilterUI";


const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const TvSeriesMainPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverTvSeries, Error>("DiscoverSeries", getAllTvServies);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [titleFiltering, genreFiltering]
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet = 
      type === "title"
      ? [changedFilter, filterValues[1]]
      : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const series = data ? data.results : [];
  const displayedMovies = filterFunction(series);

  return (
    <>
      <PageTemplate
        name="Discover Tv Series"
        series={displayedMovies}
      />
      <TvSeriesFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};

export default TvSeriesMainPage;
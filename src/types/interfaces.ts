export interface BaseMovieProps {
  title: string;
  budget: number;
  homepage: string | undefined;
  id: number;
  imdb_id: string;
  original_language: string;
  overview: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  poster_path?: string;
  tagline: string;
  runtime: number;
  revenue: number;
  vote_count: number;
  favourite?: boolean;
  genre_ids?: number[];
}

export interface BaseMovieListProps {
  movies: BaseMovieProps[];
  action: (m: BaseMovieProps) => React.ReactNode;
}

export interface MovieDetailsProps extends BaseMovieProps {
  genres: {
    id: number;
    name: string;
  }[];
}

export interface MovieImage {
  file_path: string;
  aspect_ratio?: number;
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface MoviePageProps {
  movie: MovieDetailsProps;
  images: MovieImage[];
}

export type FilterOption = "title" | "genre" | "name";

export interface MovieListPageTemplateProps extends BaseMovieListProps {
  title: string;
}

export interface Review {
  id: string;
  content: string;
  author: string;
}

export interface GenreData {
  genres: {
    id: string;
    name: string;
  }[];
}

export interface DiscoverMovies {
  page: number;
  total_pages: number;
  total_results: number;
  results: BaseMovieProps[];
}

export interface Review {
  author: string,
  content: string,
  agree: boolean,
  rating: number,
  movieId: number,
}

export interface PopularMovies extends DiscoverMovies {
  vote_average: number;
}

export interface BaseTvSeriesProps {
  name: string;
  id: number;
  homepage: string | undefined;
  overview: string;
  popularity: number;
  last_air_date: string;
  first_air_date: string;
  in_production: boolean;
  vote_average: number;
  vote_count: number;
  next_episode_to_air: string;
  number_of_episodes: number;
  number_of_seasons: number;
  tagline: string;
  type: string;
  status: string;
  original_language: string;
  original_name: string;
  poster_path?: string;
  genre_ids?: number[];
}

export interface TvSeriesDetailsProps extends BaseTvSeriesProps {
  genres: {
    id: number;
    name: string;
  }[];
}

export interface BaseTvSeriesListProps {
  series: BaseTvSeriesProps[];
}

export interface TvSeriesListPageTemplateProps extends BaseTvSeriesListProps {
  name: string;
}

export interface TvSeriesImage {
  file_path: string;
  aspect_ratio?: number;
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface TvSeriesPageProps {
  series: TvSeriesDetailsProps;
  images: MovieImage[];
}

export interface TvSeriesReview {
  id: string;
  content: string;
  author: string;
}

export interface DiscoverTvSeries {
  page: number;
  total_pages: number;
  total_results: number;
  results: BaseTvSeriesProps[];
}

export type Filters = BaseMovieProps | BaseTvSeriesProps;

export interface BaseActorProps {
  id: number;
  name: string;
  biography: string;
  birthday: string;
  deathday: string | undefined;
  gender: number;
  imdb_id: string;
  homepage: string | undefined;  
  known_for_department: string;  
  popularity: number;
  profile_path?: string;
  place_of_birth: string;
  favourite?: boolean;
}

export interface BaseActorListProps {
  actors: BaseActorProps[];
}

export interface BaseActorCombinedCredits {
  id: number;
  cast?: [];
}

export interface CreditCastProps {
  id: number;
  media_type: "movie" | "tv";
  title?: string; // movies
  name?: string; // tv
  character: string;
  overview: string;
  poster_path?: string;
  release_date?: string;  // movies
  first_air_date?: string; // tv
  vote_average: number;
  vote_count: number;
  popularity: number;
  original_language: string;
  genre_ids?: number[];
}
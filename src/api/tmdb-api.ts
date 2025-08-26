export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ).then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch movies. Response status: ${response.status}`);
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getMovie = (id: string) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to get movie data. Response status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
  });
};

export const getGenres = () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" + import.meta.env.VITE_TMDB_KEY + "&language=en-US"
  ).then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch genres. Response status: ${response.status}`);
    return response.json();
  })  
  .catch((error) => {
    throw error
  });
};

export const getMovieImages = (id: string | number) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("failed to fetch images");
    }
    return response.json();
  }).then((json) => json.posters)
    .catch((error) => {
      throw error
    });
};

export const getMovieReviews = (id: string | number) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};

export const getUpcomingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to get upcoming movie data. Response status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
  });
};

export const getPopularMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to get popular movie data. Response status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
  });
};

export const getAllTvServies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_TMDB_KEY}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Unable to fetch all tv series. Response status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
  });
};

export const getOneTvSeries = (id: string) => {
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to get data on one tv series. Response status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
  });
};

export const getTvSeriesImages = (id: string | number) => {
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("failed to fetch images");
    }
    return response.json();
  }).then((json) => json.posters)
    .catch((error) => {
      throw error
  });
};

export const getTvSeriesReviews = (id: string | number) => {
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
    console.log(json.results);
      return json.results;
    });
};

export const getTvGenres = () => {
  return fetch(
      "https://api.themoviedb.org/3/genre/tv/list?api_key=" + import.meta.env.VITE_TMDB_KEY + "&language=en-US"
  ).then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch genres. Response status: ${response.status}`);
    return response.json();
  })  
  .catch((error) => {
    throw error
  });
};

export const getActors = () => {
  return fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_TMDB_KEY}language=en-US&page=1`    
  ).then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch actors data. Response status: ${response.status}`);
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getActor = (id: string) => {
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}language=en-US`        
  ).then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch actor. Response status: ${response.status}`);
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getPersonComboCredits = (id: string) => {
  return fetch(
    `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${import.meta.env.VITE_TMDB_KEY}language=en-US`
  ).then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch movie and TV credits. Response status: ${response.status}`);
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};
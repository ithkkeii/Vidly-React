import http from "./httpService";

const apiEndpoint = "/movies";
export const getMovies = () => {
  return http.get(apiEndpoint);
};

export const getMovie = movieId => {
  return http.get(apiEndpoint + "/" + movieId);
};

export const deleteMovie = movieId => {
  return http.delete(`/${movieId}`);
};

export const saveMovie = movie => {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(apiEndpoint + "/" + movie._id, body);
  }

  return http.post(apiEndpoint, movie);
};

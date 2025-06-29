const API_KEY = "f27b47ebb9380ff00d7b6160dcb81095";
const BASE_URL = "https://api.themoviedb.org/3";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export const getPopularMovies = async () => {
  const response = await fetch(`${CORS_PROXY}${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${CORS_PROXY}${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};

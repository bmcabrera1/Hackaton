import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchPopularMovies = async () => {
  try {
    const response = await tmdbApi.get("/movie/popular");
    return response.data.results; // Devuelve la lista de películas populares
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};

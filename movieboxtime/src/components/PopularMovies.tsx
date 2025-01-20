import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "../services/moviesapi";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

const PopularMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const moviesData = await fetchPopularMovies();
        setMovies(moviesData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch movies.");
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto my-11 px-9">
      <h2 className="text-3xl font-bold text-center mb-6 text-secondary">
        Películas Populares
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 my-20">
        {movies.map((movie: any) => (
          <div
            key={movie.id}
            className="bg-white/50 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{movie.title}</h3>
              <p className="text-sm text-gray-500">{movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;

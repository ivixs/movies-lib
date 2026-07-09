import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Search() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const query = searchParams.get("q") || "";

  const getSearchedMovies = async () => {
    try {
      setLoading(true);
      setError("");

      const searchWithQueryURL = `${searchURL}?${apiKey}&query=${encodeURIComponent(
        query
      )}`;

      const res = await fetch(searchWithQueryURL);

      if (!res.ok) {
        throw new Error("Erro ao buscar filmes.");
      }

      const data = await res.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error(error);
      setError("Não foi possível buscar os filmes. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!query.trim()) {
      setMovies([]);
      setLoading(false);
      return;
    }

    getSearchedMovies();
  }, [query]);

  return (
    <section className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>

      {loading && <p className="status-message">Buscando filmes...</p>}

      {error && <p className="status-message error-message">{error}</p>}

      {!loading && !error && movies.length === 0 && (
        <p className="status-message">
          Nenhum filme encontrado para essa pesquisa.
        </p>
      )}

      {!loading && !error && movies.length > 0 && (
        <div className="movies-container">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
}
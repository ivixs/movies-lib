import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getTopRatedMovies = async () => {
    try {
      setLoading(true);
      setError("");

      const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
      const res = await fetch(topRatedUrl);

      if (!res.ok) {
        throw new Error("Não foi possível carregar os filmes.");
      }

      const data = await res.json();
      setTopMovies(data.results || []);
    } catch (error) {
      console.error(error);
      setError("Erro ao carregar os filmes. Confira sua chave da API.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  return (
    <section className="container">
      <h2 className="title">Melhores filmes:</h2>

      {loading && <p className="status-message">Carregando filmes...</p>}

      {error && <p className="status-message error-message">{error}</p>}

      {!loading && !error && (
        <div className="movies-container">
          {topMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
}
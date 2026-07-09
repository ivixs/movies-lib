import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css";
import "./Movie.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Movie() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getMovie = async () => {
    try {
      setLoading(true);
      setError("");

      const movieUrl = `${moviesURL}${id}?${apiKey}`;
      const res = await fetch(movieUrl);

      if (!res.ok) {
        throw new Error("Erro ao carregar detalhes do filme.");
      }

      const data = await res.json();
      setMovie(data);
    } catch (error) {
      console.error(error);
      setError("Não foi possível carregar os detalhes do filme.");
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (number) => {
    if (!number || number === 0) {
      return "Não informado";
    }

    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "USD",
    });
  };

  const formatRuntime = (runtime) => {
    if (!runtime) {
      return "Não informado";
    }

    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    if (hours === 0) {
      return `${minutes} min`;
    }

    return `${hours}h ${minutes}min`;
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  if (loading) {
    return (
      <section className="movie-page">
        <p className="status-message">Carregando detalhes do filme...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="movie-page">
        <p className="status-message error-message">{error}</p>
      </section>
    );
  }

  return (
    <section className="movie-page">
      {movie && (
        <>
          <div className="movie-details">
            <div className="movie-poster-area">
              <MovieCard movie={movie} showLink={false} />
            </div>

            <div className="movie-info-area">
              {movie.tagline && <p className="tagline">"{movie.tagline}"</p>}

              <div className="info-grid">
                <div className="info">
                  <h3>
                    <BsWallet2 /> Orçamento
                  </h3>
                  <p>{formatCurrency(movie.budget)}</p>
                </div>

                <div className="info">
                  <h3>
                    <BsGraphUp /> Receita
                  </h3>
                  <p>{formatCurrency(movie.revenue)}</p>
                </div>

                <div className="info">
                  <h3>
                    <BsHourglassSplit /> Duração
                  </h3>
                  <p>{formatRuntime(movie.runtime)}</p>
                </div>
              </div>

              <div className="info description">
                <h3>
                  <BsFillFileEarmarkTextFill /> Descrição
                </h3>

                <p>
                  {movie.overview ||
                    "Este filme ainda não possui descrição disponível."}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

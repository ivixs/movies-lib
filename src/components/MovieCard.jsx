import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const imageURL = import.meta.env.VITE_IMG;

export default function MovieCard({ movie, showLink = true }) {
  const hasPoster = Boolean(movie.poster_path);

  const movieTitle = movie.title || movie.name || "Título não informado";

  const movieRating =
    movie.vote_average && movie.vote_average > 0
      ? movie.vote_average.toFixed(1)
      : "Sem avaliação";

  return (
    <article className="movie-card">
      {hasPoster ? (
        <img
          src={`${imageURL}${movie.poster_path}`}
          alt={`Pôster do filme ${movieTitle}`}
          loading="lazy"
        />
      ) : (
        <div className="poster-placeholder">
          <span>Sem imagem disponível</span>
        </div>
      )}

      <div className="movie-card-content">
        <h2>{movieTitle}</h2>

        <p>
          <FaStar /> {movieRating}
        </p>
      </div>

      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </article>
  );
}
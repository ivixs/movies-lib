import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const imageURL = import.meta.env.VITE_IMG;

export default function MovieCard({ movie, showLink = true }) {
  const posterImage = movie.poster_path
    ? `${imageURL}${movie.poster_path}`
    : "/placeholder-movie.png";

  return (
    <article className="movie-card">
      <img src={posterImage} alt={`Pôster do filme ${movie.title}`} />

      <h2>{movie.title}</h2>

      <p>
        <FaStar /> {movie.vote_average?.toFixed(1)}
      </p>

      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </article>
  );
}
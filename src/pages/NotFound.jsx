import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-content">
        <BiCameraMovie />

        <h1>404</h1>

        <h2>Página não encontrada</h2>

        <p>
          Opa! Parece que essa página saiu de cartaz ou não existe no Movies Lib.
        </p>

        <Link to="/">Voltar para a página inicial</Link>
      </div>
    </section>
  );
}
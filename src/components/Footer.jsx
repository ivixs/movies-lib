import { BiCameraMovie } from "react-icons/bi";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <BiCameraMovie />
          <span>Movies Lib</span>
        </div>

        <p>
          Projeto desenvolvido para estudos de React, CSS, responsividade e
          consumo de API.
        </p>

        <small>&copy; {currentYear} Movies Lib.</small>
      </div>
    </footer>
  );
}
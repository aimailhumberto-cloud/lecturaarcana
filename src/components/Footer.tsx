import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            Lectura <span>Arcana</span>
          </div>
          <div className="footer-links">
            <Link to="/catalogo">Catálogo</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/terms">Términos</Link>
            <Link to="/privacy">Privacidad</Link>
            <Link to="/derechos-de-autor">Derechos de Autor</Link>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Club de Lectura Arcana. Donde los libros cobran vida.
        </div>
      </div>
    </footer>
  );
}

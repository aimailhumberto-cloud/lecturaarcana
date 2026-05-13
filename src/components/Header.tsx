import { useState, useEffect } from 'react';
import { MoonStar, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { APP_URL } from '../config';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLoginClick = () => {
    window.location.href = APP_URL;
  };

  return (
    <>
      <header className={`header ${scrolled || !isHome ? 'scrolled' : ''}`}>
        <div className="container header-content">
          <Link to="/" className="logo">
            <MoonStar size={24} />
            <span>Lectura <span className="text-gold">Arcana</span></span>
          </Link>

          {/* Desktop nav */}
          <nav className="nav-links nav-desktop">
            {isHome ? (
              <>
                <Link to="/catalogo">Catálogo</Link>
                <a href="#poderes">IA</a>
                <a href="#club">El Club</a>
                <Link to="/blog">Blog</Link>
              </>
            ) : (
              <>
                <Link to="/">Inicio</Link>
                <Link to="/catalogo">Catálogo</Link>
                <Link to="/blog">Blog</Link>
              </>
            )}
            <button className="btn-login" onClick={handleLoginClick}>
              Ingresar al Club
            </button>
          </nav>

          {/* Mobile hamburger button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <nav className={`mobile-drawer ${menuOpen ? 'active' : ''}`}>
        <div className="mobile-drawer-header">
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            <MoonStar size={20} />
            <span>Lectura <span className="text-gold">Arcana</span></span>
          </Link>
          <button
            className="mobile-drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mobile-drawer-links">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Inicio
          </Link>
          <Link to="/catalogo" onClick={() => setMenuOpen(false)}>
            Catálogo
          </Link>
          <Link to="/narracion" onClick={() => setMenuOpen(false)}>
            Narración AI
          </Link>
          <Link to="/hermes" onClick={() => setMenuOpen(false)}>
            Hermes AI
          </Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
        </div>

        <div className="mobile-drawer-footer">
          <button
            className="btn-primary full-width"
            onClick={() => { setMenuOpen(false); handleLoginClick(); }}
          >
            Ingresar al Club
          </button>
          <div className="mobile-drawer-legal">
            <Link to="/terms" onClick={() => setMenuOpen(false)}>Términos</Link>
            <Link to="/privacy" onClick={() => setMenuOpen(false)}>Privacidad</Link>
            <Link to="/derechos-de-autor" onClick={() => setMenuOpen(false)}>DMCA</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

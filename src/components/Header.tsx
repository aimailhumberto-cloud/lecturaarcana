import { useState, useEffect } from 'react';
import { MoonStar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { APP_URL } from '../config';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoginClick = () => {
    window.location.href = APP_URL;
  };

  return (
    <header className={`header ${scrolled || !isHome ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo">
          <MoonStar size={24} />
          <span>Lectura <span className="text-gold">Arcana</span></span>
        </Link>
        <nav className="nav-links">
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
      </div>
    </header>
  );
}

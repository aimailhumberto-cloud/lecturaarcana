import { useState, useEffect } from 'react';
import { MoonStar, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { APP_URL } from '../config';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('es') ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

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
                <Link to="/catalogo">{t('header.catalog')}</Link>
                <a href="#poderes">{t('header.ai')}</a>
                <a href="#club">{t('header.club')}</a>
                <Link to="/blog">{t('header.blog')}</Link>
              </>
            ) : (
              <>
                <Link to="/">{t('header.home')}</Link>
                <Link to="/catalogo">{t('header.catalog')}</Link>
                <Link to="/blog">{t('header.blog')}</Link>
              </>
            )}
            <button 
              className="lang-switcher" 
              onClick={toggleLanguage}
              style={{ background: 'transparent', border: '1px solid var(--gold)', color: 'var(--gold)', padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginLeft: '1rem' }}
            >
              {i18n.language.startsWith('es') ? 'EN' : 'ES'}
            </button>
            <button className="btn-login" onClick={handleLoginClick} style={{ marginLeft: '1rem' }}>
              {t('header.login')}
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
            {t('header.home')}
          </Link>
          <Link to="/catalogo" onClick={() => setMenuOpen(false)}>
            {t('header.catalog')}
          </Link>
          <Link to="/narracion" onClick={() => setMenuOpen(false)}>
            {t('header.narration')}
          </Link>
          <Link to="/hermes" onClick={() => setMenuOpen(false)}>
            {t('header.hermes')}
          </Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>
            {t('header.blog')}
          </Link>
          
          <button 
            onClick={toggleLanguage}
            style={{ 
              background: 'transparent', border: '1px solid var(--gold)', color: 'var(--gold)', 
              padding: '0.8rem', borderRadius: '4px', cursor: 'pointer', fontFamily: 'var(--font-mono)', 
              fontSize: '1rem', width: '100%', marginTop: '1rem', textAlign: 'center'
            }}
          >
            Cambiar idioma / Change language ({i18n.language.startsWith('es') ? 'EN' : 'ES'})
          </button>
        </div>

        <div className="mobile-drawer-footer">
          <button
            className="btn-primary full-width"
            onClick={() => { setMenuOpen(false); handleLoginClick(); }}
          >
            {t('header.login')}
          </button>
          <div className="mobile-drawer-legal">
            <Link to="/terms" onClick={() => setMenuOpen(false)}>{t('header.terms')}</Link>
            <Link to="/privacy" onClick={() => setMenuOpen(false)}>{t('header.privacy')}</Link>
            <Link to="/derechos-de-autor" onClick={() => setMenuOpen(false)}>{t('header.dmca')}</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

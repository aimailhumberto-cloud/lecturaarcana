import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            Lectura <span>Arcana</span>
          </div>
          <div className="footer-links">
            <Link to="/catalogo">{t('header.catalog')}</Link>
            <Link to="/blog">{t('header.blog')}</Link>
            <Link to="/terms">{t('header.terms')}</Link>
            <Link to="/privacy">{t('header.privacy')}</Link>
            <Link to="/derechos-de-autor">{t('header.dmca')}</Link>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} {t('footer.bottom')}
        </div>
      </div>
    </footer>
  );
}

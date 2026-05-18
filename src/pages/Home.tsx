import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Sparkles, MessageSquare, Upload, Users, FileText, Headphones, Search, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import HeroShelf from '../components/HeroShelf';
import { APP_URL } from '../config';

const CATEGORIES = [
  'Filosofía', 'Consciencia', 'Meditación', 'Geometría Sagrada',
  'Chamanismo', 'Energía', 'Esoterismo', 'Ciencia',
  'Ocultismo', 'Astral', 'Dimensiones', 'Psique',
  'Reencarnación', 'Sanación', 'Vibración', 'Tantra',
  'Maestros Ascendidos', 'Ángeles', 'Religiones', 'Universo',
  'Autoayuda', 'Espiritismo', 'Plantas', 'Intuición',
  'Civilizaciones', 'Aura', 'Emociones', 'Radiestesia',
  'Canalización', 'Dioses', 'Muerte', 'Tiempo',
  'Elementales', 'Gemas', 'Eneagrama', 'Levitación',
  'Onírico', 'Mancia', 'Causalidad', 'India',
  'Jinas', 'Élite', 'Drogas', 'Antepasados',
  'Novelas',
];

export default function Home() {
  const { t } = useTranslation();

  const handleLoginClick = () => {
    window.location.href = APP_URL;
  };

  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }} />
          ))}
        </div>
        <div className="container hero-content">
          <div className="hero-badge">{t('home.hero.badge')}</div>
          <h1 className="hero-title">
            {t('home.hero.title_1')}<br />
            <span className="text-gold">{t('home.hero.title_2')}</span>
          </h1>
          <p className="hero-subtitle">
            {t('home.hero.subtitle')}
          </p>
          <div className="hero-cta">
            <a href="#catalogo" className="btn-primary">
              {t('home.hero.cta_explore')} <ChevronRight size={20} />
            </a>
            <button className="btn-secondary" onClick={handleLoginClick}>
              {t('home.hero.cta_member')}
            </button>
          </div>
          <HeroShelf />
        </div>
      </section>

      {/* ── CATÁLOGO ── */}
      <section id="catalogo" className="catalog-section">
        <div className="container">
          <h2 className="section-title text-center">{t('home.catalog.title')}</h2>
          <p className="section-subtitle text-center">
            {t('home.catalog.subtitle')}
          </p>
          <div className="categories-cloud">
            {CATEGORIES.map((cat, i) => (
              <Link
                to={`/catalogo/${encodeURIComponent(cat)}`}
                key={cat}
                className={`category-tag ${i < 6 ? 'category-tag--featured' : ''}`}
              >
                {cat}
              </Link>
            ))}
            <Link to="/catalogo" className="category-tag category-tag--featured">
              {t('home.catalog.see_all')}
            </Link>
          </div>
          <div className="catalog-stats">
            <div className="stat-item">
              <span className="stat-number">1,400+</span>
              <span className="stat-label">{t('home.catalog.stat_books')}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">46</span>
              <span className="stat-label">{t('home.catalog.stat_categories')}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">{t('home.catalog.stat_covers')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCIA IA ── */}
      <section id="poderes" className="ai-section">
        <div className="container">
          <h2 className="section-title text-center">{t('home.ai.title')}</h2>
          <p className="section-subtitle text-center">
            {t('home.ai.subtitle')}
          </p>
          <div className="ai-features-grid">
            <Link to="/narracion" className="ai-feature-card glass-panel ai-feature-card--link">
              <div className="ai-feature-icon"><Headphones size={28} /></div>
              <h3>{t('home.ai.narration_title')}</h3>
              <p>{t('home.ai.narration_desc')}</p>
              <span className="feature-card-more">{t('home.ai.discover_more')}</span>
            </Link>
            <Link to="/hermes" className="ai-feature-card glass-panel ai-feature-card--link">
              <div className="ai-feature-icon"><MessageSquare size={28} /></div>
              <h3>{t('home.ai.hermes_title')}</h3>
              <p>{t('home.ai.hermes_desc')}</p>
              <span className="feature-card-more">{t('home.ai.discover_more')}</span>
            </Link>
            <div className="ai-feature-card glass-panel">
              <div className="ai-feature-icon"><FileText size={28} /></div>
              <h3>{t('home.ai.reports_title')}</h3>
              <p>{t('home.ai.reports_desc')}</p>
            </div>
            <div className="ai-feature-card glass-panel">
              <div className="ai-feature-icon"><Search size={28} /></div>
              <h3>{t('home.ai.search_title')}</h3>
              <p>{t('home.ai.search_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EL CLUB ── */}
      <section id="club" className="community-section">
        <div className="container">
          <h2 className="section-title text-center" dangerouslySetInnerHTML={{ __html: t('home.club.title') }}></h2>
          <p className="section-subtitle text-center">
            {t('home.club.subtitle')}
          </p>
          <div className="community-grid">
            <div className="community-card">
              <div className="community-icon"><Users size={32} /></div>
              <h3>{t('home.club.forum_title')}</h3>
              <p>{t('home.club.forum_desc')}</p>
            </div>
            <div className="community-card">
              <div className="community-icon"><Upload size={32} /></div>
              <h3>{t('home.club.upload_title')}</h3>
              <p>{t('home.club.upload_desc')}</p>
            </div>
            <div className="community-card">
              <div className="community-icon"><Sparkles size={32} /></div>
              <h3>{t('home.club.share_title')}</h3>
              <p dangerouslySetInnerHTML={{ __html: t('home.club.share_desc') }}></p>
            </div>
            <div className="community-card">
              <div className="community-icon"><Smartphone size={32} /></div>
              <h3>{t('home.club.mobile_title')}</h3>
              <p>{t('home.club.mobile_desc')}</p>
            </div>
            <div className="community-card">
              <div className="community-icon"><BookOpen size={32} /></div>
              <h3>{t('home.club.physical_title')}</h3>
              <p>{t('home.club.physical_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="membresia" className="pricing-section">
        <div className="container text-center">
          <h2 className="section-title">{t('home.pricing.title')}</h2>
          <p className="section-subtitle">{t('home.pricing.subtitle')}</p>
          <div className="pricing-card gold-glow">
            <div className="pricing-badge">{t('home.pricing.badge')}</div>
            <div className="pricing-price">$12<span className="pricing-cents">.99</span><span className="pricing-period">{t('home.pricing.period')}</span></div>
            <ul className="pricing-features">
              <li><ChevronRight size={16} /> {t('home.pricing.f1')}</li>
              <li><ChevronRight size={16} /> {t('home.pricing.f2')}</li>
              <li><ChevronRight size={16} /> {t('home.pricing.f3')}</li>
              <li><ChevronRight size={16} /> {t('home.pricing.f4')}</li>
              <li><ChevronRight size={16} /> {t('home.pricing.f5')}</li>
              <li><ChevronRight size={16} /> {t('home.pricing.f6')}</li>
              <li><ChevronRight size={16} /> {t('home.pricing.f7')}</li>
            </ul>
            <button className="btn-primary full-width" onClick={handleLoginClick}>
              {t('home.pricing.cta')} <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ── YOUTUBE ── */}
      <section className="youtube-section">
        <div className="container text-center">
          <h2 className="section-title">{t('home.youtube.title')}</h2>
          <p className="section-subtitle">
            {t('home.youtube.subtitle')}
          </p>
          <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', width: '100%', maxWidth: '800px', margin: '2rem auto', background: '#000', borderRadius: '12px', border: '1px solid var(--gold-border)', boxShadow: '0 8px 32px rgba(212, 175, 55, 0.15)' }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '12px' }}
              src="https://www.youtube.com/embed/feIMDIQUtAs?start=59" 
              title={t('home.youtube.video_text')}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
          <p className="youtube-cta" dangerouslySetInnerHTML={{ __html: t('home.youtube.cta') }}></p>
        </div>
      </section>
    </main>
  );
}

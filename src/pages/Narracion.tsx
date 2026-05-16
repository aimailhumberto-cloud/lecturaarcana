import { ChevronRight, Headphones, Volume2, Gauge, SkipForward, Pause } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { APP_URL } from '../config';

export default function Narracion() {
  const { t } = useTranslation();

  return (
    <main>
      {/* Hero */}
      <section className="feature-hero">
        <div className="container">
          <div className="feature-hero-layout">
            <div className="feature-hero-text">
              <div className="hero-badge">{t('narracion.hero_badge')}</div>
              <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                {t('narracion.hero_title1')}<br />
                <span className="text-gold">{t('narracion.hero_title2')}</span>
              </h1>
              <p className="hero-subtitle" style={{ marginLeft: 0, marginRight: 0, textAlign: 'left' }}>
                {t('narracion.hero_subtitle')}
              </p>
              <button className="btn-primary" onClick={() => window.location.href = APP_URL}>
                {t('narracion.hero_cta')} <ChevronRight size={20} />
              </button>
            </div>
            <div className="feature-hero-image">
              <img src="/library-real.png" alt="Biblioteca real con 1,400+ libros" />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="feature-details">
        <div className="container">
          <h2 className="section-title text-center">{t('narracion.works_title')}</h2>
          <p className="section-subtitle text-center">
            {t('narracion.works_subtitle')}
          </p>

          <div className="feature-steps">
            <div className="feature-step">
              <div className="step-number">1</div>
              <h3>{t('narracion.s1_title')}</h3>
              <p>{t('narracion.s1_desc')}</p>
            </div>
            <div className="feature-step">
              <div className="step-number">2</div>
              <h3>{t('narracion.s2_title')}</h3>
              <p>{t('narracion.s2_desc')}</p>
            </div>
            <div className="feature-step">
              <div className="step-number">3</div>
              <h3>{t('narracion.s3_title')}</h3>
              <p>{t('narracion.s3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="feature-capabilities">
        <div className="container">
          <h2 className="section-title text-center">{t('narracion.cap_title')}</h2>
          <div className="ai-features-grid">
            <div className="ai-feature-card glass-panel">
              <div className="ai-feature-icon"><Volume2 size={28} /></div>
              <h3>{t('narracion.c1_title')}</h3>
              <p>{t('narracion.c1_desc')}</p>
            </div>
            <div className="ai-feature-card glass-panel">
              <div className="ai-feature-icon"><Gauge size={28} /></div>
              <h3>{t('narracion.c2_title')}</h3>
              <p>{t('narracion.c2_desc')}</p>
            </div>
            <div className="ai-feature-card glass-panel">
              <div className="ai-feature-icon"><SkipForward size={28} /></div>
              <h3>{t('narracion.c3_title')}</h3>
              <p>{t('narracion.c3_desc')}</p>
            </div>
            <div className="ai-feature-card glass-panel">
              <div className="ai-feature-icon"><Pause size={28} /></div>
              <h3>{t('narracion.c4_title')}</h3>
              <p>{t('narracion.c4_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="feature-usecases">
        <div className="container">
          <h2 className="section-title text-center">{t('narracion.use_title')}</h2>
          <div className="community-grid">
            <div className="community-card">
              <div className="community-icon"><Headphones size={32} /></div>
              <h3>{t('narracion.u1_title')}</h3>
              <p>{t('narracion.u1_desc')}</p>
            </div>
            <div className="community-card">
              <div className="community-icon"><Headphones size={32} /></div>
              <h3>{t('narracion.u2_title')}</h3>
              <p>{t('narracion.u2_desc')}</p>
            </div>
            <div className="community-card">
              <div className="community-icon"><Headphones size={32} /></div>
              <h3>{t('narracion.u3_title')}</h3>
              <p>{t('narracion.u3_desc')}</p>
            </div>
            <div className="community-card">
              <div className="community-icon"><Headphones size={32} /></div>
              <h3>{t('narracion.u4_title')}</h3>
              <p>{t('narracion.u4_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="feature-cta-section">
        <div className="container text-center">
          <h2 className="section-title">{t('narracion.cta_title')}</h2>
          <p className="section-subtitle">{t('narracion.cta_subtitle')}</p>
          <button className="btn-primary" onClick={() => window.location.href = APP_URL}>
            {t('narracion.cta_btn')} <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </main>
  );
}

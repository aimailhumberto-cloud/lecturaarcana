import { ChevronRight, MessageSquare, FileText, Lightbulb, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { APP_URL } from '../config';

export default function Hermes() {
  const { t } = useTranslation();

  return (
    <main>
      {/* Hero */}
      <section className="feature-hero">
        <div className="container">
          <div className="feature-hero-layout feature-hero-layout--reverse">
            <div className="feature-hero-image">
              <img src="/book-detail-real.png" alt="Detalle de libro con Hermes AI" />
            </div>
            <div className="feature-hero-text">
              <div className="hero-badge">{t('hermes.hero_badge')}</div>
              <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                {t('hermes.hero_title1')}<br />
                <span className="text-gold">{t('hermes.hero_title2')}</span>
              </h1>
              <p className="hero-subtitle" style={{ marginLeft: 0, marginRight: 0, textAlign: 'left' }}>
                {t('hermes.hero_subtitle')}
              </p>
              <button className="btn-primary" onClick={() => window.location.href = APP_URL}>
                {t('hermes.hero_cta')} <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Conversation examples */}
      <section className="feature-details">
        <div className="container">
          <h2 className="section-title text-center">{t('hermes.conv_title')}</h2>
          <p className="section-subtitle text-center">
            {t('hermes.conv_subtitle')}
          </p>

          <div className="chat-examples">
            <div className="chat-example glass-panel">
              <div className="chat-bubble chat-bubble--user">
                <p>{t('hermes.chat1_q')}</p>
              </div>
              <div className="chat-bubble chat-bubble--ai">
                <div className="chat-ai-label">Hermes AI</div>
                <p dangerouslySetInnerHTML={{ __html: t('hermes.chat1_a') }}></p>
              </div>
            </div>

            <div className="chat-example glass-panel">
              <div className="chat-bubble chat-bubble--user">
                <p>{t('hermes.chat2_q')}</p>
              </div>
              <div className="chat-bubble chat-bubble--ai">
                <div className="chat-ai-label">Hermes AI</div>
                <div dangerouslySetInnerHTML={{ __html: t('hermes.chat2_a') }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Hermes can do */}
      <section className="feature-capabilities">
        <div className="container">
          <h2 className="section-title text-center">{t('hermes.cap_title')}</h2>
          <div className="ai-features-grid">
            <div className="ai-feature-card glass-panel">
              <div className="ai-feature-icon"><MessageSquare size={28} /></div>
              <h3>{t('hermes.c1_title')}</h3>
              <p>{t('hermes.c1_desc')}</p>
            </div>
            <div className="ai-feature-card glass-panel">
              <div className="ai-feature-icon"><FileText size={28} /></div>
              <h3>{t('hermes.c2_title')}</h3>
              <p>{t('hermes.c2_desc')}</p>
            </div>
            <div className="ai-feature-card glass-panel">
              <div className="ai-feature-icon"><Lightbulb size={28} /></div>
              <h3>{t('hermes.c3_title')}</h3>
              <p>{t('hermes.c3_desc')}</p>
            </div>
            <div className="ai-feature-card glass-panel">
              <div className="ai-feature-icon"><Zap size={28} /></div>
              <h3>{t('hermes.c4_title')}</h3>
              <p>{t('hermes.c4_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why it's different */}
      <section className="feature-usecases">
        <div className="container">
          <h2 className="section-title text-center">{t('hermes.diff_title')}</h2>
          <div className="feature-steps">
            <div className="feature-step">
              <div className="step-number">📖</div>
              <h3>{t('hermes.d1_title')}</h3>
              <p>{t('hermes.d1_desc')}</p>
            </div>
            <div className="feature-step">
              <div className="step-number">🎯</div>
              <h3>{t('hermes.d2_title')}</h3>
              <p>{t('hermes.d2_desc')}</p>
            </div>
            <div className="feature-step">
              <div className="step-number">🔗</div>
              <h3>{t('hermes.d3_title')}</h3>
              <p>{t('hermes.d3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="feature-cta-section">
        <div className="container text-center">
          <h2 className="section-title">{t('hermes.cta_title')}</h2>
          <p className="section-subtitle">{t('hermes.cta_subtitle')}</p>
          <button className="btn-primary" onClick={() => window.location.href = APP_URL}>
            {t('hermes.cta_btn')} <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </main>
  );
}

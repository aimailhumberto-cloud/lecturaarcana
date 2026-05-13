import { ChevronRight, Headphones, Volume2, Gauge, SkipForward, Pause } from 'lucide-react';
import { APP_URL } from '../config';

export default function Narracion() {
  return (
    <main>
      {/* Hero */}
      <section className="feature-hero">
        <div className="container">
          <div className="feature-hero-layout">
            <div className="feature-hero-text">
              <div className="hero-badge">✦ Narración Inteligente ✦</div>
              <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                Cualquier libro.<br />
                <span className="text-gold">Narrado al instante.</span>
              </h1>
              <p className="hero-subtitle" style={{ marginLeft: 0, marginRight: 0, textAlign: 'left' }}>
                No necesitas esperar a que alguien grabe un audiolibro. Nuestra IA convierte 
                cualquiera de los 1,400+ libros en una experiencia auditiva envolvente. 
                En tiempo real. Sin esperas.
              </p>
              <button className="btn-primary" onClick={() => window.location.href = APP_URL}>
                Probar la Narración <ChevronRight size={20} />
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
          <h2 className="section-title text-center">¿Cómo funciona?</h2>
          <p className="section-subtitle text-center">
            Tres pasos entre tú y escuchar cualquier libro del mundo.
          </p>

          <div className="feature-steps">
            <div className="feature-step">
              <div className="step-number">1</div>
              <h3>Abre cualquier libro</h3>
              <p>Navega por la biblioteca o sube tu propio PDF. Abre el lector integrado y localiza la página que quieras escuchar.</p>
            </div>
            <div className="feature-step">
              <div className="step-number">2</div>
              <h3>Presiona "Narrar"</h3>
              <p>Un solo clic activa la Voz del Oráculo. La IA procesa el texto y comienza a leer con entonación natural, respetando puntuación y contexto.</p>
            </div>
            <div className="feature-step">
              <div className="step-number">3</div>
              <h3>Escucha y aprende</h3>
              <p>Controla la velocidad, pausa cuando quieras y pregúntale a Hermes AI sobre lo que acabas de escuchar. Es como tener un profesor particular.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="feature-capabilities">
        <div className="container">
          <h2 className="section-title text-center">Superpoderes de la narración</h2>
          <div className="ai-features-grid">
            <div className="ai-feature-card glass-panel">
              <div className="ai-feature-icon"><Volume2 size={28} /></div>
              <h3>Voces naturales</h3>
              <p>Nuestra IA utiliza modelos de síntesis de voz de última generación para crear narraciones que suenan humanas, no robóticas.</p>
            </div>
            <div className="ai-feature-card glass-panel">
              <div className="ai-feature-icon"><Gauge size={28} /></div>
              <h3>Control de velocidad</h3>
              <p>Desde 0.5x para meditación profunda hasta 2x para estudio rápido. Tú controlas el ritmo de la lectura.</p>
            </div>
            <div className="ai-feature-card glass-panel">
              <div className="ai-feature-icon"><SkipForward size={28} /></div>
              <h3>Navega por capítulos</h3>
              <p>Salta entre secciones, retrocede un párrafo o avanza al siguiente tema. Control total sobre la narración.</p>
            </div>
            <div className="ai-feature-card glass-panel">
              <div className="ai-feature-icon"><Pause size={28} /></div>
              <h3>Pausa inteligente</h3>
              <p>Pausa la narración y el texto se resalta exactamente donde te quedaste. Cuando regreses, la lectura continúa sin perder contexto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="feature-usecases">
        <div className="container">
          <h2 className="section-title text-center">Perfecto para...</h2>
          <div className="community-grid">
            <div className="community-card">
              <div className="community-icon"><Headphones size={32} /></div>
              <h3>🚗 Conducir</h3>
              <p>Transforma tu viaje al trabajo en una sesión de aprendizaje profundo. La carretera se convierte en tu sala de estudio.</p>
            </div>
            <div className="community-card">
              <div className="community-icon"><Headphones size={32} /></div>
              <h3>🧘 Meditar</h3>
              <p>Cierra los ojos y deja que textos de meditación, mantras o filosofía te guíen en tu práctica a una velocidad relajada.</p>
            </div>
            <div className="community-card">
              <div className="community-icon"><Headphones size={32} /></div>
              <h3>📚 Investigar</h3>
              <p>Escucha un libro a 1.5x mientras tomas notas. Cubre más material en menos tiempo y luego profundiza con Hermes AI.</p>
            </div>
            <div className="community-card">
              <div className="community-icon"><Headphones size={32} /></div>
              <h3>😴 Dormir</h3>
              <p>Configura un temporizador y deja que la voz de la IA te acompañe hasta que concilies el sueño con sabiduría ancestral.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="feature-cta-section">
        <div className="container text-center">
          <h2 className="section-title">¿Listo para escuchar la biblioteca entera?</h2>
          <p className="section-subtitle">Accede a la narración ilimitada con tu membresía.</p>
          <button className="btn-primary" onClick={() => window.location.href = APP_URL}>
            Comenzar ahora — $12.99/mes <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </main>
  );
}

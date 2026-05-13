import { ChevronRight, MessageSquare, FileText, Lightbulb, Zap } from 'lucide-react';
import { APP_URL } from '../config';

export default function Hermes() {
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
              <div className="hero-badge">✦ Hermes AI ✦</div>
              <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                Tu maestro personal.<br />
                <span className="text-gold">Dentro de cada libro.</span>
              </h1>
              <p className="hero-subtitle" style={{ marginLeft: 0, marginRight: 0, textAlign: 'left' }}>
                ¿Símbolo confuso? ¿Pasaje críptico? ¿Concepto imposible? Hermes AI lee contigo 
                y responde cualquier pregunta con el contexto exacto de la página que estás leyendo.
              </p>
              <button className="btn-primary" onClick={() => window.location.href = APP_URL}>
                Chatear con Hermes <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Conversation examples */}
      <section className="feature-details">
        <div className="container">
          <h2 className="section-title text-center">Conversaciones que cambian tu comprensión</h2>
          <p className="section-subtitle text-center">
            No es un buscador. Es un diálogo inteligente con el texto mismo.
          </p>

          <div className="chat-examples">
            <div className="chat-example glass-panel">
              <div className="chat-bubble chat-bubble--user">
                <p>¿Qué significa el Ouroboros en el contexto de este capítulo sobre alquimia?</p>
              </div>
              <div className="chat-bubble chat-bubble--ai">
                <div className="chat-ai-label">Hermes AI</div>
                <p>En este capítulo, el Ouroboros representa el ciclo eterno de destrucción y renovación que el alquimista busca dominar. El autor lo conecta directamente con el concepto de <em>solve et coagula</em> (disuelve y coagula), sugiriendo que la transmutación personal requiere primero destruir las formas antiguas...</p>
              </div>
            </div>

            <div className="chat-example glass-panel">
              <div className="chat-bubble chat-bubble--user">
                <p>Resume los puntos clave de este capítulo en 5 bullets.</p>
              </div>
              <div className="chat-bubble chat-bubble--ai">
                <div className="chat-ai-label">Hermes AI</div>
                <p>Aquí tienes los 5 puntos clave del capítulo:</p>
                <ul>
                  <li>La meditación no es vaciar la mente, sino observar los pensamientos sin apego.</li>
                  <li>El autor distingue entre concentración (focalizar) y contemplación (expandir).</li>
                  <li>La práctica diaria de 20 minutos produce cambios neurológicos medibles en 8 semanas.</li>
                  <li>El mantra personal debe resonar con la vibración natural del practicante.</li>
                  <li>La etapa de "silencio interior" solo se alcanza después de dominar la respiración rítmica.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Hermes can do */}
      <section className="feature-capabilities">
        <div className="container">
          <h2 className="section-title text-center">Lo que Hermes puede hacer por ti</h2>
          <div className="ai-features-grid">
            <div className="ai-feature-card glass-panel">
              <div className="ai-feature-icon"><MessageSquare size={28} /></div>
              <h3>Responder preguntas</h3>
              <p>Pregúntale cualquier cosa sobre el libro que estás leyendo. Hermes responde con el contexto exacto de la página actual.</p>
            </div>
            <div className="ai-feature-card glass-panel">
              <div className="ai-feature-icon"><FileText size={28} /></div>
              <h3>Generar informes</h3>
              <p>Pide un resumen ejecutivo, un análisis comparativo o un listado de conceptos clave. Hermes estructura la información por ti.</p>
            </div>
            <div className="ai-feature-card glass-panel">
              <div className="ai-feature-icon"><Lightbulb size={28} /></div>
              <h3>Explicar conceptos</h3>
              <p>¿Alquimia hermética? ¿Geometría hiperbólica? ¿Chakras y meridianos? Hermes decodifica cualquier concepto a tu nivel.</p>
            </div>
            <div className="ai-feature-card glass-panel">
              <div className="ai-feature-icon"><Zap size={28} /></div>
              <h3>Conectar ideas</h3>
              <p>"¿Qué relación hay entre este texto y El Kybalión?" Hermes cruza referencias y encuentra conexiones entre obras de la biblioteca.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why it's different */}
      <section className="feature-usecases">
        <div className="container">
          <h2 className="section-title text-center">¿Por qué es diferente de ChatGPT?</h2>
          <div className="feature-steps">
            <div className="feature-step">
              <div className="step-number">📖</div>
              <h3>Lee contigo</h3>
              <p>ChatGPT no tiene acceso al libro que estás leyendo. Hermes sí. Analiza el texto exacto de la página que tienes abierta.</p>
            </div>
            <div className="feature-step">
              <div className="step-number">🎯</div>
              <h3>Contexto real</h3>
              <p>No inventa ni alucina. Sus respuestas están ancladas al contenido real del libro, citando pasajes específicos.</p>
            </div>
            <div className="feature-step">
              <div className="step-number">🔗</div>
              <h3>Integrado en el lector</h3>
              <p>No necesitas copiar y pegar texto en otra herramienta. Hermes vive dentro del lector, un clic y estás conversando.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="feature-cta-section">
        <div className="container text-center">
          <h2 className="section-title">¿Listo para tener un maestro personal en cada libro?</h2>
          <p className="section-subtitle">Accede a Hermes AI ilimitado con tu membresía.</p>
          <button className="btn-primary" onClick={() => window.location.href = APP_URL}>
            Comenzar ahora — $12.99/mes <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </main>
  );
}

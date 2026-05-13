import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Sparkles, MessageSquare, Upload, Users, FileText, Headphones, Search } from 'lucide-react';
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
          <div className="hero-badge">✦ Club de Lectura Arcana ✦</div>
          <h1 className="hero-title">
            El círculo de lectura más grande<br />
            <span className="text-gold">del conocimiento oculto.</span>
          </h1>
          <p className="hero-subtitle">
            Únete a un club de lectura donde la Inteligencia Artificial te narra los libros,
            responde tus preguntas, genera informes y te conecta con una comunidad de lectores apasionados.
          </p>
          <div className="hero-cta">
            <a href="#catalogo" className="btn-primary">
              Explorar el Catálogo <ChevronRight size={20} />
            </a>
            <button className="btn-secondary" onClick={handleLoginClick}>
              Ya soy miembro
            </button>
          </div>
          <HeroShelf />
        </div>
      </section>

      {/* ── CATÁLOGO ── */}
      <section id="catalogo" className="catalog-section">
        <div className="container">
          <h2 className="section-title text-center">Explora la inmensidad del conocimiento</h2>
          <p className="section-subtitle text-center">
            46 categorías. 1,400+ obras. Contenido para toda una vida de descubrimiento.
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
              Ver todo →
            </Link>
          </div>
          <div className="catalog-stats">
            <div className="stat-item">
              <span className="stat-number">1,400+</span>
              <span className="stat-label">Libros disponibles</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">46</span>
              <span className="stat-label">Categorías</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Con portada real</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCIA IA ── */}
      <section id="poderes" className="ai-section">
        <div className="container">
          <h2 className="section-title text-center">Tu compañero de estudio con Inteligencia Artificial</h2>
          <p className="section-subtitle text-center">
            No es solo un lector de PDFs. Es una experiencia de lectura que nunca has tenido.
          </p>
          <div className="ai-features-grid">
            <Link to="/narracion" className="ai-feature-card glass-panel ai-feature-card--link">
              <div className="ai-feature-icon"><Headphones size={28} /></div>
              <h3>Narración Inteligente</h3>
              <p>¿Conduciendo? ¿Meditando? Deja que la IA te narre cualquier libro completo. No necesitas esperar a que alguien lo grabe.</p>
              <span className="feature-card-more">Descubrir más →</span>
            </Link>
            <Link to="/hermes" className="ai-feature-card glass-panel ai-feature-card--link">
              <div className="ai-feature-icon"><MessageSquare size={28} /></div>
              <h3>Chatea con tus libros</h3>
              <p>Pausa la lectura y pregúntale a Hermes AI sobre un concepto complejo. Responde al instante con contexto de la página.</p>
              <span className="feature-card-more">Descubrir más →</span>
            </Link>
            <div className="ai-feature-card glass-panel">
              <div className="ai-feature-icon"><FileText size={28} /></div>
              <h3>Informes y Resúmenes</h3>
              <p>Extrae resúmenes, análisis y reportes detallados de cualquier obra en segundos. Perfecto para investigación.</p>
            </div>
            <div className="ai-feature-card glass-panel">
              <div className="ai-feature-icon"><Search size={28} /></div>
              <h3>Búsqueda Profunda</h3>
              <p>Busca conceptos dentro de cualquier libro o a través de toda la biblioteca. Encuentra exactamente lo que necesitas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EL CLUB ── */}
      <section id="club" className="community-section">
        <div className="container">
          <h2 className="section-title text-center">Más que una biblioteca.<br />Un Club de Lectura.</h2>
          <p className="section-subtitle text-center">
            Lee, comparte, debate y crece junto a una comunidad de lectores que piensa como tú.
          </p>
          <div className="community-grid">
            <div className="community-card">
              <div className="community-icon"><Users size={32} /></div>
              <h3>Foro del Club</h3>
              <p>Cada libro tiene su propio espacio de debate. Comparte tus descubrimientos, haz preguntas y conecta con otros lectores.</p>
            </div>
            <div className="community-card">
              <div className="community-icon"><Upload size={32} /></div>
              <h3>Sube tu Biblioteca</h3>
              <p>Trae tus propios PDFs y EPUBs. Nuestra IA les dará vida: podrás escucharlos, chatear con ellos y generar informes.</p>
            </div>
            <div className="community-card">
              <div className="community-icon"><Sparkles size={32} /></div>
              <h3>Comparte y Gana</h3>
              <p>¿Tienes un libro valioso? Compártelo con el club y recibe <strong>meses de acceso gratuito</strong> como recompensa.</p>
            </div>
            <div className="community-card">
              <div className="community-icon"><BookOpen size={32} /></div>
              <h3>Ediciones Físicas</h3>
              <p>¿Prefieres el papel? Te conectamos con las mejores ediciones físicas de los libros que estás explorando.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="membresia" className="pricing-section">
        <div className="container text-center">
          <h2 className="section-title">Únete al Club</h2>
          <p className="section-subtitle">Sin planes confusos. Sin letra pequeña. Acceso total.</p>
          <div className="pricing-card gold-glow">
            <div className="pricing-badge">Membresía Completa</div>
            <div className="pricing-price">$12<span className="pricing-cents">.99</span><span className="pricing-period">/mes</span></div>
            <ul className="pricing-features">
              <li><ChevronRight size={16} /> Acceso a más de 1,400 libros.</li>
              <li><ChevronRight size={16} /> Narración por IA ilimitada.</li>
              <li><ChevronRight size={16} /> Chat interactivo con Hermes AI.</li>
              <li><ChevronRight size={16} /> Informes y resúmenes automáticos.</li>
              <li><ChevronRight size={16} /> Sube tus propios libros.</li>
              <li><ChevronRight size={16} /> Foro del Club de Lectura.</li>
              <li><ChevronRight size={16} /> Gana meses gratis al compartir.</li>
            </ul>
            <button className="btn-primary full-width" onClick={handleLoginClick}>
              Comenzar ahora <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ── YOUTUBE ── */}
      <section className="youtube-section">
        <div className="container text-center">
          <h2 className="section-title">Escúchanos antes de decidir</h2>
          <p className="section-subtitle">
            Prueba la calidad de nuestra narración IA en YouTube. Gratis.
          </p>
          <div className="video-placeholder">
            <div className="play-btn">▶</div>
            <p>El Kybalion — Audiolibro generado por IA</p>
          </div>
          <p className="youtube-cta">
            ¿Te gustó la experiencia? Imagina poder <em>conversar</em> con ese libro.
          </p>
        </div>
      </section>
    </main>
  );
}

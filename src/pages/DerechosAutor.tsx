import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Shield, Scale, Handshake, Clock } from 'lucide-react';

export default function DerechosAutor() {
  return (
    <main className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '80vh' }}>
      <Link to="/" className="blog-back-link"><ArrowLeft size={16} /> Volver al inicio</Link>
      
      <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.5rem' }}>
        Derechos de Autor
      </h1>
      <p className="section-subtitle" style={{ marginBottom: '3rem', marginLeft: 0 }}>
        Política de Propiedad Intelectual y Procedimiento de Reclamo (DMCA)
      </p>

      {/* Declaración de buena fe */}
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Shield size={24} style={{ color: 'var(--accent-gold)' }} />
          <h2 style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mystic)', margin: 0 }}>
            Nuestro Compromiso
          </h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          El Club de Lectura Arcana respeta profundamente los derechos de propiedad intelectual de autores, traductores 
          y editoriales. Nuestra misión es facilitar el acceso al conocimiento con fines educativos, 
          de investigación y de preservación cultural. Trabajamos continuamente para asegurar que el contenido 
          disponible en nuestra plataforma cumpla con la legislación vigente en materia de derechos de autor.
        </p>
      </div>

      {/* Procedimiento de reclamo */}
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Scale size={24} style={{ color: 'var(--accent-gold)' }} />
          <h2 style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mystic)', margin: 0 }}>
            Procedimiento de Reclamo (DMCA)
          </h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Si usted es el titular de los derechos de una obra que se encuentra en nuestra biblioteca, o su representante 
          autorizado, y considera que dicha obra infringe sus derechos de propiedad intelectual, puede solicitar su 
          remoción enviándonos un aviso formal con la siguiente información:
        </p>
        <ol style={{ color: 'var(--text-secondary)', lineHeight: '2', paddingLeft: '1.5rem' }}>
          <li><strong style={{ color: 'var(--text-primary)' }}>Identificación del titular:</strong> Nombre completo y datos de contacto del propietario de los derechos o de su representante legal autorizado.</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>Identificación de la obra:</strong> Título, autor y cualquier información que permita identificar la obra protegida.</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>Prueba de titularidad:</strong> Documentación o enlace que demuestre la titularidad de los derechos sobre la obra (ej: registro de ISBN, contrato editorial, certificado de derechos).</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>Ubicación del contenido:</strong> URL o descripción precisa de dónde se encuentra la obra en nuestra plataforma.</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>Declaración de buena fe:</strong> Una declaración indicando que, de buena fe, usted cree que el uso del material no está autorizado por el titular de los derechos, su agente o la ley.</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>Firma:</strong> Firma física o electrónica del titular de los derechos o de su representante autorizado.</li>
        </ol>
      </div>

      {/* Contacto */}
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Mail size={24} style={{ color: 'var(--accent-gold)' }} />
          <h2 style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mystic)', margin: 0 }}>
            Contacto para Reclamos
          </h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1rem' }}>
          Envíe su notificación de reclamo al siguiente correo electrónico:
        </p>
        <div style={{ 
          background: 'rgba(212, 175, 55, 0.1)', 
          border: '1px solid rgba(212, 175, 55, 0.3)',
          borderRadius: 'var(--radius-sm)', 
          padding: '1rem 1.5rem',
          textAlign: 'center',
          marginBottom: '1rem'
        }}>
          <a href="mailto:derechos@lecturaarcana.com" 
            style={{ color: 'var(--accent-gold)', fontSize: '1.2rem', fontWeight: 600, textDecoration: 'none' }}>
            derechos@lecturaarcana.com
          </a>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
          También puede utilizar este correo para consultas generales relacionadas con derechos de autor 
          y propiedad intelectual.
        </p>
      </div>

      {/* Compromiso de respuesta */}
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Clock size={24} style={{ color: 'var(--accent-gold)' }} />
          <h2 style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mystic)', margin: 0 }}>
            Compromiso de Respuesta
          </h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          Nos comprometemos a revisar y responder cada notificación de reclamo dentro de un plazo de 
          <strong style={{ color: 'var(--text-primary)' }}> 48 a 72 horas hábiles</strong>. 
          Una vez verificada la legitimidad del reclamo, procederemos a la remoción inmediata del contenido 
          en cuestión de nuestra plataforma.
        </p>
      </div>

      {/* Oferta de colaboración */}
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Handshake size={24} style={{ color: 'var(--accent-gold)' }} />
          <h2 style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mystic)', margin: 0 }}>
            Invitación a Colaborar
          </h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1rem' }}>
          Si usted es autor, traductor o editorial y desea que su obra forme parte de nuestra colección 
          de manera oficial, nos encantaría explorar una colaboración. Ofrecemos:
        </p>
        <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', paddingLeft: '1.5rem' }}>
          <li>Visibilidad ante una comunidad activa de lectores apasionados.</li>
          <li>Integración con nuestras herramientas de IA (narración, resúmenes, chat interactivo) para enriquecer la experiencia de lectura de su obra.</li>
          <li>Modelos de compensación flexibles según acuerdo mutuo.</li>
          <li>Atribución completa y enlace a sus canales oficiales de venta.</li>
        </ul>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '1rem' }}>
          Contáctenos en <a href="mailto:colaboraciones@lecturaarcana.com" style={{ color: 'var(--accent-gold)' }}>
          colaboraciones@lecturaarcana.com</a> para iniciar la conversación.
        </p>
      </div>

      {/* Aviso legal */}
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontFamily: 'var(--font-mystic)' }}>
          Aviso Legal
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem' }}>
          El Club de Lectura Arcana opera como un club de lectura digital con fines educativos, de investigación y 
          preservación cultural. El contenido disponible en nuestra plataforma se ofrece exclusivamente para 
          el uso personal y académico de nuestros miembros. No fomentamos ni autorizamos la reproducción, 
          distribución o comercialización de material protegido por derechos de autor fuera de los términos 
          de nuestra membresía. Todo el contenido está sujeto a remoción inmediata ante un reclamo legítimo 
          del titular de los derechos.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem', marginTop: '1rem' }}>
          Para más información sobre nuestras políticas, consulte nuestros{' '}
          <Link to="/terms" style={{ color: 'var(--accent-gold)' }}>Términos de Servicio</Link> y{' '}
          <Link to="/privacy" style={{ color: 'var(--accent-gold)' }}>Política de Privacidad</Link>.
        </p>
      </div>
    </main>
  );
}

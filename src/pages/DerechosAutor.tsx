import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Shield, Scale, Handshake, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const content = {
  es: {
    back: 'Volver al inicio',
    title: 'Derechos de Autor',
    subtitle: 'Política de Propiedad Intelectual y Procedimiento de Reclamo (DMCA)',
    
    s1_title: 'Nuestro Compromiso',
    s1_desc: 'El Club de Lectura Arcana respeta profundamente los derechos de propiedad intelectual de autores, traductores y editoriales. Nuestra misión es facilitar el acceso al conocimiento con fines educativos, de investigación y de preservación cultural. Trabajamos continuamente para asegurar que el contenido disponible en nuestra plataforma cumpla con la legislación vigente en materia de derechos de autor.',
    
    s2_title: 'Procedimiento de Reclamo (DMCA)',
    s2_desc: 'Si usted es el titular de los derechos de una obra que se encuentra en nuestra biblioteca, o su representante autorizado, y considera que dicha obra infringe sus derechos de propiedad intelectual, puede solicitar su remoción enviándonos un aviso formal con la siguiente información:',
    s2_l1_b: 'Identificación del titular:', s2_l1: ' Nombre completo y datos de contacto del propietario de los derechos o de su representante legal autorizado.',
    s2_l2_b: 'Identificación de la obra:', s2_l2: ' Título, autor y cualquier información que permita identificar la obra protegida.',
    s2_l3_b: 'Prueba de titularidad:', s2_l3: ' Documentación o enlace que demuestre la titularidad de los derechos sobre la obra (ej: registro de ISBN, contrato editorial, certificado de derechos).',
    s2_l4_b: 'Ubicación del contenido:', s2_l4: ' URL o descripción precisa de dónde se encuentra la obra en nuestra plataforma.',
    s2_l5_b: 'Declaración de buena fe:', s2_l5: ' Una declaración indicando que, de buena fe, usted cree que el uso del material no está autorizado por el titular de los derechos, su agente o la ley.',
    s2_l6_b: 'Firma:', s2_l6: ' Firma física o electrónica del titular de los derechos o de su representante autorizado.',
    
    s3_title: 'Contacto para Reclamos',
    s3_desc1: 'Envíe su notificación de reclamo al siguiente correo electrónico:',
    s3_desc2: 'También puede utilizar este correo para consultas generales relacionadas con derechos de autor y propiedad intelectual.',
    
    s4_title: 'Compromiso de Respuesta',
    s4_desc: 'Nos comprometemos a revisar y responder cada notificación de reclamo dentro de un plazo de 48 a 72 horas hábiles. Una vez verificada la legitimidad del reclamo, procederemos a la remoción inmediata del contenido en cuestión de nuestra plataforma.',
    
    s5_title: 'Invitación a Colaborar',
    s5_desc: 'Si usted es autor, traductor o editorial y desea que su obra forme parte de nuestra colección de manera oficial, nos encantaría explorar una colaboración. Ofrecemos:',
    s5_l1: 'Visibilidad ante una comunidad activa de lectores apasionados.',
    s5_l2: 'Integración con nuestras herramientas de IA (narración, resúmenes, chat interactivo) para enriquecer la experiencia de lectura de su obra.',
    s5_l3: 'Modelos de compensación flexibles según acuerdo mutuo.',
    s5_l4: 'Atribución completa y enlace a sus canales oficiales de venta.',
    s5_desc2: 'Contáctenos en colaboraciones@lecturaarcana.com para iniciar la conversación.',
    
    s6_title: 'Aviso Legal',
    s6_desc1: 'El Club de Lectura Arcana opera como un club de lectura digital con fines educativos, de investigación y preservación cultural. El contenido disponible en nuestra plataforma se ofrece exclusivamente para el uso personal y académico de nuestros miembros. No fomentamos ni autorizamos la reproducción, distribución o comercialización de material protegido por derechos de autor fuera de los términos de nuestra membresía. Todo el contenido está sujeto a remoción inmediata ante un reclamo legítimo del titular de los derechos.',
    s6_desc2: 'Para más información sobre nuestras políticas, consulte nuestros',
    s6_link1: 'Términos de Servicio',
    s6_link2: 'Política de Privacidad',
    and: 'y'
  },
  en: {
    back: 'Back to home',
    title: 'Copyright',
    subtitle: 'Intellectual Property Policy and Claim Procedure (DMCA)',
    
    s1_title: 'Our Commitment',
    s1_desc: 'The Arcane Reading Club deeply respects the intellectual property rights of authors, translators, and publishers. Our mission is to facilitate access to knowledge for educational, research, and cultural preservation purposes. We continuously work to ensure that the content available on our platform complies with current copyright legislation.',
    
    s2_title: 'Claim Procedure (DMCA)',
    s2_desc: 'If you are the copyright holder of a work found in our library, or their authorized representative, and believe that such work infringes your intellectual property rights, you may request its removal by sending us a formal notice with the following information:',
    s2_l1_b: 'Holder identification:', s2_l1: ' Full name and contact information of the rights owner or their authorized legal representative.',
    s2_l2_b: 'Work identification:', s2_l2: ' Title, author, and any information that allows the protected work to be identified.',
    s2_l3_b: 'Proof of ownership:', s2_l3: ' Documentation or link proving ownership of rights over the work (e.g., ISBN registration, publishing contract, rights certificate).',
    s2_l4_b: 'Content location:', s2_l4: ' URL or precise description of where the work is located on our platform.',
    s2_l5_b: 'Good faith statement:', s2_l5: ' A statement indicating that, in good faith, you believe the use of the material is not authorized by the copyright owner, its agent, or the law.',
    s2_l6_b: 'Signature:', s2_l6: ' Physical or electronic signature of the rights owner or their authorized representative.',
    
    s3_title: 'Contact for Claims',
    s3_desc1: 'Send your claim notification to the following email address:',
    s3_desc2: 'You can also use this email for general inquiries related to copyright and intellectual property.',
    
    s4_title: 'Response Commitment',
    s4_desc: 'We are committed to reviewing and responding to each claim notification within 48 to 72 business hours. Once the legitimacy of the claim is verified, we will proceed with the immediate removal of the content in question from our platform.',
    
    s5_title: 'Invitation to Collaborate',
    s5_desc: 'If you are an author, translator, or publisher and would like your work to officially be part of our collection, we would love to explore a collaboration. We offer:',
    s5_l1: 'Visibility to an active community of passionate readers.',
    s5_l2: 'Integration with our AI tools (narration, summaries, interactive chat) to enrich the reading experience of your work.',
    s5_l3: 'Flexible compensation models based on mutual agreement.',
    s5_l4: 'Full attribution and linking to your official sales channels.',
    s5_desc2: 'Contact us at colaboraciones@lecturaarcana.com to start the conversation.',
    
    s6_title: 'Legal Notice',
    s6_desc1: 'The Arcane Reading Club operates as a digital reading club for educational, research, and cultural preservation purposes. The content available on our platform is offered exclusively for the personal and academic use of our members. We do not encourage or authorize the reproduction, distribution, or marketing of copyrighted material outside the terms of our membership. All content is subject to immediate removal upon a legitimate claim by the copyright holder.',
    s6_desc2: 'For more information on our policies, please see our',
    s6_link1: 'Terms of Service',
    s6_link2: 'Privacy Policy',
    and: 'and'
  }
};

export default function DerechosAutor() {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'es';
  const text = content[lang];

  return (
    <main className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '80vh' }}>
      <Link to="/" className="blog-back-link"><ArrowLeft size={16} /> {text.back}</Link>
      
      <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.5rem' }}>
        {text.title}
      </h1>
      <p className="section-subtitle" style={{ marginBottom: '3rem', marginLeft: 0 }}>
        {text.subtitle}
      </p>

      {/* Declaración de buena fe */}
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Shield size={24} style={{ color: 'var(--accent-gold)' }} />
          <h2 style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mystic)', margin: 0 }}>
            {text.s1_title}
          </h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          {text.s1_desc}
        </p>
      </div>

      {/* Procedimiento de reclamo */}
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Scale size={24} style={{ color: 'var(--accent-gold)' }} />
          <h2 style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mystic)', margin: 0 }}>
            {text.s2_title}
          </h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          {text.s2_desc}
        </p>
        <ol style={{ color: 'var(--text-secondary)', lineHeight: '2', paddingLeft: '1.5rem' }}>
          <li><strong style={{ color: 'var(--text-primary)' }}>{text.s2_l1_b}</strong>{text.s2_l1}</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>{text.s2_l2_b}</strong>{text.s2_l2}</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>{text.s2_l3_b}</strong>{text.s2_l3}</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>{text.s2_l4_b}</strong>{text.s2_l4}</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>{text.s2_l5_b}</strong>{text.s2_l5}</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>{text.s2_l6_b}</strong>{text.s2_l6}</li>
        </ol>
      </div>

      {/* Contacto */}
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Mail size={24} style={{ color: 'var(--accent-gold)' }} />
          <h2 style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mystic)', margin: 0 }}>
            {text.s3_title}
          </h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1rem' }}>
          {text.s3_desc1}
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
          {text.s3_desc2}
        </p>
      </div>

      {/* Compromiso de respuesta */}
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Clock size={24} style={{ color: 'var(--accent-gold)' }} />
          <h2 style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mystic)', margin: 0 }}>
            {text.s4_title}
          </h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          {text.s4_desc}
        </p>
      </div>

      {/* Oferta de colaboración */}
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <Handshake size={24} style={{ color: 'var(--accent-gold)' }} />
          <h2 style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mystic)', margin: 0 }}>
            {text.s5_title}
          </h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1rem' }}>
          {text.s5_desc}
        </p>
        <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', paddingLeft: '1.5rem' }}>
          <li>{text.s5_l1}</li>
          <li>{text.s5_l2}</li>
          <li>{text.s5_l3}</li>
          <li>{text.s5_l4}</li>
        </ul>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginTop: '1rem' }}>
          {text.s5_desc2}
        </p>
      </div>

      {/* Aviso legal */}
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontFamily: 'var(--font-mystic)' }}>
          {text.s6_title}
        </h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem' }}>
          {text.s6_desc1}
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem', marginTop: '1rem' }}>
          {text.s6_desc2}{' '}
          <Link to="/terms" style={{ color: 'var(--accent-gold)' }}>{text.s6_link1}</Link> {text.and}{' '}
          <Link to="/privacy" style={{ color: 'var(--accent-gold)' }}>{text.s6_link2}</Link>.
        </p>
      </div>
    </main>
  );
}

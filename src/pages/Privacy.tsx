import { useTranslation } from 'react-i18next';

const content = {
  es: {
    title: 'Política de Privacidad',
    s1_title: '1. Protección de Datos',
    s1_desc: 'El Club de Lectura Arcana respeta la privacidad de tu experiencia de lectura. No compartimos tu historial de lectura ni los libros que exploras con ninguna entidad externa.',
    s2_title: '2. Conversaciones con Hermes AI',
    s2_desc: 'Las conversaciones que sostienes con Hermes AI se procesan para brindarte respuestas certeras, pero no son utilizadas para entrenar modelos públicos ni se venden a terceros.',
    s3_title: '3. Datos Almacenados',
    s3_desc: 'Solo almacenamos los datos necesarios para mantener tu membresía activa (email, identificador de pago seguro) y tu progreso de lectura sincronizado.'
  },
  en: {
    title: 'Privacy Policy',
    s1_title: '1. Data Protection',
    s1_desc: 'The Arcane Reading Club respects the privacy of your reading experience. We do not share your reading history or the books you explore with any external entity.',
    s2_title: '2. Conversations with Hermes AI',
    s2_desc: 'The conversations you have with Hermes AI are processed to provide you with accurate answers, but they are not used to train public models nor are they sold to third parties.',
    s3_title: '3. Stored Data',
    s3_desc: 'We only store the data necessary to keep your membership active (email, secure payment identifier) and your reading progress synchronized.'
  }
};

export default function Privacy() {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('en') ? 'en' : 'es';
  const text = content[lang];

  return (
    <main className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '80vh' }}>
      <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '2rem' }}>{text.title}</h1>
      
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-md)' }}>
        <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontFamily: 'var(--font-mystic)' }}>{text.s1_title}</h2>
        <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
          {text.s1_desc}
        </p>

        <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontFamily: 'var(--font-mystic)' }}>{text.s2_title}</h2>
        <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
          {text.s2_desc}
        </p>

        <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontFamily: 'var(--font-mystic)' }}>{text.s3_title}</h2>
        <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
          {text.s3_desc}
        </p>
      </div>
    </main>
  );
}

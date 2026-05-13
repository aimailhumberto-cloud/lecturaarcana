import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <main className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '80vh' }}>
      <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Términos de Servicio</h1>
      
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-md)' }}>
        <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontFamily: 'var(--font-mystic)' }}>1. Membresía al Club</h2>
        <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
          Al unirte al Club de Lectura Arcana, aceptas que el contenido de la biblioteca es para fines de investigación personal, desarrollo espiritual y estudio académico.
        </p>

        <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontFamily: 'var(--font-mystic)' }}>2. Uso del Contenido</h2>
        <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
          Las interacciones con Hermes AI, así como las transcripciones generadas por la narración inteligente, son privadas. El miembro no debe reproducir, distribuir ni comercializar material protegido por derechos de autor que se encuentre dentro del club.
        </p>

        <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontFamily: 'var(--font-mystic)' }}>3. Suscripción</h2>
        <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
          La membresía se cobra de manera mensual. El miembro puede cancelar su acceso en cualquier momento, lo cual revocará su capacidad de acceder al contenido al final del ciclo de facturación.
        </p>

        <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontFamily: 'var(--font-mystic)' }}>4. Propiedad Intelectual</h2>
        <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
          El Club de Lectura Arcana respeta los derechos de propiedad intelectual. Si usted es titular de derechos sobre alguna obra presente en nuestra biblioteca, consulte nuestra{' '}
          <Link to="/derechos-de-autor" style={{ color: 'var(--accent-gold)' }}>Política de Derechos de Autor y DMCA</Link>{' '}
          para conocer el procedimiento de reclamo y las opciones de colaboración.
        </p>
      </div>
    </main>
  );
}

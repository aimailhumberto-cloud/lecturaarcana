export default function Privacy() {
  return (
    <main className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem', minHeight: '80vh' }}>
      <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Política de Privacidad</h1>
      
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-md)' }}>
        <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontFamily: 'var(--font-mystic)' }}>1. Protección de Datos</h2>
        <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
          El Club de Lectura Arcana respeta la privacidad de tu experiencia de lectura. No compartimos tu historial de lectura ni los libros que exploras con ninguna entidad externa.
        </p>

        <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontFamily: 'var(--font-mystic)' }}>2. Conversaciones con Hermes AI</h2>
        <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
          Las conversaciones que sostienes con Hermes AI se procesan para brindarte respuestas certeras, pero no son utilizadas para entrenar modelos públicos ni se venden a terceros.
        </p>

        <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontFamily: 'var(--font-mystic)' }}>3. Datos Almacenados</h2>
        <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
          Solo almacenamos los datos necesarios para mantener tu membresía activa (email, identificador de pago seguro) y tu progreso de lectura sincronizado.
        </p>
      </div>
    </main>
  );
}

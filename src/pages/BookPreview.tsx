import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, RefreshCw, Sparkles, BookOpen, Headphones, MessageSquare, ChevronRight, FolderOpen, FileText, Star } from 'lucide-react';
import { API_URL, PAYMENT_URL } from '../config';

interface BookData {
  id: number;
  title: string;
  author: string;
  format: string;
  file_size: number;
  total_pages: number;
  category_name: string;
  folder_category: string;
  summary: string;
}

export default function BookPreview() {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<BookData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [hasRefreshed, setHasRefreshed] = useState(false);
  const [coverError, setCoverError] = useState(false);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(false);
    fetch(`${API_URL}/api/books/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(data => {
        setBook(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  const handleRefreshSummary = async () => {
    if (hasRefreshed || refreshing || !book) return;
    setRefreshing(true);
    try {
      const res = await fetch(`${API_URL}/api/books/${book.id}/summary`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.ok) {
        const data = await res.json();
        setBook(prev => prev ? { ...prev, summary: data.summary || data.text || prev.summary } : prev);
      }
    } catch {
      // silently fail
    }
    setRefreshing(false);
    setHasRefreshed(true);
  };

  const formatSize = (bytes: number) => {
    if (!bytes) return '';
    if (bytes > 1048576) return `${(bytes / 1048576).toFixed(1)} MB`;
    return `${(bytes / 1024).toFixed(0)} KB`;
  };

  const categoryName = book?.category_name || book?.folder_category || '';

  if (loading) {
    return (
      <main className="book-preview-page">
        <div className="container">
          <div className="book-preview-skeleton">
            <div className="skeleton-cover shimmer" />
            <div className="skeleton-info">
              <div className="skeleton-line shimmer" style={{ width: '70%', height: '2rem' }} />
              <div className="skeleton-line shimmer" style={{ width: '40%', height: '1rem', marginTop: '1rem' }} />
              <div className="skeleton-line shimmer" style={{ width: '90%', height: '1rem', marginTop: '2rem' }} />
              <div className="skeleton-line shimmer" style={{ width: '80%', height: '1rem', marginTop: '0.5rem' }} />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !book) {
    return (
      <main className="book-preview-page">
        <div className="container text-center" style={{ paddingTop: '10rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Libro no encontrado</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Este libro no existe o fue removido del catálogo.
          </p>
          <Link to="/catalogo" className="btn-primary">
            Ver Catálogo <ChevronRight size={18} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="book-preview-page">
      <div className="container">
        {/* Back link */}
        <Link
          to={categoryName ? `/catalogo/${encodeURIComponent(categoryName)}` : '/catalogo'}
          className="blog-back-link"
        >
          <ArrowLeft size={16} />
          {categoryName ? `Volver a ${categoryName}` : 'Volver al catálogo'}
        </Link>

        {/* Hero: cover + info */}
        <div className="book-preview-hero">
          <div className="book-preview-cover">
            {!coverError ? (
              <img
                src={`${API_URL}/api/books/${book.id}/cover`}
                alt={book.title}
                onError={() => setCoverError(true)}
              />
            ) : (
              <div className="book-preview-cover-fallback">
                <BookOpen size={48} />
                <span>{book.format.toUpperCase()}</span>
              </div>
            )}
          </div>

          <div className="book-preview-info">
            <h1 className="book-preview-title">{book.title}</h1>
            {book.author && book.author !== 'Autor desconocido' && (
              <p className="book-preview-author">{book.author}</p>
            )}

            <div className="book-preview-meta">
              <span className="book-preview-tag">
                <FileText size={14} />
                {book.format.toUpperCase()}
              </span>
              {book.total_pages > 0 && (
                <span className="book-preview-tag">
                  <BookOpen size={14} />
                  {book.total_pages} páginas
                </span>
              )}
              {book.file_size > 0 && (
                <span className="book-preview-tag">{formatSize(book.file_size)}</span>
              )}
            </div>

            {categoryName && (
              <Link
                to={`/catalogo/${encodeURIComponent(categoryName)}`}
                className="book-preview-category"
              >
                <FolderOpen size={14} />
                {categoryName}
              </Link>
            )}

            {/* Primary CTA */}
            <a href={PAYMENT_URL} className="btn-primary book-preview-cta-btn">
              <Star size={18} />
              Únete al Club para leer este libro
            </a>
            <p className="book-preview-cta-price">$12.99/mes · Acceso total a 1,400+ libros</p>
          </div>
        </div>

        {/* AI Summary */}
        <section className="book-preview-summary glass-panel">
          <div className="book-preview-summary-header">
            <h2>
              <Sparkles size={20} />
              Sinopsis AI
            </h2>
            <button
              className={`book-preview-refresh ${hasRefreshed ? 'disabled' : ''}`}
              onClick={handleRefreshSummary}
              disabled={hasRefreshed || refreshing}
              title={hasRefreshed ? 'Ya se generó una nueva sinopsis' : 'Generar nueva sinopsis con IA'}
            >
              <RefreshCw size={16} className={refreshing ? 'spinning' : ''} />
              {refreshing ? 'Generando...' : hasRefreshed ? 'Sinopsis actualizada' : 'Nueva sinopsis'}
            </button>
          </div>

          {book.summary ? (
            <div className="book-preview-summary-text">
              {book.summary.split('\n').map((p, i) =>
                p.trim() ? <p key={i}>{p}</p> : null
              )}
            </div>
          ) : (
            <div className="book-preview-no-summary">
              <Sparkles size={24} />
              <p>Aún no hay sinopsis disponible para este libro.</p>
              {!hasRefreshed && (
                <button className="btn-secondary" onClick={handleRefreshSummary} disabled={refreshing}>
                  <RefreshCw size={16} className={refreshing ? 'spinning' : ''} />
                  {refreshing ? 'Generando...' : 'Generar sinopsis con IA'}
                </button>
              )}
            </div>
          )}
        </section>

        {/* Bottom CTA */}
        <section className="book-preview-bottom-cta glass-panel">
          <h3>Accede a toda la biblioteca</h3>
          <ul className="book-preview-benefits">
            <li><BookOpen size={16} /> Lectura completa de 1,400+ libros esotéricos</li>
            <li><Headphones size={16} /> Narración AI — escucha cualquier libro</li>
            <li><MessageSquare size={16} /> Hermes AI — conversa con tus libros</li>
            <li><Sparkles size={16} /> Resúmenes y análisis generados por IA</li>
          </ul>
          <a href={PAYMENT_URL} className="btn-primary full-width">
            Unirme al Club <ChevronRight size={18} />
          </a>
        </section>
      </div>
    </main>
  );
}

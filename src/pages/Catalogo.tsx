import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { API_URL, APP_URL } from '../config';

const API_BASE = API_URL;

interface Category {
  id: number;
  name: string;
  book_count: number;
}

interface Book {
  id: number;
  title: string;
  author: string;
  format: string;
  cover_path: string;
  category_name: string;
  folder_category: string;
}

function CategoryCard({ cat }: { cat: Category }) {
  const [coverIds, setCoverIds] = useState<number[]>([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/books?category_id=${cat.id}&limit=3`)
      .then(res => res.json())
      .then(data => {
        const ids = (data.books || []).map((b: Book) => b.id);
        setCoverIds(ids);
      })
      .catch(() => {});
  }, [cat.id]);

  return (
    <Link
      to={`/catalogo/${encodeURIComponent(cat.name)}`}
      className="catalogo-category-card"
    >
      <div className="category-shelf">
        {coverIds.map((id, i) => (
          <div key={id} className="shelf-book" style={{ zIndex: 3 - i }}>
            <img
              src={`${API_BASE}/api/books/${id}/cover`}
              alt=""
              loading="lazy"
              onError={(e) => { (e.target as HTMLImageElement).src = ''; }}
            />
          </div>
        ))}
      </div>
      <div className="category-card-text">
        <h3>{cat.name}</h3>
        <span className="catalogo-count">{cat.book_count} {cat.book_count === 1 ? 'libro' : 'libros'}</span>
      </div>
    </Link>
  );
}

export default function Catalogo() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [categories, setCategories] = useState<Category[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/categories`)
      .then(res => res.json())
      .then(data => {
        setCategories(data.filter((c: Category) => c.book_count > 0));
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!categoryName || categories.length === 0) return;
    const decoded = decodeURIComponent(categoryName);
    const cat = categories.find(c => c.name.toLowerCase() === decoded.toLowerCase());
    if (cat) {
      setSelectedCategory(cat);
      setLoading(true);
      fetch(`${API_BASE}/api/books?category_id=${cat.id}&limit=100`)
        .then(res => res.json())
        .then(data => { setBooks(data.books || []); setLoading(false); })
        .catch(() => setLoading(false));
    } else { setLoading(false); }
  }, [categoryName, categories]);

  if (!categoryName) {
    return (
      <main className="catalogo-page">
        <div className="container">
          <Link to="/" className="blog-back-link"><ArrowLeft size={16} /> Volver al inicio</Link>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.5rem' }}>
            Explora el Catálogo
          </h1>
          <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
            46 senderos de conocimiento. Elige el tuyo.
          </p>
          <div className="catalogo-categories-grid">
            {categories.map(cat => <CategoryCard key={cat.id} cat={cat} />)}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="catalogo-page">
      <div className="container">
        <Link to="/catalogo" className="blog-back-link"><ArrowLeft size={16} /> Todas las categorías</Link>
        <h1 className="hero-title" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginBottom: '0.5rem' }}>
          {selectedCategory?.name || decodeURIComponent(categoryName)}
        </h1>
        <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
          {loading ? 'Cargando...' : `${books.length} libros disponibles`}
        </p>
        {!loading && books.length > 0 && (
          <div className="catalogo-books-grid">
            {books.map(book => (
              <div key={book.id} className="catalogo-book-card">
                <div className="catalogo-book-cover">
                  <img src={`${API_BASE}/api/books/${book.id}/cover`} alt={book.title} loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                </div>
                <div className="catalogo-book-info">
                  <h3 className="catalogo-book-title">{book.title}</h3>
                  {book.author && <p className="catalogo-book-author">{book.author}</p>}
                  <span className="catalogo-book-format">{book.format.toUpperCase()}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        {!loading && books.length === 0 && (
          <div className="text-center" style={{ padding: '4rem 0' }}>
            <p style={{ color: 'var(--text-muted)' }}>No se encontraron libros en esta categoría.</p>
          </div>
        )}
        <div className="catalogo-cta text-center" style={{ marginTop: '4rem' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            ¿Quieres leer estos libros, escucharlos con IA y chatear con Hermes?
          </p>
          <button className="btn-primary" onClick={() => window.location.href = APP_URL}>
            Ingresar al Club <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </main>
  );
}

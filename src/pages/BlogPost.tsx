import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Tag, ChevronRight } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/blogData';
import { APP_URL } from '../config';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = BLOG_ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return (
      <main className="blog-post-page">
        <div className="container text-center" style={{ paddingTop: '10rem' }}>
          <h1>Artículo no encontrado</h1>
          <Link to="/blog" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
            Volver al Blog
          </Link>
        </div>
      </main>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={i} />;
      if (trimmed.startsWith('## ')) return <h2 key={i} className="blog-content-h2">{trimmed.slice(3)}</h2>;
      if (trimmed.startsWith('### ')) return <h3 key={i} className="blog-content-h3">{trimmed.slice(4)}</h3>;
      if (trimmed === '---') return <hr key={i} className="blog-content-hr" />;
      if (trimmed.startsWith('*') && trimmed.endsWith('*') && !trimmed.startsWith('**')) {
        return <p key={i} className="blog-content-cta" dangerouslySetInnerHTML={{
          __html: trimmed.slice(1, -1)
        }} />;
      }
      if (/^\d+\./.test(trimmed)) {
        const parts = trimmed.match(/^(\d+\.\s\*\*[^*]+\*\*):?\s*(.*)/);
        if (parts) {
          return (
            <p key={i} className="blog-content-list">
              <strong>{parts[1].replace(/\*\*/g, '')}</strong> {parts[2]}
            </p>
          );
        }
      }
      return <p key={i} className="blog-content-p">{trimmed}</p>;
    });
  };

  return (
    <main className="blog-post-page">
      <div className="container">
        <Link to="/blog" className="blog-back-link">
          <ArrowLeft size={16} /> Volver al Blog
        </Link>

        <article className="blog-article">
          <div className="blog-article-meta">
            <span><Tag size={14} /> {article.category}</span>
            <span><Clock size={14} /> {article.readTime}</span>
            <span>{article.date}</span>
          </div>

          <h1 className="blog-article-title">{article.title}</h1>

          <div className="blog-article-body">
            {renderContent(article.content)}
          </div>

          <div className="blog-article-cta glass-panel">
            <h3>¿Quieres explorar más sobre {article.category}?</h3>
            <p>En nuestra biblioteca encontrarás decenas de obras sobre este tema, con narración por IA y chat interactivo.</p>
            <button className="btn-primary" onClick={() => window.location.href = APP_URL}>
              Explorar la Biblioteca <ChevronRight size={18} />
            </button>
          </div>
        </article>
      </div>
    </main>
  );
}

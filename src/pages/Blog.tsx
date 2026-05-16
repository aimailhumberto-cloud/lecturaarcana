import { Link } from 'react-router-dom';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getBlogArticles } from '../data/blogData';

export default function Blog() {
  const { t, i18n } = useTranslation();
  const articles = getBlogArticles(i18n.language);

  return (
    <main className="blog-page">
      <div className="container">
        <div className="blog-header">
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            {t('blog.title', 'El Diario de la Biblioteca')}
          </h1>
          <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
            {t('blog.subtitle', 'Exploraciones, reseñas y reflexiones sobre el conocimiento que custodiamos.')}
          </p>
        </div>

        <div className="blog-grid">
          {articles.map((article, i) => (
            <Link to={`/blog/${article.slug}`} key={article.slug} className={`blog-card ${i === 0 ? 'blog-card--featured' : ''}`}>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className="blog-card-category"><Tag size={12} /> {article.category}</span>
                  <span className="blog-card-time"><Clock size={12} /> {article.readTime}</span>
                </div>
                <h2 className="blog-card-title">{article.title}</h2>
                <p className="blog-card-excerpt">{article.excerpt}</p>
                <div className="blog-card-footer">
                  <span className="blog-card-date">{article.date}</span>
                  <span className="blog-card-link">{t('blog.read_more', 'Leer más')} <ArrowRight size={14} /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

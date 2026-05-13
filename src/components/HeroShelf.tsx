import { useState, useEffect } from 'react';
import { API_URL } from '../config';

const API_BASE = API_URL;

interface BookEntry {
  id: number;
  cover_source: string;
  cover_path: string;
}

export default function HeroShelf() {
  const [coverUrls, setCoverUrls] = useState<{ id: number; url: string }[]>([]);

  useEffect(() => {
    // Fetch from multiple offsets to get a diverse pool
    Promise.all([
      fetch(`${API_BASE}/api/books?limit=80&offset=0`).then(r => r.json()),
      fetch(`${API_BASE}/api/books?limit=80&offset=300`).then(r => r.json()),
      fetch(`${API_BASE}/api/books?limit=80&offset=600`).then(r => r.json()),
      fetch(`${API_BASE}/api/books?limit=80&offset=900`).then(r => r.json()),
    ]).then(results => {
      const allBooks: BookEntry[] = results.flatMap(r => r.books || []);
      
      // Only keep books with REAL covers (not SVG placeholders)
      const withRealCovers = allBooks.filter(b => 
        b.cover_source !== 'svg' && b.cover_source !== 'none'
      );
      
      // Shuffle and take 24
      const shuffled = withRealCovers
        .sort(() => Math.random() - 0.5)
        .slice(0, 24)
        .map(b => ({
          id: b.id,
          // Use cover_path directly if it's a full URL (Supabase), otherwise use API endpoint
          url: b.cover_path?.startsWith('http') 
            ? b.cover_path 
            : `${API_BASE}/api/books/${b.id}/cover`
        }));
      
      setCoverUrls(shuffled);
    }).catch(() => {});
  }, []);

  if (coverUrls.length < 6) return null;

  const row1 = coverUrls.slice(0, 8);
  const row2 = coverUrls.slice(8, 16);
  const row3 = coverUrls.slice(16, 24);

  return (
    <div className="hero-shelf-wrapper">
      <div className="hero-shelf-fade hero-shelf-fade--left" />
      <div className="hero-shelf-fade hero-shelf-fade--right" />
      <div className="hero-shelf-container">
        <div className="hero-shelf-row hero-shelf-row--1">
          {row1.map(book => (
            <div key={book.id} className="hero-shelf-book">
              <img src={book.url} alt="" loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }} />
            </div>
          ))}
        </div>
        <div className="hero-shelf-row hero-shelf-row--2">
          {row2.map(book => (
            <div key={book.id} className="hero-shelf-book">
              <img src={book.url} alt="" loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }} />
            </div>
          ))}
        </div>
        <div className="hero-shelf-row hero-shelf-row--3">
          {row3.map(book => (
            <div key={book.id} className="hero-shelf-book">
              <img src={book.url} alt="" loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


import { useState, useEffect, useRef } from 'react';
import { API_URL } from '../config';

const API_BASE = API_URL;

export default function HeroShelf() {
  const [bookIds, setBookIds] = useState<number[]>([]);
  const [validIds, setValidIds] = useState<number[]>([]);
  const checkedRef = useRef(false);

  useEffect(() => {
    // Fetch from multiple offsets to get a diverse pool
    Promise.all([
      fetch(`${API_BASE}/api/books?limit=50&offset=0`).then(r => r.json()),
      fetch(`${API_BASE}/api/books?limit=50&offset=200`).then(r => r.json()),
      fetch(`${API_BASE}/api/books?limit=50&offset=500`).then(r => r.json()),
      fetch(`${API_BASE}/api/books?limit=50&offset=800`).then(r => r.json()),
    ]).then(results => {
      const allBooks = results.flatMap(r => r.books || []);
      // Shuffle and collect ids
      const shuffled = allBooks
        .sort(() => Math.random() - 0.5)
        .map((b: { id: number }) => b.id);
      setBookIds(shuffled);
    }).catch(() => {});
  }, []);

  // Check which covers are real images (not SVG placeholders)
  useEffect(() => {
    if (bookIds.length === 0 || checkedRef.current) return;
    checkedRef.current = true;

    const checkCover = async (id: number): Promise<number | null> => {
      try {
        const res = await fetch(`${API_BASE}/api/books/${id}/cover`, { method: 'HEAD' });
        const ct = res.headers.get('content-type') || '';
        // Real covers are jpeg/png/webp, SVG placeholders are image/svg+xml
        if (ct.includes('svg')) return null;
        return id;
      } catch { return null; }
    };

    // Check covers in batches
    const check = async () => {
      const results: number[] = [];
      for (let i = 0; i < bookIds.length && results.length < 24; i += 10) {
        const batch = bookIds.slice(i, i + 10);
        const checked = await Promise.all(batch.map(checkCover));
        results.push(...checked.filter((id): id is number => id !== null));
      }
      setValidIds(results.slice(0, 24));
    };
    check();
  }, [bookIds]);

  if (validIds.length < 6) return null;

  const row1 = validIds.slice(0, 8);
  const row2 = validIds.slice(8, 16);
  const row3 = validIds.slice(16, 24);

  return (
    <div className="hero-shelf-wrapper">
      <div className="hero-shelf-fade hero-shelf-fade--left" />
      <div className="hero-shelf-fade hero-shelf-fade--right" />
      <div className="hero-shelf-container">
        <div className="hero-shelf-row hero-shelf-row--1">
          {row1.map(id => (
            <div key={id} className="hero-shelf-book">
              <img src={`${API_BASE}/api/books/${id}/cover`} alt="" loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }} />
            </div>
          ))}
        </div>
        <div className="hero-shelf-row hero-shelf-row--2">
          {row2.map(id => (
            <div key={id} className="hero-shelf-book">
              <img src={`${API_BASE}/api/books/${id}/cover`} alt="" loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }} />
            </div>
          ))}
        </div>
        <div className="hero-shelf-row hero-shelf-row--3">
          {row3.map(id => (
            <div key={id} className="hero-shelf-book">
              <img src={`${API_BASE}/api/books/${id}/cover`} alt="" loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

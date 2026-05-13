import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Catalogo from './pages/Catalogo';
import Narracion from './pages/Narracion';
import Hermes from './pages/Hermes';
import DerechosAutor from './pages/DerechosAutor';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/catalogo/:categoryName" element={<Catalogo />} />
          <Route path="/narracion" element={<Narracion />} />
          <Route path="/hermes" element={<Hermes />} />
          <Route path="/derechos-de-autor" element={<DerechosAutor />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

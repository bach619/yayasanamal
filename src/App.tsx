// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import TentangKami from './pages/TentangKami';
import Program from './pages/Program';
import Berita from './pages/Berita';
import Galeri from './pages/Galeri';
import Publikasi from './pages/Publikasi';
import Kemitraan from './pages/Kemitraan';
import Donasi from './pages/Donasi';
import Kontak from './pages/Kontak';
import FAQ from './pages/FAQ';

// New Tentang submenu pages
import ProfilYayasan from './pages/tentang/ProfilYayasan';
import SejarahLatarBelakang from './pages/tentang/SejarahLatarBelakang';
import VisiMisi from './pages/tentang/VisiMisi';
import StrukturOrganisasi from './pages/tentang/StrukturOrganisasi';
import LegalitasPengakuan from './pages/tentang/LegalitasPengakuan';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        {/* ScrollToTop component - placed inside Router but outside Routes */}
        <ScrollToTop />
        
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Tentang submenu routes */}
            <Route path="/tentang/profil" element={<ProfilYayasan />} />
            <Route path="/tentang/sejarah" element={<SejarahLatarBelakang />} />
            <Route path="/tentang/visi-misi" element={<VisiMisi />} />
            <Route path="/tentang/struktur" element={<StrukturOrganisasi />} />
            <Route path="/tentang/legalitas" element={<LegalitasPengakuan />} />
            
            {/* Redirect old tentang route to profil */}
            <Route path="/tentang" element={<ProfilYayasan />} />
            
            <Route path="/program" element={<Program />} />
            
            {/* Publikasi submenu routes */}
            <Route path="/publikasi/dokumen" element={<Publikasi />} />
            <Route path="/publikasi/berita" element={<Berita />} />
            <Route path="/publikasi/galeri" element={<Galeri />} />
            <Route path="/publikasi/faq" element={<FAQ />} />
            
            {/* Redirect old routes to new publikasi structure */}
            <Route path="/publikasi" element={<Publikasi />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/faq" element={<FAQ />} />
            
            <Route path="/kemitraan" element={<Kemitraan />} />
            <Route path="/donasi" element={<Donasi />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </main>
        
        {/* Footer ditampilkan di semua halaman */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
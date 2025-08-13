import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <img 
                  src="https://i.ibb.co/g8nGrhX/logo6.png" 
                  alt="Yayasan AMAL - AntangPatahu Mahaga Lewu" 
                  className="h-12 w-auto"
                />
              </div>
              <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-white-900 leading-tight">AMAL</span>
              <span className="text-xs text-white-600 block leading-tight">
                Yayasan AntangPatahu Mahaga Lewu
              </span>
            </div>
            </div>
            <p className="text-sm leading-relaxed">
              Yayasan AMAL berkomitmen membangun masa depan berkelanjutan melalui 
              program pendidikan, lingkungan, dan pemberdayaan masyarakat Indonesia di Perhutanan Sosial.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Menu Cepat</h4>
            <ul className="space-y-2">
              <li><Link to="/tentang" className="text-sm hover:text-emerald-400 transition-colors">Tentang Kami</Link></li>
              <li><Link to="/program" className="text-sm hover:text-emerald-400 transition-colors">Program</Link></li>
              <li><Link to="/berita" className="text-sm hover:text-emerald-400 transition-colors">Berita</Link></li>
              <li><Link to="/galeri" className="text-sm hover:text-emerald-400 transition-colors">Galeri</Link></li>
              <li><Link to="/publikasi" className="text-sm hover:text-emerald-400 transition-colors">Publikasi</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-white mb-4">Program Utama</h4>
            <ul className="space-y-2">
              <li><span className="text-sm">Pemanfaatan Hasil Hutan Bukan Kayu (HHBK)</span></li>
              <li><span className="text-sm">Konservasi dan Ekowisata</span></li>
              <li><span className="text-sm">Tata Kelola Hutan Berkelanjutan</span></li>
              <li><span className="text-sm">Rehabilitasi Hutan Berkelanjutan</span></li>
              <li><span className="text-sm">Pemberdayaan Komunitas Hutan</span></li>
              <li><span className="text-sm">Budaya & Tradisi</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-sm">
                  Jl. Kwitang Raya No. 13 Gd. Graha Ketut Mas Agung Lt.4<br />
                  Jakarta Pusat, 10340<br />
                  Indonesia
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-sm">
                  Jl. Temanggung Tilung III No 47<br />
                  Palangka Raya, 73112<br />
                  Indonesia
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-emerald-400" />
                <p className="text-sm">+62 823 5173 2449</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-emerald-400" />
                <p className="text-sm">info@yayasanamal.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 Yayasan AntangPatahu Mahaga Lewu (AMAL). Seluruh hak cipta dilindungi. Develop by BobyMihing
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                Kebijakan Privasi
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
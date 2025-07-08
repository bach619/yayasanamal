import React from 'react';
import { Download, Calendar, FileText, BarChart3, BookOpen } from 'lucide-react';

const Publikasi: React.FC = () => {
  const publications = [
    {
      id: 1,
      type: 'Laporan Tahunan',
      title: 'Laporan Tahunan 2024',
      description: 'Ringkasan komprehensif kegiatan, program, dan pencapaian Yayasan AMAL selama tahun 2024.',
      date: '31 Desember 2024',
      size: '2.5 MB',
      pages: 48,
      icon: BarChart3,
      featured: true
    },
    {
      id: 2,
      type: 'Laporan Keuangan',
      title: 'Laporan Keuangan Auditan 2024',
      description: 'Laporan keuangan yang telah diaudit oleh KAP independen untuk transparansi penggunaan dana.',
      date: '15 Januari 2025',
      size: '1.8 MB',
      pages: 32,
      icon: FileText,
      featured: true
    },
    {
      id: 3,
      type: 'Panduan',
      title: 'Panduan Pendaftaran Beasiswa 2025',
      description: 'Petunjuk lengkap cara mendaftar program beasiswa Yayasan AMAL untuk tahun akademik 2025/2026.',
      date: '10 Januari 2025',
      size: '856 KB',
      pages: 16,
      icon: BookOpen,
      featured: false
    },
    {
      id: 4,
      type: 'Studi Kasus',
      title: 'Dampak Program Pendidikan di Papua',
      description: 'Analisis mendalam tentang dampak pembangunan sekolah terhadap tingkat literasi anak di Papua.',
      date: '5 Januari 2025',
      size: '3.2 MB',
      pages: 64,
      icon: BarChart3,
      featured: false
    },
    {
      id: 5,
      type: 'Panduan',
      title: 'Manual Penanaman Pohon Berkelanjutan',
      description: 'Panduan teknis penanaman dan perawatan pohon untuk program konservasi lingkungan.',
      date: '20 Desember 2024',
      size: '1.2 MB',
      pages: 24,
      icon: BookOpen,
      featured: false
    },
    {
      id: 6,
      type: 'Laporan Program',
      title: 'Evaluasi Program Pemberdayaan UMKM 2024',
      description: 'Hasil evaluasi program pemberdayaan ekonomi dan tingkat keberhasilan peserta UMKM.',
      date: '15 Desember 2024',
      size: '2.1 MB',
      pages: 40,
      icon: BarChart3,
      featured: false
    },
    {
      id: 7,
      type: 'Newsletter',
      title: 'Buletin AMAL Edisi November 2024',
      description: 'Update bulanan kegiatan yayasan, profil penerima manfaat, dan artikel inspiratif.',
      date: '30 November 2024',
      size: '1.5 MB',
      pages: 12,
      icon: FileText,
      featured: false
    },
    {
      id: 8,
      type: 'Penelitian',
      title: 'Riset Dampak Sosial Program AMAL',
      description: 'Penelitian kolaborasi dengan universitas tentang dampak jangka panjang program yayasan.',
      date: '25 November 2024',
      size: '4.1 MB',
      pages: 88,
      icon: BarChart3,
      featured: false
    }
  ];

  const categories = ['Semua', 'Laporan Tahunan', 'Laporan Keuangan', 'Laporan Program', 'Panduan', 'Newsletter', 'Studi Kasus', 'Penelitian'];
  const [selectedCategory, setSelectedCategory] = React.useState('Semua');

  const filteredPublications = selectedCategory === 'Semua' 
    ? publications 
    : publications.filter(pub => pub.type === selectedCategory);

  const featuredPublications = publications.filter(pub => pub.featured);

  const getTypeColor = (type: string) => {
    const colors = {
      'Laporan Tahunan': 'bg-emerald-100 text-emerald-600',
      'Laporan Keuangan': 'bg-blue-100 text-blue-600',
      'Laporan Program': 'bg-purple-100 text-purple-600',
      'Panduan': 'bg-orange-100 text-orange-600',
      'Newsletter': 'bg-pink-100 text-pink-600',
      'Studi Kasus': 'bg-cyan-100 text-cyan-600',
      'Penelitian': 'bg-indigo-100 text-indigo-600'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Publikasi & Dokumen
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Akses laporan, panduan, dan dokumen penting Yayasan AMAL untuk 
              transparansi dan berbagi pengetahuan dengan publik.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Publikasi Unggulan
            </h2>
            <p className="text-xl text-gray-600">
              Dokumen penting dan laporan terbaru dari Yayasan AMAL
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPublications.map((publication) => (
              <div key={publication.id} className="card p-8 group hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg group-hover:bg-emerald-600 transition-colors">
                    <publication.icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(publication.type)}`}>
                        {publication.type}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {publication.date}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {publication.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {publication.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{publication.pages} halaman</span>
                        <span>{publication.size}</span>
                      </div>
                      
                      <button className="btn-primary inline-flex items-center text-sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8 bg-gray-50">
        <div className="container-custom pt-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-emerald-100 hover:text-emerald-600 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Publications */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Semua Publikasi
            </h2>
            <p className="text-xl text-gray-600">
              Koleksi lengkap dokumen dan laporan Yayasan AMAL
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPublications.map((publication) => (
              <div key={publication.id} className="card group hover:shadow-lg transition-all">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-emerald-100 transition-colors">
                      <publication.icon className="h-6 w-6 text-gray-600 group-hover:text-emerald-600 transition-colors" />
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(publication.type)}`}>
                      {publication.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {publication.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {publication.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{publication.date}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span>{publication.pages}p</span>
                      <span>{publication.size}</span>
                    </div>
                  </div>
                  
                  <button className="w-full btn-secondary text-sm inline-flex items-center justify-center group-hover:btn-primary">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPublications.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">Tidak ada publikasi dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Berlangganan Publikasi Terbaru
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Dapatkan notifikasi setiap kali kami menerbitkan laporan, panduan, 
            atau dokumen baru dari Yayasan AMAL.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-emerald-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publikasi;
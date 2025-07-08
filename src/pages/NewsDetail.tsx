import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Mail } from 'lucide-react';
import { news } from './Berita';
import images from '../assets/images';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the news article by ID
  const article = news.find(item => item.id === parseInt(id || '0'));
  
  // Handle featured news (ID 1)
  const featuredNews = {
    id: 1,
    title: 'Launching Program Beasiswa AMAL 2025',
    excerpt: 'Yayasan AMAL dengan bangga mengumumkan pembukaan program beasiswa terbesar dalam sejarah yayasan untuk 200 siswa berprestasi dari keluarga kurang mampu di seluruh Indonesia.',
    content: `Program beasiswa ini mencakup bantuan biaya pendidikan penuh, buku, seragam, dan bimbingan akademik selama masa studi. Pendaftaran dibuka mulai 1 Februari hingga 31 Maret 2025.

Dengan komitmen untuk mencerdaskan bangsa, Yayasan AMAL telah menyiapkan dana sebesar Rp 5 miliar untuk program beasiswa tahun ini. Program ini merupakan yang terbesar dalam sejarah yayasan sejak didirikan pada tahun 2009.

"Kami percaya bahwa pendidikan adalah kunci untuk memutus rantai kemiskinan dan menciptakan generasi yang lebih baik," ujar Dr. Ahmad Surya, Ketua Yayasan AMAL. "Program beasiswa ini tidak hanya memberikan bantuan finansial, tetapi juga mentoring dan pengembangan karakter."

Beasiswa ini terbuka untuk siswa SMA/SMK dan mahasiswa S1 dari seluruh Indonesia dengan kriteria:
- Memiliki prestasi akademik yang baik (minimal rata-rata 8.0)
- Berasal dari keluarga kurang mampu (dibuktikan dengan surat keterangan tidak mampu)
- Aktif dalam kegiatan sosial atau organisasi
- Memiliki motivasi tinggi untuk berkontribusi bagi masyarakat

Selain bantuan biaya pendidikan, penerima beasiswa juga akan mendapatkan:
- Bimbingan akademik dari tutor berpengalaman
- Pelatihan soft skills dan leadership
- Program magang di perusahaan mitra
- Jaringan alumni yang kuat
- Kesempatan mengikuti program pertukaran pelajar

Pendaftaran dapat dilakukan secara online melalui website resmi Yayasan AMAL mulai 1 Februari 2025. Proses seleksi akan dilakukan dalam tiga tahap: seleksi administrasi, tes tertulis, dan wawancara.

"Kami berharap program ini dapat menjangkau lebih banyak anak Indonesia yang berprestasi namun terkendala biaya," tambah Siti Nurhaliza, Direktur Program Yayasan AMAL.

Untuk informasi lebih lanjut dan pendaftaran, calon peserta dapat mengunjungi website www.yayasanamal.org atau menghubungi hotline 0800-1234-5678.`,
    image: images.newsImage1,
    date: '15 Januari 2025',
    author: 'Tim Redaksi AMAL',
    category: 'Pendidikan'
  };

  // Get the current article (either from news array or featured news)
  const currentArticle = id === '1' ? featuredNews : article;

  // If article not found, redirect to news page
  if (!currentArticle) {
    return <Navigate to="/publikasi/berita" replace />;
  }

  // Get related articles (same category, excluding current article)
  const relatedArticles = news
    .filter(item => item.category === currentArticle.category && item.id !== currentArticle.id)
    .slice(0, 3);

  const shareUrl = window.location.href;
  const shareTitle = currentArticle.title;

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case 'email':
        url = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`;
        break;
    }
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-emerald-600 transition-colors">
              Beranda
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/publikasi/berita" className="text-gray-500 hover:text-emerald-600 transition-colors">
              Berita
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{currentArticle.title}</span>
          </nav>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              to="/publikasi/berita"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Berita
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  currentArticle.category === 'Pendidikan' ? 'bg-blue-100 text-blue-600' :
                  currentArticle.category === 'Lingkungan' ? 'bg-green-100 text-green-600' :
                  currentArticle.category === 'Pemberdayaan' ? 'bg-orange-100 text-orange-600' :
                  currentArticle.category === 'Kemanusiaan' ? 'bg-red-100 text-red-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {currentArticle.category}
                </span>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{currentArticle.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{currentArticle.author}</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {currentArticle.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {currentArticle.excerpt}
              </p>
            </header>

            {/* Featured Image */}
            <div className="relative mb-8 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={currentArticle.image.src}
                alt={currentArticle.image.alt}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none mb-12">
              {currentArticle.content ? (
                currentArticle.content.split('\n\n').map((paragraph: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))
              ) : (
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    {currentArticle.excerpt}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Program ini merupakan bagian dari komitmen Yayasan AMAL untuk terus berkontribusi 
                    dalam pembangunan Indonesia yang berkelanjutan. Dengan melibatkan masyarakat lokal 
                    dan menggunakan pendekatan yang ramah lingkungan, setiap kegiatan dirancang untuk 
                    memberikan dampak positif jangka panjang.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Tim lapangan Yayasan AMAL telah melakukan persiapan matang untuk memastikan 
                    kelancaran program ini. Koordinasi dengan pemerintah daerah dan tokoh masyarakat 
                    setempat juga telah dilakukan untuk memastikan program berjalan sesuai dengan 
                    kebutuhan dan kondisi lokal.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Untuk informasi lebih lanjut tentang program ini atau cara berpartisipasi, 
                    masyarakat dapat menghubungi kantor Yayasan AMAL atau mengunjungi website resmi 
                    di www.yayasanamal.org.
                  </p>
                </div>
              )}
            </div>

            {/* Share Section */}
            <div className="border-t border-gray-200 pt-8 mb-12">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Bagikan Artikel</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                    title="Bagikan ke Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-lg transition-colors"
                    title="Bagikan ke Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleShare('email')}
                    className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors"
                    title="Bagikan via Email"
                  >
                    <Mail className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => navigator.clipboard.writeText(shareUrl)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-lg transition-colors"
                    title="Salin Link"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                Berita Terkait
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    to={`/publikasi/berita/${relatedArticle.id}`}
                    className="card overflow-hidden group hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedArticle.image.src}
                        alt={relatedArticle.image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          relatedArticle.category === 'Pendidikan' ? 'bg-blue-100 text-blue-600' :
                          relatedArticle.category === 'Lingkungan' ? 'bg-green-100 text-green-600' :
                          relatedArticle.category === 'Pemberdayaan' ? 'bg-orange-100 text-orange-600' :
                          relatedArticle.category === 'Kemanusiaan' ? 'bg-red-100 text-red-600' :
                          'bg-purple-100 text-purple-600'
                        }`}>
                          {relatedArticle.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{relatedArticle.date}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {relatedArticle.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default NewsDetail;
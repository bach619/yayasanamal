import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, TreePine, Leaf, Users, Target, Shield, Heart } from 'lucide-react';
import images from '../assets/images';
import HeroSection from '../components/HeroSection';

// Import programs from Program page to keep them in sync
import { programs as allPrograms } from './Program';
// Import news from Berita page to keep them in sync
import { news as allNews } from './Berita';

const Home: React.FC = () => {
  // Use the first 3 programs from Program page to keep them synchronized
  const programs = allPrograms.slice(0, 3).map(program => ({
    title: program.title,
    description: program.description,
    image: program.image,
    link: '/program',
    icon: program.icon,
    category: program.category
  }));

  // Use the first 3 news items from Berita page to keep them synchronized
  const news = allNews.slice(0, 3).map(newsItem => ({
    title: newsItem.title,
    excerpt: newsItem.excerpt,
    image: newsItem.image,
    date: newsItem.date
  }));

  const approaches = [
    {
      icon: Target,
      title: 'Pemetaan Partisipatif',
      description: 'Melibatkan masyarakat adat dalam identifikasi potensi dan kebutuhan hutan berkelanjutan',
      step: '01'
    },
    {
      icon: Users,
      title: 'Pemberdayaan Komunitas',
      description: 'Membangun kapasitas masyarakat lokal melalui pelatihan dan pendampingan intensif',
      step: '02'
    },
    {
      icon: TreePine,
      title: 'Implementasi Program',
      description: 'Menjalankan program perhutanan sosial dengan teknologi dan metode terdepan',
      step: '03'
    },
    {
      icon: Shield,
      title: 'Monitoring & Evaluasi',
      description: 'Memantau dampak program secara berkelanjutan untuk memastikan efektivitas',
      step: '04'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Tentang Yayasan AMAL
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Antang Patahu Mahaga Lewu (AMAL) adalah yayasan yang berdedikasi untuk 
                pengelolaan hutan berkelanjutan dan pemberdayaan masyarakat melalui 
                program-program inovatif di bidang kehutanan, konservasi, dan ekonomi hijau.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Dengan fokus pada pemanfaatan hasil hutan bukan kayu, jasa lingkungan, 
                dan pemberdayaan masyarakat hutan, kami telah melayani ribuan penerima 
                manfaat di seluruh Indonesia dengan komitmen tinggi terhadap kelestarian alam.
              </p>
              <Link to="/tentang" className="btn-primary inline-flex items-center">
                Baca Selengkapnya
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={images.teamPhoto.src}
                alt={images.teamPhoto.alt}
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">2+</p>
                <p className="text-sm">Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Program Kehutanan Unggulan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tiga pilar utama program Yayasan AMAL untuk pengelolaan hutan berkelanjutan
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="card overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image.src}
                    alt={program.image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {program.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                    <program.icon className="h-5 w-5 text-emerald-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                  <Link
                    to={program.link}
                    className="text-emerald-600 font-medium inline-flex items-center hover:text-emerald-700 transition-colors group-hover:translate-x-1"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pendekatan Perhutanan Sosial
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologi terintegrasi yang menggabungkan kearifan lokal dengan teknologi modern 
              untuk menciptakan dampak berkelanjutan bagi hutan dan masyarakat
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className="relative group">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="bg-emerald-100 group-hover:bg-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-colors duration-300">
                      <approach.icon className="h-10 w-10 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {approach.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{approach.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{approach.description}</p>
                </div>
                
                {/* Connection line for desktop */}
                {index < approaches.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-emerald-200 transform translate-x-4 -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/program" className="btn-secondary inline-flex items-center">
              Lihat Detail Program
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Berita Terbaru
              </h2>
              <p className="text-xl text-gray-600">
                Update kegiatan dan program terbaru dari Yayasan AMAL
              </p>
            </div>
            <Link to="/berita" className="btn-secondary hidden md:inline-flex items-center">
              Lihat Semua Berita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <Link 
                key={index} 
                to={`/publikasi/berita/${index === 0 ? 1 : allNews[index - 1]?.id || index + 1}`}
                className="card overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image.src}
                    alt={article.image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-emerald-600 font-medium mb-2">{article.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <Link to="/berita" className="btn-secondary inline-flex items-center">
              Lihat Semua Berita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Mari Bergabung Melestarikan Hutan Indonesia
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Setiap kontribusi Anda akan membantu mewujudkan hutan Indonesia yang 
            lestari dan masyarakat yang sejahtera.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donasi" className="bg-white text-emerald-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Donasi Sekarang
            </Link>
            <Link to="/kemitraan" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Jadi Mitra
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
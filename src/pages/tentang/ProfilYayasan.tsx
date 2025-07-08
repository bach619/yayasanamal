import React from 'react';
import { Heart, Users, Award, Globe, TreePine, Leaf, Shield } from 'lucide-react';
import images from '../../assets/images';

const ProfilYayasan: React.FC = () => {
  const highlights = [
    {
      icon: TreePine,
      title: '167,286+',
      subtitle: 'Hektar Perhutanan Sosial',
      description: 'Kawasan hutan adat dan ekosistem yang berhasil dilestarikan melalui perhutanan sosial'
    },
    {
      icon: Users,
      title: '1,500+',
      subtitle: 'Keluarga Diberdayakan',
      description: 'Masyarakat Dayak yang terlibat aktif dalam program pemberdayaan ekonomi berkelanjutan'
    },
    {
      icon: Leaf,
      title: '12',
      subtitle: 'Program Unggulan',
      description: 'Luas kebun gaharu yang dikembangkan sebagai hasil hutan bukan kayu unggulan'
    },
    {
      icon: Shield,
      title: '2+',
      subtitle: 'Tahun Pengalaman',
      description: 'Dedikasi konsisten dalam pelestarian hutan dan pemberdayaan masyarakat Dayak'
    }
  ];

  const mainGoals = [
    {
      icon: TreePine,
      title: 'Melestarikan Hutan dan Alam',
      description: 'Menggalang partisipasi aktif masyarakat dalam menjaga hutan adat dan ekosistem sekitarnya melalui program perhutanan sosial yang berkelanjutan.',
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      icon: Users,
      title: 'Pemberdayaan Ekonomi Masyarakat',
      description: 'Mendorong pengembangan potensi lokal berbasis hasil hutan bukan kayu, agroforestri, serta kewirausahaan berbasis lingkungan guna meningkatkan pendapatan dan kesejahteraan masyarakat.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Heart,
      title: 'Pelestarian Kearifan Lokal',
      description: 'Memperkuat nilai-nilai budaya dan tradisi masyarakat Dayak sebagai bagian tak terpisahkan dari upaya pelestarian lingkungan.',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const keyFacts = [
    {
      category: 'Perhutanan Sosial',
      facts: [
        'Mengelola 167,286+ hektar Perhutanan Sosial bersama masyarakat Dayak',
        'Mengembangkan 500+ hektar kebun aren berkelanjutan',
        'Melindungi 10+ spesies flora fauna endemik Kalimantan'
      ]
    },
    {
      category: 'Pemberdayaan Ekonomi',
      facts: [
        '1,500+ keluarga terlibat dalam program ekonomi hijau',
        '50+ kelompok usaha berbasis hasil hutan bukan kayu',
        '85% tingkat keberhasilan program pemberdayaan ekonomi'
      ]
    },
    {
      category: 'Kearifan Lokal',
      facts: [
        'Dokumentasi 100+ tradisi dan kearifan lokal Dayak',
        'Pelatihan 200+ pemuda dalam pelestarian budaya',
        'Revitalisasi 25+ ritual adat terkait pelestarian hutan'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Profil Yayasan AMAL
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Yayasan Antang Patahu Mahaga Lewu (AMAL) merupakan organisasi nirlaba yang berkomitmen 
              untuk menjaga kelestarian alam dan memberdayakan masyarakat lokal, khususnya masyarakat 
              Dayak di Kalimantan Tengah.
            </p>
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-emerald-600 p-3 rounded-lg">
                <TreePine className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h2 className="font-bold text-2xl text-gray-900">AMAL</h2>
                <p className="text-emerald-600 font-medium">Antang Patahu Mahaga Lewu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-emerald-100 group-hover:bg-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <item.icon className="h-10 w-10 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-3xl font-bold text-emerald-600 mb-2">{item.title}</h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{item.subtitle}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Tentang Yayasan AMAL
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Melalui pendekatan perhutanan sosial, Yayasan AMAL berupaya menciptakan sinergi 
                  antara pelestarian lingkungan dan peningkatan kesejahteraan masyarakat. Program-program 
                  yang dijalankan difokuskan pada pemanfaatan hutan secara lestari, berbasis kearifan 
                  lokal, guna menciptakan ekosistem yang seimbang dan ekonomi masyarakat yang mandiri.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nama "Antang Patahu Mahaga Lewu" berasal dari bahasa Dayak yang bermakna "Bersama 
                  Membangun Negeri", mencerminkan filosofi kolaborasi dan gotong royong dalam setiap 
                  program yang kami jalankan bersama masyarakat adat.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Sebagai organisasi yang berakar pada kearifan lokal Dayak, kami memahami bahwa 
                  pelestarian hutan tidak dapat dipisahkan dari pemberdayaan masyarakat yang telah 
                  menjadi penjaga hutan selama berabad-abad.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={images.teamPhoto.src}
                alt="Tim Yayasan AMAL bersama masyarakat Dayak"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">2009</p>
                <p className="text-sm">Tahun Berdiri</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Goals */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tujuan Utama
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tiga pilar utama yang menjadi fokus Yayasan AMAL dalam mewujudkan visi perhutanan sosial berkelanjutan
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mainGoals.map((goal, index) => (
              <div key={index} className="card p-8 group hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${goal.color}`}>
                  <goal.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{goal.title}</h3>
                <p className="text-gray-600 leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Fakta & Pencapaian
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Angka-angka yang menunjukkan dampak nyata dari program perhutanan sosial Yayasan AMAL
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {keyFacts.map((section, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {section.category}
                </h3>
                <ul className="space-y-4">
                  {section.facts.map((fact, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Pendekatan Perhutanan Sosial
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Metodologi yang kami gunakan untuk memastikan setiap program memberikan 
              dampak maksimal bagi kelestarian hutan dan kesejahteraan masyarakat Dayak
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Pemetaan Partisipatif</h3>
              <p className="text-sm opacity-90">Identifikasi potensi hutan bersama masyarakat adat</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Kearifan Lokal</h3>
              <p className="text-sm opacity-90">Mengintegrasikan tradisi Dayak dalam pengelolaan hutan</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ekonomi Hijau</h3>
              <p className="text-sm opacity-90">Pengembangan HHBK dan jasa lingkungan berkelanjutan</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Monitoring Bersama</h3>
              <p className="text-sm opacity-90">Evaluasi dampak dengan partisipasi masyarakat</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilYayasan;
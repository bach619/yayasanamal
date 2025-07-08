import React, { useState, useEffect } from 'react';
import { TreePine, Leaf, Shield, Search, Users, TrendingUp, Heart, Globe, Scissors, Zap, Flower2, Droplets, Palmtree } from 'lucide-react';

// Export programs array so it can be imported by other components
export const programs = [
    {
      id: 1,
      icon: Scissors,
      title: 'Kerajinan Purun',
      subtitle: 'Pemanfaatan Hasil Hutan Bukan Kayu (HHBK)',
      description: 'Program pengembangan kerajinan purun sebagai komoditas unggulan yang menggabungkan nilai budaya lokal dengan ekonomi kreatif berkelanjutan.',
      image: {
        src: "https://infopublik.id/assets/upload/headline//IMG-20230507-WA0009.jpg",
        alt: "Kerajinan purun tradisional Kalimantan"
      },
      details: [
        'Pelatihan teknik menganyam purun modern',
        'Pengembangan desain produk inovatif',
        'Pembentukan kelompok pengrajin purun',
        'Pemasaran produk ke pasar nasional',
        'Sertifikasi produk kerajinan berkelanjutan'
      ],
      impact: 'Telah melatih 300+ pengrajin dan menghasilkan 500+ produk kerajinan per bulan',
      color: 'amber',
      category: 'HHBK - Purun'
    },
    {
      id: 2,
      icon: Zap,
      title: 'Kerajinan Rotan',
      subtitle: 'Pemanfaatan Hasil Hutan Bukan Kayu (HHBK)',
      description: 'Pengembangan industri kerajinan rotan berkelanjutan yang memadukan teknik tradisional dengan desain kontemporer untuk pasar global.',
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Tikar_Rotan.jpg",
        alt: "Kerajinan rotan berkualitas tinggi"
      },
      details: [
        'Budidaya rotan berkelanjutan',
        'Pelatihan teknik pengolahan rotan',
        'Desain furniture dan aksesoris modern',
        'Ekspor produk ke pasar internasional',
        'Pengembangan brand rotan Kalimantan'
      ],
      impact: 'Telah mengekspor 1,000+ produk rotan dan memberdayakan 200+ keluarga',
      color: 'orange',
      category: 'HHBK - Rotan'
    },
    {
      id: 3,
      icon: Flower2,
      title: 'Budidaya Madu Kelulut',
      subtitle: 'Pemanfaatan Hasil Hutan Bukan Kayu (HHBK)',
      description: 'Program budidaya lebah kelulut (trigona) untuk menghasilkan madu berkualitas tinggi sambil mendukung konservasi keanekaragaman hayati.',
      image: {
        src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Extracting_stingless_bee_honey.jpg",
        alt: "Budidaya madu kelulut berkelanjutan"
      },
      details: [
        'Pembentukan koloni lebah kelulut',
        'Pelatihan teknik budidaya modern',
        'Pengolahan dan pengemasan madu',
        'Sertifikasi produk madu organik',
        'Edukasi konservasi lebah native'
      ],
      impact: 'Telah menghasilkan 2,000+ botol madu per bulan dan melindungi populasi lebah',
      color: 'yellow',
      category: 'HHBK - Madu'
    },
    {
      id: 4,
      icon: Droplets,
      title: 'Budidaya Aren',
      subtitle: 'Pemanfaatan Hasil Hutan Bukan Kayu (HHBK)',
      description: 'Pengembangan budidaya pohon aren untuk produksi gula aren, nira, dan produk turunan lainnya yang bernilai ekonomi tinggi.',
      image: {
        src: "https://perkebunan.bsip.pertanian.go.id/storage/assets/uploads/images/berita/b4v0JozpZO1mD7HA6N0tubQK35Pzy8DjP7V8LLwI.jpg",
        alt: "Budidaya aren dan pengolahan gula aren"
      },
      details: [
        'Penanaman bibit aren unggul',
        'Pelatihan teknik sadap nira aren',
        'Pengolahan gula aren organik',
        'Diversifikasi produk berbasis aren',
        'Pengembangan agrowisata aren'
      ],
      impact: 'Telah menanam 5,000+ pohon aren dan menghasilkan 10 ton gula aren/bulan',
      color: 'brown',
      category: 'HHBK - Aren'
    },
    {
      id: 5,
      icon: Palmtree,
      title: 'Pemanfaatan Tanaman Nipah',
      subtitle: 'Pemanfaatan Hasil Hutan Bukan Kayu (HHBK)',
      description: 'Program pemanfaatan tanaman nipah sebagai bahan baku gula, atap, dan produk ramah lingkungan untuk mendukung ekonomi pesisir.',
      image: {
        src: "https://static.republika.co.id/uploads/images/inpicture_slide/buah-nipah-_170125135638-501.jpg",
        alt: "Pemanfaatan tanaman nipah berkelanjutan"
      },
      details: [
        'Konservasi hutan mangrove nipah',
        'Pengolahan gula nipah tradisional',
        'Pemanfaatan daun untuk atap ramah lingkungan',
        'Pengembangan produk anyaman nipah',
        'Ekowisata mangrove nipah'
      ],
      impact: 'Telah melestarikan 1,000 hektar nipah dan menghasilkan 200+ produk/bulan',
      color: 'teal',
      category: 'HHBK - Nipah'
    },
    {
      id: 6,
      icon: Leaf,
      title: 'Pemanfaatan Jasa Lingkungan',
      subtitle: 'Konservasi dan Ekowisata',
      description: 'Mengoptimalkan potensi jasa lingkungan hutan untuk konservasi keanekaragaman hayati dan pengembangan ekowisata berkelanjutan.',
      image: {
        src: "https://www.wwf.id/sites/default/files/blog/WWF_Indonesia_Borneo_JulianHahne_10_0.jpg",
        alt: "Ekowisata hutan dan konservasi alam berkelanjutan"
      },
      details: [
        'Pengembangan ekowisata berbasis masyarakat',
        'Program konservasi air dan tanah',
        'Penyerapan karbon dan perdagangan karbon',
        'Penelitian keanekaragaman hayati',
        'Edukasi lingkungan untuk wisatawan'
      ],
      impact: 'Telah mengembangkan 10 destinasi ekowisata dan menyerap 1,000 ton CO2/tahun',
      color: 'green',
      category: 'Jasa Lingkungan'
    },
    {
      id: 7,
      icon: Globe,
      title: 'Perencanaan Perhutanan Sosial',
      subtitle: 'Tata Kelola Hutan Berkelanjutan',
      description: 'Penyusunan rencana pengelolaan hutan berbasis masyarakat yang mengintegrasikan aspek ekonomi, sosial, dan lingkungan.',
      image: {
        src: "https://kmmh.fkt.ugm.ac.id/wp-content/uploads/sites/364/2021/02/Masyarakat_Sungai_Utik_dan_Hutan_Adat_Mereka.jpg",
        alt: "Perencanaan dan pemetaan hutan berkelanjutan"
      },
      details: [
        'Pemetaan partisipatif kawasan hutan',
        'Penyusunan rencana pengelolaan hutan',
        'Fasilitasi izin perhutanan sosial',
        'Pembentukan kelompok tani hutan',
        'Pengembangan sistem monitoring'
      ],
      impact: 'Telah memfasilitasi 50+ izin perhutanan sosial seluas 10,000 hektar',
      color: 'blue',
      category: 'Perencanaan'
    },
    {
      id: 8,
      icon: TreePine,
      title: 'Penanaman dan Pemeliharaan',
      subtitle: 'Rehabilitasi Hutan Berkelanjutan',
      description: 'Program penanaman dan pemeliharaan pohon untuk rehabilitasi lahan kritis dan peningkatan tutupan hutan.',
      image: {
        src: "https://images.bisnis.com/posts/2019/02/28/894846/gambut22.jpg",
        alt: "Penanaman pohon untuk rehabilitasi hutan"
      },
      details: [
        'Penanaman pohon endemik dan ekonomis',
        'Pemeliharaan intensif tanaman muda',
        'Pengayaan tegakan hutan alam',
        'Rehabilitasi lahan kritis',
        'Monitoring pertumbuhan dan survival rate'
      ],
      impact: 'Telah menanam 100,000+ pohon dengan tingkat keberhasilan 85%',
      color: 'emerald',
      category: 'Rehabilitasi'
    },
    {
      id: 9,
      icon: Shield,
      title: 'Perlindungan dan Pengamanan Hutan',
      subtitle: 'Konservasi dan Pencegahan',
      description: 'Sistem perlindungan hutan dari ancaman kebakaran, illegal logging, dan aktivitas destruktif lainnya.',
      image: {
        src: "https://mongabay.co.id/wp-content/uploads/2019/04/IMG_2475-768x512.jpg",
        alt: "Perlindungan dan pengamanan kawasan hutan"
      },
      details: [
        'Pembentukan tim pemadam kebakaran hutan',
        'Sistem early warning kebakaran',
        'Patroli rutin kawasan hutan',
        'Edukasi masyarakat tentang bahaya kebakaran',
        'Koordinasi dengan aparat penegak hukum'
      ],
      impact: 'Telah melindungi 167,286 hektar hutan dan mencegah 50+ kasus kebakaran',
      color: 'red',
      category: 'Perlindungan'
    },
    {
      id: 10,
      icon: Search,
      title: 'Penelitian dan Pengembangan',
      subtitle: 'Inovasi Teknologi Kehutanan',
      description: 'Penelitian ilmiah untuk pengembangan teknologi dan inovasi dalam pengelolaan hutan berkelanjutan.',
      image: {
        src: "https://live.staticflickr.com/4303/35378014464_8dee6ef29f_b.jpg",
        alt: "Penelitian dan pengembangan teknologi kehutanan"
      },
      details: [
        'Penelitian spesies pohon unggul',
        'Pengembangan teknologi silvikultur',
        'Studi dampak perubahan iklim',
        'Inovasi pengolahan hasil hutan',
        'Publikasi jurnal ilmiah'
      ],
      impact: 'Telah menghasilkan 25+ publikasi ilmiah dan 10 inovasi teknologi',
      color: 'purple',
      category: 'Penelitian'
    },
    {
      id: 11,
      icon: Users,
      title: 'Kelola Sosial dan Pembinaan Masyarakat',
      subtitle: 'Pemberdayaan Komunitas Hutan',
      description: 'Program pemberdayaan dan pembinaan masyarakat sekitar hutan untuk meningkatkan kesejahteraan dan partisipasi konservasi.',
      image: {
        src: "https://statik.tempo.co/data/2022/09/24/id_1143549/1143549_720.jpg",
        alt: "Program pemberdayaan masyarakat di hutan hujan Kalimantan"
      },
      details: [
        'Pelatihan keterampilan masyarakat hutan',
        'Pembentukan kelompok usaha bersama',
        'Pendampingan manajemen keuangan',
        'Program beasiswa anak masyarakat hutan',
        'Penguatan kelembagaan lokal'
      ],
      impact: 'Telah memberdayakan 1,500+ keluarga dan membentuk 50+ kelompok usaha',
      color: 'indigo',
      category: 'Pemberdayaan'
    },
    {
      id: 12,
      icon: TrendingUp,
      title: 'Pemasaran HHBK dan Jasa Lingkungan',
      subtitle: 'Pengembangan Ekonomi Hijau',
      description: 'Pengembangan sistem pemasaran produk hasil hutan bukan kayu dan jasa lingkungan untuk meningkatkan nilai ekonomi hutan.',
      image: {
        src: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=600&fit=crop",
        alt: "Pemasaran produk hasil hutan berkelanjutan"
      },
      details: [
        'Pengembangan brand produk HHBK',
        'Platform digital marketing',
        'Sertifikasi produk berkelanjutan',
        'Jaringan distribusi nasional',
        'Kemitraan dengan buyer internasional'
      ],
      impact: 'Telah memasarkan produk ke 100+ outlet dan ekspor ke 5 negara',
      color: 'cyan',
      category: 'Pemasaran'
    }
  ];

const Program: React.FC = () => {
  const [activeProgram, setActiveProgram] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveProgram(prev => (prev + 1) % 12);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      amber: 'bg-amber-100 text-amber-700 border-amber-200',
      orange: 'bg-orange-100 text-orange-700 border-orange-200',
      yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      brown: 'bg-amber-100 text-amber-800 border-amber-300',
      teal: 'bg-teal-100 text-teal-700 border-teal-200',
      emerald: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      green: 'bg-green-100 text-green-700 border-green-200',
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      red: 'bg-red-100 text-red-700 border-red-200',
      purple: 'bg-purple-100 text-purple-700 border-purple-200',
      indigo: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  const categories = [
    { name: 'HHBK - Purun', icon: Scissors, count: 1, color: 'amber' },
    { name: 'HHBK - Rotan', icon: Zap, count: 1, color: 'orange' },
    { name: 'HHBK - Madu', icon: Flower2, count: 1, color: 'yellow' },
    { name: 'HHBK - Aren', icon: Droplets, count: 1, color: 'brown' },
    { name: 'HHBK - Nipah', icon: Palmtree, count: 1, color: 'teal' },
    { name: 'Jasa Lingkungan', icon: Leaf, count: 1, color: 'green' },
    { name: 'Perencanaan', icon: Globe, count: 1, color: 'blue' },
    { name: 'Rehabilitasi', icon: TreePine, count: 1, color: 'emerald' },
    { name: 'Perlindungan', icon: Shield, count: 1, color: 'red' },
    { name: 'Penelitian', icon: Search, count: 1, color: 'purple' },
    { name: 'Pemberdayaan', icon: Users, count: 1, color: 'indigo' },
    { name: 'Pemasaran', icon: TrendingUp, count: 1, color: 'cyan' }
  ];

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: `hsl(${120 + Math.random() * 60}, ${50 + Math.random() * 30}%, ${40 + Math.random() * 30}%)`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/20"></div>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-8 h-8 bg-green-200/30 rounded-full backdrop-blur-sm border border-green-300/20"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20">
        {/* Hero Section */}
        <section className="py-32 relative">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className={`text-center max-w-5xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center justify-center space-x-6 mb-12">
                {[TreePine, Leaf, Shield, Flower2, Scissors].map((Icon, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br from-emerald-500 to-green-600 p-4 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-110 ${
                      activeProgram % 5 === index ? 'scale-125 shadow-emerald-500/50' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <Icon className="h-10 w-10 text-white animate-pulse" />
                  </div>
                ))}
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 mb-8 leading-tight">
                Revolusi Hutan <br className="hidden md:inline"/> Berkelanjutan
              </h1>
              
              <p className="text-2xl text-gray-800 leading-relaxed mb-12 max-w-4xl mx-auto font-medium">
                Dua belas program inovatif Yayasan AMAL yang mengubah cara kita mengelola hutan, 
                dari kerajinan tradisional hingga teknologi konservasi terdepan.
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { value: '167,286+', label: 'Hektar Dilindungi', color: 'emerald' },
                  { value: '100,000+', label: 'Pohon Ditanam', color: 'green' },
                  { value: '1,500+', label: 'Keluarga Diberdayakan', color: 'teal' },
                  { value: '12', label: 'Program Unggulan', color: 'blue' }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl text-center flex flex-col items-center justify-center ${
                      activeProgram % 4 === index ? 'ring-4 ring-emerald-300 scale-105' : ''
                    }`}
                  >
                    <h3 className={`text-4xl font-black text-${stat.color}-600 mb-2`}>{stat.value}</h3>
                    <p className="text-gray-700 font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Program Categories Overview */}
        <section className="py-24 bg-white/70 backdrop-blur-sm shadow-2xl">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black text-gray-900 mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Dua Belas Pilar Kehutanan
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
                Setiap program saling terkait dalam ekosistem pengelolaan hutan yang berkelanjutan dan inovatif.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`text-center group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 ${
                    activeProgram === index ? 'scale-110 shadow-2xl ring-4 ring-emerald-300' : ''
                  }`}
                >
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-500 transform group-hover:rotate-12 ${getColorClasses(category.color)}`}>
                    <category.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-600">{category.count} Program</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-32 bg-gradient-to-br from-white/50 to-emerald-50/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="space-y-40">
              {programs.map((program, index) => (
                <div
                  key={program.id}
                  className={`grid lg:grid-cols-2 gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} group`}>
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700 hover:scale-105 hover:rotate-1">
                      <img
                        src={program.image.src}
                        alt={program.image.alt}
                        className="w-full h-96 object-cover object-center transform group-hover:scale-125 transition-transform duration-1000 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20 group-hover:from-emerald-500/40 group-hover:to-green-500/40 transition-all duration-500"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className={`inline-block px-6 py-3 rounded-full text-sm font-bold bg-white/90 backdrop-blur-sm text-gray-800 shadow-lg`}>
                          {program.category}
                        </span>
                      </div>
                      <div className="absolute top-6 right-6">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm bg-white/90`}>
                          <program.icon className="h-8 w-8 text-emerald-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} space-y-8`}>
                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl border-2 ${getColorClasses(program.color)} transform hover:scale-110 transition-all duration-300`}>
                      <program.icon className="h-10 w-10" />
                    </div>
                    
                    <div className="space-y-4">
                      <span className={`inline-block px-6 py-3 rounded-full text-sm font-bold border-2 ${getColorClasses(program.color)}`}>
                        {program.subtitle}
                      </span>
                      
                      <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                        {program.title}
                      </h2>
                      
                      <p className="text-xl text-gray-700 leading-relaxed font-medium">
                        {program.description}
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                        <div className="w-2 h-8 bg-emerald-500 rounded-full mr-4"></div>
                        Kegiatan Utama:
                      </h3>
                      <div className="grid gap-4">
                        {program.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-4 group">
                            <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            </div>
                            <span className="text-gray-800 font-medium group-hover:text-emerald-700 transition-colors">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-emerald-100 via-green-100 to-teal-100 p-8 rounded-3xl border-l-8 border-emerald-500 shadow-xl backdrop-blur-sm">
                      <h4 className="font-black text-emerald-800 mb-4 flex items-center text-xl">
                        <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                          <Heart className="h-6 w-6 text-white animate-pulse" />
                        </div>
                        Dampak yang Telah Dicapai:
                      </h4>
                      <p className="text-emerald-700 text-lg leading-relaxed font-semibold">{program.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-32 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 text-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-white/20 rounded-full animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 via-green-600/90 to-teal-600/90"></div>
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">
                Pendekatan Holistik & Terintegrasi
              </h2>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto font-medium leading-relaxed">
                Semua program saling bersinergi menciptakan dampak berkelanjutan yang mengubah kehidupan dan melestarikan alam.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: TreePine, title: 'Konservasi', desc: 'Melindungi dan melestarikan hutan untuk generasi mendatang dengan teknologi terdepan.', color: 'from-emerald-400 to-green-500' },
                { icon: Users, title: 'Pemberdayaan', desc: 'Meningkatkan kesejahteraan masyarakat melalui program berkelanjutan dan inovatif.', color: 'from-green-400 to-teal-500' },
                { icon: TrendingUp, title: 'Ekonomi Hijau', desc: 'Mengembangkan nilai ekonomi hutan secara berkelanjutan dan ramah lingkungan.', color: 'from-teal-400 to-cyan-500' },
                { icon: Search, title: 'Inovasi', desc: 'Mengembangkan teknologi dan metode terdepan untuk masa depan yang lebih baik.', color: 'from-cyan-400 to-blue-500' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="text-center p-8 rounded-3xl bg-white/10 backdrop-blur-lg shadow-2xl transform hover:scale-110 transition-all duration-500 border border-white/20 group"
                >
                  <div className={`bg-gradient-to-br ${item.color} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:rotate-12 transition-all duration-500`}>
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-yellow-300 transition-colors">{item.title}</h3>
                  <p className="text-lg opacity-90 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-br from-white via-emerald-50 to-green-50 relative overflow-hidden">
          {/* Floating CTA Elements */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${4 + Math.random() * 3}s`
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-200 to-green-300 rounded-full opacity-30 backdrop-blur-sm"></div>
              </div>
            ))}
          </div>
          
          <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center justify-center space-x-4 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl animate-bounce">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                </div>
                
                <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 mb-8 leading-tight">
                  Bergabunglah dalam Revolusi Hijau
                </h2>
                
                <p className="text-2xl text-gray-800 mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
                  Setiap kontribusi Anda adalah investasi untuk masa depan hutan Indonesia yang lestari. 
                  Mari bersama menciptakan dampak positif yang berkelanjutan.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <a 
                  href="/donasi" 
                  className="group bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-black py-6 px-12 rounded-full transition-all duration-300 inline-flex items-center justify-center text-xl shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-110"
                >
                  <Heart className="h-8 w-8 mr-4 group-hover:animate-pulse" />
                  Dukung Program Kami
                  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                <a 
                  href="/kemitraan" 
                  className="group border-4 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-black py-6 px-12 rounded-full transition-all duration-300 inline-flex items-center justify-center text-xl shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-110 relative overflow-hidden"
                >
                  <Users className="h-8 w-8 mr-4 group-hover:animate-bounce" />
                  Jadi Mitra Program
                  <div className="absolute inset-0 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10"></div>
                </a>
              </div>
              
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  { icon: Leaf, title: 'Dampak Langsung', desc: 'Kontribusi Anda langsung terasa di lapangan' },
                  { icon: Shield, title: 'Transparansi Penuh', desc: 'Laporan real-time progress setiap program' },
                  { icon: Heart, title: 'Komunitas Global', desc: 'Bergabung dengan ribuan pendukung worldwide' }
                ].map((item, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-emerald-100 transform hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-700 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div> {/* Closing tag for <div className="relative z-20"> */}
    </div> // Closing tag for <div className="pt-20 relative overflow-hidden">
  );
};

export default Program;
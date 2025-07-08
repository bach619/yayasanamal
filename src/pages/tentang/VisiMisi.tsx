import React from 'react';
import { Eye, Target, Heart, Users, Globe, Award } from 'lucide-react';

const VisiMisi: React.FC = () => {
  const visiPoints = [
    {
      icon: Globe,
      title: 'Indonesia Berkelanjutan',
      description: 'Menciptakan ekosistem pembangunan yang ramah lingkungan dan berkelanjutan untuk generasi mendatang'
    },
    {
      icon: Users,
      title: 'Masyarakat Adil',
      description: 'Membangun tatanan sosial yang berkeadilan dengan akses yang setara untuk semua lapisan masyarakat'
    },
    {
      icon: Heart,
      title: 'Kehidupan Sejahtera',
      description: 'Meningkatkan kualitas hidup masyarakat melalui pendidikan, kesehatan, dan ekonomi yang kuat'
    }
  ];

  const misiItems = [
    {
      number: '01',
      title: 'Pendidikan Berkualitas',
      description: 'Memberikan akses pendidikan berkualitas untuk semua, terutama anak-anak dari keluarga kurang mampu di daerah terpencil',
      details: [
        'Program beasiswa untuk siswa berprestasi',
        'Pembangunan dan renovasi fasilitas sekolah',
        'Pelatihan kompetensi guru dan tenaga pendidik',
        'Pengembangan kurikulum berbasis lokal'
      ]
    },
    {
      number: '02',
      title: 'Pelestarian Lingkungan',
      description: 'Melindungi dan melestarikan lingkungan hidup melalui program konservasi dan edukasi berkelanjutan',
      details: [
        'Penanaman pohon dan rehabilitasi hutan',
        'Konservasi satwa langka dan habitatnya',
        'Edukasi lingkungan untuk masyarakat',
        'Pengembangan teknologi ramah lingkungan'
      ]
    },
    {
      number: '03',
      title: 'Pemberdayaan Ekonomi',
      description: 'Memberdayakan ekonomi masyarakat marginal melalui pelatihan keterampilan dan bantuan modal usaha',
      details: [
        'Pelatihan keterampilan dan teknologi',
        'Bantuan modal untuk UMKM',
        'Pengembangan produk lokal',
        'Pembentukan koperasi dan kelompok usaha'
      ]
    },
    {
      number: '04',
      title: 'Kemitraan Strategis',
      description: 'Membangun kemitraan berkelanjutan dengan berbagai pihak untuk memperluas dampak positif',
      details: [
        'Kolaborasi dengan pemerintah daerah',
        'Kemitraan dengan sektor swasta',
        'Jaringan dengan organisasi internasional',
        'Sinergi dengan komunitas lokal'
      ]
    },
    {
      number: '05',
      title: 'Transparansi & Akuntabilitas',
      description: 'Menjaga transparansi dan akuntabilitas dalam setiap program untuk membangun kepercayaan publik',
      details: [
        'Laporan keuangan auditan berkala',
        'Publikasi progress program',
        'Sistem monitoring dan evaluasi',
        'Keterbukaan informasi publik'
      ]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Integritas',
      description: 'Berkomitmen pada kejujuran, transparansi, dan akuntabilitas dalam setiap tindakan',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Users,
      title: 'Kolaborasi',
      description: 'Membangun kemitraan strategis dan melibatkan partisipasi aktif masyarakat',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Eye,
      title: 'Inovasi',
      description: 'Menggunakan pendekatan kreatif dan solusi inovatif untuk tantangan sosial',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Award,
      title: 'Keunggulan',
      description: 'Berkomitmen memberikan layanan terbaik dengan standar kualitas tinggi',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Globe,
      title: 'Keberlanjutan',
      description: 'Memastikan setiap program memberikan dampak jangka panjang',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Target,
      title: 'Fokus Dampak',
      description: 'Mengutamakan hasil terukur yang memberikan manfaat nyata bagi masyarakat',
      color: 'bg-emerald-100 text-emerald-600'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Visi & Misi
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Landasan filosofis dan arah strategis Yayasan AMAL dalam menciptakan 
              perubahan positif berkelanjutan untuk Indonesia yang lebih baik.
            </p>
          </div>
        </div>
      </section>

      {/* Visi Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="h-10 w-10 text-emerald-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Visi Kami
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-relaxed mb-8">
                "Menjadi yayasan terdepan dalam menciptakan Indonesia yang berkelanjutan, 
                adil, dan sejahtera melalui pemberdayaan masyarakat, pelestarian lingkungan, 
                dan peningkatan kualitas pendidikan."
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {visiPoints.map((point, index) => (
              <div key={index} className="card p-8 text-center group hover:shadow-xl transition-shadow">
                <div className="bg-emerald-100 group-hover:bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                  <point.icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misi Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Misi Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lima pilar strategis yang menjadi panduan operasional dalam mencapai visi organisasi
            </p>
          </div>
          
          <div className="space-y-8">
            {misiItems.map((item, index) => (
              <div key={index} className="card p-8">
                <div className="grid lg:grid-cols-4 gap-8 items-start">
                  <div className="text-center lg:text-left">
                    <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                      <span className="text-xl font-bold">{item.number}</span>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Detail Program:</h4>
                    <ul className="space-y-2">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Organisasi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip fundamental yang mendasari setiap keputusan dan tindakan Yayasan AMAL
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-6 group hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${value.color}`}>
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Wujudkan Visi Bersama
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Bergabunglah dengan kami dalam mewujudkan Indonesia yang berkelanjutan, 
            adil, dan sejahtera untuk semua.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/donasi" 
              className="bg-white text-emerald-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Dukung Program Kami
            </a>
            <a 
              href="/kemitraan" 
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Jadi Mitra Strategis
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisiMisi;
import React from 'react';
import { Users, Handshake, Building, GraduationCap, Heart, ArrowRight } from 'lucide-react';
import images from '../assets/images';

const Kemitraan: React.FC = () => {
  const partnerTypes = [
    {
      icon: Building,
      title: 'Korporasi & Perusahaan',
      description: 'Kemitraan strategis dalam program CSR untuk dampak sosial berkelanjutan',
      benefits: [
        'Program CSR terintegrasi dan terukur',
        'Branding positif perusahaan',
        'Pelaporan dampak yang transparan',
        'Keterlibatan karyawan dalam program sosial'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Institusi Pendidikan',
      description: 'Kolaborasi riset, pengembangan kurikulum, dan program beasiswa',
      benefits: [
        'Program magang dan penelitian lapangan',
        'Pengembangan kurikulum sosial',
        'Beasiswa untuk mahasiswa berprestasi',
        'Publikasi penelitian bersama'
      ]
    },
    {
      icon: Heart,
      title: 'Organisasi Non-Profit',
      description: 'Sinergi program untuk memperluas jangkauan dan dampak positif',
      benefits: [
        'Berbagi sumber daya dan expertise',
        'Program kolaboratif lintas sektor',
        'Jaringan organisasi yang kuat',
        'Optimalisasi biaya operasional'
      ]
    },
    {
      icon: Users,
      title: 'Komunitas & Individu',
      description: 'Partisipasi aktif masyarakat dalam program pembangunan sosial',
      benefits: [
        'Platform volunteer dan relawan',
        'Program pengembangan skill',
        'Networking dengan sesama changemaker',
        'Kontribusi sesuai kemampuan'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'PT. Pembangunan Jaya',
      type: 'Korporasi',
      description: 'Kemitraan dalam program pembangunan infrastruktur pendidikan',
      duration: '3 tahun',
      image: images.partnership1
    },
    {
      name: 'Universitas Indonesia',
      type: 'Pendidikan',
      description: 'Kolaborasi riset dampak sosial dan program community service',
      duration: '2 tahun',
      image: images.partnership2
    },
    {
      name: 'Yayasan Harapan Bangsa',
      type: 'Non-Profit',
      description: 'Program bersama pemberdayaan ekonomi masyarakat pesisir',
      duration: '1 tahun',
      image: images.partnership1
    },
    {
      name: 'Komunitas Volunteer Jakarta',
      type: 'Komunitas',
      description: 'Program volunteer untuk kegiatan sosial dan lingkungan',
      duration: 'Ongoing',
      image: images.partnership2
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Konsultasi Awal',
      description: 'Diskusi kebutuhan dan tujuan kemitraan yang ingin dicapai'
    },
    {
      number: '02',
      title: 'Penyusunan Proposal',
      description: 'Pembuatan proposal program kemitraan yang detail dan terukur'
    },
    {
      number: '03',
      title: 'Penandatanganan MOU',
      description: 'Formalisasi kemitraan melalui Memorandum of Understanding'
    },
    {
      number: '04',
      title: 'Implementasi Program',
      description: 'Pelaksanaan program kemitraan dengan monitoring berkala'
    },
    {
      number: '05',
      title: 'Evaluasi & Laporan',
      description: 'Penilaian dampak dan penyusunan laporan hasil kemitraan'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Kemitraan Strategis
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Bergabunglah bersama Yayasan AMAL dalam menciptakan dampak positif 
              yang berkelanjutan melalui kemitraan yang saling menguntungkan.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Jenis Kemitraan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Berbagai bentuk kemitraan yang dapat disesuaikan dengan visi dan misi organisasi Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {partnerTypes.map((type, index) => (
              <div key={index} className="card p-8 group hover:shadow-xl transition-all">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <type.icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Manfaat Kemitraan:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mitra Saat Ini
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Organisasi dan institusi yang telah bergabung dalam program kemitraan dengan Yayasan AMAL
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentPartners.map((partner, index) => (
              <div key={index} className="card text-center group">
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={partner.image.src}
                    alt={partner.image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                    partner.type === 'Korporasi' ? 'bg-blue-100 text-blue-600' :
                    partner.type === 'Pendidikan' ? 'bg-green-100 text-green-600' :
                    partner.type === 'Non-Profit' ? 'bg-purple-100 text-purple-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    {partner.type}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{partner.description}</p>
                  <p className="text-emerald-600 font-medium text-sm">Durasi: {partner.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proses Kemitraan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Langkah-langkah mudah untuk memulai kemitraan strategis dengan Yayasan AMAL
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-200 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative text-center">
                  {/* Step circle */}
                  <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold relative z-10">
                    {step.number}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Mengapa Bermitra dengan AMAL?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                    <Handshake className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Transparansi Penuh</h3>
                    <p className="opacity-90">Pelaporan yang jelas dan akuntabel untuk setiap program kemitraan</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tim Berpengalaman</h3>
                    <p className="opacity-90">Didukung oleh profesional dengan 15+ tahun pengalaman</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Dampak Terukur</h3>
                    <p className="opacity-90">Program dengan indikator keberhasilan yang jelas dan terukur</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={images.teamPhoto.src}
                alt={images.teamPhoto.alt}
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="card p-12 text-center bg-gradient-to-br from-emerald-50 to-blue-50">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Mari Bermitra dengan Kami
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Hubungi tim kemitraan kami untuk mendiskusikan peluang kolaborasi 
              yang sesuai dengan visi dan misi organisasi Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:partnership@yayasanamal.org" 
                className="btn-primary inline-flex items-center justify-center"
              >
                Hubungi Tim Kemitraan
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="/kontak" 
                className="btn-secondary inline-flex items-center justify-center"
              >
                Info Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kemitraan;
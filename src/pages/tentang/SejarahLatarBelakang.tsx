import React from 'react';
import { Calendar, MapPin, Users, Award } from 'lucide-react';
import images from '../../assets/images';

const SejarahLatarBelakang: React.FC = () => {
  const timeline = [
    {
      year: '2009',
      title: 'Pendirian Yayasan',
      description: 'Yayasan AMAL didirikan oleh sekelompok aktivis sosial dengan visi membangun Indonesia yang berkelanjutan. Dimulai dengan program beasiswa untuk 10 anak di Jakarta.',
      milestone: 'Akta Notaris No. 15/2009'
    },
    {
      year: '2011',
      title: 'Ekspansi Program',
      description: 'Perluasan program ke bidang lingkungan dengan penanaman 1,000 pohon pertama di Kalimantan. Mulai bermitra dengan komunitas lokal.',
      milestone: '3 provinsi jangkauan'
    },
    {
      year: '2013',
      title: 'Sertifikasi Nasional',
      description: 'Memperoleh sertifikasi dari Kementerian Sosial RI sebagai lembaga sosial terpercaya. Launching program pemberdayaan ekonomi.',
      milestone: 'Sertifikat Kemsos RI'
    },
    {
      year: '2015',
      title: 'Penghargaan Pertama',
      description: 'Meraih penghargaan "Outstanding Social Impact" dari Indonesia Development Forum untuk program pendidikan berkelanjutan.',
      milestone: '1,000+ penerima manfaat'
    },
    {
      year: '2017',
      title: 'Kemitraan Internasional',
      description: 'Menjalin kemitraan dengan UNDP untuk program konservasi lingkungan. Membangun sekolah ke-10 di Papua.',
      milestone: 'Kemitraan UNDP'
    },
    {
      year: '2019',
      title: 'Dekade Pertama',
      description: 'Merayakan 10 tahun dengan pencapaian 5,000+ penerima manfaat dan 167,286+ pohon ditanam. Launching program kesehatan masyarakat.',
      milestone: '10 tahun berkarya'
    },
    {
      year: '2021',
      title: 'Adaptasi Digital',
      description: 'Transformasi digital program selama pandemi. Meluncurkan platform pembelajaran online dan sistem donasi digital.',
      milestone: 'Platform digital'
    },
    {
      year: '2023',
      title: 'Ekspansi Nasional',
      description: 'Mencapai jangkauan 15 provinsi dengan 100+ program selesai. Memperoleh akreditasi A dari Lembaga Akreditasi Nasional.',
      milestone: 'Akreditasi A'
    },
    {
      year: '2024',
      title: 'Inovasi Berkelanjutan',
      description: 'Meluncurkan program inovasi teknologi hijau dan smart village. Mencapai 10,000+ penerima manfaat kumulatif.',
      milestone: '10,000+ penerima manfaat'
    }
  ];

  const founders = [
    {
      name: 'Dr. Ahmad Surya',
      role: 'Pendiri & Ketua Yayasan',
      background: 'Aktivis sosial dengan pengalaman 20+ tahun di bidang pembangunan masyarakat',
      contribution: 'Merumuskan visi dan misi yayasan, memimpin program pendidikan'
    },
    {
      name: 'Prof. Siti Nurhaliza',
      role: 'Co-Founder',
      background: 'Akademisi dan peneliti lingkungan dari Universitas Indonesia',
      contribution: 'Merancang program konservasi dan edukasi lingkungan'
    },
    {
      name: 'Budi Santoso, S.E',
      role: 'Co-Founder',
      background: 'Praktisi keuangan dengan spesialisasi manajemen organisasi nirlaba',
      contribution: 'Membangun sistem keuangan transparan dan akuntabel'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sejarah & Latar Belakang
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Perjalanan panjang Yayasan AMAL dalam membangun Indonesia yang berkelanjutan, 
              dari visi sederhana hingga menjadi organisasi nirlaba terdepan dengan dampak nasional.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Awal Mula Perjalanan
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Yayasan AMAL lahir dari keprihatinan mendalam terhadap kesenjangan sosial 
                  dan kerusakan lingkungan di Indonesia. Pada tahun 2009, sekelompok aktivis 
                  sosial yang terdiri dari akademisi, praktisi pembangunan, dan tokoh masyarakat 
                  berkumpul dengan satu visi: menciptakan perubahan positif yang berkelanjutan.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nama "AntangPatahu Mahaga Lewu" dipilih dengan penuh makna. Dalam bahasa Dayak, 
                  frasa ini berarti "Bersama Membangun Negeri" - sebuah filosofi yang menekankan 
                  pentingnya kolaborasi dan gotong royong dalam mencapai kemajuan bersama.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Berawal dari program beasiswa sederhana untuk 10 anak di Jakarta, kini Yayasan AMAL 
                  telah berkembang menjadi organisasi dengan jangkauan nasional, melayani ribuan 
                  penerima manfaat di 15 provinsi Indonesia.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={images.teamPhoto.src}
                alt="Tim pendiri Yayasan AMAL"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm">Tahun Berkarya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perjalanan Waktu
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tonggak-tonggak penting dalam sejarah Yayasan AMAL dari tahun ke tahun
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Calendar className="h-5 w-5 text-emerald-600" />
                        <span className="text-2xl font-bold text-emerald-600">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                      <div className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                        {item.milestone}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Para Pendiri
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tokoh-tokoh visioner yang merintis dan membangun fondasi Yayasan AMAL
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="card p-8 text-center group hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                <p className="text-emerald-600 font-medium mb-4">{founder.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{founder.background}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-700 text-sm font-medium">Kontribusi:</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{founder.contribution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Filosofi "AntangPatahu Mahaga Lewu"
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">
              Makna mendalam di balik nama yayasan yang menjadi landasan setiap langkah perubahan
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">A</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">AntangPatahu</h3>
              <p className="text-sm opacity-90">"Bersama-sama" - Kekuatan kolaborasi dalam mencapai tujuan</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">M</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Mahaga</h3>
              <p className="text-sm opacity-90">"Membangun" - Proses konstruktif menciptakan perubahan</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">A</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Lewu</h3>
              <p className="text-sm opacity-90">"Negeri" - Tanah air Indonesia yang kita cintai</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">L</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Legacy</h3>
              <p className="text-sm opacity-90">Warisan berkelanjutan untuk generasi mendatang</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SejarahLatarBelakang;
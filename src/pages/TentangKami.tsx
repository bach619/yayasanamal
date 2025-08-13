import React from 'react';
import { Users, Target, Eye, Award } from 'lucide-react';
import images from '../assets/images';

const TentangKami: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Integritas',
      description: 'Komitmen pada transparansi dan akuntabilitas dalam setiap kegiatan'
    },
    {
      icon: Users,
      title: 'Kolaborasi',
      description: 'Membangun kemitraan strategis untuk mencapai dampak yang lebih besar'
    },
    {
      icon: Eye,
      title: 'Inovasi',
      description: 'Menggunakan pendekatan kreatif dan solusi berkelanjutan'
    },
    {
      icon: Award,
      title: 'Keunggulan',
      description: 'Berkomitmen memberikan layanan terbaik untuk semua penerima manfaat'
    }
  ];

  const team = [
    {
      name: 'Dr. Ahmad Surya',
      position: 'Ketua Yayasan',
      description: '15+ tahun pengalaman di bidang pembangunan sosial'
    },
    {
      name: 'Siti Nurhaliza, M.Pd',
      position: 'Direktur Program',
      description: 'Spesialis pendidikan dan pemberdayaan masyarakat'
    },
    {
      name: 'Budi Santoso, S.E',
      position: 'Direktur Keuangan',
      description: 'Ahli manajemen keuangan dan audit internal'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tentang Yayasan AMAL
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              AntangPatahu Mahaga Lewu (AMAL) berdiri dengan misi menciptakan perubahan 
              positif berkelanjutan melalui program-program yang berdampak langsung 
              bagi masyarakat Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Cerita Kami
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Yayasan AMAL didirikan pada tahun 2009 dengan visi sederhana namun mulia: 
                memberikan harapan dan kesempatan bagi mereka yang membutuhkan. Berawal 
                dari program beasiswa untuk 10 anak di Jakarta, kini kami telah melayani 
                ribuan penerima manfaat di seluruh Indonesia.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nama "AntangPatahu Mahaga Lewu" berasal dari bahasa Dayak yang bermakna 
                "Bersama Membangun Negeri". Filosofi ini menjadi landasan setiap program 
                yang kami jalankan - bahwa perubahan besar dimulai dari kolaborasi dan 
                kepedulian bersama.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Selama lebih dari 15 tahun beroperasi, kami telah membuktikan komitmen 
                melalui berbagai penghargaan dan sertifikasi dari lembaga nasional maupun 
                internasional.
              </p>
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

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="card p-8">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Menjadi yayasan terdepan dalam menciptakan Indonesia yang berkelanjutan, 
                adil, dan sejahtera melalui pemberdayaan masyarakat, pelestarian lingkungan, 
                dan peningkatan kualitas pendidikan.
              </p>
            </div>
            
            <div className="card p-8">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi</h3>
              <ul className="text-lg text-gray-600 space-y-3">
                <li>• Memberikan akses pendidikan berkualitas untuk semua</li>
                <li>• Melindungi dan melestarikan lingkungan hidup</li>
                <li>• Memberdayakan ekonomi masyarakat marginal</li>
                <li>• Membangun kemitraan strategis berkelanjutan</li>
                <li>• Menjaga transparansi dan akuntabilitas program</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang mendasari setiap langkah dan keputusan Yayasan AMAL
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-emerald-100 group-hover:bg-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <value.icon className="h-10 w-10 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tim Kepemimpinan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dipimpin oleh profesional berpengalaman yang berkomitmen pada perubahan sosial
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Pencapaian Kami
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Angka-angka yang menunjukkan dampak nyata dari dedikasi dan kerja keras bersama
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold mb-2">10,000+</h3>
              <p className="text-lg opacity-90">Penerima Manfaat</p>
            </div>
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold mb-2">500+</h3>
              <p className="text-lg opacity-90">Beasiswa Diberikan</p>
            </div>
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold mb-2">50,000+</h3>
              <p className="text-lg opacity-90">Pohon Ditanam</p>
            </div>
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold mb-2">100+</h3>
              <p className="text-lg opacity-90">Program Selesai</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangKami;
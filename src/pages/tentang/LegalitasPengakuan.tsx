import React from 'react';
import { Shield, Award, FileText, CheckCircle, Calendar, Building } from 'lucide-react';

const LegalitasPengakuan: React.FC = () => {
  const legalDocuments = [
    {
      type: 'Akta Pendirian',
      number: 'No. 15 Tahun 2009',
      issuer: 'Notaris Hj. Siti Aminah, S.H',
      date: '15 Maret 2009',
      status: 'Aktif',
      description: 'Akta pendirian yayasan yang disahkan oleh notaris dan telah didaftarkan di Kementerian Hukum dan HAM RI'
    },
    {
      type: 'SK Kemenkumham',
      number: 'AHU-0001234.AH.01.04.Tahun 2009',
      issuer: 'Kementerian Hukum dan HAM RI',
      date: '25 Maret 2009',
      status: 'Aktif',
      description: 'Surat Keputusan pengesahan badan hukum yayasan dari Menteri Hukum dan Hak Asasi Manusia'
    },
    {
      type: 'NPWP',
      number: '02.123.456.7-123.000',
      issuer: 'Direktorat Jenderal Pajak',
      date: '1 April 2009',
      status: 'Aktif',
      description: 'Nomor Pokok Wajib Pajak untuk keperluan administrasi perpajakan organisasi'
    },
    {
      type: 'Izin Operasional',
      number: 'No. 456/DINSOS/2009',
      issuer: 'Dinas Sosial DKI Jakarta',
      date: '15 April 2009',
      status: 'Aktif',
      description: 'Izin operasional sebagai lembaga sosial yang bergerak di bidang kesejahteraan masyarakat'
    }
  ];

  const certifications = [
    {
      title: 'Sertifikat ISO 9001:2015',
      issuer: 'TÜV Rheinland',
      year: '2022',
      validity: '2025',
      description: 'Sistem manajemen mutu untuk memastikan konsistensi dan peningkatan berkelanjutan',
      icon: Award
    },
    {
      title: 'Akreditasi A',
      issuer: 'Lembaga Akreditasi Nasional',
      year: '2023',
      validity: '2026',
      description: 'Pengakuan tertinggi untuk standar kualitas program dan manajemen organisasi',
      icon: Shield
    },
    {
      title: 'Sertifikat Transparansi',
      issuer: 'Indonesia Transparency Society',
      year: '2023',
      validity: '2024',
      description: 'Pengakuan atas komitmen transparansi dan akuntabilitas dalam pengelolaan organisasi',
      icon: CheckCircle
    },
    {
      title: 'Green Organization Certificate',
      issuer: 'Ministry of Environment',
      year: '2022',
      validity: '2025',
      description: 'Sertifikat organisasi ramah lingkungan untuk komitmen terhadap keberlanjutan',
      icon: Building
    }
  ];

  const awards = [
    {
      year: '2023',
      title: 'Indonesia Sustainability Award',
      category: 'Best NGO for Environmental Impact',
      issuer: 'Indonesia Sustainability Forum',
      description: 'Penghargaan untuk kontribusi terbaik dalam program konservasi lingkungan'
    },
    {
      year: '2022',
      title: 'CSR Award',
      category: 'Outstanding Partnership Program',
      issuer: 'Indonesia CSR Awards',
      description: 'Pengakuan atas program kemitraan strategis dengan sektor swasta'
    },
    {
      year: '2021',
      title: 'Education Excellence Award',
      category: 'Best Educational Program',
      issuer: 'Ministry of Education',
      description: 'Penghargaan untuk inovasi program pendidikan di daerah terpencil'
    },
    {
      year: '2020',
      title: 'Social Impact Award',
      category: 'Community Empowerment',
      issuer: 'Indonesia Development Forum',
      description: 'Pengakuan atas dampak positif program pemberdayaan masyarakat'
    },
    {
      year: '2019',
      title: 'Transparency Award',
      category: 'Most Transparent NGO',
      issuer: 'Transparency International Indonesia',
      description: 'Penghargaan untuk komitmen transparansi dan akuntabilitas tertinggi'
    }
  ];

  const memberships = [
    {
      organization: 'Forum LSM Indonesia',
      role: 'Anggota Aktif',
      since: '2010',
      description: 'Jaringan nasional organisasi masyarakat sipil Indonesia'
    },
    {
      organization: 'UNDP Partnership Network',
      role: 'Strategic Partner',
      since: '2017',
      description: 'Kemitraan dengan United Nations Development Programme'
    },
    {
      organization: 'Indonesia Philanthropy Association',
      role: 'Board Member',
      since: '2019',
      description: 'Asosiasi filantropi Indonesia untuk pengembangan sektor sosial'
    },
    {
      organization: 'ASEAN CSO Network',
      role: 'Country Representative',
      since: '2021',
      description: 'Jaringan organisasi masyarakat sipil Asia Tenggara'
    }
  ];

  const compliance = [
    {
      area: 'Pelaporan Keuangan',
      status: 'Compliant',
      details: 'Audit eksternal tahunan oleh KAP terakreditasi, laporan keuangan dipublikasikan'
    },
    {
      area: 'Perpajakan',
      status: 'Compliant',
      details: 'Pelaporan SPT tahunan tepat waktu, status PKP aktif'
    },
    {
      area: 'Ketenagakerjaan',
      status: 'Compliant',
      details: 'Sesuai UU Ketenagakerjaan, BPJS Kesehatan dan Ketenagakerjaan aktif'
    },
    {
      area: 'Lingkungan',
      status: 'Compliant',
      details: 'Sertifikat AMDAL untuk program lingkungan, ISO 14001 Environmental Management'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Legalitas & Pengakuan
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dokumentasi lengkap legalitas, sertifikasi, dan pengakuan yang diperoleh 
              Yayasan AMAL sebagai bukti komitmen terhadap standar tertinggi dalam 
              pengelolaan organisasi dan program.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Documents */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dokumen Legal
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dokumen resmi yang menjadi dasar hukum operasional Yayasan AMAL
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {legalDocuments.map((doc, index) => (
              <div key={index} className="card p-6 group hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 group-hover:bg-emerald-600 p-3 rounded-lg transition-colors">
                    <FileText className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{doc.type}</h3>
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-medium">
                        {doc.status}
                      </span>
                    </div>
                    <p className="text-emerald-600 font-medium mb-2">{doc.number}</p>
                    <div className="space-y-1 text-sm text-gray-600 mb-3">
                      <p><span className="font-medium">Penerbit:</span> {doc.issuer}</p>
                      <p><span className="font-medium">Tanggal:</span> {doc.date}</p>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{doc.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Sertifikasi & Akreditasi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sertifikat dan akreditasi yang menunjukkan komitmen terhadap standar kualitas internasional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="card p-6 text-center group hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 group-hover:bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                  <cert.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-blue-600 font-medium text-sm mb-2">{cert.issuer}</p>
                <div className="flex justify-center space-x-2 text-xs text-gray-500 mb-3">
                  <span>{cert.year}</span>
                  <span>-</span>
                  <span>{cert.validity}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Penghargaan & Prestasi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pengakuan atas kontribusi dan prestasi Yayasan AMAL dalam pembangunan sosial
            </p>
          </div>
          
          <div className="space-y-6">
            {awards.map((award, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start space-x-6">
                  <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold">{award.year}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{award.title}</h3>
                      <div className="bg-emerald-100 p-2 rounded-lg">
                        <Award className="h-5 w-5 text-emerald-600" />
                      </div>
                    </div>
                    <p className="text-emerald-600 font-medium mb-2">{award.category}</p>
                    <p className="text-gray-500 text-sm mb-3">{award.issuer}</p>
                    <p className="text-gray-600 leading-relaxed">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Keanggotaan Organisasi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Jaringan dan afiliasi dengan organisasi nasional dan internasional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {memberships.map((membership, index) => (
              <div key={index} className="card p-6 group hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 group-hover:bg-purple-600 p-3 rounded-lg transition-colors">
                    <Building className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{membership.organization}</h3>
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-sm font-medium">
                        {membership.role}
                      </span>
                      <span className="text-gray-500 text-sm">Sejak {membership.since}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{membership.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kepatuhan Regulasi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Status kepatuhan terhadap berbagai regulasi dan standar yang berlaku
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compliance.map((item, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.area}</h3>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                  {item.status}
                </span>
                <p className="text-gray-600 text-sm leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Verification */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Verifikasi Dokumen
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Untuk verifikasi keaslian dokumen atau informasi lebih lanjut tentang 
            legalitas Yayasan AMAL, silakan hubungi tim kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/kontak" 
              className="bg-white text-emerald-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Hubungi Tim Legal
            </a>
            <a 
              href="/publikasi/dokumen" 
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Download Dokumen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalitasPengakuan;
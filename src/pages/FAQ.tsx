import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, BookOpen, Users, Heart } from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories = [
    { name: 'Semua', icon: HelpCircle },
    { name: 'Program', icon: BookOpen },
    { name: 'Donasi', icon: Heart },
    { name: 'Kemitraan', icon: Users }
  ];

  const faqs = [
    {
      id: 1,
      category: 'Program',
      question: 'Apa saja program utama Yayasan AMAL?',
      answer: 'Yayasan AMAL memiliki 6 program utama: (1) Pendidikan Berkelanjutan - beasiswa dan pembangunan sekolah, (2) Konservasi Lingkungan - penanaman pohon dan edukasi lingkungan, (3) Pemberdayaan Ekonomi - pelatihan UMKM dan bantuan modal, (4) Kesehatan Masyarakat - posyandu dan fasilitas kesehatan, (5) Pembangunan Sosial - bantuan bencana dan infrastruktur, (6) Pelestarian Budaya - dokumentasi dan festival budaya.'
    },
    {
      id: 2,
      category: 'Program',
      question: 'Bagaimana cara mendaftar program beasiswa?',
      answer: 'Pendaftaran beasiswa dibuka setiap awal tahun (Februari-Maret). Persyaratan umum: (1) Siswa/mahasiswa berprestasi, (2) Berasal dari keluarga kurang mampu, (3) Melengkapi dokumen yang diperlukan, (4) Mengikuti tes seleksi. Informasi detail dan formulir pendaftaran tersedia di website resmi atau kantor yayasan.'
    },
    {
      id: 3,
      category: 'Program',
      question: 'Di mana saja lokasi program Yayasan AMAL?',
      answer: 'Program kami tersebar di seluruh Indonesia, dengan fokus utama di daerah terpencil dan kurang berkembang. Saat ini aktif di 15 provinsi termasuk Papua, Kalimantan, Sulawesi, Jawa, dan Sumatera. Prioritas diberikan pada daerah dengan akses terbatas terhadap pendidikan, kesehatan, dan ekonomi.'
    },
    {
      id: 4,
      category: 'Donasi',
      question: 'Bagaimana cara berdonasi ke Yayasan AMAL?',
      answer: 'Anda dapat berdonasi melalui: (1) Transfer bank ke rekening resmi yayasan, (2) Donasi online melalui website, (3) Aplikasi mobile banking dan e-wallet, (4) Langsung ke kantor yayasan, (5) Melalui program payroll deduction perusahaan. Semua donasi akan mendapat tanda terima resmi untuk keperluan pajak.'
    },
    {
      id: 5,
      category: 'Donasi',
      question: 'Apakah donasi ke Yayasan AMAL dapat dikurangkan dari pajak?',
      answer: 'Ya, Yayasan AMAL telah memiliki izin resmi sebagai lembaga non-profit yang memenuhi syarat pengurangan pajak. Donasi Anda dapat mengurangi penghasilan kena pajak sesuai peraturan perpajakan yang berlaku. Kami akan memberikan bukti donasi resmi untuk keperluan pelaporan pajak Anda.'
    },
    {
      id: 6,
      category: 'Donasi',
      question: 'Bagaimana saya bisa memastikan donasi saya digunakan dengan tepat?',
      answer: 'Transparansi adalah prioritas utama kami. Anda akan menerima: (1) Laporan penggunaan dana secara berkala, (2) Update progress program melalui email/WhatsApp, (3) Undangan ke acara laporan tahunan, (4) Akses ke laporan keuangan auditan, (5) Dokumentasi foto/video kegiatan program. Semua laporan juga tersedia di website resmi.'
    },
    {
      id: 7,
      category: 'Donasi',
      question: 'Berapa minimum donasi yang bisa diberikan?',
      answer: 'Tidak ada batas minimum donasi. Setiap kontribusi, sekecil apapun, sangat berarti bagi kami. Namun untuk efisiensi administrasi, kami menyarankan donasi minimal Rp 10.000. Anda juga bisa memilih program donasi rutin bulanan mulai dari Rp 25.000/bulan.'
    },
    {
      id: 8,
      category: 'Kemitraan',
      question: 'Bagaimana cara perusahaan bermitra dengan Yayasan AMAL?',
      answer: 'Perusahaan dapat bermitra melalui: (1) Program CSR terintegrasi, (2) Sponsorship program spesifik, (3) Employee volunteering, (4) In-kind donation (barang/jasa), (5) Skill-based volunteering. Hubungi tim kemitraan kami di partnership@yayasanamal.org untuk konsultasi dan penyusunan proposal kerjasama.'
    },
    {
      id: 9,
      category: 'Kemitraan',
      question: 'Apa manfaat bermitra dengan Yayasan AMAL?',
      answer: 'Manfaat kemitraan meliputi: (1) Meningkatkan brand image perusahaan, (2) Memenuhi target CSR dengan dampak terukur, (3) Keterlibatan karyawan dalam program sosial, (4) Pelaporan transparan untuk stakeholder, (5) Sertifikat penghargaan kemitraan, (6) Media coverage untuk kegiatan bersama, (7) Tax benefit sesuai regulasi.'
    },
    {
      id: 10,
      category: 'Program',
      question: 'Bagaimana cara menjadi volunteer di Yayasan AMAL?',
      answer: 'Untuk menjadi volunteer: (1) Isi formulir pendaftaran online, (2) Ikuti sesi orientasi volunteer, (3) Pilih program sesuai minat dan keahlian, (4) Berkomitmen minimal 3 bulan, (5) Mengikuti training khusus jika diperlukan. Volunteer bisa terlibat dalam program pendidikan, lingkungan, event, atau administrasi. Hubungi kami di volunteer@yayasanamal.org.'
    },
    {
      id: 11,
      category: 'Donasi',
      question: 'Apakah Yayasan AMAL menerima donasi barang?',
      answer: 'Ya, kami menerima donasi barang yang sesuai dengan kebutuhan program: (1) Buku dan alat tulis untuk program pendidikan, (2) Alat kesehatan untuk program kesehatan, (3) Bibit pohon untuk program lingkungan, (4) Peralatan olahraga dan seni, (5) Komputer/laptop bekas yang masih layak. Koordinasi terlebih dahulu untuk memastikan barang dibutuhkan.'
    },
    {
      id: 12,
      category: 'Program',
      question: 'Bagaimana cara mengusulkan lokasi untuk program Yayasan AMAL?',
      answer: 'Usulan lokasi program dapat disampaikan melalui: (1) Surat resmi dari pemerintah daerah/tokoh masyarakat, (2) Proposal yang menjelaskan kondisi dan kebutuhan masyarakat, (3) Data pendukung (demografis, ekonomi, sosial), (4) Komitmen dukungan dari masyarakat lokal. Tim kami akan melakukan survey kelayakan sebelum memutuskan implementasi program.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'Semua' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Temukan jawaban atas pertanyaan yang sering diajukan tentang 
              program, donasi, dan kemitraan dengan Yayasan AMAL.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white sticky top-16 lg:top-20 z-10 border-b">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari pertanyaan..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-emerald-100 hover:text-emerald-600'
                  }`}
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <div key={faq.id} className="card overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1 pr-4">
                        <div className="flex items-center space-x-3 mb-1">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            faq.category === 'Program' ? 'bg-blue-100 text-blue-600' :
                            faq.category === 'Donasi' ? 'bg-green-100 text-green-600' :
                            'bg-purple-100 text-purple-600'
                          }`}>
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown 
                        className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                          openFAQ === faq.id ? 'transform rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {openFAQ === faq.id && (
                      <div className="px-6 pb-6 border-t border-gray-100">
                        <div className="pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Tidak ada hasil ditemukan
                </h3>
                <p className="text-gray-600 mb-6">
                  Coba gunakan kata kunci lain atau pilih kategori yang berbeda.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('Semua');
                  }}
                  className="btn-secondary"
                >
                  Reset Filter
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Tidak Menemukan Jawaban?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Tim customer service kami siap membantu menjawab pertanyaan spesifik 
            Anda tentang program dan layanan Yayasan AMAL.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/kontak" 
              className="bg-white text-emerald-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Hubungi Kami
            </a>
            <a 
              href="mailto:info@yayasanamal.org" 
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Email Langsung
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
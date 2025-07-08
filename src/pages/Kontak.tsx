import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar } from 'lucide-react';

const Kontak: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat Kantor',
      details: [
        'Jl. RTA Milono No. 123',
        'Palangka Raya, 73112',
        'Kalimantan Tengah, Indonesia'
      ]
    },
    {
      icon: Phone,
      title: 'Telepon',
      details: [
        '+62 536 1234 5678',
        '+62 812 3456 7890',
        'Fax: +62 536 1234 5679'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@yayasanamal.org',
        'program@yayasanamal.org',
        'partnership@yayasanamal.org'
      ]
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: [
        'Senin - Jumat: 08:00 - 17:00',
        'Sabtu: 08:00 - 12:00',
        'Minggu: Tutup'
      ]
    }
  ];

  const departments = [
    {
      name: 'Tim Program',
      email: 'program@yayasanamal.org',
      description: 'Informasi program pendidikan, lingkungan, dan pemberdayaan'
    },
    {
      name: 'Tim Kemitraan',
      email: 'partnership@yayasanamal.org',
      description: 'Kerjasama strategis dan program CSR'
    },
    {
      name: 'Tim Donasi',
      email: 'donasi@yayasanamal.org',
      description: 'Informasi donasi dan dukungan finansial'
    },
    {
      name: 'Media & Komunikasi',
      email: 'media@yayasanamal.org',
      description: 'Liputan media dan permintaan wawancara'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tim Yayasan AMAL siap membantu menjawab pertanyaan dan mendiskusikan 
              peluang kerjasama untuk masa depan Indonesia yang lebih baik.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="card p-6 text-center group hover:shadow-xl transition-shadow">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 transition-colors">
                  <info.icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Departments */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Kirim Pesan
                </h2>
                <p className="text-gray-600">
                  Isi formulir di bawah ini dan tim kami akan merespons dalam 24 jam.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="+62 812 3456 7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    >
                      <option value="">Pilih subjek</option>
                      <option value="program">Informasi Program</option>
                      <option value="kemitraan">Kemitraan & CSR</option>
                      <option value="donasi">Donasi & Dukungan</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="media">Media & Press</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary inline-flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Departments */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Kontak Departemen
                </h2>
                <p className="text-gray-600">
                  Hubungi departemen yang sesuai untuk mendapatkan respons yang lebih cepat.
                </p>
              </div>
              
              <div className="space-y-6">
                {departments.map((dept, index) => (
                  <div key={index} className="card p-6 group hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-emerald-100 p-2 rounded-lg group-hover:bg-emerald-600 transition-colors">
                        <MessageCircle className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{dept.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{dept.description}</p>
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors"
                        >
                          {dept.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Office Visit */}
              <div className="card p-6 mt-8 bg-gradient-to-br from-emerald-50 to-blue-50">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-600 p-2 rounded-lg">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Kunjungi Kantor Kami</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Kami menyambut kunjungan Anda ke kantor untuk diskusi lebih mendalam. 
                      Silakan buat janji temu terlebih dahulu.
                    </p>
                    <button className="btn-secondary text-sm">
                      Buat Janji Temu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Lokasi Kantor
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kantor pusat Yayasan AMAL berlokasi strategis di Palangka Raya, 
              Kalimantan Tengah, mudah diakses dengan transportasi umum.
            </p>
          </div>
          
          <div className="card overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Peta Interaktif</h3>
                <p className="text-gray-600">
                  Peta akan dimuat di sini menggunakan Google Maps atau layanan peta lainnya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontak;
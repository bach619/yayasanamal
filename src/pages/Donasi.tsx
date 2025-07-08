import React, { useState } from 'react';
import { Heart, Shield, Users, Award, CreditCard, Smartphone, Building2, Check } from 'lucide-react';

const Donasi: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('sekali');
  const [selectedProgram, setSelectedProgram] = useState('umum');

  const predefinedAmounts = [
    { value: '50000', label: 'Rp 50.000' },
    { value: '100000', label: 'Rp 100.000' },
    { value: '250000', label: 'Rp 250.000' },
    { value: '500000', label: 'Rp 500.000' },
    { value: '1000000', label: 'Rp 1.000.000' },
    { value: 'custom', label: 'Jumlah Lain' }
  ];

  const programs = [
    { value: 'umum', label: 'Dana Umum (Fleksibel)', description: 'Untuk kebutuhan program yang paling mendesak' },
    { value: 'pendidikan', label: 'Program Pendidikan', description: 'Beasiswa dan pembangunan fasilitas pendidikan' },
    { value: 'lingkungan', label: 'Program Lingkungan', description: 'Penanaman pohon dan konservasi alam' },
    { value: 'ekonomi', label: 'Pemberdayaan Ekonomi', description: 'Pelatihan dan bantuan modal UMKM' },
    { value: 'kesehatan', label: 'Program Kesehatan', description: 'Layanan kesehatan masyarakat' },
    { value: 'darurat', label: 'Dana Darurat', description: 'Bantuan bencana dan keadaan mendesak' }
  ];

  const paymentMethods = [
    { id: 'bank', icon: Building2, name: 'Transfer Bank', description: 'BCA, BNI, BRI, Mandiri' },
    { id: 'ewallet', icon: Smartphone, name: 'E-Wallet', description: 'GoPay, OVO, Dana, LinkAja' },
    { id: 'card', icon: CreditCard, name: 'Kartu Kredit/Debit', description: 'Visa, Mastercard' }
  ];

  const impactExamples = [
    { amount: 'Rp 50.000', impact: 'Menyediakan buku pelajaran untuk 1 anak selama 1 bulan' },
    { amount: 'Rp 100.000', impact: 'Membiayai makan siang 20 anak di program pendidikan' },
    { amount: 'Rp 250.000', impact: 'Menanam dan merawat 50 pohon untuk program lingkungan' },
    { amount: 'Rp 500.000', impact: 'Memberikan pelatihan keterampilan untuk 1 keluarga' },
    { amount: 'Rp 1.000.000', impact: 'Membangun 1 toilet sehat untuk komunitas desa' }
  ];

  const whyDonate = [
    {
      icon: Shield,
      title: 'Transparansi Penuh',
      description: 'Laporan penggunaan dana yang detail dan dapat diakses publik'
    },
    {
      icon: Users,
      title: 'Dampak Terukur',
      description: 'Setiap donasi memiliki indikator dampak yang jelas dan terverifikasi'
    },
    {
      icon: Award,
      title: 'Terakreditasi',
      description: 'Lembaga resmi dengan sertifikat dan pengakuan nasional'
    },
    {
      icon: Heart,
      title: 'Fokus Berkelanjutan',
      description: 'Program jangka panjang yang menciptakan perubahan sistemik'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Berdonasi untuk Masa Depan
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Setiap kontribusi Anda, sekecil apapun, akan memberikan dampak besar 
              bagi ribuan penerima manfaat di seluruh Indonesia.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-emerald-600">10,000+</h3>
                <p className="text-sm text-gray-600">Penerima Manfaat</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-blue-600">500+</h3>
                <p className="text-sm text-gray-600">Beasiswa Diberikan</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-green-600">50,000+</h3>
                <p className="text-sm text-gray-600">Pohon Ditanam</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-orange-600">100+</h3>
                <p className="text-sm text-gray-600">Program Selesai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Form Donasi
                </h2>
                
                {/* Donation Type */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Jenis Donasi</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setDonationType('sekali')}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        donationType === 'sekali' 
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700' 
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <h4 className="font-semibold">Donasi Sekali</h4>
                      <p className="text-sm text-gray-600">Kontribusi satu kali</p>
                    </button>
                    <button
                      onClick={() => setDonationType('rutin')}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        donationType === 'rutin' 
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700' 
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <h4 className="font-semibold">Donasi Rutin</h4>
                      <p className="text-sm text-gray-600">Bulanan/berkala</p>
                    </button>
                  </div>
                </div>

                {/* Program Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Pilih Program</h3>
                  <div className="space-y-3">
                    {programs.map((program) => (
                      <label key={program.value} className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="program"
                          value={program.value}
                          checked={selectedProgram === program.value}
                          onChange={(e) => setSelectedProgram(e.target.value)}
                          className="mt-1 w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{program.label}</h4>
                          <p className="text-sm text-gray-600">{program.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Jumlah Donasi</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount.value}
                        onClick={() => {
                          setSelectedAmount(amount.value);
                          if (amount.value !== 'custom') setCustomAmount('');
                        }}
                        className={`p-3 rounded-lg border-2 text-center transition-all ${
                          selectedAmount === amount.value
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                            : 'border-gray-200 hover:border-emerald-300'
                        }`}
                      >
                        {amount.label}
                      </button>
                    ))}
                  </div>
                  
                  {selectedAmount === 'custom' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jumlah Donasi (Rp)
                      </label>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Masukkan jumlah"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                  )}
                </div>

                {/* Payment Methods */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Metode Pembayaran</h3>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="border border-gray-200 rounded-lg p-4 hover:border-emerald-300 transition-colors">
                        <div className="flex items-center space-x-3">
                          <method.icon className="h-6 w-6 text-gray-600" />
                          <div>
                            <h4 className="font-medium text-gray-900">{method.name}</h4>
                            <p className="text-sm text-gray-600">{method.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Donate Button */}
                <button className="w-full btn-primary text-lg py-4">
                  <Heart className="h-5 w-5 mr-2" />
                  Donasi Sekarang
                </button>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  Donasi Anda aman dan terenkripsi. Akan menerima tanda terima donasi untuk keperluan pajak.
                </p>
              </div>
            </div>

            {/* Impact & Info */}
            <div className="space-y-8">
              {/* Impact Examples */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Dampak Donasi Anda
                </h3>
                <div className="space-y-4">
                  {impactExamples.map((example, index) => (
                    <div key={index} className="border-l-4 border-emerald-500 pl-4">
                      <h4 className="font-semibold text-emerald-600">{example.amount}</h4>
                      <p className="text-sm text-gray-600">{example.impact}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Donate */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Mengapa Berdonasi ke AMAL?
                </h3>
                <div className="space-y-4">
                  {whyDonate.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-emerald-100 p-2 rounded-lg flex-shrink-0">
                        <reason.icon className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{reason.title}</h4>
                        <p className="text-xs text-gray-600">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="card p-6 bg-gradient-to-br from-emerald-50 to-blue-50">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Kepercayaan & Keamanan
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Lembaga resmi berizin</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Laporan keuangan auditan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Pembayaran aman & terenkripsi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Tax deductible donation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cara Lain Membantu
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Selain donasi uang, ada berbagai cara lain untuk berkontribusi
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 text-center group hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <Users className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Volunteer</h3>
              <p className="text-gray-600 text-sm mb-4">Sumbangkan waktu dan keahlian Anda</p>
              <button className="text-blue-600 font-medium text-sm hover:text-blue-700">
                Daftar Volunteer
              </button>
            </div>
            
            <div className="card p-6 text-center group hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                <Building2 className="h-8 w-8 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Donasi Barang</h3>
              <p className="text-gray-600 text-sm mb-4">Sumbangkan barang yang dibutuhkan</p>
              <button className="text-green-600 font-medium text-sm hover:text-green-700">
                Info Donasi Barang
              </button>
            </div>
            
            <div className="card p-6 text-center group hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
                <Heart className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Kemitraan</h3>
              <p className="text-gray-600 text-sm mb-4">Bermitra dalam program CSR</p>
              <button className="text-purple-600 font-medium text-sm hover:text-purple-700">
                Jadi Mitra
              </button>
            </div>
            
            <div className="card p-6 text-center group hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors">
                <Award className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sebarkan</h3>
              <p className="text-gray-600 text-sm mb-4">Bagikan informasi ke jaringan Anda</p>
              <button className="text-orange-600 font-medium text-sm hover:text-orange-700">
                Share Program
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donasi;
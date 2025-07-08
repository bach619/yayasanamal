import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import images from '../assets/images';

const Galeri: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const galleryImages = [
    {
      id: 1,
      ...images.gallery1,
      category: 'Pendidikan',
      title: 'Program Edukasi Lingkungan',
      description: 'Kegiatan pembelajaran tentang pentingnya menjaga lingkungan untuk anak-anak sekolah dasar'
    },
    {
      id: 2,
      ...images.gallery2,
      category: 'Teknologi',
      title: 'Pelatihan Komputer Remaja',
      description: 'Workshop komputer dan teknologi digital untuk remaja di daerah terpencil'
    },
    {
      id: 3,
      ...images.gallery3,
      category: 'Pembangunan',
      title: 'Gotong Royong Pembangunan',
      description: 'Kegiatan bersama membangun fasilitas umum untuk kepentingan masyarakat'
    },
    {
      id: 4,
      ...images.gallery4,
      category: 'Pendidikan',
      title: 'Program Beasiswa',
      description: 'Penyerahan beasiswa kepada siswa berprestasi dari keluarga kurang mampu'
    },
    {
      id: 5,
      ...images.gallery5,
      category: 'Budaya',
      title: 'Festival Budaya Nusantara',
      description: 'Perayaan keberagaman budaya Indonesia dengan berbagai pertunjukan tradisional'
    },
    {
      id: 6,
      ...images.gallery6,
      category: 'Pendidikan',
      title: 'Bantuan Alat Sekolah',
      description: 'Pemberian bantuan alat tulis dan perlengkapan sekolah untuk siswa'
    },
    {
      id: 7,
      ...images.educationProgram,
      category: 'Pendidikan',
      title: 'Kelas Belajar Desa',
      description: 'Program pembelajaran tambahan untuk anak-anak di pedesaan'
    },
    {
      id: 8,
      ...images.environmentProgram,
      category: 'Lingkungan',
      title: 'Penanaman Pohon',
      description: 'Aksi penanaman pohon bersama volunteer dan masyarakat lokal'
    },
    {
      id: 9,
      ...images.communityProgram,
      category: 'Ekonomi',
      title: 'Pemberdayaan UMKM',
      description: 'Pelatihan dan pendampingan usaha mikro untuk meningkatkan ekonomi keluarga'
    },
    {
      id: 10,
      ...images.newsImage1,
      category: 'Kegiatan',
      title: 'Sosialisasi Program',
      description: 'Kegiatan sosialisasi program-program Yayasan AMAL kepada masyarakat'
    },
    {
      id: 11,
      ...images.newsImage2,
      category: 'Kemanusiaan',
      title: 'Bakti Sosial',
      description: 'Kegiatan bakti sosial dan bantuan untuk masyarakat yang membutuhkan'
    },
    {
      id: 12,
      ...images.teamPhoto,
      category: 'Tim',
      title: 'Tim Yayasan AMAL',
      description: 'Foto bersama tim dan volunteer Yayasan AMAL dalam kegiatan lapangan'
    }
  ];

  const categories = ['Semua', 'Pendidikan', 'Lingkungan', 'Ekonomi', 'Budaya', 'Kemanusiaan', 'Teknologi', 'Pembangunan', 'Kegiatan', 'Tim'];
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredImages = selectedCategory === 'Semua' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (image: any) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Galeri Dokumentasi
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dokumentasi kegiatan dan program Yayasan AMAL dalam membangun 
              masa depan berkelanjutan bersama masyarakat Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white sticky top-16 lg:top-20 z-10 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-emerald-100 hover:text-emerald-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(image)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="h-4 w-4 text-gray-700" />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      image.category === 'Pendidikan' ? 'bg-blue-100 text-blue-600' :
                      image.category === 'Lingkungan' ? 'bg-green-100 text-green-600' :
                      image.category === 'Ekonomi' ? 'bg-orange-100 text-orange-600' :
                      image.category === 'Budaya' ? 'bg-purple-100 text-purple-600' :
                      image.category === 'Kemanusiaan' ? 'bg-red-100 text-red-600' :
                      image.category === 'Teknologi' ? 'bg-cyan-100 text-cyan-600' :
                      image.category === 'Pembangunan' ? 'bg-yellow-100 text-yellow-600' :
                      image.category === 'Kegiatan' ? 'bg-pink-100 text-pink-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {image.category}
                    </span>
                  </div>
                  
                  {/* Title and Description */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90 line-clamp-2">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">Tidak ada gambar dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <div className="text-white">
                <span className={`inline-block px-3 py-1 rounded text-sm font-medium mb-2 ${
                  selectedImage.category === 'Pendidikan' ? 'bg-blue-600' :
                  selectedImage.category === 'Lingkungan' ? 'bg-green-600' :
                  selectedImage.category === 'Ekonomi' ? 'bg-orange-600' :
                  selectedImage.category === 'Budaya' ? 'bg-purple-600' :
                  selectedImage.category === 'Kemanusiaan' ? 'bg-red-600' :
                  selectedImage.category === 'Teknologi' ? 'bg-cyan-600' :
                  selectedImage.category === 'Pembangunan' ? 'bg-yellow-600' :
                  selectedImage.category === 'Kegiatan' ? 'bg-pink-600' :
                  'bg-gray-600'
                }`}>
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200 leading-relaxed">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeri;
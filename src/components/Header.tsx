import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtHero, setIsAtHero] = useState(true);
  const location = useLocation();

  const tentangSubmenu = [
    { 
      path: '/tentang/profil', 
      label: 'Profil Yayasan',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Informasi umum tentang Yayasan AMAL dan komitmen perhutanan sosial'
    },
    { 
      path: '/tentang/sejarah', 
      label: 'Sejarah & Latar Belakang',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Perjalanan dan latar belakang pendirian yayasan sejak 2009'
    },
    { 
      path: '/tentang/visi-misi', 
      label: 'Visi & Misi',
      image: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Visi, misi, dan nilai-nilai organisasi dalam perhutanan sosial'
    },
    { 
      path: '/tentang/struktur', 
      label: 'Struktur Organisasi',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Susunan pengurus dan tim manajemen yayasan'
    },
    { 
      path: '/tentang/legalitas', 
      label: 'Legalitas & Pengakuan',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Dokumen legal dan sertifikasi resmi organisasi'
    },
  ];

  const publikasiSubmenu = [
    { 
      path: '/publikasi/dokumen', 
      label: 'Dokumen & Laporan',
      image: 'https://images.pexels.com/photos/6647028/pexels-photo-6647028.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Laporan tahunan, keuangan, dan dokumen resmi yayasan'
    },
    { 
      path: '/publikasi/berita', 
      label: 'Berita',
      image: 'https://images.pexels.com/photos/5697260/pexels-photo-5697260.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Berita terbaru dan update kegiatan perhutanan sosial'
    },
    { 
      path: '/publikasi/galeri', 
      label: 'Galeri',
      image: 'https://images.pexels.com/photos/8471849/pexels-photo-8471849.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Dokumentasi foto dan video kegiatan program'
    },
    { 
      path: '/publikasi/faq', 
      label: 'FAQ',
      image: 'https://images.pexels.com/photos/6647032/pexels-photo-6647032.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Pertanyaan yang sering diajukan tentang program'
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      setIsScrolled(scrollY > 20);
      setIsAtHero(location.pathname === '/' && scrollY < heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsAtHero(false);
    } else {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsAtHero(scrollY < heroHeight * 0.8);
    }
  }, [location.pathname]);

  const closeMenu = () => setIsMenuOpen(false);

  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string; href: string; image?: string; children?: React.ReactNode }
  >(({ className, title, children, href, image, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            to={href}
            className={cn(
              "block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-200 ease-out hover:bg-emerald-50/80 hover:text-emerald-700 focus:bg-emerald-50 focus:text-emerald-600 group",
              className || ''
            )}
            {...props}
          >
            <div className="flex items-start space-x-4">
              {image && (
                <img 
                  src={image} 
                  alt={title}
                  className="w-20 h-16 object-cover rounded-lg flex-shrink-0 transition-all duration-200 group-hover:shadow-md"
                />
              )}
              <div className="flex-1">
                <div className="text-base font-semibold leading-none text-gray-900 mb-2 transition-colors duration-200 group-hover:text-emerald-700">
                  {title}
                  <div className="h-0.5 bg-emerald-500 w-0 group-hover:w-full transition-all duration-300 ease-out mt-1"></div>
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-gray-600 transition-colors duration-200 group-hover:text-gray-700">
                  {children}
                </p>
              </div>
            </div>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  });
  ListItem.displayName = "ListItem";

  const getHeaderClasses = () => {
    if (isAtHero) {
      return 'bg-transparent backdrop-blur-none border-transparent';
    } else if (isScrolled) {
      return 'bg-white shadow-xl border-b border-gray-100';
    } else {
      return 'bg-white/95 backdrop-blur-md border-b border-white/20';
    }
  };

  const getTextColor = () => {
    return isAtHero ? 'text-white' : 'text-gray-700';
  };

  const getLogoTextColor = () => {
    return isAtHero ? 'text-white' : 'text-gray-900';
  };

  const getHoverClasses = () => {
    return isAtHero 
      ? 'hover:text-white/90 relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-white/60 after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0'
      : 'hover:text-emerald-600 relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-emerald-500 after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0';
  };

  const getDropdownHoverClasses = () => {
    return isAtHero 
      ? 'hover:text-white/90 data-[state=open]:text-white/90 relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-white/60 after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0 data-[state=open]:after:w-full data-[state=open]:after:left-0'
      : 'hover:text-emerald-600 data-[state=open]:text-emerald-600 relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-emerald-500 after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:left-0 data-[state=open]:after:w-full data-[state=open]:after:left-0';
  };

  const getActiveClasses = (isActive: boolean) => {
    if (isActive) {
      return isAtHero 
        ? 'text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white/80' 
        : 'text-emerald-600 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-500';
    }
    return getTextColor();
  };

  return (
    <>
      {/* Ribbon Indonesia Colors */}
      <div 
        className="fixed w-full top-0 z-50 h-2"
        style={{ 
          background: 'linear-gradient(to right, #dc2626 0%, #dc2626 33%, #ffffff 33%, #ffffff 66%, #2563eb 66%, #2563eb 100%)' 
        }}
      ></div>
      
      <header 
        className={`fixed w-full top-2 z-50 transition-all duration-500 ${getHeaderClasses()}`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 lg:h-24 py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="flex-shrink-0">
                <img 
                  src="https://i.ibb.co/g8nGrhX/logo6.png" 
                  alt="Yayasan AMAL - AntangPatahu Mahaga Lewu" 
                  className="h-14 sm:h-16 lg:h-20 w-auto transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className={`text-xl sm:text-2xl lg:text-3xl font-black leading-tight transition-all duration-200 ${getLogoTextColor()}`}>
                  AMAL
                </span>
                <span className={`text-sm sm:text-base block leading-tight transition-all duration-200 font-medium ${isAtHero ? 'text-white/80' : 'text-gray-600'}`}>
                  Yayasan AntangPatahu Mahaga Lewu
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center lg:ml-8">
              <NavigationMenu>
                <NavigationMenuList className="space-x-1">
                  {/* Beranda */}
                  <NavigationMenuItem>
                    <Link
                      to="/"
                      className={cn(
                        "group inline-flex h-12 w-max items-center justify-center rounded-lg px-5 py-3 text-base font-semibold transition-all duration-200 focus:outline-none",
                        getHoverClasses(),
                        getActiveClasses(location.pathname === '/')
                      )}
                    >
                      Beranda
                    </Link>
                  </NavigationMenuItem>

                  {/* Tentang */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn(
                      "transition-all duration-200 h-12 px-5 py-3 text-base font-semibold rounded-lg",
                      getTextColor(),
                      getDropdownHoverClasses()
                    )}>
                      Tentang
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[900px] p-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          {tentangSubmenu.slice(0, 4).map((item) => (
                            <ListItem
                              key={item.path}
                              title={item.label}
                              href={item.path}
                              image={item.image}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </div>
                        <div className="mt-4">
                          <ListItem
                            title={tentangSubmenu[4].label}
                            href={tentangSubmenu[4].path}
                            image={tentangSubmenu[4].image}
                          >
                            {tentangSubmenu[4].description}
                          </ListItem>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Program */}
                  <NavigationMenuItem>
                    <Link
                      to="/program"
                      className={cn(
                        "group inline-flex h-12 w-max items-center justify-center rounded-lg px-5 py-3 text-base font-semibold transition-all duration-200 focus:outline-none",
                        getHoverClasses(),
                        getActiveClasses(location.pathname === '/program')
                      )}
                    >
                      Program
                    </Link>
                  </NavigationMenuItem>

                  {/* Publikasi */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn(
                      "transition-all duration-200 h-12 px-5 py-3 text-base font-semibold rounded-lg",
                      getTextColor(),
                      getDropdownHoverClasses()
                    )}>
                      Publikasi
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[800px] p-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          {publikasiSubmenu.map((item) => (
                            <ListItem
                              key={item.path}
                              title={item.label}
                              href={item.path}
                              image={item.image}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Kemitraan */}
                  <NavigationMenuItem>
                    <Link
                      to="/kemitraan"
                      className={cn(
                        "group inline-flex h-12 w-max items-center justify-center rounded-lg px-5 py-3 text-base font-semibold transition-all duration-200 focus:outline-none",
                        getHoverClasses(),
                        getActiveClasses(location.pathname === '/kemitraan')
                      )}
                    >
                      Kemitraan
                    </Link>
                  </NavigationMenuItem>

                  {/* Donasi */}
                  <NavigationMenuItem>
                    <Link
                      to="/donasi"
                      className={cn(
                        "group inline-flex h-12 w-max items-center justify-center rounded-lg px-5 py-3 text-base font-semibold transition-all duration-200 focus:outline-none",
                        getHoverClasses(),
                        getActiveClasses(location.pathname === '/donasi')
                      )}
                    >
                      Donasi
                    </Link>
                  </NavigationMenuItem>

                  {/* Kontak */}
                  <NavigationMenuItem>
                    <Link
                      to="/kontak"
                      className={cn(
                        "group inline-flex h-12 w-max items-center justify-center rounded-lg px-5 py-3 text-base font-semibold transition-all duration-200 focus:outline-none",
                        getHoverClasses(),
                        getActiveClasses(location.pathname === '/kontak')
                      )}
                    >
                      Kontak
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "lg:hidden p-3 rounded-lg transition-all duration-200",
                isAtHero 
                  ? "text-white hover:text-white/80 hover:bg-white/10" 
                  : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
              )}
              aria-expanded={isMenuOpen}
              aria-label="Menu navigasi"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t bg-white shadow-xl" style={{
              borderColor: isAtHero ? 'rgba(255,255,255,0.2)' : 'rgb(229, 231, 235)'
            }}>
              <nav className="px-4 pt-4 pb-6 space-y-2">
                <Link
                  to="/"
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-200 relative ${
                    location.pathname === '/'
                      ? 'text-emerald-600 bg-emerald-50 after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-emerald-500'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  Beranda
                </Link>

                {/* Mobile Tentang Submenu */}
                <div className="space-y-2">
                  <div className="px-4 py-3 text-lg font-bold text-gray-900">Tentang</div>
                  {tentangSubmenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMenu}
                      className="block px-8 py-2 text-base text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 relative hover:after:absolute hover:after:left-0 hover:after:top-0 hover:after:h-full hover:after:w-0.5 hover:after:bg-emerald-400"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/program"
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-200 relative ${
                    location.pathname === '/program'
                      ? 'text-emerald-600 bg-emerald-50 after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-emerald-500'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  Program
                </Link>

                {/* Mobile Publikasi Submenu */}
                <div className="space-y-2">
                  <div className="px-4 py-3 text-lg font-bold text-gray-900">Publikasi</div>
                  {publikasiSubmenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMenu}
                      className="block px-8 py-2 text-base text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 relative hover:after:absolute hover:after:left-0 hover:after:top-0 hover:after:h-full hover:after:w-0.5 hover:after:bg-emerald-400"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/kemitraan"
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-200 relative ${
                    location.pathname === '/kemitraan'
                      ? 'text-emerald-600 bg-emerald-50 after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-emerald-500'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  Kemitraan
                </Link>

                <Link
                  to="/donasi"
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-200 relative ${
                    location.pathname === '/donasi'
                      ? 'text-emerald-600 bg-emerald-50 after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-emerald-500'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  Donasi
                </Link>

                <Link
                  to="/kontak"
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-200 relative ${
                    location.pathname === '/kontak'
                      ? 'text-emerald-600 bg-emerald-50 after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-emerald-500'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  Kontak
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

import React, { useState, useEffect, useRef } from 'react';
import { Users, TreePine, Heart, Leaf, Mountain, Shield } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const scrollLockRef = useRef(false);

  // Track mouse position for background animation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsVisible(true);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle scroll-to-bottom when user scrolls inside hero
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const scrollToBottom = () => {
      if (isScrolling || scrollLockRef.current) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const target = hero.offsetTop + hero.offsetHeight;

      if (scrollTop < target - 50) {
        setIsScrolling(true);
        scrollLockRef.current = true;

        const start = scrollTop;
        const distance = target - start;
        const duration = 800;
        let startTime: number | null = null;

        const animate = (timestamp: number) => {
          if (startTime === null) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const ease = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

          window.scrollTo(0, start + distance * ease);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setIsScrolling(false);
            setTimeout(() => { scrollLockRef.current = false }, 300);
          }
        };

        requestAnimationFrame(animate);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        e.preventDefault();
        scrollToBottom();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      hero.dataset.touchStartY = e.touches[0].clientY.toString();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!hero.dataset.touchStartY) return;
      const startY = parseFloat(hero.dataset.touchStartY);
      const deltaY = startY - e.touches[0].clientY;
      if (deltaY > 10) {
        e.preventDefault();
        scrollToBottom();
        delete hero.dataset.touchStartY;
      }
    };

    hero.addEventListener('wheel', handleWheel, { passive: false });
    hero.addEventListener('touchstart', handleTouchStart, { passive: true });
    hero.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      hero.removeEventListener('wheel', handleWheel);
      hero.removeEventListener('touchstart', handleTouchStart);
      hero.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isScrolling]);

  const scrollToAbout = () => {
    const about = document.getElementById('about');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  };

  const floatingIcons = [
    { Icon: TreePine, delay: 0, duration: 6 },
    { Icon: Leaf, delay: 2, duration: 8 },
    { Icon: Mountain, delay: 4, duration: 7 },
    { Icon: Shield, delay: 1, duration: 9 },
  ];

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900"
    >
      {/* Animated spotlight background */}
      <div
        className="absolute inset-0 opacity-50 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)`,
        }}
      />

      {/* Floating background icons */}
      {floatingIcons.map(({ Icon, delay, duration }, i) => (
        <div
          key={i}
          className="absolute opacity-10"
          style={{
            left: `${15 + i * 20}%`,
            top: `${25 + i * 15}%`,
            animation: `float ${duration}s ease-in-out infinite ${delay}s`,
          }}
        >
          <Icon className="w-16 h-16 text-white" />
        </div>
      ))}

      {/* Geometric shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-28 h-28 border-2 border-white/20 rotate-45 rounded-lg animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border-2 border-emerald-300/20 rotate-12 rounded-full animate-spin-slow" />
        <div className="absolute top-3/4 left-1/3 w-14 h-14 bg-white/10 rounded-full animate-bounce" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-16 lg:pt-0">
        <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          Melestarikan Hutan &{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
            Memberdayakan Masyarakat
          </span>
        </h1>
        <p className={`text-sm sm:text-lg lg:text-xl text-gray-200 max-w-4xl mx-auto mb-6 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          Bersama-sama membangun masa depan yang berkelanjutan melalui program pengelolaan hutan, hasil hutan bukan kayu, dan pemberdayaan masyarakat sekitar hutan.
        </p>

        <div className={`flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 mb-10 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <button className="group relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            <div className="relative flex items-center justify-center">
              <Heart className="h-4 w-4 mr-2" />
              Dukung Program Kami
            </div>
          </button>
          <button className="group relative px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center">
              <TreePine className="h-4 w-4 mr-2" />
              Lihat Program Kehutanan
            </div>
          </button>
        </div>

        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 border-t border-white/20 pt-6 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {[
            { icon: '🌲', label: 'Hektar Dilindungi', value: '167,286+' },
            { icon: '🌱', label: 'Pohon Ditanam', value: '100,000+' },
            { icon: '👨‍👩‍👧‍👦', label: 'Keluarga Diberdayakan', value: '1,500+' },
            { icon: '🌿', label: 'Program Unggulan', value: '12' },
          ].map((item, i) => (
            <div key={i} className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                {item.value}
              </div>
              <div className="text-sm text-gray-300">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className={`hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white group items-center space-x-3 transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
        <div className="text-left">
          <p className="text-sm font-medium group-hover:text-emerald-400">Scroll to explore</p>
          <p className="text-xs text-white/60 group-hover:text-emerald-400/60">Discover our programs</p>
        </div>
      </button>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

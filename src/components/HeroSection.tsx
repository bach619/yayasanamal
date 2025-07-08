import React, { useState, useEffect, useRef } from 'react';
import { Users, TreePine, Heart, Leaf, Mountain, Shield } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const scrollListenerRef = useRef<boolean>(true);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    const handleScroll = (e: Event) => {
      // Only proceed if we haven't scrolled yet and listener is active
      if (!scrollListenerRef.current || isScrolling) {
        return;
      }

      const heroRect = heroElement.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Check if we're currently within the hero section
      const isInHeroSection = heroRect.top <= 0 && heroRect.bottom > 0;
      
      if (isInHeroSection) {
        e.preventDefault();
        
        // Calculate the exact scroll distance to reach the bottom of hero section
        const heroHeight = heroElement.offsetHeight;
        const currentScrollPosition = scrollTop;
        const heroTopPosition = heroElement.offsetTop;
        const targetScrollPosition = heroTopPosition + heroHeight;
        
        // Only animate if we're not already at the bottom
        if (currentScrollPosition < targetScrollPosition - 50) {
          setIsScrolling(true);
          scrollListenerRef.current = false;
          
          // Smooth scroll animation
          const startPosition = currentScrollPosition;
          const distance = targetScrollPosition - startPosition;
          const duration = 800;
          let startTime: number | null = null;
          
          const animateScroll = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Ease-in-out timing function
            const easeInOut = progress < 0.5 
              ? 2 * progress * progress 
              : 1 - Math.pow(-2 * progress + 2, 2) / 2;
            
            const currentPosition = startPosition + (distance * easeInOut);
            window.scrollTo(0, currentPosition);
            
            if (progress < 1) {
              requestAnimationFrame(animateScroll);
            } else {
              setIsScrolling(false);
              // Re-enable scroll listener after a short delay
              setTimeout(() => {
                scrollListenerRef.current = true;
              }, 100);
            }
          };
          
          requestAnimationFrame(animateScroll);
        }
      }
    };

    const handleWheel = (e: WheelEvent) => {
      handleScroll(e);
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      heroElement.dataset.touchStartY = touch.clientY.toString();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!heroElement.dataset.touchStartY) return;
      
      const touch = e.touches[0];
      const startY = parseFloat(heroElement.dataset.touchStartY);
      const currentY = touch.clientY;
      const deltaY = startY - currentY;
      
      // Only trigger on downward swipe (deltaY > 0)
      if (deltaY > 10) {
        handleScroll(e);
        delete heroElement.dataset.touchStartY;
      }
    };

    // Add event listeners with passive: false to allow preventDefault
    heroElement.addEventListener('wheel', handleWheel, { passive: false });
    heroElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    heroElement.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      heroElement.removeEventListener('wheel', handleWheel);
      heroElement.removeEventListener('touchstart', handleTouchStart);
      heroElement.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isScrolling]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingElements = [
    { icon: TreePine, delay: 0, duration: 6 },
    { icon: Leaf, delay: 2, duration: 8 },
    { icon: Mountain, delay: 4, duration: 7 },
    { icon: Shield, delay: 1, duration: 9 },
  ];

  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900"
      style={{ scrollBehavior: isScrolling ? 'auto' : 'smooth' }}
    >
      {/* Animated Background Gradient */}
      <div 
        className="absolute inset-0 opacity-50 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)`,
        }}
      />
      
      {/* Floating Background Elements */}
      {floatingElements.map(({ icon: Icon, delay, duration }, index) => (
        <div
          key={index}
          className="absolute opacity-10"
          style={{
            left: `${15 + index * 20}%`,
            top: `${25 + index * 15}%`,
            animation: `float ${duration}s ease-in-out infinite ${delay}s`,
          }}
        >
          <Icon className="w-18 h-18 text-white" />
        </div>
      ))}

      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-28 h-28 border-2 border-white/20 rotate-45 rounded-lg animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border-2 border-emerald-300/20 rotate-12 rounded-full animate-spin-slow"></div>
        <div className="absolute top-3/4 left-1/3 w-14 h-14 bg-white/10 rounded-full animate-bounce"></div>
      </div>

      {/* Main Content - Optimized for iPhone 14 */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-16 sm:pt-16 lg:pt-0">
        {/* Main Heading - Reduced size for mobile */}
        <h1 
          className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-8 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          Melestarikan Hutan &{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
            Memberdayakan Masyarakat
          </span>
        </h1>

        {/* Subtitle - Reduced margin for mobile */}
        <p 
          className={`text-sm sm:text-lg lg:text-xl text-gray-200 max-w-4xl mx-auto mb-4 sm:mb-10 leading-relaxed transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          Bersama-sama membangun masa depan yang berkelanjutan melalui program 
          pengelolaan hutan, pemanfaatan hasil hutan bukan kayu, dan pemberdayaan 
          masyarakat sekitar hutan.
        </p>

        {/* Action Buttons - Reduced margin for mobile */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-16 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <button 
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            <div className="relative flex items-center justify-center">
              <Heart className="h-4 w-4 mr-2" />
              Dukung Program Kami
            </div>
          </button>
          
          <button 
            className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
          >
            <div className="flex items-center justify-center">
              <TreePine className="h-4 w-4 mr-2" />
              Lihat Program Kehutanan
            </div>
          </button>
        </div>

        {/* Enhanced Stats - Optimized for iPhone 14 with better spacing and sizing */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-4 sm:pt-10 border-t border-white/20 mx-4 sm:mx-6 lg:mx-0 transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {[
            { number: '25,000+', label: 'Hektar Dilindungi', icon: '🌲' },
            { number: '100,000+', label: 'Pohon Ditanam', icon: '🌱' },
            { number: '1,500+', label: 'Keluarga Diberdayakan', icon: '👨‍👩‍👧‍👦' },
            { number: '500+', label: 'Hektar Gaharu', icon: '🌿' }
          ].map((stat, index) => (
            <div key={index} className="text-center group hover:scale-110 transition-transform duration-300 p-2 sm:p-5 lg:p-4">
              <div className="text-xl sm:text-3xl lg:text-4xl mb-1 sm:mb-4">{stat.icon}</div>
              <div className="text-sm sm:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-1 sm:mb-3">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-300 font-medium leading-tight px-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Scroll Indicator with Mouse Icon and Text - Desktop Only */}
      <button
        onClick={scrollToAbout}
        className={`hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-emerald-400 transition-all duration-300 group items-center space-x-3 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
        style={{ transitionDelay: '1200ms' }}
      >
        {/* Mouse Icon */}
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-emerald-400/70 transition-colors duration-300">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce group-hover:bg-emerald-400/70 transition-colors duration-300"></div>
          </div>
        </div>
        
        {/* Scroll Text */}
        <div className="flex flex-col items-start">
          <p className="text-sm font-medium group-hover:text-emerald-400 transition-colors duration-300">
            Scroll to explore
          </p>
          <p className="text-xs text-white/60 group-hover:text-emerald-400/60 transition-colors duration-300">
            Discover our programs
          </p>
        </div>
      </button>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
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
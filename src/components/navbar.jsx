import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/photos/LogoEdit.png';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavBar() {
  const [showNav, setShowNav] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  
  // Función para el scroll suave
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Cerrar el menú móvil después de un pequeño retraso para permitir la animación
      setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 300);
      
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Umbral para evitar parpadeos
      if (Math.abs(currentScrollY - lastScrollY.current) < 2) return;

      if (currentScrollY <= 0) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNav(false); // Scroll abajo
      } else {
        setShowNav(true); // Scroll arriba
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { id: 1, number: '0.1', text: 'SOBRE MI', target: '#about' },
    { id: 2, number: '0.2', text: 'EXPERIENCIA', target: '#exp' },
    { id: 3, number: '0.3', text: 'TRABAJOS', target: '#projects' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: showNav ? 0 : -100,
          opacity: showNav ? 1 : 0
        }}
        transition={{
          y: { type: "tween", duration: 0.45, ease: "easeInOut" },
          opacity: { duration: 0.3, ease: "easeInOut" }
        }}
        className='fixed top-0 left-0 w-full z-50'
        style={{ willChange: 'transform' }}
      >

        <div className='flex z-100 items-center justify-between md:justify-around gap-6 p-4 bg-black w-full'>
          <a href='#home' onClick={(e) => smoothScroll(e, '#home')}>
            <img src={Logo} alt="Logo" className="h-12 w-20 inline-block" />
          </a>
          
          {/* Menú para desktop/tablet */}
          <ul className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={link.target} 
                  onClick={(e) => smoothScroll(e, link.target)}
                  className="text-white hover:text-red-500 font-mono duration-100 text-lg"
                >
                  <span className='text-red-500'>{link.number}</span> {link.text}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Botón de contacto para desktop/tablet */}
          <div className="hidden md:flex items-center">
            <a 
              href='#contact' 
              onClick={(e) => smoothScroll(e, '#contact')}
              className="font-mono px-3 text-lg text-red-500 border-1 rounded-b-lg border-white/50 p-2 hover:bg-white/10 hover:rounded-t-lg duration-100 ease-in-out"
            >
              Hablemos
            </a>
          </div>
          
          {/* Botón hamburguesa para móvil */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Menú móvil */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-black/95 w-full overflow-hidden md:hidden fixed top-16 left-0 right-0"
            >
              <ul className="flex flex-col items-left p-4 pt-10 space-y-6">
                {navLinks.map((link) => (
                  <li key={link.id} className="mb-4">
                    <a 
                      href={link.target} 
                      onClick={(e) => smoothScroll(e, link.target)}
                      className="text-white hover:text-red-500 font-mono duration-100 text-lg block py-2 px-4"
                    >
                      <span className='text-red-500'>{link.number}</span> {link.text}
                    </a>
                  </li>
                ))}
                <li className="mt-4">
                  <a 
                    href='#contact' 
                    onClick={(e) => smoothScroll(e, '#contact')}
                    className="font-mono px-6 py-2 text-lg text-red-500 border-1 rounded-b-lg border-white/50 hover:bg-white/10 hover:rounded-t-lg duration-100 ease-in-out inline-block"
                  >
                    Hablemos
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
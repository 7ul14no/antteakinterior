import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: "Koleksi", href: "#collection" },
    { title: "Filosofi Antteak", href: "#philosophy" },
    { title: "Inspirasi Ruang", href: "#room-inspiration" },
    { title: "Testimoni", href: "#testimonials" },
    { title: "Hubungi Kami", href: "#contact" }
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-warm-beige/95 backdrop-blur-md border-b border-sand/30 py-4 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Elegant Ant Logo Area */}
          <a
            id="nav-logo"
            href="#root"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 text-wood-gold transition-transform duration-500 group-hover:rotate-12">
              {/* Custom High-End Minimalist Ant SVG */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform transition-all duration-300 group-hover:scale-105"
              >
                {/* Abdomen */}
                <path
                  d="M 16 50 C 16 38, 26 30, 42 45 C 45 48, 45 52, 42 55 C 26 70, 16 62, 16 50 Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Thorax */}
                <ellipse
                  cx="54"
                  cy="50"
                  rx="9"
                  ry="6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                {/* Head */}
                <circle
                  cx="74"
                  cy="50"
                  r="6.5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                {/* Connections */}
                <line x1="42" y1="50" x2="45" y2="50" stroke="currentColor" strokeWidth="2" />
                <line x1="63" y1="50" x2="67" y2="50" stroke="currentColor" strokeWidth="2" />
                {/* Legs (Micro Architectural Lines) */}
                {/* Back Legs */}
                <path d="M 48 46 Q 38 28 24 25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M 48 54 Q 38 72 24 75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                {/* Middle Legs */}
                <path d="M 54 44 Q 54 22 42 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M 54 56 Q 54 78 42 84" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                {/* Front Legs */}
                <path d="M 58 46 Q 66 26 78 30" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M 58 54 Q 66 74 78 70" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                {/* Antennae */}
                <path d="M 80 46 Q 88 38 94 45" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M 80 54 Q 88 62 94 55" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif text-lg leading-none font-bold tracking-widest text-wood-dark group-hover:text-wood-gold transition-colors duration-300">
                ANTTEAK
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-wood-medium leading-none mt-1">
                Interior
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-sm font-medium tracking-wide text-wood-dark/80 hover:text-wood-gold transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-wood-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center">
            <a
              id="cta-nav"
              href="#contact"
              className="group flex items-center gap-2 border border-wood-medium/30 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-wood-dark hover:bg-wood-dark hover:text-warm-beige hover:border-wood-dark transition-all duration-300"
            >
              Consultation
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Actions */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-wood-dark hover:text-wood-gold transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Slide-out Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] bg-warm-beige border-b border-sand/40 p-6 z-40 md:hidden flex flex-col gap-6 shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold tracking-wide text-wood-dark hover:text-wood-gold transition-colors duration-200 border-b border-sand/20 pb-2"
                >
                  {link.title}
                </a>
              ))}
            </div>

            <a
              id="cta-mobile-nav"
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-3 bg-wood-dark hover:bg-wood-gold text-warm-beige hover:text-wood-dark py-3.5 rounded-xl font-semibold uppercase tracking-wider text-xs transition-all duration-300"
            >
              <PhoneCall className="w-4 h-4" />
              Sewa Konsultasi Gratis
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

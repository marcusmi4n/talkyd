'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';

// Slideshow images (non-panoramic)
const slides = [
  { src: '/bg/buffalo.jpg', alt: 'Buffalo on the plains' },
  { src: '/bg/egret.jpg', alt: 'Egret in nature' },
  { src: '/bg/world-science-day-research-innovation-elements.jpg', alt: 'Science and innovation' },
];

// Panoramic image
const PANORAMIC = '/bg/aerial-drone-panorama-view-nature-moldova-sunset-village-wide-fields-valleys.jpg';

// How long each slide shows (ms)
const SLIDE_DURATION = 6000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [showPano, setShowPano] = useState(false);
  const [panoOffset, setPanoOffset] = useState({ x: 0, y: 0 });
  const targetOffset = useRef({ x: 0, y: 0 });
  const animRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Advance slideshow
  const next = useCallback(() => {
    setCurrent(prev => {
      const nextIdx = (prev + 1) % (slides.length + 1); // +1 for panoramic slot
      setShowPano(nextIdx === slides.length);
      return nextIdx;
    });
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(next, SLIDE_DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, next]);

  // Mouse parallax for panoramic
  useEffect(() => {
    if (!showPano) return;

    const handleMouse = (e: MouseEvent) => {
      // Normalize to [-1, 1], slow it down with 0.03 factor
      targetOffset.current = {
        x: ((e.clientX / window.innerWidth) * 2 - 1) * 3,
        y: ((e.clientY / window.innerHeight) * 2 - 1) * 1.5,
      };
    };

    window.addEventListener('mousemove', handleMouse);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      setPanoOffset(prev => ({
        x: lerp(prev.x, targetOffset.current.x, 0.04),
        y: lerp(prev.y, targetOffset.current.y, 0.04),
      }));
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouse);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [showPano]);

  // showPano determines which layer is visible

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#1b1d1f]">

      {/* Preload all slides */}
      <div className="hidden">
        {slides.map((s, i) => (
          <Image key={i} src={s.src} alt="" fill priority />
        ))}
      </div>

      {/* Slideshow layers */}
      <AnimatePresence>
        {!showPano && (
          <motion.div
            key={`slide-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current % slides.length].src}
              alt={slides[current % slides.length].alt}
              fill
              className="object-cover object-center"
              style={{ animation: 'kenburns 12s ease-in-out infinite' }}
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Panoramic layer with mouse parallax */}
      <AnimatePresence>
        {showPano && (
          <motion.div
            key="panoramic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 overflow-hidden"
          >
            <div
              className="absolute inset-[-4%]"
              style={{
                transform: `translate(${panoOffset.x}%, ${panoOffset.y}%)`,
                transition: 'transform 0.1s linear',
              }}
            >
              <Image
                src={PANORAMIC}
                alt="Aerial panoramic view"
                fill
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/65 z-[1]" />

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex space-x-2 z-[3]">
        {[...slides, { src: PANORAMIC, alt: 'Panoramic' }].map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setShowPano(i === slides.length); }}
            className={`h-1 rounded-full transition-all duration-500 ${
              current === i ? 'w-8 bg-primary' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-[2]">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 border border-primary/20 rounded-full">
              Leading Pan-African Industrial Partner
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              From Atoms to Innovation,{' '}
              <span className="text-primary">We Deliver.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Industrial supply, chemical distribution, and multi-sector solutions across Africa. Connecting global manufacturers to African industries with precision and reliability.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/contact?quote=true" className="w-full sm:w-auto btn-primary flex items-center justify-center group">
                Request Quote
                <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/products" className="w-full sm:w-auto px-6 py-3 border border-white/30 text-white rounded-md font-medium transition-all hover:bg-white/10 hover:border-white flex items-center justify-center">
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-[3]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Scroll to discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>
    </section>
  );
}

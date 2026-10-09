'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Departments', href: '/departments' },
  { name: 'Industries', href: '/industries' },
  { name: 'Safety', href: '/safety' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-dark/40 backdrop-blur-xl shadow-sm py-3'
          : isHome ? 'bg-transparent py-5' : 'bg-white shadow-md py-3'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo-tbg.png"
              alt="Mbonyange Africa Limited"
              width={220}
              height={75}
              className="h-14 md:h-20 w-auto object-contain transition-opacity group-hover:opacity-90"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md',
                  pathname === link.href
                    ? 'text-primary bg-primary/10'
                    : (isHome || scrolled) ? 'text-white/80 hover:text-white hover:bg-white/5' : 'text-dark hover:text-primary hover:bg-primary/5'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact?quote=true"
              className="ml-4 px-5 py-2.5 bg-primary text-white rounded-md text-sm font-semibold transition-all hover:bg-primary-light hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-x-0 top-[72px] bottom-0 bg-dark z-40 lg:hidden transition-transform duration-300 ease-in-out overflow-y-auto',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-6">
          {/* Nav Links */}
          <div className="flex-1 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'flex items-center w-full px-4 py-4 rounded-xl text-base font-semibold transition-all',
                  pathname === link.href
                    ? 'bg-primary/20 text-white'
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* CTA at bottom */}
          <div className="pt-6 pb-4 border-t border-border-color mt-4">
            <Link
              href="/contact?quote=true"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full py-4 bg-primary text-white text-base font-bold rounded-xl shadow-lg active:scale-95 transition-transform hover:bg-primary-light"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

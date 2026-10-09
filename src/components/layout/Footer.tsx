'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Globe, Users, MessageSquare, ChevronRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#1b1d1f] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image src="/bg/footer.png" alt="Mbonyange Africa Limited" width={800} height={280} className="h-56 w-auto object-contain" />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              A diversified industrial supply and trading company specializing in integrated supply, chemical distribution, and industrial solutions across Africa.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"><Users size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"><Globe size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"><MessageSquare size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 flex items-center">
              <span className="w-1 h-6 bg-white/50 mr-3 rounded-full inline-block"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[{name:'About Us',href:'/about'},{name:'Products',href:'/products'},{name:'Departments',href:'/departments'},{name:'Industries',href:'/industries'},{name:'Safety',href:'/safety'},{name:'Contact',href:'/contact'}].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors text-sm flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 flex items-center">
              <span className="w-1 h-6 bg-white/50 mr-3 rounded-full inline-block"></span>
              Product Categories
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="hover:text-white transition-colors cursor-pointer">Industrial Chemicals</li>
              <li className="hover:text-white transition-colors cursor-pointer">Specialty Chemicals</li>
              <li className="hover:text-white transition-colors cursor-pointer">Polymers &amp; Plastics</li>
              <li className="hover:text-white transition-colors cursor-pointer">Water Treatment</li>
              <li className="hover:text-white transition-colors cursor-pointer">Agricultural Inputs</li>
              <li className="hover:text-white transition-colors cursor-pointer">Lab &amp; Pharma</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 flex items-center">
              <span className="w-1 h-6 bg-white/50 mr-3 rounded-full inline-block"></span>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="p-2 bg-white/10 rounded-lg flex-shrink-0"><MapPin size={18} /></div>
                <span className="text-white/80 text-sm">Mbonyange Africa Limited, Kampala, Uganda</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-lg flex-shrink-0"><Phone size={18} /></div>
                <span className="text-white/80 text-sm">+256 704 288436</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-lg flex-shrink-0"><Phone size={18} /></div>
                <span className="text-white/80 text-sm">+256 392 846812</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-lg flex-shrink-0"><Mail size={18} /></div>
                <a href="mailto:info@mbonyange.com" className="text-white/80 hover:text-white text-sm">info@mbonyange.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="py-8 border-y border-white/20 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white text-xl font-bold mb-1">Ready to Partner with Us?</h4>
              <p className="text-white/80 text-sm">Request a quote for your industrial chemical needs.</p>
            </div>
            <Link href="/contact?quote=true" className="px-6 py-3 bg-white text-[#6b5a48] font-bold rounded-md hover:bg-white/90 transition-all hover:scale-105 active:scale-95 whitespace-nowrap">
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60 text-xs text-center md:text-left">
            &copy; {currentYear} Mbonyange Africa Limited. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-white/60">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

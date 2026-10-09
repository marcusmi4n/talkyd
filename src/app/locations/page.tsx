'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

const locations = [
  { country: "Uganda", city: "Kampala", type: "Headquarters", description: "Our main headquarters and primary distribution center, serving the Ugandan market and coordinating regional operations.", services: ["Full product range", "Technical support", "Customer service", "Order processing"], flag: "🇺🇬" },
  { country: "Kenya", city: "Nairobi", type: "Regional Office", description: "Serving the Kenyan market with comprehensive chemical supply solutions for industries and laboratories.", services: ["Product distribution", "Customer support", "Local partnerships"], flag: "🇰🇪" },
  { country: "Tanzania", city: "Dar es Salaam", type: "Distribution Partner", description: "Strategic partnership enabling product distribution across Tanzania and supporting local industries.", services: ["Product availability", "Order fulfillment", "Technical guidance"], flag: "🇹🇿" },
  { country: "Rwanda", city: "Kigali", type: "Service Area", description: "Expanding our reach to serve Rwanda's growing industrial and laboratory sectors.", services: ["Product supply", "Delivery services", "Customer consultation"], flag: "🇷🇼" },
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-20 h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        <Image src="/images/pexels-chanaka-906494.jpg" alt="Our Locations" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-dark/65" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our <span className="text-primary">Locations</span></h1>
            <p className="text-xl text-white/80">Strategically positioned to serve industries across Africa.</p>
          </motion.div>
        </div>
      </section>

      {/* HQ */}
      <section className="py-24 bg-[#f0f4f4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Headquarters</span>
              </div>
              <h2 className="text-3xl font-bold text-dark mb-6">National ICT Hub, Nakawa, Kampala</h2>
              <p className="text-gray-600 mb-8">Our headquarters in Kampala serves as the central hub for all operations. From here, we coordinate product sourcing, quality control, customer service, and distribution across the region.</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><div><p className="font-medium text-dark">Address</p><p className="text-gray-500">National ICT Hub, Nakawa, Kampala, Uganda</p></div></div>
                <div className="flex items-start gap-3"><Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><div><p className="font-medium text-dark">Email</p><a href="mailto:info@mbonyange.com" className="text-primary hover:underline">info@mbonyange.com</a></div></div>
                <div className="flex items-start gap-3"><Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><div><p className="font-medium text-dark">Phone</p><p className="text-gray-500">+256 704 288436 / +256 392 846812</p></div></div>
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">Contact Us <ArrowRight className="w-4 h-4" /></Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden relative h-[400px]">
              <Image src="/bg/aerial-drone-panorama-view-nature-moldova-sunset-village-wide-fields-valleys.jpg" alt="Kampala Uganda" fill className="object-cover" />
              <div className="absolute inset-0 bg-dark/30" />
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <p className="text-white font-bold text-2xl">🇺🇬 Uganda</p>
                <p className="text-white/80 text-sm">East Africa</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regional */}
      <section className="py-24 bg-[#f5f0eb]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-4">Regional <span className="text-primary">Presence</span></h2>
            <p className="text-gray-600">Serving clients across multiple African markets</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all">
                <span className="text-4xl mb-4 block">{loc.flag}</span>
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-3">{loc.type}</span>
                <h3 className="text-xl font-bold text-dark mb-1">{loc.city}</h3>
                <p className="text-sm text-gray-500 mb-4">{loc.country}</p>
                <p className="text-sm text-gray-600 mb-4">{loc.description}</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs font-bold text-dark mb-2">Services:</p>
                  <ul className="space-y-1">
                    {loc.services.map((s, j) => (
                      <li key={j} className="text-xs text-gray-500 flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" />{s}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image src="/images/pexels-chanaka-906494.jpg" alt="CTA" fill className="object-cover" />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Chemical Products in Your Region?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">Contact us to discuss how we can serve your chemical supply needs, wherever you are in Africa.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-primary px-8 py-4">Contact Us</Link>
            <Link href="/products" className="px-8 py-4 border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-all">View Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

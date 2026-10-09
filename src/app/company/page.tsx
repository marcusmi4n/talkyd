'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const capabilities = [
  { title: "Sourcing & Procurement", desc: "Strategic partnerships with reputable global manufacturers ensuring consistent quality and competitive pricing.", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
  { title: "Quality Assurance", desc: "Rigorous quality control processes and documentation to ensure products meet specified standards and client requirements.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Storage & Handling", desc: "Proper storage facilities maintaining product integrity with appropriate temperature, humidity, and safety controls.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
  { title: "Distribution & Logistics", desc: "Efficient delivery networks across Uganda and East Africa ensuring timely and safe product delivery.", icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" },
  { title: "Technical Support", desc: "Expert guidance on product selection, applications, specifications, and safety requirements.", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
  { title: "Regulatory Compliance", desc: "Full documentation support including Safety Data Sheets, Certificates of Analysis, and import/export compliance.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
];

const stats = [
  { value: "100+", label: "Products Available" },
  { value: "6+", label: "Industries Served" },
  { value: "10+", label: "Years Experience" },
  { value: "Africa", label: "Wide Coverage" },
];

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-20 h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        <Image src="/images/pexels-chanaka-906494.jpg" alt="Company Overview" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-dark/65" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Company <span className="text-primary">Overview</span></h1>
            <p className="text-xl text-white/80">Your trusted partner for chemical and industrial supplies across Africa.</p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-[#f0f4f4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Who We Are</span>
              </div>
              <h2 className="text-3xl font-bold text-dark">Mbonyange Africa Limited</h2>
              <p className="text-gray-600 leading-relaxed">A professional chemical and industrial supplies company headquartered in Kampala, Uganda. We specialize in the wholesale distribution of industrial chemicals, laboratory chemicals, reagents, raw materials, and related chemical supplies.</p>
              <p className="text-gray-600 leading-relaxed">Operating as a non-manufacturing distributor, we serve as the critical bridge between global chemical manufacturers and African industries, laboratories, institutions, and businesses that depend on reliable chemical inputs.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary inline-flex items-center gap-2">Learn More <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/contact" className="btn-outline inline-flex items-center gap-2">Contact Us</Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="rounded-2xl overflow-hidden relative h-[400px]">
                <Image src="/images/drums-1000xx.jpg" alt="Chemical storage" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg hidden md:block">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm opacity-80">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-[#f5f0eb]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-4">Our <span className="text-primary">Capabilities</span></h2>
            <p className="text-gray-600">Comprehensive services to meet your chemical supply needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cap.icon} /></svg>
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-500">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-24 bg-[#f0f4f4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden relative h-[400px]">
              <Image src="/images/pexels-pixabay-248152.jpg" alt="Laboratory chemicals" fill className="object-cover" />
            </div>
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Model</span>
              </div>
              <h2 className="text-3xl font-bold text-dark mb-6">Our Business Model</h2>
              <p className="text-gray-600 mb-6">As a B2B chemical distributor, we focus exclusively on serving business clients. Our model is built on:</p>
              <ul className="space-y-3 mb-8">
                {["Strategic sourcing from verified global manufacturers", "Bulk purchasing for competitive pricing", "Professional storage and handling facilities", "Reliable logistics and delivery networks", "Technical expertise and customer support", "Regulatory compliance and documentation"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/products" className="btn-primary inline-flex items-center gap-2">Explore Products <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image src="/images/drums-1000xx.jpg" alt="CTA" fill className="object-cover" />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">Join the growing number of businesses across Africa who trust us for their chemical supply needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-primary px-8 py-4">Get in Touch</Link>
            <Link href="/industries" className="px-8 py-4 border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-all">Industries We Serve</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

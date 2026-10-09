'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Factory, Sprout, Building2, Globe2, FlaskConical, HardHat, CheckCircle2, ArrowRight } from 'lucide-react';

const industries = [
  { title: "Manufacturing", image: "/images/drums-1000xx.jpg", icon: <Factory className="w-12 h-12 text-primary" />, description: "Supporting the backbone of industrialization. We supply raw materials, bulk chemicals, and technical expertise to large-scale factories across Africa.", sectors: ["Textiles & Apparel", "Food & Beverage", "Plastics & Packaging", "Automotive", "Chemical Processing"] },
  { title: "Agriculture", image: "/images/pexels-felix-haumann-1938529-3735930.jpg", icon: <Sprout className="w-12 h-12 text-primary" />, description: "Driving food security and export growth. We provide high-quality fertilizers, crop protection, and irrigation solutions to modern agricultural ventures.", sectors: ["Commercial Farming", "Agro-processing", "Seed Distribution", "Horticulture", "Livestock Support"] },
  { title: "Government & Public Sector", image: "/images/pexels-chanaka-906494.jpg", icon: <Building2 className="w-12 h-12 text-primary" />, description: "A trusted procurement partner for national and regional institutions. We handle complex tenders and high-volume supply for public infrastructure and health.", sectors: ["Public Health", "Water Authorities", "Education Institutions", "Public Works", "Defense & Security"] },
  { title: "NGOs & Development", image: "/bg/aerial-drone-panorama-view-nature-moldova-sunset-village-wide-fields-valleys.jpg", icon: <Globe2 className="w-12 h-12 text-primary" />, description: "Collaborating with international organizations on development projects. Our logistics and sourcing capability ensures materials reach where they are needed.", sectors: ["Water & Sanitation (WASH)", "Emergency Relief", "Rural Development", "Healthcare Programs", "Sustainability Initiatives"] },
  { title: "Laboratories & Research", image: "/images/beaker-glass-wear-chemical-lab-glass-science-1367344-pxhere.com.jpg", icon: <FlaskConical className="w-12 h-12 text-primary" />, description: "Empowering African science and innovation. We supply cutting-edge reagents and instruments to diagnostic labs and research institutions.", sectors: ["Medical Diagnostics", "Quality Control Labs", "University Research", "Environmental Testing", "Industrial R&D"] },
  { title: "Construction & Infrastructure", image: "/images/pexels-ivan-s-9628801.jpg", icon: <HardHat className="w-12 h-12 text-primary" />, description: "Fueling the continent's urban and industrial expansion. We source specialized materials and safety equipment for major engineering projects.", sectors: ["Road & Bridge Construction", "Industrial Warehousing", "Energy Infrastructure", "Commercial Real Estate", "Mining Infrastructure"] }
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-20 h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        <Image src="/bg/world-science-day-research-innovation-elements.jpg" alt="Industries" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-dark/65" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 border border-primary/40 rounded-full mb-4">
              <span className="text-white text-sm font-medium uppercase tracking-wider">Sectors We Serve</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Industries We <span className="text-primary">Serve</span></h1>
            <p className="text-xl text-white/80 leading-relaxed">Tailored industrial solutions across critical sectors, driving operational efficiency and economic growth across Africa.</p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-[#faf9f7]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div key={index} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden">
                {/* Image banner */}
                <div className="relative h-44 overflow-hidden">
                  <Image src={industry.image} alt={industry.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-dark/40" />
                  <div className="absolute bottom-4 left-4">{industry.icon}</div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h2 className="text-2xl font-bold text-dark mb-4">{industry.title}</h2>
                  <p className="text-gray-500 text-sm mb-8 leading-relaxed flex-1">{industry.description}</p>
                  <div>
                    <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Sectors Focused</h3>
                    <div className="flex flex-wrap gap-2">
                      {industry.sectors.map((sector, i) => (
                        <span key={i} className="px-3 py-1 bg-[#f0f4f4] text-gray-600 text-[10px] font-bold rounded-full border border-[#4f6c6c]/20">{sector}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-20 bg-[#f5f0eb] border-t border-[#76614d]/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-dark mb-6">Multi-Sector Capability, Single-Point Responsibility</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">We understand the unique challenges of each industry. Our cross-sector experience brings best practices and efficient supply chains to every project.</p>
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {['Technical Support', 'Scalable Supply', 'Reliable Logistics'].map((item, i) => (
              <div key={i} className="flex items-center space-x-2 text-dark font-semibold">
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <Link href="/contact?quote=true" className="btn-primary inline-flex items-center gap-2 px-8 py-4">Get a Quote <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </div>
  );
}

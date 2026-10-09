'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Factory, FlaskConical, Sprout, Droplets, HardHat, ShoppingBag, Truck, Handshake, ShieldCheck, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';

const departments = [
  { id: "industrial", title: "Industrial & Chemical Supply", image: "/images/drums-1000xx.jpg", icon: <Factory className="w-10 h-10" />, description: "Our industrial chemical division provides a comprehensive range of high-purity chemicals and raw materials for the manufacturing sector.", items: ["Bulk industrial solvents and reagents", "Process catalysts and additives", "Specialty chemicals for manufacturing", "Raw materials for plastics and textiles", "Technical consultancy for chemical handling"] },
  { id: "laboratory", title: "Laboratory & Scientific Supplies", image: "/images/beaker-glass-wear-chemical-lab-glass-science-1367344-pxhere.com.jpg", icon: <FlaskConical className="w-10 h-10" />, description: "Supporting research, diagnostics, and quality control through the supply of premium laboratory equipment and reagents.", items: ["Analytical reagents and chemicals", "Laboratory glassware and plasticware", "Precision measuring instruments", "Safety equipment and PPE", "Laboratory furniture and infrastructure"] },
  { id: "agriculture", title: "Agricultural Inputs", image: "/images/pexels-felix-haumann-1938529-3735930.jpg", icon: <Sprout className="w-10 h-10" />, description: "Empowering the African agricultural sector with high-quality inputs that drive yield and sustainability.", items: ["Specialized fertilizers and soil conditioners", "High-yield seeds and planting materials", "Crop protection chemicals", "Irrigation equipment and components", "Post-harvest storage solutions"] },
  { id: "water", title: "Water & Environmental Solutions", image: "/bg/aerial-drone-panorama-view-nature-moldova-sunset-village-wide-fields-valleys.jpg", icon: <Droplets className="w-10 h-10" />, description: "Addressing the critical need for clean water and environmental stewardship across municipal and industrial sectors.", items: ["Water treatment chemicals", "Disinfection systems and chemicals", "Filtration media and membranes", "Environmental monitoring instruments", "Wastewater management solutions"] },
  { id: "construction", title: "Construction & Industrial Materials", image: "/images/pexels-chanaka-906494.jpg", icon: <HardHat className="w-10 h-10" />, description: "Sourcing and distributing specialized materials for infrastructure and industrial construction.", items: ["Specialized cement and concrete additives", "Industrial coatings and sealants", "Geotextiles and structural materials", "Safety and signage equipment", "Heavy-duty industrial flooring solutions"] },
  { id: "procurement", title: "General Trading & Procurement", image: "/images/1000_F_81033504_dkJlFEYDCK8KT1tB54U6pxp0vtmU6Nba.jpg", icon: <ShoppingBag className="w-10 h-10" />, description: "Our core competency is strategic sourcing. We handle complex procurement requests for diverse industrial needs.", items: ["Global strategic sourcing", "Contract procurement for institutions", "Bulk commodity trading", "Vendor management and auditing", "Custom procurement solutions"] },
  { id: "logistics", title: "Logistics & Distribution", image: "/images/pexels-chanaka-906494.jpg", icon: <Truck className="w-10 h-10" />, description: "Ensuring that critical industrial supplies reach their destination safely and on time across Africa.", items: ["Interstate and cross-border distribution", "Warehousing and inventory management", "Hazardous material handling", "Cold chain logistics", "Last-mile delivery for industrial sites"] },
  { id: "partnerships", title: "Strategic Partnerships & Ventures", image: "/images/pexels-ivan-s-9628801.jpg", icon: <Handshake className="w-10 h-10" />, description: "Building long-term value through collaborative ventures with international manufacturers.", items: ["Joint venture management", "Market entry strategy for global brands", "Representation and distributorships", "Local value-add initiatives", "Strategic investment in supply chains"] },
  { id: "compliance", title: "Compliance & Quality Assurance", image: "/images/0_0-11191-7.webp", icon: <ShieldCheck className="w-10 h-10" />, description: "Ensuring all operations and supplied products meet the highest regulatory and safety standards.", items: ["Regulatory compliance auditing", "Quality control and inspection", "Safety training and certification", "Environmental impact assessments", "Supply chain transparency reporting"] }
];

const sectionBgs = ['bg-[#f0f4f4]', 'bg-[#f5f0eb]', 'bg-[#f2f0ee]'];

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-20 h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        <Image src="/images/pexels-chanaka-906494.jpg" alt="Departments" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-dark/65" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 border border-primary/40 rounded-full mb-4">
              <span className="text-white text-sm font-medium uppercase tracking-wider">Our Divisions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our <span className="text-primary">Departments</span></h1>
            <p className="text-xl text-white/80 leading-relaxed">Specialized expertise across nine core divisions, providing comprehensive industrial solutions across Africa.</p>
          </motion.div>
        </div>
      </section>

      {/* Departments */}
      {departments.map((dept, index) => (
        <section key={dept.id} id={dept.id} className={`py-20 ${sectionBgs[index % 3]} border-t border-gray-100`}>
          <div className="container mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-6">{dept.icon}</div>
                <h2 className="text-3xl font-bold text-dark mb-4">{dept.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{dept.description}</p>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-6">
                  <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Key Offerings</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {dept.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={`/contact?quote=true&category=${encodeURIComponent(dept.title)}`} className="btn-primary inline-flex items-center group">
                  Request Quote <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 shadow-md ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <Image src={dept.image} alt={dept.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] block">Enterprise Division</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-[#f5f0eb] border-t border-[#76614d]/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Need a Specialized Supply Solution?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">Our department heads are ready to provide technical consultation and custom procurement strategies for your organization.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact?quote=true" className="btn-primary inline-flex items-center gap-2 px-8 py-4">Request a Quote <ArrowRight className="w-5 h-5" /></Link>
              <Link href="/contact" className="btn-outline inline-flex items-center gap-2 px-8 py-4">Contact Our Team</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

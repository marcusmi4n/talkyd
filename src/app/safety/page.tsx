'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, FileText, AlertTriangle, ClipboardCheck, Globe, ArrowRight } from 'lucide-react';

const commitments = [
  { title: "Safe Handling Commitment", icon: <AlertTriangle className="w-10 h-10 text-primary" />, description: "We adhere to the strictest international protocols for the storage, handling, and distribution of industrial chemicals and hazardous materials." },
  { title: "Regulatory Compliance", icon: <ClipboardCheck className="w-10 h-10 text-primary" />, description: "Our operations fully comply with national regulations in every African country we operate in, as well as global standards like ISO and REACH." },
  { title: "Environmental Responsibility", icon: <Leaf className="w-10 h-10 text-primary" />, description: "We are committed to minimizing the environmental impact of industrial supply chains through sustainable sourcing and waste reduction." },
  { title: "Quality Assurance", icon: <ShieldCheck className="w-10 h-10 text-primary" />, description: "Rigorous quality control processes ensure that every product supplied meets the technical specifications required by our clients." }
];

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-20 h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        <Image src="/images/0_0-11191-7.webp" alt="Safety & Compliance" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-dark/65" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 border border-primary/40 rounded-full mb-4">
              <span className="text-white text-sm font-medium uppercase tracking-wider">Our Standards</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Safety &amp; <span className="text-primary">Compliance</span></h1>
            <p className="text-xl text-white/80 leading-relaxed">At Mbonyange Africa, integrity and safety are the foundations of our professional credibility.</p>
          </motion.div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-24 bg-[#faf9f7]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => (
              <motion.div key={index} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} viewport={{ once: true }}
                className="flex items-start space-x-6 p-8 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="flex-shrink-0 p-4 bg-primary/5 rounded-xl">{commitment.icon}</div>
                <div>
                  <h2 className="text-xl font-bold text-dark mb-3">{commitment.title}</h2>
                  <p className="text-gray-500 leading-relaxed text-sm">{commitment.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Framework */}
      <section className="py-24 bg-[#f5f0eb]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Framework</span>
              </div>
              <h2 className="text-3xl font-bold text-dark mb-8">Our Compliance Framework</h2>
              <div className="space-y-6">
                {[
                  { icon: <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />, title: "Standard Operating Procedures (SOPs)", desc: "Detailed protocols for every stage of procurement, warehousing, and distribution." },
                  { icon: <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />, title: "Global Standards Alignment", desc: "Alignment with UN GHS (Globally Harmonized System) for chemical classification and labeling." },
                  { icon: <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />, title: "Audit & Verification", desc: "Continuous internal and external audits of our supply chain and logistics partners." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                    {item.icon}
                    <div>
                      <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm relative">
              <div className="relative h-48">
                <Image src="/images/pexels-pixabay-248152.jpg" alt="Compliance" fill className="object-cover" />
                <div className="absolute inset-0 bg-dark/50" />
                <div className="absolute bottom-4 left-6">
                  <ShieldCheck className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="bg-white p-8">
                <h3 className="text-2xl font-bold text-dark mb-4">Transparency Report</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">We maintain full traceability of our products from source to destination. Our clients can request compliance certificates (COA, MSDS) for every batch delivered.</p>
                <button className="btn-primary">Download Compliance Manual</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG */}
      <section className="py-24 bg-[#f2f0ee]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-dark mb-6">Commitment to African Sustainability</h2>
            <p className="text-gray-600 mb-12 text-lg">Mbonyange Africa integrates ESG principles into our core strategy, ensuring our growth contributes positively to the communities and environments where we operate.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              {[{ value: '100%', label: 'Safety Compliance' }, { value: 'Zero', label: 'Major Incidents' }, { value: 'Full', label: 'Traceability' }].map((stat, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-primary font-bold text-4xl mb-2">{stat.value}</div>
                  <div className="text-gray-500 text-sm uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-4">Contact Our Safety Team <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

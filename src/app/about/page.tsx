'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, Target, Eye, Cog, Calendar, CheckCircle2, Shield, Globe, TrendingUp, Award, ArrowRight } from 'lucide-react';

const whatWeDo = [
  { title: "Industrial Chemicals Supply", desc: "We source and distribute a comprehensive range of industrial-grade chemicals for manufacturing, processing, and production operations across Africa." },
  { title: "Raw Materials Distribution", desc: "Reliable supply of polymers, resins, solvents, and specialty raw materials to support diverse industrial applications." },
  { title: "Procurement & Logistics", desc: "End-to-end procurement management and pan-African logistics, ensuring products reach clients safely and on schedule." },
  { title: "Multi-Industry Support", desc: "Tailored supply solutions for manufacturing, agriculture, water treatment, construction, laboratories, and more." },
];

const trustElements = [
  { icon: <Shield className="w-6 h-6 text-primary" />, label: "Reliable Supply Chain" },
  { icon: <Award className="w-6 h-6 text-primary" />, label: "Industry-Grade Products" },
  { icon: <CheckCircle2 className="w-6 h-6 text-primary" />, label: "Commitment to Quality & Safety" },
  { icon: <Globe className="w-6 h-6 text-primary" />, label: "Serving Multiple Sectors" },
];

const journey = [
  { year: "2018", title: "Founded", desc: "Mbonyange Africa Limited was established in Kampala, Uganda, with a clear mission: to bridge the gap between global chemical manufacturers and African industries." },
  { year: "2019–2020", title: "Building Partnerships", desc: "Secured strategic partnerships with international manufacturers, expanding our product portfolio to cover industrial chemicals, laboratory reagents, and raw materials." },
  { year: "2021–2022", title: "Multi-Sector Expansion", desc: "Extended our reach into agriculture, water treatment, construction, and pharmaceutical sectors — becoming a true multi-industry supply partner." },
  { year: "2023–Present", title: "Pan-African Growth", desc: "Strengthened our distribution network across East Africa, deepened client relationships, and committed to delivering world-class supply chain standards." },
];

const stats = [
  { value: "2018", label: "Year Founded" },
  { value: "20+", label: "African Countries" },
  { value: "150+", label: "Global Suppliers" },
  { value: "9", label: "Industry Sectors" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative pt-20 h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        <Image src="/bg/egret.jpg" alt="About Mbonyange Africa" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-dark/65" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/40 rounded-full mb-4">
              <Calendar className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-bold uppercase tracking-wider">Since 2018</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-primary">Mbonyange Africa</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              A trusted industrial and chemical supply company powering industries across Africa since 2018.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-[#f0f4f4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl"><Building2 className="w-6 h-6 text-primary" /></div>
                <span className="text-primary text-sm font-bold uppercase tracking-wider">Who We Are</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
                Your Strategic Industrial Supply Partner in Africa
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Mbonyange Africa Limited is a professional industrial and chemical supply company headquartered in Kampala, Uganda. We specialize in the wholesale distribution of industrial chemicals, raw materials, laboratory supplies, and specialty products to businesses across Africa.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2018, we operate as a non-manufacturing distributor — serving as the critical link between world-class global manufacturers and the industries, institutions, and businesses that depend on reliable chemical inputs to operate and grow.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {trustElements.map((el, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                    {el.icon}
                    <span className="text-sm font-semibold text-dark">{el.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video rounded-xl overflow-hidden relative">
                  <Image src="/images/pexels-chanaka-906494.jpg" alt="Industrial operations" fill className="object-cover" />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden relative">
                  <Image src="/images/drums-1000xx.jpg" alt="Chemical storage" fill className="object-cover" />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden relative">
                  <Image src="/images/pexels-pixabay-248152.jpg" alt="Laboratory" fill className="object-cover" />
                </div>
                <div className="aspect-video rounded-xl overflow-hidden relative">
                  <Image src="/images/pexels-felix-haumann-1938529-3735930.jpg" alt="Industrial facility" fill className="object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-5 py-3 rounded-xl shadow-lg font-bold text-sm">
                Est. 2018
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm uppercase tracking-wider font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#f5f0eb]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl"><Target className="w-6 h-6 text-primary" /></div>
                <h3 className="text-xl font-bold text-dark">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                To deliver reliable, high-quality industrial and chemical supply solutions that empower African industries to operate efficiently, safely, and competitively.
              </p>
              <ul className="space-y-2">
                {["Source quality products from verified global manufacturers", "Ensure safe, compliant handling and delivery", "Provide technical expertise and responsive support"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary/10 rounded-xl"><Eye className="w-6 h-6 text-secondary" /></div>
                <h3 className="text-xl font-bold text-dark">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                To become the most trusted and comprehensive industrial supply partner across Africa — recognized for reliability, quality, and our commitment to African industrial growth.
              </p>
              <ul className="space-y-2">
                {["Pan-African distribution network", "World-class supply chain standards", "Long-term partnerships built on trust"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-[#f0f4f4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl"><Cog className="w-6 h-6 text-primary" /></div>
              <span className="text-primary text-sm font-bold uppercase tracking-wider">What We Do</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide end-to-end industrial supply solutions — from sourcing to delivery — across multiple sectors and industries.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeDo.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <TrendingUp className="w-5 h-5 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 bg-[#f2f0ee]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl"><Calendar className="w-6 h-6 text-primary" /></div>
              <span className="text-primary text-sm font-bold uppercase tracking-wider">Our Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Growing Since 2018</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From a focused startup to a multi-sector industrial supply partner — here is how we have grown.</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-primary/20 h-full hidden md:block" />
            <div className="space-y-10">
              {journey.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 inline-block max-w-md">
                      <span className="inline-block bg-primary text-white text-sm font-bold px-3 py-1 rounded-full mb-3">{item.year}</span>
                      <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-primary border-4 border-white shadow-lg flex-shrink-0 z-10 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f5f0eb]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Partner with Mbonyange Africa for reliable industrial supply solutions across the continent.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact?quote=true" className="btn-primary inline-flex items-center gap-2 px-8 py-4">Request a Quote <ArrowRight className="w-5 h-5" /></Link>
            <Link href="/departments" className="btn-outline inline-flex items-center gap-2 px-8 py-4">Our Departments</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

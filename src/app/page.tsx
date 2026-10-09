'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Beaker, Droplets, FlaskConical, Sprout, HardHat, Truck,
  ShieldCheck, Globe, TrendingUp, Award, CheckCircle2,
  ChevronRight, Factory, Building2, Atom, Layers, ArrowRight
} from 'lucide-react';

const departments = [
  { title: "Industrial Chemicals", icon: <Beaker className="w-8 h-8 text-primary" />, description: "Bulk supply of industrial chemicals, catalysts, and raw materials for large-scale manufacturing.", link: "/products#industrial-chemicals" },
  { title: "Specialty Chemicals", icon: <Atom className="w-8 h-8 text-primary" />, description: "Performance chemicals for specific applications including surfactants, inhibitors, and additives.", link: "/products#specialty-chemicals" },
  { title: "Polymers & Plastics", icon: <Layers className="w-8 h-8 text-primary" />, description: "Comprehensive range of polymer resins including PE, PP, PVC, PET, and engineering plastics.", link: "/products#polymers-plastics" },
  { title: "Water Treatment", icon: <Droplets className="w-8 h-8 text-primary" />, description: "Advanced water treatment chemicals and environmental monitoring technologies.", link: "/products#industrial-chemicals" },
  { title: "Agricultural Inputs", icon: <Sprout className="w-8 h-8 text-primary" />, description: "Fertilizers, crop protection chemicals, and solutions for modern farming.", link: "/products#agricultural" },
  { title: "Logistics & Distribution", icon: <Truck className="w-8 h-8 text-primary" />, description: "End-to-end supply chain management with pan-African distribution capabilities.", link: "/departments#logistics" }
];

const stats = [
  { label: "Countries Served", value: "20+" },
  { label: "Global Suppliers", value: "150+" },
  { label: "Projects Completed", value: "1,200+" },
  { label: "Team Experts", value: "85+" }
];

const industries = [
  { name: "Manufacturing", icon: <Factory className="w-6 h-6" /> },
  { name: "Agriculture", icon: <Sprout className="w-6 h-6" /> },
  { name: "Government", icon: <Building2 className="w-6 h-6" /> },
  { name: "Oil & Gas", icon: <Droplets className="w-6 h-6" /> },
  { name: "Construction", icon: <HardHat className="w-6 h-6" /> },
  { name: "Pharmaceuticals", icon: <FlaskConical className="w-6 h-6" /> }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Photo background */}
        <Image
          src="/bg/buffalo.jpg"
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-dark/75" />

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <span className="text-primary text-sm font-medium">Leading Pan-African Industrial Partner</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                From Atoms to Innovation, <span className="text-primary">We Deliver.</span>
              </h1>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
                Industrial supply, chemical distribution, and multi-sector solutions across Africa. Connecting global manufacturers to African industries with precision and reliability.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/contact?quote=true" className="btn-primary inline-flex items-center gap-2">
                  Request Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/products" className="btn-ghost inline-flex items-center gap-2">
                  View Products
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="border-l-2 border-primary/30 pl-4">
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="relative hidden lg:block">
              <div className="relative aspect-square">
                <div className="absolute inset-0 border-2 border-primary/20 rounded-full scale-75" />
                <div className="absolute inset-0 border-2 border-primary/10 rounded-full scale-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
                    <Image
                      src="/images/logo-tbg.png"
                      alt="Mbonyange Africa Limited"
                      width={220}
                      height={220}
                      className="w-56 h-56 object-contain"
                    />
                  </div>
                </div>
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-8 right-8 bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-xl p-4 shadow-xl backdrop-blur-sm">
                  <ShieldCheck className="w-8 h-8 text-primary mb-2" />
                  <p className="text-xs text-white font-semibold">Quality Guaranteed</p>
                </motion.div>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-16 left-8 bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-xl p-4 shadow-xl backdrop-blur-sm">
                  <Globe className="w-8 h-8 text-secondary mb-2" />
                  <p className="text-xs text-white font-semibold">Pan-African Reach</p>
                </motion.div>
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-8 right-16 bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-xl p-4 shadow-xl backdrop-blur-sm">
                  <TrendingUp className="w-8 h-8 text-primary mb-2" />
                  <p className="text-xs text-white font-semibold">Trusted Partner</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-[#f0f4f4] border-t border-[#4f6c6c]/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Who We Are</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
                Integrated Supply Solutions for <span className="text-primary">African Industry</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We operate as a wholesale distributor and procurement partner, sourcing quality industrial chemicals, laboratory supplies, and raw materials from trusted global manufacturers.
              </p>
              <div className="space-y-4 mb-8">
                {['Strategic sourcing from verified global suppliers', 'Quality assurance and compliance verification', 'Pan-African logistics and distribution network', 'Technical support and consultation services'].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, i) => (
                  <div key={i} className="border-l-2 border-primary/30 pl-4">
                    <div className="text-2xl font-bold text-dark">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary inline-flex items-center group">
                Learn More About Us
                <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <Image src="/images/pexels-felix-haumann-1938529-3735930.jpg" alt="Industrial operations" fill className="object-cover" />
                <div className="absolute bottom-6 right-6 bg-white p-5 rounded-xl shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3 mb-1">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <span className="font-bold text-dark text-sm">Quality Guaranteed</span>
                  </div>
                  <p className="text-xs text-gray-500">ISO-certified supply chain</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Departments */}
      <section className="py-24 bg-[#f5f0eb] border-t border-[#76614d]/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Core Departments</h2>
            <p className="text-gray-600 text-lg">Specialized divisions dedicated to providing technical excellence and reliable supply chains across multiple sectors.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="p-4 bg-primary/5 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">{dept.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{dept.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{dept.description}</p>
                <Link href={dept.link} className="text-primary font-semibold text-sm flex items-center hover:underline group/link">
                  View Products <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/departments" className="btn-outline inline-flex items-center gap-2">View All Departments <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-[#f0f4f4] border-t border-[#4f6c6c]/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Industries</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Serving <span className="text-primary">Diverse Sectors</span></h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">From manufacturing to agriculture, government to pharmaceuticals — we deliver tailored industrial solutions that drive growth and operational efficiency.</p>
              <Link href="/industries" className="btn-outline inline-flex items-center gap-2">Explore All Industries <ArrowRight className="w-5 h-5" /></Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {industries.map((industry, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/40 hover:bg-primary/5 transition-all group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 text-primary shadow-sm group-hover:scale-110 transition-transform">{industry.icon}</div>
                  <span className="text-xs font-bold text-dark uppercase tracking-wider text-center">{industry.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#f2f0ee] border-t border-[#879080]/15">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">The Advantage</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Why Africa <span className="text-primary">Trusts Us</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck className="w-10 h-10 text-primary" />, title: "Reliability", desc: "Consistency in supply chains and delivery timelines you can depend on." },
              { icon: <Award className="w-10 h-10 text-primary" />, title: "Compliance", desc: "Rigorous adherence to international safety and regulatory standards." },
              { icon: <TrendingUp className="w-10 h-10 text-primary" />, title: "Expertise", desc: "Deep technical knowledge across chemical and industrial domains." },
              { icon: <Globe className="w-10 h-10 text-secondary" />, title: "Pan-African Reach", desc: "Seamless distribution networks across the African continent." }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#f5f0eb] border-t border-[#76614d]/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-secondary/5 rounded-3xl p-12 md:p-16 text-center border border-primary/20">
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">Partner with Mbonyange Africa</h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
              Looking for a reliable industrial procurement partner? Let&apos;s discuss how we can support your operational goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact?quote=true" className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4">Request a Quote <ArrowRight className="w-5 h-5" /></Link>
              <Link href="/contact" className="btn-outline inline-flex items-center justify-center gap-2 px-8 py-4">Contact Our Team</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

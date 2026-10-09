'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const coreValues = [
  { title: "Integrity", desc: "Ethical sourcing, honest dealings, and transparent operations.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Safety", desc: "Responsible handling and distribution of chemicals. We prioritize protecting people and the environment.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { title: "Precision", desc: "Accuracy in sourcing, documentation, and delivery. We deliver exactly what our clients need.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Innovation", desc: "Supporting progress through reliable chemical inputs. We continuously seek better ways to serve our clients.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { title: "Reliability", desc: "Consistent supply and dependable partnerships. Our clients depend on us for quality and timely delivery.", icon: "M5 13l4 4L19 7" },
];

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-20 h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        <Image src="/images/pexels-pixabay-248152.jpg" alt="Mission and Vision" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-dark/65" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Mission &amp; <span className="text-primary">Vision</span></h1>
            <p className="text-xl text-white/80">Guiding principles that drive our commitment to excellence.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#f0f4f4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Vision</span>
              </div>
              <h2 className="text-3xl font-bold text-dark mb-6">To become a trusted African leader in chemical and industrial supply</h2>
              <p className="text-gray-600 text-lg mb-6">We envision a future where African industries have seamless access to high-quality chemical products and world-class supply chain services.</p>
              <div className="bg-white rounded-xl p-6 border-l-4 border-primary shadow-sm">
                <p className="text-dark font-medium italic">&ldquo;Bridging scientific innovation with industrial growth across the continent.&rdquo;</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[400px]">
              <Image src="/images/pexels-chanaka-906494.jpg" alt="Industrial vision" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-lg font-medium">Empowering African Industries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f5f0eb]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden relative h-[400px]">
              <Image src="/images/drums-1000xx.jpg" alt="Chemical supply mission" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Mission</span>
              </div>
              <h2 className="text-3xl font-bold text-dark mb-6">Supplying high-quality chemical products with precision, safety, and reliability</h2>
              <p className="text-gray-600 text-lg mb-6">Our mission is to empower industries, laboratories, and institutions to innovate and operate efficiently.</p>
              <ul className="space-y-3">
                {["Source quality products from trusted manufacturers", "Ensure safe handling and storage practices", "Deliver on time with accurate documentation", "Provide technical support and guidance", "Maintain competitive and fair pricing"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f2f0ee]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-4">Our Core <span className="text-primary">Values</span></h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all group">
                <div className="w-16 h-16 rounded-xl bg-primary/5 group-hover:bg-primary flex items-center justify-center text-primary group-hover:text-white mb-6 transition-all">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="text-gray-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Our Commitment to Africa</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">By providing reliable access to quality chemical products, we aim to play an important role in the continent&apos;s economic development and industrial growth.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/industries" className="px-8 py-4 bg-white text-primary font-bold rounded-md hover:bg-white/90 transition-all">Industries We Serve</Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-all">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

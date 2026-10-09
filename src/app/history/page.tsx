'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const milestones = [
  { year: "2014", title: "Foundation", description: "Mbonyange Africa Limited was established in Kampala, Uganda, with a vision to bridge the gap between global chemical manufacturers and African industries." },
  { year: "2015", title: "First Major Partnerships", description: "Secured partnerships with leading international chemical manufacturers, enabling access to high-quality industrial chemicals for the Ugandan market." },
  { year: "2017", title: "Laboratory Chemicals Division", description: "Expanded product portfolio to include laboratory chemicals and reagents, serving research institutions and educational facilities." },
  { year: "2019", title: "Regional Expansion", description: "Extended distribution capabilities across East Africa, serving clients in Kenya, Tanzania, Rwanda, and beyond." },
  { year: "2021", title: "Quality Certification", description: "Achieved industry certifications for quality management and chemical handling, reinforcing our commitment to safety and excellence." },
  { year: "2023", title: "Digital Transformation", description: "Launched enhanced digital platforms for customer service, order management, and technical support." },
  { year: "2024", title: "Continued Growth", description: "Expanding product range and strengthening partnerships to better serve the growing African chemical market." },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-20 h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        <Image src="/images/pexels-ivan-s-9628801.jpg" alt="Our History" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-dark/65" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our <span className="text-primary">History</span></h1>
            <p className="text-xl text-white/80">A decade of excellence in chemical supply across Africa.</p>
          </motion.div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-24 bg-[#f0f4f4]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Journey</span>
              </div>
              <h2 className="text-3xl font-bold text-dark">From Vision to Reality</h2>
              <p className="text-gray-600 leading-relaxed">Mbonyange Africa Limited began with a simple yet ambitious vision: to ensure that African industries have access to the same quality chemical products and reliable supply chains available in developed markets.</p>
              <p className="text-gray-600 leading-relaxed">Founded by a team of professionals with extensive experience in chemical trading and industrial supply, we set out to address the challenges faced by businesses seeking reliable chemical inputs in the region.</p>
              <p className="text-gray-600 leading-relaxed">Over the years, we have grown from a small operation serving local businesses to a regional player with clients across multiple African countries.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden relative h-[400px]">
              <Image src="/images/pexels-chanaka-906494.jpg" alt="Industrial growth" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#f5f0eb]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-4">Our <span className="text-primary">Milestones</span></h2>
            <p className="text-gray-600">Key moments in our journey of growth and excellence</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary/20 h-full hidden md:block" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 inline-block max-w-md">
                      <span className="text-primary font-bold text-xl mb-2 block">{milestone.year}</span>
                      <h3 className="text-lg font-bold text-dark mb-2">{milestone.title}</h3>
                      <p className="text-sm text-gray-500">{milestone.description}</p>
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

      {/* Values Banner */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Building on Our Foundation</h2>
              <p className="text-white/80 mb-4">Throughout our history, we have remained true to the core values that guided our founding: integrity, safety, precision, innovation, and reliability.</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
              {["Integrity", "Safety", "Precision", "Innovation", "Reliability"].map((v, i) => (
                <span key={i} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white">{v}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image src="/images/drums-1000xx.jpg" alt="CTA" fill className="object-cover" />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Be Part of Our Story</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">Join the businesses across Africa who have made us their trusted partner for chemical supply needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-primary px-8 py-4">Partner With Us</Link>
            <Link href="/about" className="px-8 py-4 border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-all">Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

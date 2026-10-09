'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const newsArticles = [
  { id: 1, title: "Expanding Our Product Range for Laboratory Applications", excerpt: "We are pleased to announce the addition of new laboratory-grade chemicals and reagents to our product portfolio, meeting the growing demands of research institutions across East Africa.", date: "December 2024", category: "Company News", image: "/images/pexels-pixabay-248152.jpg" },
  { id: 2, title: "Partnership with Leading Global Manufacturers", excerpt: "Mbonyange Africa strengthens its supply chain through new strategic partnerships with internationally recognized chemical manufacturers, ensuring consistent quality and availability.", date: "November 2024", category: "Partnerships", image: "/images/pexels-chanaka-906494.jpg" },
  { id: 3, title: "Supporting Uganda's Agricultural Sector", excerpt: "Our agricultural chemicals division continues to support farmers and agribusinesses with quality fertilizers, pesticides, and soil treatment solutions for improved crop yields.", date: "October 2024", category: "Industry Focus", image: "/images/pexels-felix-haumann-1938529-3735930.jpg" },
  { id: 4, title: "Quality Assurance: Our Commitment to Excellence", excerpt: "Learn about our rigorous quality control processes that ensure every product meets international standards before reaching our valued customers.", date: "September 2024", category: "Quality", image: "/images/pexels-ivan-s-9628801.jpg" },
  { id: 5, title: "Regional Expansion: Serving More African Markets", excerpt: "Mbonyange Africa extends its distribution network to serve additional markets in East and Central Africa, bringing reliable chemical supply solutions to more industries.", date: "August 2024", category: "Expansion", image: "/images/drums-1000xx.jpg" },
  { id: 6, title: "Safety First: Best Practices in Chemical Handling", excerpt: "An overview of the safety protocols and best practices we follow in storing, handling, and transporting chemical products to protect people and the environment.", date: "July 2024", category: "Safety", image: "/images/0_0-11191-7.webp" },
];

const categories = ["All", "Company News", "Partnerships", "Industry Focus", "Quality", "Safety"];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-20 h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        <Image src="/images/pexels-ivan-s-9628801.jpg" alt="News & Updates" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-dark/65" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">News &amp; <span className="text-primary">Updates</span></h1>
            <p className="text-xl text-white/80">Stay informed about our latest developments and industry insights.</p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-[#f0f4f4] border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, i) => (
              <button key={i} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-primary text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-primary hover:text-white hover:border-primary'}`}>{cat}</button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-[#faf9f7]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, i) => (
              <motion.article key={article.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">{article.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-400 mb-2">{article.date}</p>
                  <h3 className="text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-3">{article.excerpt}</p>
                  <Link href="#" className="inline-flex items-center text-primary font-medium text-sm gap-1 hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-white/80">Subscribe to receive the latest news, product updates, and industry insights directly to your inbox.</p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input type="email" placeholder="Enter your email address" className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-dark" />
                <button type="submit" className="bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors">Subscribe</button>
              </form>
              <p className="text-white/60 text-sm mt-3">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <Image src="/images/drums-1000xx.jpg" alt="CTA" fill className="object-cover" />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have Questions?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">Contact our team to learn more about our products, services, or to discuss your specific chemical supply needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-primary px-8 py-4">Contact Us</Link>
            <Link href="/products" className="px-8 py-4 border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-all">Browse Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';
import { ArrowRight, Home, FileText, Mail } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mbonyange Africa to Talkyd Industrials | Company Transition',
  description: 'Learn about the business transition from Mbonyange Africa to Talkyd Industrials - SMC Ltd. We maintain the same commitment to industrial chemical distribution and supply.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'Mbonyange Africa to Talkyd Industrials | Company Transition',
    description: 'Learn about the business transition from Mbonyange Africa to Talkyd Industrials - SMC Ltd.',
    url: 'https://talkyd.com/company-transition',
  },
};

export default function CompanyTransitionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#edf6f6] to-[#f0f7f7]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#213a5a] mb-6 leading-tight">
              From Mbonyange Africa to <span className="text-[#3a9b9a]">Talkyd Industrials</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Our commitment to industrial chemical distribution and supply continues under the current business identity.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-12">
            {/* Transition Explanation */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-[#f0f7f7] rounded-2xl p-8 md:p-12 border border-[#3a9b9a]/20">
                <h2 className="text-2xl md:text-3xl font-bold text-[#213a5a] mb-6">Website and Business Transition</h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  <strong>Talkyd Industrials - SMC Ltd</strong> is the current business identity presented on this website following the transition from the Mbonyange Africa website and brand presence.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  This page exists to explain the website and brand transition for customers, suppliers, search engines, and business partners who may still be familiar with the name <strong>Mbonyange Africa</strong>.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  For current product inquiries, quotations, technical support, and all business communications relating to industrial chemical distribution and supply, please use the current contact details and services provided on this website.
                </p>
              </div>
            </div>

            {/* Company Information */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#3a9b9a]/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-[#3a9b9a]">→</span>
                </div>
                <h3 className="text-2xl font-bold text-[#213a5a] mb-4">Current Company Name</h3>
                <p className="text-gray-700 font-semibold mb-2">TALKYD INDUSTRIALS - SMC LTD</p>
                <p className="text-sm text-gray-600">
                  Registered and operating as the current industrial chemical distribution and supply entity.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#275e6d]/10 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-[#275e6d]" />
                </div>
                <h3 className="text-2xl font-bold text-[#213a5a] mb-4">Former Website</h3>
                <p className="text-gray-700 font-semibold mb-2">Mbonyange Africa</p>
                <p className="text-sm text-gray-600">
                  The previous website and brand identity, now succeeded by Talkyd Industrials.
                </p>
              </div>
            </div>

            {/* Services & Focus */}
            <div className="bg-gradient-to-r from-[#3a9b9a]/5 to-[#275e6d]/5 rounded-2xl p-8 md:p-12 border border-[#275e6d]/10">
              <h3 className="text-2xl font-bold text-[#213a5a] mb-8">Our Business Focus</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong>Talkyd Industrials - SMC Ltd</strong> specializes in industrial chemical distribution and supply, serving Uganda and the wider East African market. Our focus includes:
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Industrial chemicals and raw materials',
                  'Specialty chemicals and additives',
                  'Laboratory and scientific supplies',
                  'Water treatment chemicals',
                  'Polymers and plastic raw materials',
                  'Import, export, and international sourcing',
                  'Technical product support and guidance',
                  'Supply chain and logistics coordination'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#3a9b9a] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Next Steps */}
            <div className="bg-[#213a5a] text-white rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="mb-8 text-white/90 leading-relaxed">
                Whether you're a returning customer familiar with Mbonyange Africa or a new prospect, we invite you to connect with us using our current contact details and explore how Talkyd Industrials can support your industrial supply needs.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-[#3a9b9a] hover:bg-[#2d7d7c] text-white font-semibold py-4 px-6 rounded-lg transition-colors group"
                >
                  <Mail className="w-5 h-5" />
                  Contact Talkyd
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-3 border-2 border-white hover:bg-white/10 text-white font-semibold py-4 px-6 rounded-lg transition-colors group"
                >
                  <Home className="w-5 h-5" />
                  Back to Homepage
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Search Engines Notice */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-sm text-gray-600">
              <p className="font-semibold text-gray-700 mb-2">For Search Engines & AI Systems:</p>
              <p>
                This page serves as a factual record of the website and brand transition from Mbonyange Africa to Talkyd Industrials - SMC Ltd. The website has been updated to reflect Talkyd Industrials' current business identity, focus on industrial chemical distribution, and commitment to serving the Uganda and East African markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#edf6f6] border-t border-[#3a9b9a]/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#213a5a] mb-4">
              Ready to explore our products and services?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Visit our products catalogue or request a quotation for your industrial supply needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-[#3a9b9a] hover:bg-[#2d7d7c] text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact?quote=true"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#3a9b9a] text-[#3a9b9a] hover:bg-[#3a9b9a]/5 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

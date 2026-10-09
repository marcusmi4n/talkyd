'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Beaker,
  FlaskConical,
  Droplets,
  Sprout,
  HardHat,
  Truck,
  ShieldCheck,
  Search,
  ChevronRight,
  Factory,
  Atom,
  Fuel,
  Layers,
  Palette,
  Microscope,
  ToyBrick,
  Tractor,
  Car,
  ArrowRight
} from 'lucide-react';

// Product Categories - 9 Industry Groups
const productCategories = [
  {
    id: 'industrial-chemicals',
    title: 'Industrial Chemicals',
    icon: <Beaker className="w-10 h-10" />,
    description: 'High-volume supply of essential chemicals for manufacturing and processing industries across Africa.',
    color: 'from-teal-500/20 to-teal-600/10',
    subcategories: [
      'Inorganic Chemicals',
      'Organic Chemicals',
      'Solvents',
      'Chlorinated Solvents',
      'Acids & Bases'
    ],
    products: [
      { name: 'Sulfuric Acid (H₂SO₄)', description: 'Industrial grade for manufacturing and processing' },
      { name: 'Hydrochloric Acid (HCl)', description: 'High purity for industrial applications' },
      { name: 'Sodium Hydroxide (NaOH)', description: 'Caustic soda for various industrial processes' },
      { name: 'Acetone', description: 'Premium solvent for industrial use' },
      { name: 'Methanol', description: 'Industrial grade methyl alcohol' },
      { name: 'Ethanol', description: 'Denatured alcohol for industrial applications' }
    ]
  },
  {
    id: 'specialty-chemicals',
    title: 'Specialty Chemicals',
    icon: <Atom className="w-10 h-10" />,
    description: 'Performance chemicals designed for specific industrial applications and processes.',
    color: 'from-blue-500/20 to-blue-600/10',
    subcategories: [
      'Surfactants',
      'Antifoams & Dispersants',
      'Corrosion Inhibitors',
      'Biocides',
      'Additives'
    ],
    products: [
      { name: 'Nonionic Surfactants', description: 'For detergents and emulsification' },
      { name: 'Anionic Surfactants', description: 'High-foaming agents for cleaning' },
      { name: 'Silicone Antifoams', description: 'Defoamers for industrial processes' },
      { name: 'Corrosion Inhibitors', description: 'Protection for metal surfaces' },
      { name: 'Industrial Biocides', description: 'Microbial control solutions' }
    ]
  },
  {
    id: 'petroleum-energy',
    title: 'Petroleum & Energy Chemicals',
    icon: <Fuel className="w-10 h-10" />,
    description: 'Specialized chemicals for oilfield operations, refineries, and energy production.',
    color: 'from-amber-500/20 to-amber-600/10',
    subcategories: [
      'Oilfield Chemicals',
      'Refinery Process Chemicals',
      'Lubricant Additives',
      'Base Oils',
      'Fuel Additives'
    ],
    products: [
      { name: 'Drilling Fluid Additives', description: 'Bentonite, barite, and polymers' },
      { name: 'Demulsifiers', description: 'Oil-water separation chemicals' },
      { name: 'Pour Point Depressants', description: 'Flow improvement additives' },
      { name: 'Antioxidants', description: 'Lubricant stabilization' },
      { name: 'Base Oils (Group I-IV)', description: 'Lubricant base stocks' }
    ]
  },
  {
    id: 'polymers-plastics',
    title: 'Polymers & Plastics',
    icon: <Layers className="w-10 h-10" />,
    description: 'Comprehensive range of polymer resins and plastic raw materials for manufacturing.',
    color: 'from-purple-500/20 to-purple-600/10',
    subcategories: [
      'PE (LDPE, HDPE, LLDPE)',
      'PP (Polypropylene)',
      'PVC (Polyvinyl Chloride)',
      'PET (Polyethylene Terephthalate)',
      'ABS (Acrylonitrile Butadiene Styrene)',
      'EVA (Ethylene Vinyl Acetate)',
      'EPS (Expanded Polystyrene)'
    ],
    products: [
      { name: 'HDPE (High-Density Polyethylene)', description: 'Injection molding and blow molding grade' },
      { name: 'LDPE (Low-Density Polyethylene)', description: 'Film and coating applications' },
      { name: 'PP Homopolymer', description: 'General purpose polypropylene' },
      { name: 'PVC Resin (S-PVC)', description: 'Suspension grade for pipes and profiles' },
      { name: 'PET Resin', description: 'Bottle grade and fiber grade' },
      { name: 'ABS Resin', description: 'High impact strength applications' }
    ]
  },
  {
    id: 'resins-coatings',
    title: 'Resins & Coatings',
    icon: <Palette className="w-10 h-10" />,
    description: 'Premium resins and additives for paint, coating, and adhesive applications.',
    color: 'from-rose-500/20 to-rose-600/10',
    subcategories: [
      'Alkyd Resins',
      'Acrylic Resins',
      'Epoxy Resins',
      'Paint Additives',
      'Coating Additives'
    ],
    products: [
      { name: 'Alkyd Resins (Long Oil)', description: 'For architectural and industrial coatings' },
      { name: 'Acrylic Emulsions', description: 'Water-based coating solutions' },
      { name: 'Epoxy Resins (DGEBA)', description: 'High-performance protective coatings' },
      { name: 'Polyamide Curing Agents', description: 'Epoxy hardeners' },
      { name: 'Dispersion Additives', description: 'Wetting and dispersing agents' }
    ]
  },
  {
    id: 'lab-pharma',
    title: 'Lab & Pharma Chemicals',
    icon: <Microscope className="w-10 h-10" />,
    description: 'Ultra-pure reagents and pharmaceutical-grade chemicals for research and production.',
    color: 'from-cyan-500/20 to-cyan-600/10',
    subcategories: [
      'Alcohols',
      'Glycols',
      'Glycol Ethers',
      'Monomers',
      'Pharmaceutical-grade Solvents'
    ],
    products: [
      { name: 'Isopropyl Alcohol (IPA) USP', description: 'Pharmaceutical and electronics grade' },
      { name: 'Propylene Glycol USP', description: 'Multi-purpose pharma grade' },
      { name: 'Glycerin USP/EP', description: 'Vegetable-based pharmaceutical grade' },
      { name: 'Acetonitrile HPLC', description: 'High purity solvent for chromatography' },
      { name: 'Methanol HPLC', description: 'Ultra-pure analytical grade' }
    ]
  },
  {
    id: 'industrial-materials',
    title: 'Industrial Materials',
    icon: <ToyBrick className="w-10 h-10" />,
    description: 'Specialized materials for construction, rubber, and industrial applications.',
    color: 'from-orange-500/20 to-orange-600/10',
    subcategories: [
      'Cement Additives',
      'Construction Chemicals',
      'Rubber Chemicals',
      'Plasticizers',
      'Industrial Fillers'
    ],
    products: [
      { name: 'Superplasticizers', description: 'High-range water reducers for concrete' },
      { name: 'Construction Admixtures', description: 'Performance-enhancing additives' },
      { name: 'Rubber Accelerators', description: 'Vulcanization accelerators' },
      { name: 'Phthalate Plasticizers', description: 'DOP, DINP for PVC compounding' },
      { name: 'Calcium Carbonate', description: 'Precipitated and ground grades' }
    ]
  },
  {
    id: 'agricultural',
    title: 'Agricultural Inputs',
    icon: <Tractor className="w-10 h-10" />,
    description: 'Quality agricultural chemicals and inputs for modern farming operations.',
    color: 'from-green-500/20 to-green-600/10',
    subcategories: [
      'Agro Chemicals',
      'Oils & Fats',
      'Fertilizer Components',
      'Crop Protection',
      'Soil Conditioners'
    ],
    products: [
      { name: 'NPK Fertilizer Blends', description: 'Custom formulations for crops' },
      { name: 'Urea (46% N)', description: 'High nitrogen fertilizer' },
      { name: 'Herbicides', description: 'Selective and non-selective formulations' },
      { name: 'Fungicides', description: 'Protective and systemic treatments' },
      { name: 'Adjuvants', description: 'Spray additives for crop protection' }
    ]
  },
  {
    id: 'automotive',
    title: 'Automotive Chemicals',
    icon: <Car className="w-10 h-10" />,
    description: 'Specialized chemicals for automotive manufacturing, maintenance, and refinishing.',
    color: 'from-red-500/20 to-red-600/10',
    subcategories: [
      'Brake Fluids',
      'Coolants',
      'Refinishing Materials',
      'Paint Systems',
      'Lubricants'
    ],
    products: [
      { name: 'Brake Fluid DOT 3/4/5.1', description: 'Hydraulic brake fluid formulations' },
      { name: 'Engine Coolants', description: 'Ethylene and propylene glycol based' },
      { name: 'Automotive Refinish Paints', description: 'Basecoat, clearcoat systems' },
      { name: 'Polyurethane Clearcoats', description: 'High-solids automotive finishes' },
      { name: 'AdBlue (DEF)', description: 'Diesel exhaust fluid for SCR systems' }
    ]
  }
];

// Filter options
const filterOptions = [
  { value: 'all', label: 'All Categories' },
  { value: 'industrial-chemicals', label: 'Industrial Chemicals' },
  { value: 'specialty-chemicals', label: 'Specialty Chemicals' },
  { value: 'petroleum-energy', label: 'Petroleum & Energy' },
  { value: 'polymers-plastics', label: 'Polymers & Plastics' },
  { value: 'resins-coatings', label: 'Resins & Coatings' },
  { value: 'lab-pharma', label: 'Lab & Pharma' },
  { value: 'industrial-materials', label: 'Industrial Materials' },
  { value: 'agricultural', label: 'Agricultural' },
  { value: 'automotive', label: 'Automotive' }
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Filter and search products
  const filteredCategories = productCategories.filter((category) => {
    // Apply category filter
    if (selectedFilter !== 'all' && category.id !== selectedFilter) {
      return false;
    }

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        category.title.toLowerCase().includes(query) ||
        category.description.toLowerCase().includes(query) ||
        category.subcategories.some(sub => sub.toLowerCase().includes(query)) ||
        category.products.some(p => p.name.toLowerCase().includes(query))
      );
    }

    return true;
  });

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        <Image src="/images/drums-1000xx.jpg" alt="Products" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-dark/65" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Products & <span className="text-primary">Capabilities</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl">
              Mbonyange Africa provides a comprehensive range of industrial chemicals, polymers, and specialty products backed by global partnerships and rigorous quality assurance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-30 backdrop-blur-md bg-white/95">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, chemicals, materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-dark placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>

            {/* Filter Dropdown */}
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="w-full md:w-auto px-4 py-3 bg-white border border-gray-200 rounded-xl text-dark focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all cursor-pointer"
            >
              {filterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No products found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden ${expandedCategory === category.id ? 'lg:col-span-2 xl:col-span-3' : ''}`}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
                          {category.icon}
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">
                            {category.title}
                          </h2>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Subcategories Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {category.subcategories.slice(0, expandedCategory === category.id ? undefined : 5).map((sub, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-600 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                        >
                          {sub}
                        </span>
                      ))}
                      {category.subcategories.length > 5 && expandedCategory !== category.id && (
                        <span className="px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-lg text-xs text-primary font-medium">
                          +{category.subcategories.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Products Preview (when expanded) */}
                    {expandedCategory === category.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mb-6 pt-6 border-t border-border-color"
                      >
                        <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
                          Featured Products
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {category.products.map((product, i) => (
                            <div key={i} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                              <h4 className="font-semibold text-sm text-dark mb-1">{product.name}</h4>
                              <p className="text-xs text-gray-500">{product.description}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/contact?quote=true&category=${encodeURIComponent(category.title)}`}
                        className="flex-1 px-4 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-light transition-all flex items-center justify-center gap-2 group/btn"
                      >
                        Request Quote
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                      <button
                        onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                        className="px-4 py-2.5 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:border-primary hover:text-primary transition-all"
                      >
                        {expandedCategory === category.id ? 'Show Less' : 'View All'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Our Core <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Beyond product supply, we offer integrated technical and logistical services
              that add value to your procurement cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Factory className="w-12 h-12" />,
                title: 'Strategic Sourcing',
                description: 'Access to a global network of validated manufacturers, ensuring price competitiveness and consistent quality supply.'
              },
              {
                icon: <ShieldCheck className="w-12 h-12" />,
                title: 'Quality Assurance',
                description: 'Rigorous inspection and compliance protocols ensuring every shipment meets international standards and specifications.'
              },
              {
                icon: <Truck className="w-12 h-12" />,
                title: 'Logistics & Distribution',
                description: 'End-to-end supply chain management with hazardous material handling and pan-African distribution capabilities.'
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white border border-gray-100 rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all duration-300 group shadow-sm"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{capability.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a Custom Supply Solution?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Whether you need bulk industrial raw materials, specialized laboratory reagents, or a complete procurement partnership — we have the capacity and expertise to deliver.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact?quote=true" className="px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95">Request a Quote</Link>
            <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all hover:scale-105 active:scale-95">Speak to a Specialist</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

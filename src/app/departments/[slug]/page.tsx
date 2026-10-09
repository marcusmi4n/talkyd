'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowLeft, 
  Download, 
  Mail, 
  MessageSquare,
  Package,
  ShieldCheck,
  TrendingUp,
  Globe,
  Factory,
  FlaskConical,
  Sprout,
  Droplets,
  HardHat,
  ShoppingBag,
  Truck,
  Handshake
} from 'lucide-react';
import Link from 'next/link';
import ThreeBackground from '@/components/ui/ThreeBackground';

const departmentData: Record<string, any> = {
  "industrial": {
    title: "Industrial & Chemical Supply",
    icon: <Factory className="w-12 h-12" />,
    longDescription: "Mbonyange Africa's Industrial & Chemical division is a market leader in the strategic distribution of high-performance chemicals and raw materials. We serve the core of African manufacturing, from heavy industry to specialized processing plants. Our commitment to quality ensures that every chemical supplied meets rigorous international purity and safety standards.",
    capabilities: [
      "Strategic bulk sourcing from global Tier-1 manufacturers",
      "Hazardous material storage and compliant distribution",
      "Technical application support for manufacturing processes",
      "Custom chemical blending and formulation services",
      "Just-in-time inventory management for industrial clients"
    ],
    products: [
      {
        category: "Bulk Industrial Chemicals",
        items: ["Sulfuric Acid", "Caustic Soda (Lye)", "Hydrochloric Acid", "Nitric Acid", "Sodium Hypochlorite"]
      },
      {
        category: "Solvents & Reagents",
        items: ["Acetone", "Ethanol (Industrial)", "Methanol", "Isopropyl Alcohol", "Toluene", "Xylene"]
      },
      {
        category: "Processing Additives",
        items: ["Catalysts", "Inhibitors", "Surfactants", "Emulsifiers", "PH Regulators"]
      }
    ]
  },
  "laboratory": {
    title: "Laboratory & Scientific Supplies",
    icon: <FlaskConical className="w-12 h-12" />,
    longDescription: "Our Laboratory & Scientific division is dedicated to empowering African research, healthcare diagnostics, and industrial quality control. We provide a full-spectrum supply chain for modern laboratories, combining high-precision instruments with ultra-pure reagents and specialized furniture.",
    capabilities: [
      "Turnkey laboratory setup and commissioning",
      "Calibration and maintenance services for precision instruments",
      "Cold-chain logistics for sensitive biological reagents",
      "Technical training for laboratory personnel",
      "Strategic partnership with global scientific brands"
    ],
    products: [
      {
        category: "Analytical Reagents",
        items: ["HPLC Grade Solvents", "Standard Reference Materials", "Buffer Solutions", "Titration Reagents"]
      },
      {
        category: "Scientific Instruments",
        items: ["Spectrophotometers", "Analytical Balances", "Centrifuges", "Incubators", "Microscopes"]
      },
      {
        category: "Lab Infrastructure",
        items: ["Fume Hoods", "Chemical Resistant Benches", "Specialized Glassware", "PPE & Safety Cabinets"]
      }
    ]
  },
  "agriculture": {
    title: "Agricultural Inputs",
    icon: <Sprout className="w-12 h-12" />,
    longDescription: "As a major player in African agricultural development, we provide the essential inputs required to drive productivity and food security. Our procurement network bridges the gap between innovative agricultural technology and the African farmer, ensuring access to high-quality fertilizers, seeds, and protection solutions.",
    capabilities: [
      "Bulk fertilizer distribution networks",
      "Seed treatment and preservation expertise",
      "Integrated pest management (IPM) consultancy",
      "Irrigation project procurement and supply",
      "Soil analysis and tailored input strategies"
    ],
    products: [
      {
        category: "Soil Nutrition",
        items: ["NPK Fertilizers", "Urea", "DAP/MAP", "Micro-nutrients", "Organic Soil Conditioners"]
      },
      {
        category: "Crop Protection",
        items: ["Herbicides", "Fungicides", "Insecticides", "Biological Controls"]
      },
      {
        category: "Agri-Tech",
        items: ["High-Yield Hybrid Seeds", "Drip Irrigation Components", "Moisture Sensors"]
      }
    ]
  },
  "water": {
    title: "Water & Environmental Solutions",
    icon: <Droplets className="w-12 h-12" />,
    longDescription: "We provide comprehensive solutions for water treatment and environmental protection. Our Water division works with municipal authorities and industrial clients to ensure clean water access and compliant wastewater management through advanced chemistry and monitoring technology.",
    capabilities: [
      "Large-scale municipal water treatment supply",
      "Industrial wastewater management strategies",
      "Environmental impact monitoring and reporting",
      "Technical support for filtration system optimization",
      "Emergency water purification solutions"
    ],
    products: [
      {
        category: "Treatment Chemicals",
        items: ["Coagulants & Flocculants", "Chlorine Gas & Granules", "Activated Carbon", "Antiscalants", "Resins"]
      },
      {
        category: "Monitoring Systems",
        items: ["Water Quality Sensors", "Flow Meters", "Bacterial Testing Kits", "Environmental Samplers"]
      },
      {
        category: "Infrastructure",
        items: ["Reverse Osmosis Membranes", "Ultrafiltration Modules", "Dosing Pumps"]
      }
    ]
  },
  "construction": {
    title: "Construction & Industrial Materials",
    icon: <HardHat className="w-12 h-12" />,
    longDescription: "Sourcing and distributing the specialized materials that build the foundation of African infrastructure. We focus on high-performance industrial materials that enhance durability and safety in large-scale engineering projects.",
    capabilities: [
      "Technical material sourcing for infrastructure",
      "Specialized material testing and verification",
      "On-site delivery for remote construction projects",
      "Consultancy on structural chemical applications",
      "Regulatory compliance for building materials"
    ],
    products: [
      {
        category: "Industrial Materials",
        items: ["Structural Steel Admixtures", "Epoxy Flooring Systems", "Waterproofing Membranes", "Industrial Sealants"]
      },
      {
        category: "Safety & Site Equipment",
        items: ["Traffic Management Systems", "Site Safety Signage", "Protective Infrastructure Barriers"]
      },
      {
        category: "Technical Coatings",
        items: ["Anti-corrosive Paints", "Fire-retardant Coatings", "Thermal Insulation Materials"]
      }
    ]
  },
  "procurement": {
    title: "General Trading & Procurement",
    icon: <ShoppingBag className="w-12 h-12" />,
    longDescription: "Our Procurement division acts as the strategic intelligence center for Mbonyange Africa. We handle complex, multi-sector sourcing requests for NGOs, government bodies, and private enterprises, providing a single point of responsibility for global supply chains.",
    capabilities: [
      "Global strategic vendor management",
      "Tender and contract procurement expertise",
      "Risk mitigation in cross-border supply chains",
      "Consolidated shipping and bulk procurement",
      "Verified quality inspection at source"
    ],
    products: [
      {
        category: "Institutional Supplies",
        items: ["Office Infrastructure", "Educational Materials", "Healthcare Furniture"]
      },
      {
        category: "General Commodities",
        items: ["Textiles", "Hard Goods", "Industrial Consumables"]
      }
    ]
  },
  "logistics": {
    title: "Logistics & Distribution",
    icon: <Truck className="w-12 h-12" />,
    longDescription: "Logistics is the heartbeat of Mbonyange Africa. We operate a sophisticated distribution network capable of navigating the complex terrain and regulatory landscape of the African continent, ensuring that industrial supplies are delivered with precision and integrity.",
    capabilities: [
      "Cross-border customs and documentation handling",
      "Secure hazardous material (HAZMAT) transport",
      "End-to-end supply chain visibility (Tracking)",
      "Strategic warehousing and regional hubs",
      "Last-mile delivery to remote industrial sites"
    ],
    products: [
      {
        category: "Service Offerings",
        items: ["Freight Forwarding", "Bonded Warehousing", "Inventory Management Systems", "Fleet Leasing"]
      }
    ]
  },
  "partnerships": {
    title: "Strategic Partnerships & Ventures",
    icon: <Handshake className="w-12 h-12" />,
    longDescription: "We believe in growth through collaboration. Our Partnerships division manages joint ventures and representation agreements with global manufacturers looking to penetrate and scale within the African market through a credible and technically capable local partner.",
    capabilities: [
      "Market entry and expansion strategies",
      "Local regulatory and business environment advisory",
      "Joint venture structuring and management",
      "Direct brand representation and distributorship",
      "African market intelligence and reporting"
    ],
    products: [
      {
        category: "Core Services",
        items: ["Brand Representation", "Regional Distributorship", "Strategic Market Analysis", "JV Management"]
      }
    ]
  },
  "compliance": {
    title: "Compliance & Quality Assurance",
    icon: <ShieldCheck className="w-12 h-12" />,
    longDescription: "Integrity and Safety are our foundations. The Compliance division operates across all other departments to ensure that every product, process, and partnership adheres to the highest international standards, protecting our clients and the environment.",
    capabilities: [
      "Rigorous supplier audit and verification",
      "Environmental impact assessment and mitigation",
      "Health, Safety, and Environment (HSE) training",
      "Regulatory alignment (ISO, REACH, UN GHS)",
      "Technical document verification (COA, MSDS)"
    ],
    products: [
      {
        category: "Compliance Services",
        items: ["Safety Audits", "Quality Testing", "Regulatory Filings", "Environmental Reporting"]
      }
    ]
  }
};

export default function DepartmentDetailPage() {
  const { slug } = useParams();
  const data = departmentData[slug as string];

  if (!data) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Department Hero */}
      <section className="relative h-[60vh] flex items-center bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <ThreeBackground />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link 
            href="/departments" 
            className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-widest mb-8 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Departments
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-primary/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary mb-6 border border-primary/30">
              {data.icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Leading the way in professional distribution and technical excellence for the {data.title} sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column: Description & Capabilities */}
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-6">Overview</h2>
                <p className="text-xl text-dark leading-relaxed font-medium">
                  {data.longDescription}
                </p>
              </div>

              <div>
                <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-8">Technical Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.capabilities.map((cap: string, index: number) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                      <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Grid */}
              <div>
                <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-8">Product Categories</h2>
                <div className="space-y-8">
                  {data.products.map((cat: any, index: number) => (
                    <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden">
                      <div className="bg-gray-50 px-8 py-4 border-b border-gray-100 flex items-center justify-between">
                        <h3 className="font-bold text-dark flex items-center">
                          <Package className="w-5 h-5 mr-3 text-primary" />
                          {cat.category}
                        </h3>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{cat.items.length} Items</span>
                      </div>
                      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {cat.items.map((item: string, i: number) => (
                          <div key={i} className="flex items-center space-x-3 text-sm text-gray-600 hover:text-primary transition-colors cursor-default">
                             <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                             <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              <div className="p-8 bg-dark rounded-3xl text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Need a Quote?</h3>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                    Contact our {data.title} specialists for technical datasheets, pricing, and distribution timelines.
                  </p>
                  <div className="space-y-4">
                    <button className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center space-x-2 hover:scale-105 transition-transform">
                      <MessageSquare className="w-5 h-5" />
                      <span>Request Quotation</span>
                    </button>
                    <button className="w-full py-4 bg-white/10 text-white font-bold rounded-xl flex items-center justify-center space-x-2 hover:bg-white/20 transition-all">
                      <Download className="w-5 h-5" />
                      <span>Download Catalogue</span>
                    </button>
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-5">
                   {data.icon}
                </div>
              </div>

              <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm">
                 <h3 className="font-bold text-dark mb-6 flex items-center">
                    <ShieldCheck className="w-5 h-5 mr-2 text-secondary" />
                    Compliance & Standards
                 </h3>
                 <ul className="space-y-4">
                    <li className="flex items-center text-sm text-gray-500">
                       <CheckCircle2 className="w-4 h-4 mr-2 text-secondary" /> ISO 9001:2015 Certified
                    </li>
                    <li className="flex items-center text-sm text-gray-500">
                       <CheckCircle2 className="w-4 h-4 mr-2 text-secondary" /> UN GHS Compliant
                    </li>
                    <li className="flex items-center text-sm text-gray-500">
                       <CheckCircle2 className="w-4 h-4 mr-2 text-secondary" /> Full Traceability
                    </li>
                 </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-primary/5 rounded-2xl text-center">
                    <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                    <span className="block text-xl font-bold text-dark">15+</span>
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Global Partners</span>
                 </div>
                 <div className="p-4 bg-secondary/5 rounded-2xl text-center">
                    <Globe className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <span className="block text-xl font-bold text-dark">20+</span>
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">African Markets</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Sell */}
      <section className="py-24 bg-gray-50">
         <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
               <h2 className="text-2xl md:text-3xl font-bold text-dark">Explore Other Divisions</h2>
               <Link href="/departments" className="btn-outline">
                  All Departments
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}

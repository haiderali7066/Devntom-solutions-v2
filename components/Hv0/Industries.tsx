"use client";

import { motion } from "framer-motion";
import { ShoppingCart, HeartPulse, GraduationCap, Banknote, Building2, Utensils, Truck, Hotel } from "lucide-react";

const industries = [
  { icon: ShoppingCart, name: "E-Commerce & Retail", desc: "Online stores, marketplaces, and product catalogues that convert." },
  { icon: HeartPulse, name: "Healthcare", desc: "Clinic management, patient portals, and telemedicine platforms." },
  { icon: GraduationCap, name: "Education & EdTech", desc: "LMS platforms, course apps, and e-learning tools for modern learners." },
  { icon: Banknote, name: "FinTech", desc: "Payment gateways, financial dashboards, and secure banking apps." },
  { icon: Building2, name: "Real Estate", desc: "Property listing sites, CRMs, and virtual tour integrations." },
  { icon: Utensils, name: "Food & Hospitality", desc: "Restaurant systems, delivery apps, and table booking platforms." },
  { icon: Truck, name: "Logistics & Supply Chain", desc: "Fleet management, tracking dashboards, and order systems." },
  { icon: Hotel, name: "Travel & Tourism", desc: "Booking engines, itinerary apps, and travel management solutions." },
];

export default function Industries() {
  return (
    <section className="py-24 px-6 bg-[#f7f6f4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            <span className="text-xs font-bold text-gray-600 tracking-wide">Industries We Serve</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-gray-900 tracking-tight"
          >
            We Build For Every{" "}
            <span className="text-violet-600">Sector</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-violet-200 hover:shadow-lg transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center mb-4 group-hover:bg-violet-600 transition-colors">
                <ind.icon size={20} className="text-violet-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{ind.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

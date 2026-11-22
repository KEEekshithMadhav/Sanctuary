"use client";

import { motion } from "framer-motion";
import {
  LayoutGrid,
  Road,
  Trees,
  Leaf,
  Lamp,
  Droplets,
  Zap,
  Building2,
  Shield,
} from "lucide-react";
import { HIGHLIGHTS } from "@/lib/project-data";

const ICONS: Record<string, React.ReactNode> = {
  layout: <LayoutGrid size={28} />,
  road: <Road size={28} />,
  tree: <Trees size={28} />,
  leaf: <Leaf size={28} />,
  lamp: <Lamp size={28} />,
  droplets: <Droplets size={28} />,
  zap: <Zap size={28} />,
  building2: <Building2 size={28} />,
  shield: <Shield size={28} />,
};

export default function Highlights() {
  return (
    <section id="highlights" className="py-24 md:py-32 bg-sanctuary-beige">
      <div className="container-sanctuary">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">PROJECT HIGHLIGHTS</span>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="section-title max-w-3xl mx-auto">
            Planned with Purpose.{" "}
            <span className="italic text-sanctuary-gold">Designed for Tomorrow.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-sanctuary-cream p-8 group hover:shadow-xl transition-all duration-500 border border-transparent hover:border-sanctuary-gold relative"
            >
              {/* Status badge */}
              <span
                className={`absolute top-4 right-4 font-manrope text-xs tracking-widest uppercase px-2 py-0.5 ${
                  h.status === "confirmed"
                    ? "bg-sanctuary-green text-sanctuary-gold"
                    : "bg-sanctuary-beige text-sanctuary-charcoal-light"
                }`}
              >
                {h.status === "confirmed" ? "CONFIRMED" : "PLANNED"}
              </span>

              <div className="text-sanctuary-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                {ICONS[h.icon]}
              </div>
              <h3 className="font-cormorant text-2xl text-sanctuary-green mb-3">{h.title}</h3>
              <p className="font-manrope text-sanctuary-charcoal-light text-sm leading-relaxed">
                {h.description}
              </p>
              {h.note && (
                <p className="font-manrope text-xs text-sanctuary-gold opacity-70 italic mt-3">
                  {h.note}
                </p>
              )}
              <div className="mt-5 h-0.5 w-0 group-hover:w-12 bg-sanctuary-gold transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center font-manrope text-xs text-sanctuary-charcoal-light opacity-60 italic max-w-3xl mx-auto"
        >
          Planned and proposed features are subject to confirmation. Completed and confirmed facilities will be clearly distinguished in project updates.
        </motion.p>
      </div>
    </section>
  );
}

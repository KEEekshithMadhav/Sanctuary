"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Sparkles } from "lucide-react";
import { CLUBHOUSE_FLOORS, CLUBHOUSE_OUTDOOR } from "@/lib/project-data";

export default function Clubhouse() {
  return (
    <section id="clubhouse" className="py-24 md:py-32 bg-sanctuary-green overflow-hidden text-sanctuary-cream">
      <div className="container-sanctuary">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">LIFESTYLE & RECREATION</span>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="section-title-light max-w-3xl mx-auto">
            The Sanctuary{" "}
            <span className="italic text-sanctuary-gold">Clubhouse Experience</span>
          </h2>
          <p className="section-body-light max-w-3xl mx-auto mt-6 opacity-85">
            Designed to serve as the social epicenter of the Sanctuary community, the proposed multi-level Clubhouse combines modern wellness, indoor recreation, banquet spaces, guest accommodation, and outdoor leisure.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 bg-sanctuary-green-dark border border-sanctuary-gold/40 text-sanctuary-gold text-xs font-manrope">
            <Sparkles size={14} />
            <span>Architectural Reference: Julkal Clubhouse Plans R1 (dated 24.10.2025)</span>
          </div>
        </motion.div>

        {/* Featured Clubhouse Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full h-96 md:h-[540px] mb-16 overflow-hidden border border-sanctuary-gold/40 shadow-2xl"
        >
          <Image
            src="/images/imgi_102_009.jpg"
            alt="SouthPride Sanctuary Planned Clubhouse Elevation and Landscaped Plaza"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sanctuary-green-dark/90 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="font-manrope text-xs tracking-widest uppercase bg-sanctuary-gold text-sanctuary-green font-semibold px-3 py-1 inline-block mb-2">
                Proposed Architectural Concept
              </span>
              <h3 className="font-cormorant text-2xl md:text-4xl text-white">
                Multi-Level Community Clubhouse & Leisure Hub
              </h3>
            </div>
            <a
              href="/documents/Julkal_Clubhouse_Plans_R1_24.10.2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white text-xs py-3 px-5 whitespace-nowrap"
            >
              <Download size={14} />
              VIEW ARCHITECTURAL PLANS
            </a>
          </div>
        </motion.div>

        {/* Floor-by-Floor Program */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {CLUBHOUSE_FLOORS.map((floor, i) => (
            <motion.div
              key={floor.floor}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="border border-sanctuary-gold/30 bg-sanctuary-green-dark/60 backdrop-blur-xs p-8 hover:border-sanctuary-gold transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-manrope text-xs tracking-widest text-sanctuary-gold uppercase font-semibold block mb-2">
                  LEVEL 0{i}
                </span>
                <h3 className="font-cormorant text-3xl text-sanctuary-cream mb-6 border-b border-sanctuary-gold/20 pb-4">
                  {floor.floor}
                </h3>
                <ul className="flex flex-col gap-3.5">
                  {floor.spaces.map((space) => (
                    <li key={space} className="flex items-start gap-3">
                      <span className="text-sanctuary-gold text-xs mt-1">✦</span>
                      <span className="font-manrope text-sanctuary-beige text-sm opacity-90">
                        {space}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-sanctuary-gold/15 text-xs text-sanctuary-gold/70 font-manrope">
                Subject to confirmed final scope
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outdoor Amenities & Pool Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-t border-sanctuary-gold/30 pt-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div>
              <span className="section-label block mb-2">OUTDOOR & RECREATIONAL SPACES</span>
              <h3 className="font-cormorant text-3xl text-sanctuary-gold">
                Poolside Deck, Plazas & Children&apos;s Play Zones
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {CLUBHOUSE_OUTDOOR.map((space) => (
                <span
                  key={space}
                  className="font-manrope text-xs text-sanctuary-cream bg-sanctuary-green-dark px-3 py-1.5 border border-sanctuary-gold/30"
                >
                  {space}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                src: "/images/imgi_117_012.jpg",
                title: "Swimming Pool & Sun Deck",
                desc: "Resort-style outdoor pool with lounge seating & changing areas",
              },
              {
                src: "/images/imgi_122_013.jpg",
                title: "Central Landscaped Plaza",
                desc: "Outdoor amphitheater, sitting steps & tranquil tree groves",
              },
              {
                src: "/images/imgi_127_014.jpg",
                title: "Children&apos;s Activity Lawn",
                desc: "Dedicated play turf, sand play zones & family picnic lawns",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative group overflow-hidden border border-sanctuary-gold/30 bg-sanctuary-green-dark"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-sanctuary-green/30 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-6">
                  <h4 className="font-cormorant text-2xl text-sanctuary-cream mb-1">
                    {item.title}
                  </h4>
                  <p className="font-manrope text-xs text-sanctuary-beige opacity-80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

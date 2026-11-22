"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function ProjectIntro() {
  return (
    <section id="overview" className="py-24 md:py-32 bg-sanctuary-cream">
      <div className="container-sanctuary">
        {/* Top Label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="section-label mb-4">THE DEVELOPMENT</span>
          <div className="gold-divider mb-6" />
          <h2 className="section-title max-w-3xl">
            More Than a Plot.{" "}
            <span className="italic text-sanctuary-gold">A Place to Belong.</span>
          </h2>
        </motion.div>

        {/* Two-column layout with authentic Entrance Archway Render */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="relative">
              <div className="relative w-full h-[440px] md:h-[540px] overflow-hidden shadow-2xl border border-sanctuary-gold/30">
                <Image
                  src="/images/imgi_23_Sanctuary_by_southpride.jpg"
                  alt="SouthPride Sanctuary Grand Entrance Archway and Security Plaza"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-sanctuary-green-dark/80 backdrop-blur-md px-3 py-1.5 border border-sanctuary-gold/40">
                  <span className="font-manrope text-sanctuary-cream text-xs tracking-widest uppercase">
                    Architectural Render · Grand Entrance
                  </span>
                </div>
              </div>
              {/* Gold border accent */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 border-2 border-sanctuary-gold/40 pointer-events-none -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-sanctuary-gold/30 pointer-events-none -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ ...fadeUp, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } } }}
            className="flex flex-col gap-6"
          >
            <span className="section-label">JULKAL · SHANKARPALLY</span>
            <h3 className="font-cormorant text-3xl md:text-4xl text-sanctuary-green font-light leading-tight">
              A Thoughtfully Planned Residential Destination in West Hyderabad
            </h3>
            <div className="gold-divider" />
            <p className="section-body">
              <strong>SouthPride Sanctuary</strong> is a premier residential plotted development extending across approximately 45 acres in the serene setting of Julkal, Shankarpally. Comprising 475 meticulously planned plots ranging from 200 to 700 square yards, Sanctuary provides an exceptional canvas to construct your custom villa surrounded by fresh air, lush avenue plantations, and curated community amenities.
            </p>
            <p className="section-body">
              Located on West Hyderabad's high-momentum growth axis, this gated plotted development pairs suburban tranquility with seamless arterial connectivity to the Financial District, Gachibowli, Neopolis, and IIT Hyderabad.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {[
                "475 Residential Plots · 200–700 Sq. Yds",
                "Approx. 45 Acres Planned Master Layout",
                "Wide Planned Internal Road Network",
                "Proposed Lifestyle Clubhouse & Pool",
                "TG RERA Registered · P01100010026",
                "HMDA Draft Layout Ref: 010327/LO",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-sanctuary-gold flex-shrink-0" />
                  <span className="font-manrope text-sanctuary-charcoal text-xs md:text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById("masterplan");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary"
              >
                EXPLORE MASTER PLAN
                <ArrowRight size={16} />
              </button>
              <a
                href="/documents/Sanctuary-E-Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                DOWNLOAD E-BROCHURE
              </a>
            </div>
          </motion.div>
        </div>

        {/* Authentic Project Imagery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              src: "/images/imgi_141_Sanctuary_by_southpride-1536x1188.jpg",
              alt: "Aerial layout perspective and green open spaces",
              caption: "45-Acre Master Layout",
              sub: "Curated plotted zones with central park",
            },
            {
              src: "/images/imgi_87_006.jpg",
              alt: "Planned blacktop internal road networks and streetlights",
              caption: "Planned Internal Roads",
              sub: "Avenue trees & underground infrastructure",
            },
            {
              src: "/images/imgi_132_015.jpg",
              alt: "Nature-oriented streetscape and residential boundary",
              caption: "Elevated Living Experience",
              sub: "Spacious plots from 200 to 700 Sq. Yds",
            },
          ].map((img, i) => (
            <motion.div
              key={img.caption}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative group overflow-hidden border border-sanctuary-gold/30 bg-white"
            >
              <div className="relative w-full h-72 overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-sanctuary-green/20 group-hover:bg-sanctuary-green/10 transition-colors" />
              </div>
              <div className="p-5">
                <span className="font-cormorant text-2xl text-sanctuary-green block font-medium">
                  {img.caption}
                </span>
                <span className="font-manrope text-xs text-sanctuary-charcoal-light mt-1 block">
                  {img.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

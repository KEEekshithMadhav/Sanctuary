"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingUp, ArrowRight } from "lucide-react";
import { INVESTMENT_POINTS } from "@/lib/project-data";

export default function Investment() {
  return (
    <section id="investment" className="py-24 md:py-32 bg-sanctuary-green overflow-hidden">
      <div className="container-sanctuary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="section-label block">THE SHANKARPALLY OPPORTUNITY</span>
            <div className="gold-divider" />
            <h2 className="section-title-light">
              An Address Positioned{" "}
              <span className="italic text-sanctuary-gold">for Tomorrow.</span>
            </h2>
            <p className="section-body-light opacity-80">
              Shankarpally sits in one of Hyderabad's most watched residential growth corridors. As western Hyderabad continues to expand, locations like Julkal — combining open space, connectivity, and planned infrastructure — present a compelling long-term proposition for discerning home buyers and land investors.
            </p>

            <div className="flex flex-col gap-5 mt-4">
              {INVESTMENT_POINTS.map((point, i) => (
                <motion.div
                  key={point.heading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 w-6 h-6 flex-shrink-0 bg-sanctuary-gold bg-opacity-20 flex items-center justify-center">
                    <TrendingUp size={14} className="text-sanctuary-gold" />
                  </div>
                  <div>
                    <h4 className="font-cormorant text-xl text-sanctuary-gold mb-1">{point.heading}</h4>
                    <p className="font-manrope text-sanctuary-beige text-sm opacity-80 leading-relaxed">
                      {point.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-4 border border-sanctuary-gold border-opacity-30 mt-4">
              <p className="font-manrope text-sanctuary-beige text-xs opacity-60 italic leading-relaxed">
                <strong className="text-sanctuary-gold opacity-80">Important:</strong> This section discusses location characteristics and growth potential for informational purposes only. It does not constitute investment advice or guarantee any appreciation in land value. Past trends are not indicative of future returns.
              </p>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary self-start mt-2"
            >
              LEARN MORE ABOUT THE PROJECT
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Right: Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative w-full h-72 overflow-hidden col-span-2">
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                alt="Shankarpally growth corridor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-sanctuary-green opacity-20" />
              <div className="absolute bottom-4 left-4 font-manrope text-sanctuary-cream text-xs tracking-widest uppercase bg-sanctuary-green bg-opacity-70 px-3 py-1">
                WESTERN HYDERABAD GROWTH CORRIDOR
              </div>
            </div>
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&q=80"
                alt="Educational institutions nearby"
                fill
                className="object-cover"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-sanctuary-green opacity-20" />
            </div>
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80"
                alt="Planned residential development"
                fill
                className="object-cover"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-sanctuary-green opacity-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PLOT_SIZES = [
  "200 Sq. Yards",
  "300 Sq. Yards",
  "400 Sq. Yards",
  "500 Sq. Yards",
  "700 Sq. Yards",
];

export default function FeaturedPlots() {
  const handleEnquire = (size: string) => {
    const el = document.getElementById("enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="plot-options" className="py-24 md:py-32 bg-[#EFEEE5]">
      <div className="container-sanctuary">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-3 block">CURATED PLOT CONFIGURATIONS</span>
          <div className="w-12 h-0.5 bg-[#B28A42] mx-auto mb-6" />
          <h2 className="section-title max-w-3xl mx-auto">
            Featured <span className="italic text-[#B28A42]">Plot Options</span>
          </h2>
          <p className="section-body max-w-2xl mx-auto mt-4">
            SouthPride Sanctuary offers residential plot configurations tailored to your architectural vision. Connect with our advisory desk for current availability and official pricing.
          </p>
        </motion.div>

        {/* Clean, Elegant, Text-Only Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
          {PLOT_SIZES.map((size, i) => (
            <motion.div
              key={size}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-[#A8B19A]/30 shadow-xs hover:shadow-xl hover:border-[#123D2C] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group text-center"
            >
              <div>
                {/* Small Champagne-Gold Label */}
                <span className="font-manrope text-[11px] font-bold uppercase tracking-[0.25em] text-[#B28A42] block mb-3">
                  Residential Plot
                </span>

                <div className="w-8 h-0.5 bg-[#B28A42]/40 mx-auto mb-6" />

                {/* Forest-Green Heading */}
                <h3 className="font-cormorant text-3xl lg:text-4xl text-[#123D2C] font-semibold mb-6 leading-tight">
                  {size}
                </h3>
              </div>

              {/* Enquire Now Button */}
              <div className="pt-6 border-t border-[#EFEEE5]">
                <button
                  onClick={() => handleEnquire(size)}
                  className="btn-primary w-full py-3.5 rounded-full text-xs flex items-center justify-center gap-2 group-hover:bg-[#0C3325] transition-colors"
                >
                  <span>ENQUIRE NOW</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Search, MapPin, Sparkles, CheckCircle } from "lucide-react";
import { PROJECT } from "@/lib/project-data";
import { PLOT_SIZES, BUDGET_RANGES, ENQUIRY_TYPES } from "@/lib/contact-data";

export default function Hero() {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedType, setSelectedType] = useState("Price Enquiry");

  const handleEnquireClick = () => {
    const el = document.getElementById("enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#EFEEE5] overflow-hidden">
      {/* Subtle organic botanical backdrop ambient curves */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#A8B19A]/20 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#B28A42]/10 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" />

      <div className="container-sanctuary relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Narrative & Primary Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Pill Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#A8B19A]/40 text-[#123D2C] text-xs font-manrope font-semibold mb-6 shadow-xs">
              <MapPin size={13} className="text-[#B28A42]" />
              <span>Julkal, Shankarpally · West Hyderabad</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B28A42]" />
              <span className="text-[#B28A42]">RERA Registered</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-cormorant text-5xl sm:text-6xl xl:text-7xl text-[#123D2C] font-normal leading-[1.1] tracking-tight mb-6">
              Discover a Place Where Life Finds Its{" "}
              <span className="italic font-light text-[#B28A42]">Space.</span>
            </h1>

            {/* Supporting Text */}
            <p className="font-manrope text-[#4A514B] text-base md:text-lg leading-relaxed mb-8 max-w-xl font-light">
              Experience thoughtfully planned premium residential plots at{" "}
              <strong className="text-[#123D2C] font-medium">SouthPride Sanctuary, Shankarpally</strong>.
              A tranquil ~45-acre master development designed for nature-oriented living and long-term land ownership.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => handleScrollTo("overview")}
                className="btn-primary"
              >
                EXPLORE SANCTUARY
                <ArrowUpRight size={15} />
              </button>
              <button
                onClick={() => handleScrollTo("enquiry")}
                className="btn-outline-forest"
              >
                <Calendar size={15} />
                BOOK A SITE VISIT
              </button>
            </div>

            {/* Micro Trust Stats */}
            <div className="flex items-center gap-6 pt-6 border-t border-[#A8B19A]/30 w-full">
              <div>
                <span className="font-cormorant text-2xl md:text-3xl font-medium text-[#123D2C] block">
                  ~45 Acres
                </span>
                <span className="font-manrope text-xs text-[#4A514B] uppercase tracking-wider">
                  Planned Layout
                </span>
              </div>
              <div className="h-8 w-px bg-[#A8B19A]/40" />
              <div>
                <span className="font-cormorant text-2xl md:text-3xl font-medium text-[#123D2C] block">
                  475 Plots
                </span>
                <span className="font-manrope text-xs text-[#4A514B] uppercase tracking-wider">
                  200–700 Sq. Yds
                </span>
              </div>
              <div className="h-8 w-px bg-[#A8B19A]/40" />
              <div>
                <span className="font-cormorant text-2xl md:text-3xl font-medium text-[#123D2C] block">
                  P01100010026
                </span>
                <span className="font-manrope text-xs text-[#4A514B] uppercase tracking-wider">
                  TG RERA Certified
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual with Organic Curved Framing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-[540px]">
              {/* Organic curved shadow card */}
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/amenities/plotted-aerial-layout.jpg"
                  alt="SouthPride Sanctuary Shankarpally – Aerial master planned layout with avenues and lush plots"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 540px"
                />
                
                {/* Floating pill over image */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white shadow-lg flex items-center justify-between">
                  <div>
                    <span className="font-manrope text-[11px] font-semibold text-[#B28A42] uppercase tracking-widest block">
                      RESIDENTIAL PLOTTED COMMUNITY
                    </span>
                    <h3 className="font-cormorant text-xl text-[#123D2C] font-semibold">
                      SouthPride Sanctuary · Julkal
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#123D2C] text-[#F8F7F1] text-xs font-manrope font-medium">
                    <Sparkles size={12} className="text-[#B28A42]" />
                    <span>HMDA Ref Available</span>
                  </div>
                </div>
              </div>

              {/* Decorative Nature Element Badge */}
              <div className="absolute -top-5 -left-5 bg-[#A8B19A] text-white p-4 rounded-3xl shadow-lg border-2 border-white hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#123D2C] flex items-center justify-center text-[#B28A42]">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <span className="font-cormorant text-lg font-bold text-[#123D2C] block leading-none">
                    100% Clear Title
                  </span>
                  <span className="font-manrope text-[11px] text-[#252A26] opacity-80">
                    TG RERA Registered
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Rounded Quick Enquiry Tool Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-xl border border-[#EFEEE5] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {/* Preferred Plot Size */}
            <div className="px-4 py-2 border-b sm:border-b-0 sm:border-r border-[#EFEEE5]">
              <label className="font-manrope text-[10px] font-bold text-[#B28A42] uppercase tracking-widest block mb-1">
                PREFERRED PLOT SIZE
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full bg-transparent font-manrope text-sm text-[#252A26] font-medium focus:outline-none cursor-pointer"
              >
                <option value="">Any Size (200–700 Sq. Yds)</option>
                {PLOT_SIZES.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget Range */}
            <div className="px-4 py-2 border-b sm:border-b-0 lg:border-r border-[#EFEEE5]">
              <label className="font-manrope text-[10px] font-bold text-[#B28A42] uppercase tracking-widest block mb-1">
                BUDGET RANGE
              </label>
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full bg-transparent font-manrope text-sm text-[#252A26] font-medium focus:outline-none cursor-pointer"
              >
                <option value="">Any Budget</option>
                {BUDGET_RANGES.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>

            {/* Enquiry Type */}
            <div className="px-4 py-2 border-b sm:border-b-0 sm:border-r border-[#EFEEE5]">
              <label className="font-manrope text-[10px] font-bold text-[#B28A42] uppercase tracking-widest block mb-1">
                ENQUIRY TYPE
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-transparent font-manrope text-sm text-[#252A26] font-medium focus:outline-none cursor-pointer"
              >
                {ENQUIRY_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Enquire Button */}
            <div className="px-2">
              <button
                onClick={handleEnquireClick}
                className="btn-primary w-full py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-md"
              >
                <Search size={15} />
                <span>ENQUIRE NOW</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

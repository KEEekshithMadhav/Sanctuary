"use client";

import { motion } from "framer-motion";
import { Compass, CheckSquare, CalendarCheck, ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Explore Sanctuary",
    desc: "Discover the ~45-acre master planned layout, 475 residential plots, clubhouse architectural concepts, and nature-first living environment.",
    icon: <Compass size={28} className="text-[#123D2C]" />,
  },
  {
    step: "02",
    title: "Choose Your Plot",
    desc: "Select your preferred plot size (200 to 700 Sq. Yds), orientation (East, West, Corner), and request the live inventory schedule.",
    icon: <CheckSquare size={28} className="text-[#123D2C]" />,
  },
  {
    step: "03",
    title: "Visit & Enquire",
    desc: "Schedule an accompanied on-site visit in Julkal, Shankarpally with our project consultants and review official TG RERA documentation.",
    icon: <CalendarCheck size={28} className="text-[#123D2C]" />,
  },
];

export default function HowItWorks() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#F8F7F1]">
      <div className="container-sanctuary">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-3 block">SIMPLE & TRANSPARENT PROCESS</span>
          <div className="w-12 h-0.5 bg-[#B28A42] mx-auto mb-6" />
          <h2 className="section-title max-w-3xl mx-auto">
            Find Your Ideal Plot in{" "}
            <span className="italic text-[#B28A42]">3 Easy Steps.</span>
          </h2>
          <p className="section-body max-w-2xl mx-auto mt-4">
            A seamless journey towards owning your residential land in West Hyderabad's high-potential Shankarpally corridor.
          </p>
        </motion.div>

        {/* 3 Step Rounded Cards with Connecting Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#A8B19A]/30 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Pill & Icon Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#EFEEE5] flex items-center justify-center transition-transform group-hover:scale-110">
                    {s.icon}
                  </div>
                  <span className="font-cormorant text-4xl font-light text-[#B28A42]">
                    {s.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-cormorant text-2xl sm:text-3xl text-[#123D2C] font-semibold mb-3">
                  {s.title}
                </h3>
                <p className="font-manrope text-sm text-[#4A514B] leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Bottom Subtle accent */}
              <div className="mt-8 pt-4 border-t border-[#EFEEE5] flex items-center justify-between">
                <span className="font-manrope text-xs font-semibold text-[#123D2C] tracking-wider uppercase">
                  Step {s.step}
                </span>
                <span className="text-[#B28A42] text-sm">✦</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="mt-14 text-center">
          <button
            onClick={() => scrollTo("enquiry")}
            className="btn-primary"
          >
            START YOUR ENQUIRY TODAY
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}

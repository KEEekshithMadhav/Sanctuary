"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, ArrowRight, Shield, Award, Trees, MapPinned } from "lucide-react";

const BENEFITS = [
  {
    title: "Registered Legal Peace of Mind",
    desc: "TG RERA Registration P01100010026 with verified layout documentation and clear titles.",
  },
  {
    title: "Master Planned Infrastructure",
    desc: "Planned internal blacktop road network, underground conduits, and avenue plantations.",
  },
  {
    title: "Nature-Infused Community Living",
    desc: "Lush open green parks, walking trails, and proposed multi-level lifestyle clubhouse.",
  },
  {
    title: "High-Momentum Growth Location",
    desc: "Strategic position in Shankarpally growth belt, close to IIT Hyderabad, ICFAI & ORR.",
  },
];

export default function WhyChooseUs() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-choose-us" className="py-24 md:py-32 bg-[#F8F7F1]">
      <div className="container-sanctuary">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="section-label mb-3">WHY CHOOSE US</span>
            <div className="w-12 h-0.5 bg-[#B28A42] mb-6" />

            <h2 className="section-title mb-6">
              More Than Just a Plot.{" "}
              <span className="italic text-[#B28A42]">A Place to Belong.</span>
            </h2>

            <p className="section-body mb-8">
              SouthPride Sanctuary represents a refined standard in residential plotted developments. Spanning ~45 acres in Julkal, Shankarpally, it affords you the creative freedom to construct a bespoke private villa surrounded by generous open green spaces, clean air, and organized community infrastructure.
            </p>

            {/* 4 Concise Benefits with Forest-Green Check Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-8">
              {BENEFITS.map((b) => (
                <div key={b.title} className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#123D2C] text-[#F8F7F1] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-cormorant text-xl text-[#123D2C] font-semibold leading-snug mb-1">
                      {b.title}
                    </h4>
                    <p className="font-manrope text-xs text-[#4A514B] leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollTo("amenities")}
              className="btn-primary"
            >
              EXPLORE MORE
              <ArrowRight size={15} />
            </button>
          </motion.div>

          {/* Right Column: Premium Project-Specific Architectural Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="relative mx-auto max-w-[540px]">
              {/* Rounded image container with organic styling */}
              <div className="relative h-[480px] sm:h-[560px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/imgi_23_Sanctuary_by_southpride.jpg"
                  alt="SouthPride Sanctuary Grand Entrance Gate and Boulevard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 540px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123D2C]/80 via-transparent to-transparent" />
                
                {/* Floating caption */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-manrope text-[10px] uppercase font-bold text-[#B28A42] tracking-widest block">
                        AUTHENTIC RENDER
                      </span>
                      <h4 className="font-cormorant text-2xl text-[#123D2C] font-semibold">
                        Grand Entrance Boulevard & Guard Plaza
                      </h4>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#123D2C] flex items-center justify-center text-[#B28A42]">
                      <Trees size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

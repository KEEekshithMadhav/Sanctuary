"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, CheckCircle2, MessageSquareQuote } from "lucide-react";
import { PROJECT } from "@/lib/project-data";

const ASSURANCE_PILLARS = [
  {
    icon: <ShieldCheck size={28} className="text-[#123D2C]" />,
    title: "100% Registered Land Titles",
    desc: "Every plot transaction is backed by clear legal verification, official layout permissions, and registration under TG RERA.",
    badge: "Legal Transparency",
  },
  {
    icon: <FileCheck size={28} className="text-[#123D2C]" />,
    title: "Direct Promoter Consultation",
    desc: "Direct interactions with authorized SouthPride Sanctuary advisors with no undisclosed mediator overheads or ambiguous pricing.",
    badge: "Direct Sales",
  },
  {
    icon: <CheckCircle2 size={28} className="text-[#123D2C]" />,
    title: "Documented Possession Roadmap",
    desc: "Clear physical demarcation of boundaries, scheduled road works, and underground utility provision as per HMDA layout guidelines.",
    badge: "Planned Execution",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#F8F7F1]">
      <div className="container-sanctuary">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-3 block">BUYER CONFIDENCE & COMMITMENT</span>
          <div className="w-12 h-0.5 bg-[#B28A42] mx-auto mb-6" />
          <h2 className="section-title max-w-3xl mx-auto">
            Built on Trust.{" "}
            <span className="italic text-[#B28A42]">Guided by Transparency.</span>
          </h2>
          <p className="section-body max-w-2xl mx-auto mt-4">
            We believe buying residential land should be grounded in clarity. Here is our unwavering commitment to every prospective homeowner and investor at SouthPride Sanctuary.
          </p>
        </motion.div>

        {/* 3 Rounded White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {ASSURANCE_PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#A8B19A]/30 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#EFEEE5] flex items-center justify-center transition-transform group-hover:scale-110">
                    {pillar.icon}
                  </div>
                  <span className="font-manrope text-[11px] font-semibold text-[#B28A42] uppercase tracking-wider bg-[#F8F7F1] px-3 py-1 rounded-full border border-[#EFEEE5]">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-cormorant text-2xl text-[#123D2C] font-semibold mb-3">
                  {pillar.title}
                </h3>
                <p className="font-manrope text-sm text-[#4A514B] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#EFEEE5] flex items-center gap-2 text-xs font-manrope text-[#123D2C] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#123D2C]" />
                <span>Verified Project Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisory Assurance Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 border border-[#A8B19A]/30 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 shadow-xs"
        >
          <div className="w-14 h-14 rounded-full bg-[#123D2C] text-[#B28A42] flex items-center justify-center flex-shrink-0">
            <MessageSquareQuote size={28} />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h4 className="font-cormorant text-2xl text-[#123D2C] font-semibold mb-1">
              Have Questions Regarding Layout Sanctions or Registration?
            </h4>
            <p className="font-manrope text-xs sm:text-sm text-[#4A514B]">
              Our advisory desk provides immediate access to the original HMDA draft documents, RERA certificate, and plot boundary coordinates during your scheduled site preview.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

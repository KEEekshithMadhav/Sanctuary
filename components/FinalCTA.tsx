"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MessageCircle, Phone } from "lucide-react";
import { CONTACT, WHATSAPP_URL_PRIMARY, WHATSAPP_URL_SECONDARY } from "@/lib/contact-data";

export default function FinalCTA() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-[#EFEEE5]">
      <div className="container-sanctuary">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden bg-[#123D2C] text-[#F8F7F1] p-10 sm:p-16 lg:p-20 shadow-2xl border-4 border-white"
        >
          {/* Background architectural image with deep green overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/images/imgi_23_Sanctuary_by_southpride.jpg"
                alt="SouthPride Sanctuary Shankarpally Lifestyle Atmosphere"
                fill
                className="object-cover opacity-20 mix-blend-overlay"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#123D2C] via-[#123D2C]/90 to-[#0C3325]/85" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <span className="font-manrope text-xs font-bold text-[#B28A42] tracking-[0.25em] uppercase block mb-4">
              EMBARK ON ELEVATED LIVING
            </span>

            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-[#F8F7F1] font-normal leading-[1.1] mb-6">
              Your Future Begins at{" "}
              <span className="italic text-[#B28A42]">Sanctuary.</span>
            </h2>

            <p className="font-manrope text-base sm:text-lg text-[#EFEEE5]/90 font-light leading-relaxed mb-10 max-w-2xl">
              Discover the possibilities of owning a residential plot in Shankarpally. Connect with our dedicated sales advisors to explore live plot availability, schedule a personalized site tour, or receive complete pricing breakdowns.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => scrollTo("enquiry")}
                className="btn-gold py-4 px-8 text-xs font-bold"
              >
                <Calendar size={16} />
                <span>BOOK A SITE VISIT</span>
              </button>
              <a
                href={WHATSAPP_URL_PRIMARY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white py-4 px-8 text-xs font-bold"
              >
                <MessageCircle size={16} />
                <span>WHATSAPP US</span>
              </a>
            </div>

            {/* Direct Line Cards with Clean Sans-Serif Typography */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Primary Sales Desk */}
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#B28A42] flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="font-manrope text-[10px] text-[#B28A42] font-bold block uppercase tracking-wider mb-0.5">
                    PRIMARY SALES DESK
                  </span>
                  <a
                    href="tel:+918501878585"
                    className="font-manrope text-lg sm:text-xl font-bold tracking-wide text-white hover:text-[#B28A42] transition-colors block"
                  >
                    +91 8501878585
                  </a>
                  <div className="flex items-center gap-3 mt-1.5 text-xs font-manrope">
                    <a href="tel:+918501878585" className="text-white/80 hover:text-white underline">
                      Call
                    </a>
                    <span className="text-white/30">·</span>
                    <a href="https://wa.me/918501878585" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Secondary Contact */}
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#B28A42] flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="font-manrope text-[10px] text-[#B28A42] font-bold block uppercase tracking-wider mb-0.5">
                    SECONDARY CONTACT
                  </span>
                  <a
                    href="tel:+919885858529"
                    className="font-manrope text-lg sm:text-xl font-bold tracking-wide text-white hover:text-[#B28A42] transition-colors block"
                  >
                    +91 9885858529
                  </a>
                  <div className="flex items-center gap-3 mt-1.5 text-xs font-manrope">
                    <a href="tel:+919885858529" className="text-white/80 hover:text-white underline">
                      Call
                    </a>
                    <span className="text-white/30">·</span>
                    <a href="https://wa.me/919885858529" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

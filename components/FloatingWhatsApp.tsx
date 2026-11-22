"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CONTACT,
  WHATSAPP_URL_PRIMARY,
  WHATSAPP_URL_SECONDARY,
  WHATSAPP_MESSAGE,
} from "@/lib/contact-data";

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 md:bottom-8 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="bg-white shadow-2xl rounded-3xl border border-[#EFEEE5] w-80 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#123D2C] p-5 flex items-center justify-between text-[#F8F7F1]">
              <div>
                <p className="font-cormorant text-xl text-[#B28A42] font-semibold">
                  SouthPride Sanctuary
                </p>
                <p className="font-manrope text-xs text-[#EFEEE5]/80">
                  Official Advisory Desk · Quick WhatsApp Enquiry
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat message preview */}
            <div className="p-4 bg-[#F8F7F1]">
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-3.5">
                <p className="font-manrope text-xs text-[#252A26] leading-relaxed">
                  👋 Hello! Welcome to <strong>SouthPride Sanctuary, Shankarpally</strong>. Choose an official line below to chat directly with our sales team regarding plot availability and pricing.
                </p>
                <p className="font-manrope text-[10px] text-emerald-800 font-semibold mt-2 text-right">
                  Sales Desk · Online
                </p>
              </div>
            </div>

            {/* Actions with Modern Sans-Serif Typography */}
            <div className="p-4 flex flex-col gap-2.5 bg-white border-t border-[#EFEEE5]">
              <a
                href={WHATSAPP_URL_PRIMARY}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-[#123D2C] text-[#F8F7F1] hover:bg-[#0C3325] transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white flex-shrink-0">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <span className="font-manrope text-[10px] text-[#B28A42] uppercase tracking-wider font-bold block">
                    PRIMARY SALES DESK
                  </span>
                  <span className="font-manrope text-sm font-bold tracking-wide">
                    +91 8501878585
                  </span>
                </div>
              </a>

              <a
                href={WHATSAPP_URL_SECONDARY}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-[#F8F7F1] border border-[#EFEEE5] text-[#123D2C] hover:bg-[#EFEEE5] transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 flex-shrink-0">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <span className="font-manrope text-[10px] text-[#B28A42] uppercase tracking-wider font-bold block">
                    SECONDARY CONTACT
                  </span>
                  <span className="font-manrope text-sm font-bold tracking-wide text-[#123D2C]">
                    +91 9885858529
                  </span>
                </div>
              </a>

              <p className="font-manrope text-[10px] text-[#4A514B]/70 italic text-center px-2 mt-1">
                &ldquo;{WHATSAPP_MESSAGE.substring(0, 65)}...&rdquo;
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl flex items-center justify-center transition-colors relative"
        aria-label="Open WhatsApp chat"
      >
        {open ? <X size={24} /> : <MessageCircle size={26} />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#B28A42] rounded-full flex items-center justify-center text-white text-[10px] font-bold">
            1
          </span>
        )}
      </motion.button>
    </div>
  );
}

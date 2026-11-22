"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ArrowUpRight, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT, WHATSAPP_URL_PRIMARY, WHATSAPP_URL_SECONDARY } from "@/lib/contact-data";

const NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Plot Options", href: "#plot-options" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Amenities", href: "#amenities" },
  { label: "Master Plan", href: "#masterplan" },
  { label: "Location", href: "#location" },
  { label: "Documents", href: "#documents" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F8F7F1]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#EFEEE5]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-sanctuary">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="#home"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#123D2C] flex items-center justify-center text-[#B28A42] font-cormorant text-xl font-bold shadow-xs transition-transform group-hover:scale-105">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-cormorant text-[#123D2C] text-xl font-semibold tracking-wider leading-none">
                  SOUTHPRIDE
                </span>
                <span className="font-manrope text-[#B28A42] text-[10px] tracking-[0.35em] uppercase font-bold mt-0.5">
                  SANCTUARY
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 bg-white/70 backdrop-blur-md px-6 py-2.5 rounded-full border border-[#EFEEE5] shadow-xs">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="font-manrope text-[#252A26] text-xs font-medium tracking-wide hover:text-[#123D2C] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop Contact & CTA Actions */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:+918501878585"
                className="flex items-center gap-2.5 group"
                aria-label="Call Primary Sales Desk"
              >
                <div className="w-8 h-8 rounded-full bg-[#EFEEE5] flex items-center justify-center text-[#123D2C] group-hover:bg-[#123D2C] group-hover:text-white transition-colors">
                  <Phone size={13} />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-manrope text-[9px] font-bold text-[#B28A42] uppercase tracking-wider">
                    PRIMARY SALES DESK
                  </span>
                  <span className="font-manrope text-xs font-bold text-[#123D2C] tracking-wide group-hover:text-[#B28A42] transition-colors">
                    +91 8501878585
                  </span>
                </div>
              </a>

              <button
                onClick={() => handleNavClick("#enquiry")}
                className="btn-primary text-[11px] py-2.5 px-6"
              >
                ENQUIRE NOW
                <ArrowUpRight size={14} />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2.5">
              <a
                href="tel:+918501878585"
                className="w-9 h-9 rounded-full bg-[#123D2C] text-[#F8F7F1] flex items-center justify-center shadow-xs"
                aria-label="Call Primary Sales Desk"
              >
                <Phone size={15} />
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-9 h-9 rounded-full bg-white border border-[#EFEEE5] text-[#123D2C] flex items-center justify-center shadow-xs"
                aria-label="Toggle navigation menu"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#F8F7F1] flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-2 mb-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left font-cormorant text-2xl text-[#123D2C] hover:text-[#B28A42] py-2.5 border-b border-[#EFEEE5] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Contact Information with Modern Sans-Serif Typography */}
            <div className="flex flex-col gap-3 mt-auto mb-6">
              {/* Primary Sales Desk */}
              <div className="p-4 rounded-2xl bg-white border border-[#EFEEE5]">
                <span className="font-manrope text-[10px] font-bold text-[#B28A42] uppercase tracking-wider block mb-1">
                  PRIMARY SALES DESK
                </span>
                <div className="font-manrope text-lg font-bold text-[#123D2C] tracking-wide mb-2.5">
                  +91 8501878585
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:+918501878585"
                    className="flex-1 py-2 px-3 rounded-full bg-[#123D2C] text-[#F8F7F1] font-manrope text-xs font-semibold text-center flex items-center justify-center gap-1.5"
                  >
                    <Phone size={12} />
                    <span>Call Desk</span>
                  </a>
                  <a
                    href="https://wa.me/918501878585"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-full bg-[#EFEEE5] text-[#123D2C] font-manrope text-xs font-semibold text-center flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle size={12} className="text-emerald-700" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Secondary Contact */}
              <div className="p-4 rounded-2xl bg-white border border-[#EFEEE5]">
                <span className="font-manrope text-[10px] font-bold text-[#B28A42] uppercase tracking-wider block mb-1">
                  SECONDARY CONTACT
                </span>
                <div className="font-manrope text-lg font-bold text-[#123D2C] tracking-wide mb-2.5">
                  +91 9885858529
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:+919885858529"
                    className="flex-1 py-2 px-3 rounded-full bg-[#123D2C] text-[#F8F7F1] font-manrope text-xs font-semibold text-center flex items-center justify-center gap-1.5"
                  >
                    <Phone size={12} />
                    <span>Call Team</span>
                  </a>
                  <a
                    href="https://wa.me/919885858529"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-full bg-[#EFEEE5] text-[#123D2C] font-manrope text-xs font-semibold text-center flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle size={12} className="text-emerald-700" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="font-manrope text-xs text-[#4A514B]">
                TG RERA Registered: <strong className="text-[#123D2C]">P01100010026</strong>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

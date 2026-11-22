"use client";

import Link from "next/link";
import { Phone, MessageCircle, MapPin, Shield, ExternalLink, ArrowUpRight } from "lucide-react";
import { CONTACT, WHATSAPP_URL_PRIMARY, WHATSAPP_URL_SECONDARY } from "@/lib/contact-data";
import { PROJECT, DISCLAIMER_GENERAL } from "@/lib/project-data";

const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Plot Options", href: "#plot-options" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Clubhouse Amenities", href: "#amenities" },
  { label: "Master Plan", href: "#masterplan" },
  { label: "Location Map", href: "#location" },
  { label: "Official Documents", href: "#documents" },
  { label: "Enquiry Desk", href: "#enquiry" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#123D2C] text-[#F8F7F1] pt-16 pb-12 border-t-4 border-[#B28A42]">
      <div className="container-sanctuary">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/15">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-[#B28A42] flex items-center justify-center text-[#123D2C] font-cormorant text-2xl font-bold shadow-md">
                S
              </div>
              <div>
                <span className="font-cormorant text-2xl font-semibold tracking-wider text-[#F8F7F1] block leading-none">
                  SOUTHPRIDE
                </span>
                <span className="font-manrope text-[#B28A42] text-[11px] tracking-[0.35em] uppercase font-bold mt-1 block">
                  SANCTUARY
                </span>
              </div>
            </div>

            <p className="font-cormorant text-xl text-[#B28A42] italic mb-4">
              The Art of Elevated Living
            </p>

            <p className="font-manrope text-xs text-[#EFEEE5]/80 leading-relaxed mb-6 font-light max-w-sm">
              A nature-oriented residential plotted community spanning ~45 acres in the Shankarpally growth corridor of West Hyderabad.
            </p>

            <div className="flex items-start gap-2.5 text-[#EFEEE5]/70 text-xs font-manrope">
              <MapPin size={15} className="text-[#B28A42] mt-0.5 flex-shrink-0" />
              <span>{PROJECT.location.full}</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="font-manrope text-xs font-bold tracking-[0.2em] uppercase text-[#B28A42] mb-5">
              NAVIGATION
            </h4>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-manrope text-xs text-[#EFEEE5]/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contacts Column with Modern Sans-Serif Typography */}
          <div className="lg:col-span-3">
            <h4 className="font-manrope text-xs font-bold tracking-[0.2em] uppercase text-[#B28A42] mb-5">
              OFFICIAL CONTACT DESK
            </h4>
            
            <div className="flex flex-col gap-5">
              {/* Primary Sales Desk */}
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <span className="font-manrope text-[10px] font-bold text-[#B28A42] uppercase tracking-[0.18em] block mb-1">
                  PRIMARY SALES DESK
                </span>
                <a
                  href="tel:+918501878585"
                  className="font-manrope text-xl font-bold tracking-wide text-white hover:text-[#B28A42] transition-colors block mb-2"
                >
                  +91 8501878585
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href="tel:+918501878585"
                    className="inline-flex items-center gap-1.5 text-xs font-manrope font-semibold text-[#EFEEE5]/90 hover:text-white transition-colors"
                  >
                    <Phone size={13} className="text-[#B28A42]" />
                    <span>Call</span>
                  </a>
                  <span className="text-white/20">|</span>
                  <a
                    href="https://wa.me/918501878585"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-manrope font-semibold text-[#EFEEE5]/90 hover:text-white transition-colors"
                  >
                    <MessageCircle size={13} className="text-[#B28A42]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Secondary Contact */}
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <span className="font-manrope text-[10px] font-bold text-[#B28A42] uppercase tracking-[0.18em] block mb-1">
                  SECONDARY CONTACT
                </span>
                <a
                  href="tel:+919885858529"
                  className="font-manrope text-xl font-bold tracking-wide text-white hover:text-[#B28A42] transition-colors block mb-2"
                >
                  +91 9885858529
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href="tel:+919885858529"
                    className="inline-flex items-center gap-1.5 text-xs font-manrope font-semibold text-[#EFEEE5]/90 hover:text-white transition-colors"
                  >
                    <Phone size={13} className="text-[#B28A42]" />
                    <span>Call</span>
                  </a>
                  <span className="text-white/20">|</span>
                  <a
                    href="https://wa.me/919885858529"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-manrope font-semibold text-[#EFEEE5]/90 hover:text-white transition-colors"
                  >
                    <MessageCircle size={13} className="text-[#B28A42]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RERA & Downloads Column */}
          <div className="lg:col-span-2">
            <h4 className="font-manrope text-xs font-bold tracking-[0.2em] uppercase text-[#B28A42] mb-5">
              RERA COMPLIANCE
            </h4>

            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 mb-4">
              <span className="font-manrope text-[10px] text-[#B28A42] font-semibold uppercase block">
                TG RERA REGISTRATION
              </span>
              <span className="font-manrope text-sm font-bold text-white block mt-0.5">
                {PROJECT.rera.number}
              </span>
              <a
                href={PROJECT.rera.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-manrope text-[11px] text-[#B28A42] hover:underline mt-2"
              >
                <span>Verify on Portal</span>
                <ExternalLink size={10} />
              </a>
            </div>

            <ul className="flex flex-col gap-2 font-manrope text-xs text-[#EFEEE5]/80">
              <li>
                <a
                  href="/documents/Sanctuary-E-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Download E-Brochure
                </a>
              </li>
              <li>
                <a
                  href="/documents/Sanctuary-RERA-Certificate-P01100010026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  RERA Certificate
                </a>
              </li>
              <li>
                <a
                  href="/documents/BPO1_010327_LO_HMDA_2691_SKP_2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  HMDA Draft Layout Letter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Strip */}
        <div className="py-8 border-b border-white/10">
          <p className="font-manrope text-xs text-[#EFEEE5]/60 leading-relaxed font-light">
            <strong className="text-white/80 font-normal">Real Estate Disclaimer:</strong> {DISCLAIMER_GENERAL}
          </p>
        </div>

        {/* Copyright and Legal Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-manrope text-xs text-[#EFEEE5]/50">
          <span>
            © 2026 SouthPride Realty. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <span className="hover:text-white/80 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white/80 cursor-pointer">Terms of Service</span>
            <span className="hover:text-white/80 cursor-pointer">Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

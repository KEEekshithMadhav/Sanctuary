"use client";

import { motion } from "framer-motion";
import { FileText, Download, Shield, ExternalLink, CheckCircle } from "lucide-react";
import { PROJECT, DISCLAIMER_RERA } from "@/lib/project-data";

interface DocumentCard {
  title: string;
  description: string;
  type: string;
  path: string;
  badge?: string;
  badgeColor?: string;
  note?: string;
}

const DOCUMENTS: DocumentCard[] = [
  {
    title: "TG RERA Registration Certificate",
    description: `Registration Certificate No. ${PROJECT.rera.number} officially granted by the Telangana Real Estate Regulatory Authority.`,
    type: "Statutory Certificate",
    path: "/documents/Sanctuary-RERA-Certificate-P01100010026.pdf",
    badge: "RERA REGISTERED",
    badgeColor: "bg-[#123D2C] text-[#F8F7F1]",
  },
  {
    title: "HMDA Draft Layout Letter",
    description: "Official Letter reference: 010327/LO/HMDA/2691/SKP/2024, dated 3 July 2025 issued by HMDA for Julkal Village.",
    type: "Layout Sanction Document",
    path: "/documents/BPO1_010327_LO_HMDA_2691_SKP_2024.pdf",
    badge: "DRAFT LAYOUT",
    badgeColor: "bg-[#B28A42] text-white",
    note: "Titled as Draft Layout Letter. Final layout sanction is subject to HMDA verification.",
  },
  {
    title: "Clubhouse Architectural Drawings (R1)",
    description: "Architectural floor plans detailing proposed reception, banquet hall, indoor games, gym, and guest suites.",
    type: "Architectural Plan",
    path: "/documents/Julkal_Clubhouse_Plans_R1_24.10.2025.pdf",
    badge: "PROPOSED SCOPE",
    badgeColor: "bg-[#A8B19A] text-[#123D2C]",
    note: "Revision 1 dated 24.10.2025. Final construction scope subject to developer approvals.",
  },
  {
    title: "Official Project E-Brochure",
    description: "Comprehensive marketing brochure outlining location highlights, connectivity, amenities, and development vision.",
    type: "Comprehensive Brochure",
    path: "/documents/Sanctuary-E-Brochure.pdf",
    badge: "OFFICIAL",
    badgeColor: "bg-[#123D2C] text-[#F8F7F1]",
  },
  {
    title: "Plot Layout Availability Schedule",
    description: "Reference inventory schedule depicting plot sectors, dimensions, and zoning for reference.",
    type: "Inventory Reference",
    path: "/documents/Sanctuary_Julkal_Available_List_20112026.pdf",
    badge: "DATED INVENTORY",
    badgeColor: "bg-[#EFEEE5] text-[#252A26]",
    note: "Dated document for layout reference. Contact sales team for current live availability.",
  },
];

export default function Documents() {
  return (
    <section id="documents" className="py-24 md:py-32 bg-[#EFEEE5]">
      <div className="container-sanctuary">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-3 block">REGULATORY TRANSPARENCY</span>
          <div className="w-12 h-0.5 bg-[#B28A42] mx-auto mb-6" />
          <h2 className="section-title max-w-2xl mx-auto">
            Official Project <span className="italic text-[#B28A42]">Documentation</span>
          </h2>
          <p className="section-body max-w-2xl mx-auto mt-4">
            SouthPride Sanctuary upholds the highest standards of transparency. Inspect and download the official government clearances, RERA certifications, and project drawings below.
          </p>
        </motion.div>

        {/* Official RERA Feature Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#123D2C] rounded-[2.5rem] p-8 md:p-12 mb-12 shadow-2xl border-4 border-white flex flex-col lg:flex-row items-center justify-between gap-8 text-[#F8F7F1]"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-[#B28A42] flex items-center justify-center text-[#B28A42] flex-shrink-0">
              <Shield size={36} />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-[#B28A42] text-xs font-manrope font-semibold uppercase tracking-wider mb-2">
                <CheckCircle size={13} />
                TG RERA Registered Project
              </div>
              <h3 className="font-cormorant text-3xl md:text-4xl text-[#F8F7F1] font-light">
                Registration No:{" "}
                <span className="text-[#B28A42] font-semibold">{PROJECT.rera.number}</span>
              </h3>
              <p className="font-manrope text-[#EFEEE5]/85 text-xs md:text-sm max-w-2xl mt-2 leading-relaxed font-light">
                Registered under the Telangana Real Estate (Regulation and Development) Act. Public details, promoter disclosures, and project clearances are verifiable directly on the official state portal.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <a
              href="/documents/Sanctuary-RERA-Certificate-P01100010026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-center justify-center text-xs py-3.5 px-6"
            >
              <Download size={14} />
              DOWNLOAD CERTIFICATE
            </a>
            <a
              href={PROJECT.rera.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white text-center justify-center text-xs py-3.5 px-6"
            >
              <ExternalLink size={14} />
              VERIFY ON TG RERA
            </a>
          </div>
        </motion.div>

        {/* Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCUMENTS.map((doc, i) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white rounded-3xl p-7 border border-[#A8B19A]/30 hover:border-[#123D2C] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#EFEEE5] flex items-center justify-center text-[#123D2C]">
                    <FileText size={22} />
                  </div>
                  {doc.badge && (
                    <span className={`font-manrope text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full ${doc.badgeColor}`}>
                      {doc.badge}
                    </span>
                  )}
                </div>
                <span className="font-manrope text-[11px] tracking-widest uppercase text-[#B28A42] font-bold block mb-1">
                  {doc.type}
                </span>
                <h4 className="font-cormorant text-2xl text-[#123D2C] font-semibold mb-2.5 leading-snug">
                  {doc.title}
                </h4>
                <p className="font-manrope text-[#4A514B] text-xs leading-relaxed mb-4">
                  {doc.description}
                </p>
                {doc.note && (
                  <p className="font-manrope text-[11px] text-[#4A514B] bg-[#EFEEE5] p-3 rounded-xl border-l-2 border-[#B28A42] mb-4 leading-relaxed">
                    <strong>Note:</strong> {doc.note}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-[#EFEEE5]">
                <a
                  href={doc.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-manrope text-xs font-semibold tracking-wider text-[#123D2C] hover:text-[#B28A42] transition-colors uppercase"
                >
                  <Download size={14} />
                  Download Document (PDF)
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legal Disclaimer Box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-white rounded-2xl p-6 border-l-4 border-[#B28A42] shadow-xs"
        >
          <p className="font-manrope text-xs md:text-sm text-[#4A514B] leading-relaxed">
            <strong className="text-[#123D2C] font-semibold">Regulatory Accuracy Note:</strong>{" "}
            {DISCLAIMER_RERA} All prospective buyers are encouraged to review registered documents and consult the sales team for current approval milestones before final registration.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Compass, MapPin, Headphones } from "lucide-react";
import { PROJECT } from "@/lib/project-data";
import { CONTACT } from "@/lib/contact-data";

const TRUST_FEATURES = [
  {
    icon: <ShieldCheck size={28} className="text-[#123D2C]" />,
    title: "RERA Registered Project",
    desc: `TG RERA: ${PROJECT.rera.number}. 100% statutory legal compliance and transparency.`,
  },
  {
    icon: <Compass size={28} className="text-[#123D2C]" />,
    title: "Thoughtfully Planned Layout",
    desc: `~45 Acres development with 475 organized residential plots (200–700 Sq. Yds).`,
  },
  {
    icon: <MapPin size={28} className="text-[#123D2C]" />,
    title: "West Hyderabad Growth Corridor",
    desc: "Julkal, Shankarpally with swift arterial links to Financial District & IIT Hyderabad.",
  },
  {
    icon: <Headphones size={28} className="text-[#123D2C]" />,
    title: "Dedicated Enquiry Support",
    desc: `Direct consultation with official sales team on ${CONTACT.primary.phone}.`,
  },
];

export default function TrustStrip() {
  return (
    <section className="py-6 bg-[#EFEEE5]">
      <div className="container-sanctuary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#A8B19A]/30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#EFEEE5]"
        >
          {TRUST_FEATURES.map((item, i) => (
            <div
              key={item.title}
              className={`flex items-start gap-4 ${
                i !== 0 ? "pt-5 sm:pt-0 sm:pl-6" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#EFEEE5] flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-cormorant text-xl text-[#123D2C] font-semibold mb-1">
                  {item.title}
                </h4>
                <p className="font-manrope text-xs text-[#4A514B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

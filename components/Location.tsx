"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Train, GraduationCap, Compass, Building, Cpu, ExternalLink, Navigation } from "lucide-react";
import { CONNECTIVITY, PROJECT } from "@/lib/project-data";

const ICON_MAP: Record<string, React.ReactNode> = {
  train: <Train size={18} className="text-[#123D2C]" />,
  graduation: <GraduationCap size={18} className="text-[#123D2C]" />,
  road: <Compass size={18} className="text-[#123D2C]" />,
  building: <Building size={18} className="text-[#123D2C]" />,
  tech: <Cpu size={18} className="text-[#123D2C]" />,
};

export default function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-[#EFEEE5]">
      <div className="container-sanctuary">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-3 block">LOCATION & ACCESSIBILITY</span>
          <div className="w-12 h-0.5 bg-[#B28A42] mx-auto mb-6" />
          <h2 className="section-title max-w-3xl mx-auto">
            Connected to <span className="italic text-[#B28A42]">What Matters.</span>
          </h2>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-white border border-[#A8B19A]/40 text-[#123D2C] text-xs font-manrope font-medium shadow-xs">
            <MapPin size={14} className="text-[#B28A42]" />
            <span>Julkal, Shankarpally, West Hyderabad, Telangana</span>
          </div>
        </motion.div>

        {/* Split Layout: Left Info & Travel Times, Right Rounded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Connectivity & Times */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="font-manrope text-xs font-bold text-[#B28A42] tracking-widest uppercase mb-2">
              PRIME CORRIDOR CONNECTIVITY
            </span>
            <h3 className="font-cormorant text-3xl sm:text-4xl text-[#123D2C] font-semibold mb-4 leading-tight">
              Rapid Transit to Hyderabad&apos;s Leading Tech & Educational Hubs
            </h3>
            <p className="font-manrope text-sm text-[#4A514B] leading-relaxed mb-6 font-light">
              Situated in Julkal, Shankarpally, Sanctuary is strategically linked to Outer Ring Road (ORR), Shankarpally railway junction, and Hyderabad&apos;s primary employment nodes while preserving unpolluted greenery.
            </p>

            {/* Travel Times Rounded List */}
            <div className="flex flex-col gap-3 w-full mb-6">
              {CONNECTIVITY.map((item) => (
                <div
                  key={item.destination}
                  className="bg-white rounded-2xl p-4 border border-[#A8B19A]/30 flex items-center justify-between shadow-xs hover:border-[#123D2C] transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EFEEE5] flex items-center justify-center flex-shrink-0">
                      {ICON_MAP[item.icon] || <MapPin size={18} className="text-[#123D2C]" />}
                    </div>
                    <span className="font-manrope text-sm font-medium text-[#252A26]">
                      {item.destination}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 pl-4 border-l border-[#EFEEE5]">
                    <Clock size={13} className="text-[#B28A42]" />
                    <span className="font-cormorant text-xl font-bold text-[#123D2C]">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={PROJECT.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-3 px-6"
              >
                <Navigation size={14} />
                GET DIRECTIONS
              </a>
              <a
                href={PROJECT.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-forest text-xs py-3 px-6"
              >
                <ExternalLink size={14} />
                OPEN IN GOOGLE MAPS
              </a>
            </div>

            <span className="font-manrope text-[11px] text-[#A8B19A] mt-3 block">
              * Travel times are approximate and subject to traffic conditions.
            </span>
          </motion.div>

          {/* Right Column: Rounded Map Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white h-[440px] sm:h-[500px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30441.978!2d78.1073!3d17.4891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbe4d5ef8c2c7d%3A0x4d47a6c0e7f6a7dc!2sShankarpally%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SouthPride Sanctuary Location Map"
                className="w-full h-full object-cover"
              />
              
              {/* Floating map banner */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white shadow-lg flex items-center justify-between">
                <div>
                  <span className="font-manrope text-[10px] font-bold text-[#B28A42] uppercase tracking-wider block">
                    SANCTUARY PLOTS
                  </span>
                  <span className="font-cormorant text-xl text-[#123D2C] font-semibold block">
                    Julkal Village, Shankarpally
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#123D2C] text-[#F8F7F1] text-[11px] font-manrope">
                  West Hyderabad
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Sparkles, Info } from "lucide-react";

interface ClubhouseAmenity {
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
}

const CLUBHOUSE_FACILITIES: ClubhouseAmenity[] = [
  {
    name: "Reception & Lobby",
    category: "Arrival & Concierge",
    description:
      "A grand double-height entrance lobby featuring modern wood accents, designer lighting, and comfortable waiting lounges for residents and visitors.",
    image: "/images/amenities/reception-lobby.jpg",
    alt: "SouthPride Sanctuary clubhouse reception desk and welcoming lounge",
  },
  {
    name: "Cafeteria",
    category: "Dining & Social",
    description:
      "A modern cafeteria interior featuring dining tables, comfortable seating, a food-service counter, and warm ambient lighting for socializing.",
    image: "/images/amenities/cafeteria.jpg",
    alt: "SouthPride Sanctuary modern cafeteria and dining lounge interior",
  },
  {
    name: "Banquet Hall",
    category: "Events & Celebrations",
    description:
      "A luxury banquet hall with opulent chandeliers, formal dining tables, pre-function lobby, and green rooms suited for family celebrations.",
    image: "/images/amenities/grand-banquet-hall.jpg",
    alt: "SouthPride Sanctuary grand banquet hall with chandeliers and event seating",
  },
  {
    name: "Swimming Pool",
    category: "Aquatic Recreation",
    description:
      "A sparkling outdoor swimming pool featuring crystal-blue water, expansive pool deck, loungers, poolside landscaping, and children's splash area.",
    image: "/images/amenities/swimming-pool.jpg",
    alt: "SouthPride Sanctuary outdoor swimming pool with blue water and pool deck loungers",
  },
  {
    name: "Indoor Games",
    category: "Recreation & Sports",
    description:
      "A dedicated indoor games arena equipped with championship billiards/pool tables, table tennis, foosball, and viewing lounges.",
    image: "/images/amenities/indoor-games-room.jpg",
    alt: "SouthPride Sanctuary indoor recreation hall with pool table and table tennis",
  },
  {
    name: "Yoga & Meditation",
    category: "Mindfulness & Wellness",
    description:
      "A peaceful yoga studio featuring wooden floors, yoga mats, gentle natural lighting, and indoor greenery for quiet mindfulness and wellness.",
    image: "/images/amenities/yoga-meditation.jpg",
    alt: "SouthPride Sanctuary tranquil yoga and meditation studio with yoga mats",
  },
  {
    name: "Gymnasium",
    category: "Health & Fitness",
    description:
      "A professional fitness centre showing cardiovascular treadmills, resistance exercise machines, free weights, and panoramic window views.",
    image: "/images/amenities/fitness-centre-gym.jpg",
    alt: "SouthPride Sanctuary modern gym showing fitness equipment and treadmills",
  },
  {
    name: "Guest Rooms",
    category: "Hospitality & Stay",
    description:
      "Premium guest bedrooms appointed with comfortable beds, elegant interiors, bedside lighting, and windows for visiting friends and family.",
    image: "/images/amenities/guest-room.jpg",
    alt: "SouthPride Sanctuary premium guest bedroom with comfortable bed and bedside lighting",
  },
  {
    name: "Outdoor Seating",
    category: "Open Air & Leisure",
    description:
      "An outdoor garden terrace lounge with comfortable armchairs, patio tables, manicured greenery, and serene landscaped surroundings.",
    image: "/images/amenities/outdoor-seating.jpg",
    alt: "SouthPride Sanctuary landscaped outdoor garden lounge with comfortable seating and greenery",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 md:py-32 bg-[#F8F7F1]">
      <div className="container-sanctuary">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-3 block">LIFESTYLE & RECREATION</span>
          <div className="w-12 h-0.5 bg-[#B28A42] mx-auto mb-6" />
          <h2 className="section-title max-w-3xl mx-auto">
            CLUBHOUSE <span className="italic text-[#B28A42]">AMENITIES</span>
          </h2>
          <p className="section-body max-w-3xl mx-auto mt-4">
            Explore the planned lifestyle amenities at the SouthPride Sanctuary Clubhouse. Each facility has been curated according to the official project architectural drawings to support wellness, leisure, dining, and social connection.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-white border border-[#A8B19A]/40 text-[#123D2C] text-xs font-manrope font-semibold shadow-xs">
            <Sparkles size={13} className="text-[#B28A42]" />
            <span>Architectural Reference: Julkal Clubhouse Plans R1 (dated 24.10.2025)</span>
          </div>
        </motion.div>

        {/* 9 Verified Amenity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLUBHOUSE_FACILITIES.map((facility, i) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#A8B19A]/30 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-manrope font-bold text-[#123D2C] uppercase shadow-xs">
                    {facility.category}
                  </div>
                  {/* Required Clear Label: ARCHITECTURAL VISUALIZATION */}
                  <div className="absolute bottom-4 right-4 bg-[#123D2C]/90 backdrop-blur-xs text-[#F8F7F1] px-3 py-1 rounded-full text-[10px] font-manrope font-semibold uppercase tracking-wider">
                    ARCHITECTURAL VISUALIZATION
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="font-cormorant text-2xl sm:text-3xl text-[#123D2C] font-semibold mb-2.5">
                    {facility.name}
                  </h3>
                  <p className="font-manrope text-xs sm:text-sm text-[#4A514B] leading-relaxed font-light">
                    {facility.description}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Note */}
              <div className="px-6 pb-6 pt-2 border-t border-[#EFEEE5]/80 flex items-center justify-between text-[#A8B19A] text-[11px] font-manrope">
                <span>Proposed Facility</span>
                <span className="text-[#B28A42]">✦</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download & Regulatory Assurance Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-[#A8B19A]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#EFEEE5] flex items-center justify-center text-[#123D2C] flex-shrink-0 mt-0.5">
              <Info size={20} className="text-[#B28A42]" />
            </div>
            <div>
              <h4 className="font-cormorant text-xl text-[#123D2C] font-semibold mb-1">
                Official Clubhouse Architectural Drawings Available
              </h4>
              <p className="font-manrope text-xs text-[#4A514B] leading-relaxed max-w-2xl font-light">
                Clubhouse facility representations are based on proposed architectural drawings (Julkal Clubhouse Plans R1). Visualizations illustrate planned facilities and do not represent completed construction.
              </p>
            </div>
          </div>

          <a
            href="/documents/Julkal_Clubhouse_Plans_R1_24.10.2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-3 px-6 whitespace-nowrap flex-shrink-0"
          >
            <Download size={14} />
            DOWNLOAD DRAWINGS (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
}

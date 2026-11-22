"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

type Category = "All" | "Overview" | "Clubhouse" | "Landscape" | "Infrastructure" | "Master Plan";

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  category: Category;
  badge: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: "/images/imgi_23_Sanctuary_by_southpride.jpg",
    alt: "SouthPride Sanctuary Grand Entrance Archway and Security Plaza",
    title: "Grand Entrance Archway & Security Plaza",
    category: "Overview",
    badge: "Architectural Concept",
  },
  {
    src: "/images/imgi_141_Sanctuary_by_southpride-1536x1188.jpg",
    alt: "Overview of Sanctuary Plotted Development and Green Corridors",
    title: "45-Acre Master Layout Overview",
    category: "Overview",
    badge: "Site Perspective",
  },
  {
    src: "/images/imgi_102_009.jpg",
    alt: "Sanctuary Multi-Level Clubhouse and Promenade",
    title: "The Sanctuary Clubhouse Exterior",
    category: "Clubhouse",
    badge: "Clubhouse Concept",
  },
  {
    src: "/images/imgi_117_012.jpg",
    alt: "Infinity Edge Swimming Pool and Sundeck Lounge",
    title: "Resort-Style Swimming Pool & Deck",
    category: "Clubhouse",
    badge: "Lifestyle Amenity",
  },
  {
    src: "/images/imgi_122_013.jpg",
    alt: "Lush Parklands, Shaded Pathways and Sitting Gazebos",
    title: "Landscaped Central Park & Sit-outs",
    category: "Landscape",
    badge: "Landscape Plan",
  },
  {
    src: "/images/imgi_127_014.jpg",
    alt: "Children Play Area, Activity Turf and Open Lawns",
    title: "Children's Activity Turf & Green Lawns",
    category: "Landscape",
    badge: "Family Zone",
  },
  {
    src: "/images/imgi_87_006.jpg",
    alt: "Internal Road Network with Avenue Trees and Streetlights",
    title: "Blacktop Internal Roads & Avenue Trees",
    category: "Infrastructure",
    badge: "Road Infrastructure",
  },
  {
    src: "/images/imgi_132_015.jpg",
    alt: "Plotted Sector Streets with Curbs and Utility Corridors",
    title: "Organized Plot Streets & Curbs",
    category: "Infrastructure",
    badge: "Plotted Layout",
  },
  {
    src: "/images/imgi_137_016.jpg",
    alt: "Aerial Layout Perspective of Residential Plots and Boundaries",
    title: "Plotted Development Perspective",
    category: "Infrastructure",
    badge: "Avenue Layout",
  },
  {
    src: "/images/master-plan/sanctuary-layout.jpg",
    alt: "Detailed Master Plan Plot Layout with Numbered Plots",
    title: "Official 475-Plot Master Layout Drawing",
    category: "Master Plan",
    badge: "Official Plan",
  },
];

const CATEGORIES: Category[] = ["All", "Overview", "Clubhouse", "Landscape", "Infrastructure", "Master Plan"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((g) => g.category === activeCategory);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
    }
  }, [lightboxIndex, filtered.length]);

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filtered.length);
    }
  }, [lightboxIndex, filtered.length]);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-sanctuary-beige">
      <div className="container-sanctuary">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-4 block">VISUAL PORTFOLIO</span>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="section-title">
            The Sanctuary <span className="italic text-sanctuary-gold">Visual Experience</span>
          </h2>
          <p className="section-body max-w-2xl mx-auto mt-4">
            Browse through the authentic visual portfolio of SouthPride Sanctuary, including architectural renders, master plan drawings, and landscape concepts.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-manrope text-xs tracking-widest uppercase px-6 py-2.5 transition-all duration-300 font-medium ${
                activeCategory === cat
                  ? "bg-sanctuary-green text-sanctuary-gold shadow-md"
                  : "bg-white text-sanctuary-charcoal hover:bg-sanctuary-green hover:text-sanctuary-cream border border-sanctuary-gold/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.08 }}
              className="group relative bg-white border border-sanctuary-gold/30 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-sanctuary-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-sanctuary-green-dark/90 p-3 text-sanctuary-gold border border-sanctuary-gold/50">
                    <ZoomIn size={22} />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-sanctuary-green-dark/85 backdrop-blur-xs px-2.5 py-1 border border-sanctuary-gold/30">
                  <span className="font-manrope text-[11px] text-sanctuary-cream tracking-wider uppercase">
                    {item.badge}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white flex items-center justify-between">
                <div>
                  <h4 className="font-cormorant text-xl text-sanctuary-green font-medium">
                    {item.title}
                  </h4>
                  <span className="font-manrope text-[11px] text-sanctuary-gold-dark font-medium tracking-wider uppercase">
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center font-manrope text-xs text-sanctuary-charcoal-light opacity-60 italic mt-10">
          * Architectural renders and 3D perspectives illustrate the proposed design vision for SouthPride Sanctuary. Official engineering drawings and RERA filings govern final on-ground execution.
        </p>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-sanctuary-gold transition-colors z-50 p-2"
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 text-white hover:text-sanctuary-gold transition-colors z-50 p-2"
              aria-label="Previous image"
            >
              <ChevronLeft size={44} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 text-white hover:text-sanctuary-gold transition-colors z-50 p-2"
              aria-label="Next image"
            >
              <ChevronRight size={44} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[82vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[65vh] max-h-[750px]">
                <Image
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-cormorant text-2xl text-white">
                  {filtered[lightboxIndex].title}
                </h3>
                <p className="font-manrope text-xs text-sanctuary-gold uppercase tracking-wider mt-1">
                  {filtered[lightboxIndex].badge} · {filtered[lightboxIndex].category}
                </p>
              </div>
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-manrope text-xs">
              {lightboxIndex + 1} of {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

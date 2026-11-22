"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ZoomIn, ZoomOut, Maximize2, Minimize2, RotateCcw, Download, ArrowRight, Info, Move } from "lucide-react";
import { DISCLAIMER_MASTER_PLAN } from "@/lib/project-data";

export default function MasterPlan() {
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => setScale((s) => Math.min(Number((s + 0.25).toFixed(2)), 3.5));
  const handleZoomOut = () => setScale((s) => Math.max(Number((s - 0.25).toFixed(2)), 0.6));
  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    setPosition({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y,
    });
  };

  const handleTouchEnd = () => setIsDragging(false);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setScale((s) => Math.min(Number((s + 0.15).toFixed(2)), 3.5));
    } else {
      setScale((s) => Math.max(Number((s - 0.15).toFixed(2)), 0.6));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  const viewerContent = (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-[#123D2C] select-none ${
        isFullscreen ? "h-screen w-screen" : "h-[540px] md:h-[640px] w-full rounded-3xl"
      }`}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
    >
      {/* Floating Controls Toolbar */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-white">
        <button
          onClick={(e) => { e.stopPropagation(); handleZoomIn(); }}
          className="p-2.5 text-[#123D2C] hover:bg-[#EFEEE5] rounded-xl transition-colors"
          title="Zoom In (+)"
          aria-label="Zoom In"
        >
          <ZoomIn size={18} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); handleZoomOut(); }}
          className="p-2.5 text-[#123D2C] hover:bg-[#EFEEE5] rounded-xl transition-colors"
          title="Zoom Out (-)"
          aria-label="Zoom Out"
        >
          <ZoomOut size={18} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); handleReset(); }}
          className="p-2.5 text-[#123D2C] hover:bg-[#EFEEE5] rounded-xl transition-colors"
          title="Reset View"
          aria-label="Reset View"
        >
          <RotateCcw size={18} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
          className="p-2.5 text-[#123D2C] hover:bg-[#EFEEE5] rounded-xl transition-colors"
          title={isFullscreen ? "Exit Fullscreen (Esc)" : "Fullscreen"}
          aria-label="Fullscreen"
        >
          {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </button>
      </div>

      {/* Helper Guide */}
      <div className="absolute top-4 left-4 z-20 hidden sm:flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white shadow-md text-[#123D2C] text-xs font-manrope font-medium">
        <Move size={14} className="text-[#B28A42]" />
        <span>Click & drag to explore · Scroll to zoom</span>
      </div>

      {/* Layout Image Canvas */}
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          transformOrigin: "center center",
          transition: isDragging ? "none" : "transform 0.15s ease-out",
        }}
      >
        <div className="relative w-[1800px] h-[1275px] max-w-none flex-shrink-0">
          <Image
            src="/images/master-plan/sanctuary-layout.jpg"
            alt="SouthPride Sanctuary Master Layout Plan - Julkal Shankarpally"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1800px"
            className={`object-contain pointer-events-none transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center text-white/80 font-manrope text-sm">
              Loading High-Resolution Master Layout...
            </div>
          )}
        </div>
      </div>

      {/* Bottom Status bar */}
      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white shadow-md text-xs font-manrope text-[#252A26]">
        <span className="font-semibold text-[#123D2C]">Zoom: {Math.round(scale * 100)}%</span>
        <span className="text-[#A8B19A]">|</span>
        <span className="text-[#4A514B]">Original Master Layout Drawing</span>
      </div>

      {isFullscreen && (
        <button
          onClick={toggleFullscreen}
          className="absolute bottom-4 right-4 z-30 btn-primary text-xs py-2.5 px-6 shadow-2xl"
        >
          Exit Fullscreen
        </button>
      )}
    </div>
  );

  return (
    <section id="masterplan" className="py-24 md:py-32 bg-[#F8F7F1]">
      <div className="container-sanctuary">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-3 block">MASTER LAYOUT PLAN</span>
          <div className="w-12 h-0.5 bg-[#B28A42] mx-auto mb-6" />
          <h2 className="section-title max-w-3xl mx-auto">
            Find Your <span className="italic text-[#B28A42]">Ideal Plot</span>
          </h2>
          <p className="section-body max-w-2xl mx-auto mt-4">
            Explore the authentic high-resolution master layout of SouthPride Sanctuary. Use the interactive viewer below to zoom into plot sectors, road alignments, and community spaces.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-4 sm:p-5 mb-6 border border-[#A8B19A]/30 shadow-xs"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-manrope text-xs font-bold tracking-wider uppercase text-[#123D2C]">
              Layout Legend:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
              {[
                { color: "bg-[#22c55e]", label: "Available" },
                { color: "bg-[#ef4444]", label: "Allotted" },
                { color: "bg-[#3b82f6]", label: "Reserved" },
                { color: "bg-[#eab308]", label: "Mortgaged" },
                { color: "bg-[#6b7280]", label: "Unavailable" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${item.color} shadow-xs`} />
                  <span className="font-manrope text-xs font-medium text-[#252A26]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="shadow-2xl rounded-3xl overflow-hidden border-4 border-white"
        >
          {isFullscreen ? (
            <div className="fixed inset-0 z-50 bg-black flex flex-col">
              {viewerContent}
            </div>
          ) : (
            viewerContent
          )}
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 bg-white rounded-2xl p-5 border-l-4 border-[#B28A42] flex items-start gap-3 shadow-xs"
        >
          <Info size={18} className="text-[#B28A42] flex-shrink-0 mt-0.5" />
          <p className="font-manrope text-xs md:text-sm text-[#4A514B] leading-relaxed">
            <strong className="text-[#123D2C] font-semibold">Important Inventory Notice:</strong>{" "}
            {DISCLAIMER_MASTER_PLAN} Plot statuses shown on dated drawings do not represent live inventory. Always verify current availability directly with our designated sales advisors.
          </p>
        </motion.div>

        {/* Action Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 bg-white rounded-3xl p-8 sm:p-12 text-center border border-[#A8B19A]/30 shadow-sm"
        >
          <h3 className="font-cormorant text-3xl sm:text-4xl text-[#123D2C] font-semibold mb-3">
            Looking for a Specific Plot Dimension or Facing?
          </h3>
          <p className="font-manrope text-sm text-[#4A514B] max-w-2xl mx-auto mb-8 font-light">
            Plots range from 200 to 700 Sq. Yards across prime east, west, and corner orientations. Request the live inventory sheet with current pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary"
            >
              REQUEST LATEST PLOT AVAILABILITY
              <ArrowRight size={15} />
            </button>
            <a
              href="/documents/Sanctuary_Julkal_Available_List_20112026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-forest"
            >
              <Download size={14} />
              DOWNLOAD OFFICIAL LAYOUT PDF
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

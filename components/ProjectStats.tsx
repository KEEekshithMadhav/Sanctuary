"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECT } from "@/lib/project-data";

interface StatItem {
  value: string;
  numericValue?: number;
  label: string;
  note?: string;
  prefix?: string;
  suffix?: string;
}

const STATS: StatItem[] = [
  {
    value: "~45",
    label: "Acres",
    note: "Approximate",
    suffix: " Acres",
  },
  {
    value: "475",
    numericValue: 475,
    label: "Residential Plots",
  },
  {
    value: "200–700",
    label: "Plot Sizes (Sq. Yards)",
  },
  {
    value: "~₹30K",
    label: "Per Sq. Yard",
    note: "Indicative",
  },
  {
    value: "2027",
    label: "Target Possession",
    note: "To be confirmed",
  },
  {
    value: "P01100010026",
    label: "TG RERA Registration",
  },
];

function AnimatedCounter({ value, numericValue }: { value: string; numericValue?: number }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    if (!numericValue) {
      setDisplay(value);
      return;
    }
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(numericValue / 60);
    const timer = setInterval(() => {
      start = Math.min(start + step, numericValue);
      setDisplay(start.toString());
      if (start >= numericValue) clearInterval(timer);
    }, duration / 60);
    return () => clearInterval(timer);
  }, [inView, value, numericValue]);

  return (
    <span ref={ref} className="font-cormorant text-4xl md:text-5xl text-sanctuary-gold font-light">
      {numericValue ? display : value}
    </span>
  );
}

export default function ProjectStats() {
  return (
    <section className="bg-sanctuary-green py-20 md:py-28">
      <div className="container-sanctuary">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">THE NUMBERS</span>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="section-title-light">
            Planned with Precision.{" "}
            <span className="italic text-sanctuary-gold">Built for Scale.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-sanctuary-gold bg-opacity-20">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-sanctuary-green flex flex-col items-center justify-center text-center py-10 px-4"
            >
              <AnimatedCounter value={stat.value} numericValue={stat.numericValue} />
              <p className="font-manrope text-sanctuary-beige text-sm tracking-widest uppercase mt-2 mb-1">
                {stat.label}
              </p>
              {stat.note && (
                <p className="font-manrope text-sanctuary-gold text-xs opacity-60 italic">
                  {stat.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center font-manrope text-xs text-sanctuary-beige opacity-50 mt-8 italic max-w-2xl mx-auto"
        >
          All figures are indicative and subject to confirmation by the project team. Pricing and possession details may change without prior notice.
        </motion.p>
      </div>
    </section>
  );
}

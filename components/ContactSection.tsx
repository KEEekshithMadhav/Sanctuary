"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { CONTACT, WHATSAPP_URL_PRIMARY, WHATSAPP_URL_SECONDARY } from "@/lib/contact-data";
import { PROJECT } from "@/lib/project-data";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-sanctuary-green">
      <div className="container-sanctuary">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label block mb-4">CONTACT US</span>
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="section-title-light max-w-2xl mx-auto">
            Start Your{" "}
            <span className="italic text-sanctuary-gold">Sanctuary Journey</span>
          </h2>
          <p className="section-body-light max-w-xl mx-auto mt-4 opacity-80">
            Our team is ready to help you find the perfect plot, answer your questions and arrange a site visit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Call Primary */}
          <motion.a
            href={CONTACT.primary.tel}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="flex flex-col items-center text-center p-8 border border-sanctuary-gold border-opacity-30 hover:border-opacity-80 hover:bg-sanctuary-green-light transition-all group"
          >
            <Phone className="text-sanctuary-gold mb-4 group-hover:scale-110 transition-transform" size={32} />
            <span className="font-manrope text-sanctuary-gold text-xs tracking-widest uppercase mb-2">Call Primary</span>
            <span className="font-cormorant text-sanctuary-cream text-2xl">{CONTACT.primary.phone}</span>
          </motion.a>

          {/* WhatsApp Primary */}
          <motion.a
            href={WHATSAPP_URL_PRIMARY}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center p-8 border border-sanctuary-gold border-opacity-30 hover:border-opacity-80 hover:bg-sanctuary-green-light transition-all group"
          >
            <MessageCircle className="text-sanctuary-gold mb-4 group-hover:scale-110 transition-transform" size={32} />
            <span className="font-manrope text-sanctuary-gold text-xs tracking-widest uppercase mb-2">WhatsApp Primary</span>
            <span className="font-cormorant text-sanctuary-cream text-2xl">{CONTACT.primary.phone}</span>
          </motion.a>

          {/* Call Secondary */}
          <motion.a
            href={CONTACT.secondary.tel}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center p-8 border border-sanctuary-gold border-opacity-30 hover:border-opacity-80 hover:bg-sanctuary-green-light transition-all group"
          >
            <Phone className="text-sanctuary-gold mb-4 group-hover:scale-110 transition-transform" size={32} />
            <span className="font-manrope text-sanctuary-gold text-xs tracking-widest uppercase mb-2">Call Secondary</span>
            <span className="font-cormorant text-sanctuary-cream text-2xl">{CONTACT.secondary.phone}</span>
          </motion.a>

          {/* WhatsApp Secondary */}
          <motion.a
            href={WHATSAPP_URL_SECONDARY}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center text-center p-8 border border-sanctuary-gold border-opacity-30 hover:border-opacity-80 hover:bg-sanctuary-green-light transition-all group"
          >
            <MessageCircle className="text-sanctuary-gold mb-4 group-hover:scale-110 transition-transform" size={32} />
            <span className="font-manrope text-sanctuary-gold text-xs tracking-widest uppercase mb-2">WhatsApp Secondary</span>
            <span className="font-cormorant text-sanctuary-cream text-2xl">{CONTACT.secondary.phone}</span>
          </motion.a>
        </div>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 flex items-center justify-center gap-3 text-sanctuary-cream"
        >
          <MapPin className="text-sanctuary-gold flex-shrink-0" size={18} />
          <p className="font-manrope text-sm opacity-70">{PROJECT.location.full}</p>
        </motion.div>
      </div>
    </section>
  );
}

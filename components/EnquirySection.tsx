"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, CheckCircle, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import {
  CONTACT,
  WHATSAPP_URL_PRIMARY,
  WHATSAPP_URL_SECONDARY,
  ENQUIRY_TYPES,
  PLOT_SIZES,
  BUDGET_RANGES,
} from "@/lib/contact-data";

interface FormData {
  name: string;
  mobile: string;
  email: string;
  plotSize: string;
  budget: string;
  enquiryType: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  mobile: "",
  email: "",
  plotSize: "",
  budget: "",
  enquiryType: "Price Enquiry",
  message: "",
};

type FormStatus = "idle" | "loading" | "success" | "error";

function validateIndianMobile(mobile: string): boolean {
  return /^[6-9]\d{9}$/.test(mobile.replace(/\s+/g, "").replace(/^(\+91|91)/, ""));
}

export default function EnquirySection() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedLeadId, setSubmittedLeadId] = useState("");

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Please enter your full name";
    if (!form.mobile.trim()) {
      newErrors.mobile = "Please enter your mobile number";
    } else if (!validateIndianMobile(form.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit Indian mobile number";
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.enquiryType) newErrors.enquiryType = "Please select an enquiry type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent, type: "callback" | "visit") => {
    e.preventDefault();
    if (status === "loading") return;
    if (!validate()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name.trim(),
          mobileNumber: form.mobile.trim(),
          emailAddress: form.email.trim(),
          preferredPlotSize: form.plotSize.trim(),
          budgetRange: form.budget.trim(),
          enquiryType: form.enquiryType.trim(),
          questionsOrRequirements: form.message.trim(),
          enquirySubType: type === "visit" ? "Site Visit Booking" : "Callback Request",
          source: "Website Enquiry Desk",
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.error ||
          "Could not save enquiry to Google Sheets. Please contact our desk directly via Call or WhatsApp."
        );
      }

      setSubmittedLeadId(result.leadId || "");
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err?.message ||
        "There was an error submitting your enquiry. Please reach our official lines directly via Call or WhatsApp."
      );
    }
  };

  return (
    <section id="enquiry" className="py-24 md:py-32 bg-[#F8F7F1]">
      <div className="container-sanctuary">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <span className="section-label mb-3">CONNECT WITH SANCTUARY</span>
            <div className="w-12 h-0.5 bg-[#B28A42] mb-6" />

            <h2 className="section-title mb-6">
              Your Future Address{" "}
              <span className="italic text-[#B28A42]">Starts Here.</span>
            </h2>

            <p className="section-body mb-8">
              Interested in SouthPride Sanctuary? Connect with our dedicated sales advisors for the latest plot availability, current pricing, verified layout documents, or to schedule an on-site visit in Shankarpally.
            </p>

            {/* Official Support Cards with Clean Sans-Serif Typography */}
            <div className="flex flex-col gap-4 w-full mb-8">
              {/* Primary Sales Desk */}
              <div className="p-5 rounded-3xl bg-white border border-[#A8B19A]/30 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-manrope text-[11px] font-bold text-[#B28A42] uppercase tracking-[0.18em]">
                    PRIMARY SALES DESK
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                </div>
                
                <div className="font-manrope text-xl sm:text-2xl font-bold tracking-wide text-[#123D2C] mb-3">
                  +91 8501878585
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#EFEEE5]">
                  <a
                    href="tel:+918501878585"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#123D2C] text-[#F8F7F1] font-manrope text-xs font-semibold hover:bg-[#0C3325] transition-colors"
                  >
                    <Phone size={13} />
                    <span>Call Desk</span>
                  </a>
                  <a
                    href="https://wa.me/918501878585"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#EFEEE5] text-[#123D2C] font-manrope text-xs font-semibold hover:bg-[#A8B19A]/30 transition-colors"
                  >
                    <MessageCircle size={13} className="text-emerald-700" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Secondary Contact */}
              <div className="p-5 rounded-3xl bg-white border border-[#A8B19A]/30 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-manrope text-[11px] font-bold text-[#B28A42] uppercase tracking-[0.18em]">
                    SECONDARY CONTACT
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                </div>

                <div className="font-manrope text-xl sm:text-2xl font-bold tracking-wide text-[#123D2C] mb-3">
                  +91 9885858529
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#EFEEE5]">
                  <a
                    href="tel:+919885858529"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#123D2C] text-[#F8F7F1] font-manrope text-xs font-semibold hover:bg-[#0C3325] transition-colors"
                  >
                    <Phone size={13} />
                    <span>Call Team</span>
                  </a>
                  <a
                    href="https://wa.me/919885858529"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#EFEEE5] text-[#123D2C] font-manrope text-xs font-semibold hover:bg-[#A8B19A]/30 transition-colors"
                  >
                    <MessageCircle size={13} className="text-emerald-700" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#EFEEE5] w-full text-xs font-manrope text-[#4A514B]">
              <strong className="text-[#123D2C]">TG RERA Registration:</strong> P01100010026. Verified project details available on the Telangana State Real Estate Regulatory Authority portal.
            </div>
          </motion.div>

          {/* Right Column: Enquiry Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#A8B19A]/30 w-full"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle size={36} />
                </div>
                <h3 className="font-cormorant text-3xl text-[#123D2C] font-semibold">
                  Enquiry Received Successfully
                </h3>
                {submittedLeadId && (
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFEEE5] border border-[#A8B19A]/40 text-[#123D2C] font-manrope text-xs font-semibold">
                    <span>Lead Reference ID:</span>
                    <span className="text-[#B28A42] font-bold tracking-wide">{submittedLeadId}</span>
                  </div>
                )}
                <p className="font-manrope text-sm text-[#4A514B] max-w-md">
                  Thank you for your interest in SouthPride Sanctuary. Our dedicated sales advisor will connect with you promptly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <a
                    href={WHATSAPP_URL_PRIMARY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs"
                  >
                    WHATSAPP US DIRECTLY
                  </a>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn-outline-forest text-xs"
                  >
                    SUBMIT ANOTHER ENQUIRY
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={(e) => handleSubmit(e, "callback")} noValidate className="flex flex-col gap-5">
                <div>
                  <h3 className="font-cormorant text-3xl text-[#123D2C] font-semibold">
                    Request Plot Availability & Pricing
                  </h3>
                  <p className="font-manrope text-xs text-[#4A514B] mt-1 font-light">
                    Fill out the form below to receive official brochures, live inventory, and site visit schedules.
                  </p>
                </div>

                {/* Full Name */}
                <div>
                  <label className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#123D2C] block mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Kumar"
                    className={`w-full bg-[#F8F7F1] rounded-2xl px-5 py-3.5 font-manrope text-sm text-[#252A26] border transition-colors focus:outline-none focus:border-[#123D2C] ${
                      errors.name ? "border-red-400" : "border-[#EFEEE5]"
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-manrope">{errors.name}</p>}
                </div>

                {/* Mobile & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#123D2C] block mb-1.5">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`w-full bg-[#F8F7F1] rounded-2xl px-5 py-3.5 font-manrope text-sm text-[#252A26] border transition-colors focus:outline-none focus:border-[#123D2C] ${
                        errors.mobile ? "border-red-400" : "border-[#EFEEE5]"
                      }`}
                    />
                    {errors.mobile && <p className="text-red-500 text-xs mt-1 font-manrope">{errors.mobile}</p>}
                  </div>

                  <div>
                    <label className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#123D2C] block mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rajesh@example.com"
                      className={`w-full bg-[#F8F7F1] rounded-2xl px-5 py-3.5 font-manrope text-sm text-[#252A26] border transition-colors focus:outline-none focus:border-[#123D2C] ${
                        errors.email ? "border-red-400" : "border-[#EFEEE5]"
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 font-manrope">{errors.email}</p>}
                  </div>
                </div>

                {/* Plot Size & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#123D2C] block mb-1.5">
                      Preferred Plot Size
                    </label>
                    <select
                      name="plotSize"
                      value={form.plotSize}
                      onChange={handleChange}
                      className="w-full bg-[#F8F7F1] rounded-2xl px-5 py-3.5 font-manrope text-sm text-[#252A26] border border-[#EFEEE5] focus:outline-none focus:border-[#123D2C]"
                    >
                      <option value="">Select Plot Size</option>
                      {PLOT_SIZES.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#123D2C] block mb-1.5">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full bg-[#F8F7F1] rounded-2xl px-5 py-3.5 font-manrope text-sm text-[#252A26] border border-[#EFEEE5] focus:outline-none focus:border-[#123D2C]"
                    >
                      <option value="">Select Budget</option>
                      {BUDGET_RANGES.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Enquiry Type */}
                <div>
                  <label className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#123D2C] block mb-1.5">
                    Enquiry Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="enquiryType"
                    value={form.enquiryType}
                    onChange={handleChange}
                    className="w-full bg-[#F8F7F1] rounded-2xl px-5 py-3.5 font-manrope text-sm text-[#252A26] border border-[#EFEEE5] focus:outline-none focus:border-[#123D2C]"
                  >
                    {ENQUIRY_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#123D2C] block mb-1.5">
                    Questions or Specific Requirements
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us what you are looking for..."
                    className="w-full bg-[#F8F7F1] rounded-2xl px-5 py-3.5 font-manrope text-sm text-[#252A26] border border-[#EFEEE5] focus:outline-none focus:border-[#123D2C] resize-none"
                  />
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <div className="flex items-start gap-2.5 p-4 rounded-2xl bg-red-50 text-red-700 text-xs font-manrope">
                    <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary flex-1 py-4 text-xs font-bold"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="animate-spin" size={15} />
                        SUBMITTING...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        REQUEST A CALLBACK
                        <ArrowRight size={14} />
                      </span>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e as unknown as React.FormEvent, "visit")}
                    disabled={status === "loading"}
                    className="btn-outline-forest flex-1 py-4 text-xs font-bold"
                  >
                    BOOK A SITE VISIT
                  </button>
                </div>

                <p className="font-manrope text-[11px] text-[#A8B19A] text-center mt-1">
                  We respect your privacy. Your information is securely handled and never shared.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

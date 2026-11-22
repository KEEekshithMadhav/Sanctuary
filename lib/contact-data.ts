// ============================================================
// SOUTHPRIDE SANCTUARY – CENTRALIZED CONTACT CONFIGURATION
// Update these values when contact details change.
// ============================================================

export const CONTACT = {
  primary: {
    label: "PRIMARY SALES DESK",
    name: "Sales Team",
    phone: "+91 8501878585",
    phoneRaw: "918501878585",
    tel: "tel:+918501878585",
    whatsapp: "https://wa.me/918501878585",
  },
  secondary: {
    label: "SECONDARY CONTACT",
    name: "Project Team",
    phone: "+91 9885858529",
    phoneRaw: "919885858529",
    tel: "tel:+919885858529",
    whatsapp: "https://wa.me/919885858529",
  },
  email: "enquiry@southpriderealty.com", // Update when confirmed
  website: "https://southpriderealty.com/sanctuary/",
  address: "SouthPride Sanctuary, Julkal, Shankarpally, West Hyderabad, Telangana",
};

export const WHATSAPP_MESSAGE =
  "Hello, I am interested in SouthPride Sanctuary, Shankarpally. Please share the latest plot availability, pricing and site visit details.";

export const WHATSAPP_URL_PRIMARY = `https://wa.me/${CONTACT.primary.phoneRaw}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const WHATSAPP_URL_SECONDARY = `https://wa.me/${CONTACT.secondary.phoneRaw}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const ENQUIRY_TYPES = [
  "Price Enquiry",
  "Plot Availability",
  "Site Visit",
  "Project Details",
  "Other",
];

export const PLOT_SIZES = [
  "200–300 Sq. Yards",
  "300–400 Sq. Yards",
  "400–500 Sq. Yards",
  "500–700 Sq. Yards",
  "Open to All Sizes",
];

export const BUDGET_RANGES = [
  "Below ₹60 Lakhs",
  "₹60–90 Lakhs",
  "₹90 Lakhs – ₹1.2 Crore",
  "₹1.2–2 Crore",
  "Above ₹2 Crore",
  "Flexible",
];

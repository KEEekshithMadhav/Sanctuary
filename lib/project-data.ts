// ============================================================
// SOUTHPRIDE SANCTUARY – CENTRALIZED PROJECT CONFIGURATION
// Update these values when project details change.
// ============================================================

export const PROJECT = {
  name: "SouthPride Sanctuary",
  nameShort: "Sanctuary",
  tagline: "THE ART OF ELEVATED LIVING",
  subTagline: "Where Nature, Space & Modern Living Come Together.",
  type: "Premium Residential Plotted Development",
  location: {
    village: "Julkal",
    mandal: "Shankarpally",
    district: "West Hyderabad",
    state: "Telangana",
    full: "Julkal, Shankarpally, West Hyderabad, Telangana",
    coordinates: { lat: 17.4891, lng: 78.1073 }, // Approx Shankarpally area - verify with client
    googleMapsUrl: "https://maps.google.com/?q=Shankarpally,Telangana",
    directionsUrl: "https://maps.google.com/maps/dir//Julkal,Shankarpally,Telangana",
  },
  stats: {
    acres: "~45",
    acresNote: "Approximate – verify against official area statement",
    totalPlots: 475,
    plotSizeMin: 200,
    plotSizeMax: 700,
    plotSizeUnit: "Sq. Yards",
    plotSizeNote: "Confirm final range with project team",
    pricePerSqYard: "~₹30,000",
    priceNote: "Indicative – contact sales for current pricing",
    possession: "2027",
    possessionNote: "Target – verify with project team before publishing",
  },
  rera: {
    number: "P01100010026",
    state: "Telangana",
    authority: "TG RERA",
    verifyUrl: "https://rera.telangana.gov.in",
  },
  hmda: {
    reference: "010327/LO/HMDA/2691/SKP/2024",
    status: "Draft Layout Letter (dated 3 July 2025)",
    note: "This is a Draft Layout Letter. Final approval status to be confirmed.",
  },
  description:
    "Discover SouthPride Sanctuary, an exclusive plotted community in the Shankarpally growth corridor of West Hyderabad. A thoughtfully planned residential destination designed around space, connectivity and the freedom to create your future home.",
  longDescription:
    "SouthPride Sanctuary is a premium residential plotted development spanning approximately 45 acres in Julkal, Shankarpally. Thoughtfully planned with spacious plot options ranging from 200 to 700 square yards, the project features a proposed organized road network, landscaped open spaces, avenue plantation, and a planned lifestyle clubhouse. Located in the rapidly growing western corridor of Hyderabad, Sanctuary offers the perfect balance of nature, space and urban connectivity.",
};

export const CONNECTIVITY = [
  { destination: "Shankarpally Railway Station", time: "10 mins", icon: "train" },
  { destination: "IIT Hyderabad / ICFAI", time: "20 mins", icon: "graduation" },
  { destination: "ORR Muthangi Junction", time: "25 mins", icon: "road" },
  { destination: "Financial District / Gachibowli", time: "35 mins", icon: "building" },
  { destination: "HITEC City", time: "45 mins", icon: "tech" },
];

export const HIGHLIGHTS = [
  {
    title: "Spacious Plot Options",
    description: "Choose from a range of residential plots from 200 to 700 sq. yards to suit your vision.",
    icon: "layout",
    status: "planned",
  },
  {
    title: "Internal Road Network",
    description: "Planned internal roads with organized infrastructure connecting all plot zones.",
    icon: "road",
    status: "planned",
  },
  {
    title: "Landscaped Open Spaces",
    description: "Proposed parks, green buffers and landscaped zones for a nature-connected lifestyle.",
    icon: "tree",
    status: "planned",
  },
  {
    title: "Avenue Plantation",
    description: "Planned avenue plantation along internal roads for shade, beauty and air quality.",
    icon: "leaf",
    status: "planned",
  },
  {
    title: "Street Lighting",
    description: "Proposed street lighting across the entire layout for safety and visibility.",
    icon: "lamp",
    status: "planned",
  },
  {
    title: "Rainwater Harvesting",
    description: "Planned sustainable rainwater harvesting infrastructure as per regulatory requirements.",
    icon: "droplets",
    status: "planned",
  },
  {
    title: "Underground Utilities",
    description: "Proposed underground utility infrastructure for a clean, organized living environment.",
    icon: "zap",
    status: "planned",
  },
  {
    title: "Clubhouse & Lifestyle Facilities",
    description: "Planned lifestyle clubhouse with recreational, wellness and community spaces.",
    icon: "building2",
    status: "planned",
    note: "Subject to confirmed final scope.",
  },
  {
    title: "RERA Registered Project",
    description: "Registered with TG RERA – Registration No. P01100010026.",
    icon: "shield",
    status: "confirmed",
  },
];

export const CLUBHOUSE_FLOORS = [
  {
    floor: "Ground Floor",
    spaces: [
      "Reception & Lobby",
      "Cafeteria",
      "Kitchen & Preparation Area",
      "Pre-Function Lobby",
      "Banquet Hall",
      "Green Rooms",
      "Washrooms",
    ],
  },
  {
    floor: "First Floor",
    spaces: [
      "Indoor Games Area",
      "Waiting Lounge",
      "Yoga & Meditation Room",
      "Outdoor Bar Area",
      "Washrooms",
    ],
  },
  {
    floor: "Second Floor",
    spaces: ["Guest Rooms", "Waiting Lounge", "Gym Area", "Washrooms"],
  },
];

export const CLUBHOUSE_OUTDOOR = [
  "Swimming Pool",
  "Outdoor Seating Area",
  "Outdoor Plaza",
  "Children's Play Area",
  "Parking",
];

export const INVESTMENT_POINTS = [
  {
    heading: "Western Hyderabad Growth Corridor",
    body: "Shankarpally sits in one of Hyderabad's fastest-growing residential corridors, with expanding infrastructure and rising demand for quality plotted development.",
  },
  {
    heading: "Proximity to Employment Hubs",
    body: "Relatively quick access to the Financial District, Gachibowli and HITEC City makes this location attractive to working professionals seeking spacious home plots.",
  },
  {
    heading: "World-Class Education Access",
    body: "Close proximity to IIT Hyderabad, ICFAI and other educational institutions adds to the long-term desirability of the location.",
  },
  {
    heading: "Long-Term Land Ownership",
    body: "A registered residential plot in a planned layout offers buyers the freedom to construct their dream home at their own pace.",
  },
  {
    heading: "Organized Layout & Planned Infrastructure",
    body: "Unlike unorganized land parcels, Sanctuary offers a planned, RERA-registered layout with organized infrastructure and transparent documentation.",
  },
];

export const DISCLAIMER_GENERAL =
  "Information on this website is for informational purposes only. All project details including plot sizes, pricing, project extent, possession date and facilities are indicative and subject to change. Please verify all information with the SouthPride sales team before making any decisions. Past land price trends are not indicative of future performance. This website does not constitute a legal offer to sell or guarantee any returns.";

export const DISCLAIMER_MASTER_PLAN =
  "Plot availability and status shown are based on a dated availability document and are subject to change. Please contact our sales team for the latest, confirmed plot availability before making any enquiry or booking decision.";

export const DISCLAIMER_RERA =
  "TG RERA Registration No. P01100010026. Registered with Telangana Real Estate Regulatory Authority. The HMDA document referenced is a Draft Layout Letter dated 3 July 2025. Final layout approval status is to be verified with HMDA before publication.";

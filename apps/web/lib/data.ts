export const siteConfig = {
  name: "ASYX Group",
  legalName: "ASYX Group Company Limited",
  shortName: "ASYX",
  tagline: "Let's Achieve Together",
  description:
    "Tanzanian technology company delivering smart technologies, ICT infrastructure, cybersecurity, telematics, software solutions and managed services.",
  location: "Tropical Center, 3rd Floor, New Bagamoyo Road, Plot No. 30/00, House No. 301, Tanzania",
  phone: "+255 (0) 755 432 071",
  email: "info@asyx.co.tz",
  website: "asyx.co.tz",
  whatsapp: "255755432071",
  foundedYear: 2009,
  social: {
    instagram: "https://instagram.com/asyxgroupcompany",
  },
}

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/technology" },
  { label: "Clients", href: "/clients" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export const tickerItems = [
  "Smart Technologies",
  "Cybersecurity",
  "ICT Infrastructure",
  "Telematics",
  "Enterprise Software",
  "Managed Services",
  "Systems Integration",
]

export const services = [
  {
    title: "Smart Technologies",
    slug: "smart-technologies",
    icon: "cpu",
    description: "Integrated hardware, software and analytics for smarter operations and revenue performance.",
    items: ["Smart parking systems", "Smart mobility & access control", "IoT monitoring", "Digital track-and-trace"],
    image: "/asyx/smart-tech.jpg",
    cta: { label: "Explore", href: "/services/smart-technologies" },
  },
  {
    title: "Telematics Solutions",
    slug: "telematics",
    icon: "route",
    description: "Vehicle, asset, fleet, fuel and mission-critical communication solutions.",
    items: ["Vehicle & asset tracking", "Fleet performance", "Fuel monitoring", "Push-to-Talk over Cellular"],
    image: "/asyx/hero.jpg",
    cta: { label: "Explore", href: "/services/telematics" },
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    icon: "shield",
    description: "Enterprise-grade protection, detection, response, data security and compliance solutions.",
    items: ["Endpoint protection", "Network security", "Threat detection & response", "Data protection", "Compliance"],
    image: "/asyx/cybersecurity.jpg",
    cta: { label: "Explore", href: "/services/cybersecurity" },
  },
  {
    title: "Software Solutions",
    slug: "software",
    icon: "code",
    description: "Enterprise and sector-specific software designed around operational control and productivity.",
    items: ["ERP", "CRM", "Operations Management Systems", "EMR / Hospital Management", "Micro-Finance Systems", "Analytics & reporting"],
    image: "/asyx/software.jpg",
    cta: { label: "Explore", href: "/services/software" },
  },
  {
    title: "ICT Infrastructure",
    slug: "ict-infrastructure",
    icon: "server",
    description: "End-to-end infrastructure design and implementation for mission-critical environments.",
    items: ["Data centers & server rooms", "LAN / WAN / fiber / wireless", "Structured cabling", "UPS & redundant power", "CCTV, PABX, VPN & VoIP"],
    image: "/asyx/infrastructure.jpg",
    cta: { label: "Explore", href: "/services/ict-infrastructure" },
  },
  {
    title: "Hardware Distribution",
    slug: "hardware-distribution",
    icon: "monitor",
    description: "Enterprise ICT hardware supply supported by lifecycle management and after-sales support.",
    items: ["Servers & networking", "Security equipment", "End-user devices", "Power & data center equipment", "ICT peripherals"],
    image: "/asyx/infrastructure.jpg",
    cta: { label: "Explore", href: "/services/hardware-distribution" },
  },
  {
    title: "Managed Services",
    slug: "managed-services",
    icon: "headset",
    description: "SLA-based technical support and managed services focused on reliability and continuity.",
    items: ["Preventive maintenance", "Corrective maintenance", "Annual Maintenance Contracts", "Emergency support", "Upgrades & optimization"],
    image: "/asyx/managed-services.jpg",
    cta: { label: "Explore", href: "/services/managed-services" },
  },
  {
    title: "Labour Outsourcing",
    slug: "labour-outsourcing",
    icon: "users",
    description: "ELRA-compliant labour outsourcing and manpower supply for ICT-enabled operations.",
    items: ["ICT technicians", "System operators", "Smart parking staff", "Call center management", "Payroll & statutory compliance"],
    image: "/asyx/outsourcing.jpg",
    cta: { label: "Explore", href: "/services/labour-outsourcing" },
  },
  {
    title: "ICT Training",
    slug: "ict-training",
    icon: "graduation",
    description: "Practical ICT training and institutional capacity-building programs.",
    items: ["Networks & systems administration", "Cybersecurity awareness", "ICT operations & support", "Smart technology systems"],
    image: "/asyx/training.jpg",
    cta: { label: "Explore", href: "/services/ict-training" },
  },
]

export const statsNumbers = [
  { value: "16+", label: "Years of continuous operation" },
  { value: "9", label: "Core service pillars" },
  { value: "2009", label: "Year established" },
  { value: "TZ", label: "Local presence, enterprise standards" },
]

export const values = [
  { title: "Professionalism", description: "Competence, accountability and excellence." },
  { title: "Integrity", description: "Honest, transparent and ethical conduct." },
  { title: "Innovation", description: "Creativity, continuous improvement and practical solutions." },
  { title: "Teamwork", description: "Effective collaboration toward shared goals." },
  { title: "Compliance", description: "Adherence to applicable laws, standards and governance requirements." },
]

export const whyChooseUs = [
  "16+ years of proven operational experience",
  "End-to-end capability: design, build, operate and support",
  "Strong government and parastatal track record",
  "Focus on reliability, security and compliance",
  "Local presence with enterprise-grade standards",
]

export const clientSectors = [
  { sector: "Energy & Utilities", clients: "TANESCO, EWURA, TPDC, GASCO" },
  { sector: "Transport & Aviation", clients: "TAA, TCAA, TANROADS, LATRA, Precision Air" },
  { sector: "Finance & Regulation", clients: "BOT, TRA, NSSF, PSSSF, NHIF" },
  { sector: "Government & Public Institutions", clients: "Ministries, Agencies, Authorities, LGAs" },
  { sector: "Education & Research", clients: "UDSM, VETA, NECTA, NIMR, TOSCI" },
]

export const governancePoints = [
  "Compliance with Tanzanian labour, tax and procurement laws",
  "Ethical business conduct",
  "Risk management and accountability",
  "Secure handling of client systems and data",
]

export const quoteOptions = services.map((service) => service.title)

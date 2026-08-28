import { siteConfig } from "@/lib/data"

export const site = {
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  tagline: siteConfig.tagline,
  foundedYear: siteConfig.foundedYear,
  contact: {
    phone: siteConfig.phone,
    phoneHref: "tel:+255755432071",
    whatsapp: "https://wa.me/255755432071",
    email: siteConfig.email,
    address: {
      line1: "Tropical Center, 3rd Floor, New Bagamoyo Road",
      line2: "Plot No. 30/00 | House No. 301, Tanzania",
      country: "Tanzania",
      mapsUrl: "https://maps.google.com/?q=Tropical+Center+New+Bagamoyo+Road+Dar+es+Salaam",
    },
  },
} as const

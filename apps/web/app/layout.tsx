import type { Metadata } from "next"
import { Geist_Mono, Roboto } from "next/font/google"
import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { siteConfig } from "@/lib/data"
import { cn } from "@workspace/ui/lib/utils"

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" })
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.asyx.co.tz"),
  title: { default: "ASYX Group — Technology, Cybersecurity & ICT Solutions in Tanzania", template: "%s — ASYX Group" },
  description: siteConfig.description,
  keywords: ["ASYX Group", "ICT Tanzania", "cybersecurity Tanzania", "smart technologies", "telematics Tanzania", "software solutions Tanzania", "ICT infrastructure Tanzania", "managed services"],
  authors: [{ name: siteConfig.name }],
  openGraph: { title: "ASYX Group — Let's Achieve Together", description: siteConfig.description, url: "https://www.asyx.co.tz", siteName: siteConfig.name, locale: "en_TZ", type: "website" },
  robots: { index: true, follow: true },
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  url: "https://www.asyx.co.tz",
  foundingDate: "2009",
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: { "@type": "PostalAddress", streetAddress: "Tropical Center, 3rd Floor, New Bagamoyo Road, Plot No. 30/00, House No. 301", addressCountry: "TZ" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning className={cn("antialiased", fontMono.variable, "font-sans", roboto.variable)}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} /><ThemeProvider><div className="flex min-h-svh flex-col"><SiteNavbar /><main className="flex-1">{children}</main><SiteFooter /></div></ThemeProvider></body></html>
}

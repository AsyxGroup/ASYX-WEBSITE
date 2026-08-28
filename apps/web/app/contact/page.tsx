import { Mail, MapPin, Phone } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { ContactForm } from "@/components/contact-form"
import { InstagramIcon } from "@/components/social-icons"
import { siteConfig } from "@/lib/data"
export const metadata={title:"Contact ASYX Group",description:"Get in touch with ASYX Group Company Limited."}
export default function Contact(){return <><PageHero label="Get in touch" title="Talk to ASYX about your technology requirement." subtitle="From a focused deployment to a mission-critical multi-system environment, start by sharing the outcome you need." bgImage="/asyx/contact.jpg"/><Section><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div className="rounded-2xl border border-border bg-card p-6 sm:p-8"><h2 className="text-2xl font-semibold">Corporate information</h2><div className="mt-7 space-y-5 text-sm"><a href="tel:+255755432071" className="flex gap-3"><Phone className="size-5 text-primary"/><span>{siteConfig.phone}</span></a><a href={`mailto:${siteConfig.email}`} className="flex gap-3"><Mail className="size-5 text-primary"/><span>{siteConfig.email}</span></a><div className="flex gap-3"><MapPin className="size-5 shrink-0 text-primary"/><span>{siteConfig.location}</span></div><a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="flex gap-3"><InstagramIcon className="size-5 text-primary" aria-hidden="true"/><span>@asyxgroupcompany</span></a></div></div><ContactForm/></div></Section></>}

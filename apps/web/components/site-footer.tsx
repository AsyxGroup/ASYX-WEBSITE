"use client"
import Link from "next/link"
import { Phone, Mail, MapPin, ArrowRight, ChevronRight } from "lucide-react"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { InstagramIcon } from "@/components/social-icons"
import { siteConfig, services } from "@/lib/data"

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="group inline-flex items-center gap-1.5 py-1.5 text-sm text-muted-foreground transition hover:text-primary"><ChevronRight className="size-3.5" />{children}</Link>
}
export function SiteFooter() {
 const year=new Date().getFullYear()
 return <footer className="relative overflow-hidden border-t border-border bg-[#0d2741] text-white">
   <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(223,31,61,.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(143,34,93,.25),transparent_32%)]" />
   <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <div className="grid gap-10 lg:grid-cols-[1.25fr_.9fr_.9fr]">
      <RevealOnScroll><div><img src="/asyx/logo.png" alt="ASYX Group" className="h-16 w-auto rounded-md bg-white p-2" /><p className="mt-5 max-w-md text-sm leading-7 text-white/70">Creative, innovative and simplified technological solutions tailored to Africa&apos;s environmental and infrastructural challenges.</p><Link href="/request-quote" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white">Discuss your requirement <ArrowRight className="size-4" /></Link></div></RevealOnScroll>
      <div><h3 className="text-sm font-semibold uppercase tracking-[.18em]">Core Services</h3><div className="mt-4 grid grid-cols-1">{services.slice(0,6).map(s=><FooterLink key={s.slug} href={s.cta.href}>{s.title}</FooterLink>)}</div></div>
      <div><h3 className="text-sm font-semibold uppercase tracking-[.18em]">Contact</h3><div className="mt-5 space-y-4 text-sm text-white/70"><a href="tel:+255755432071" className="flex gap-3 hover:text-white"><Phone className="mt-0.5 size-4 text-primary" />{siteConfig.phone}</a><a href={`mailto:${siteConfig.email}`} className="flex gap-3 hover:text-white"><Mail className="mt-0.5 size-4 text-primary" />{siteConfig.email}</a><div className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-primary" /><span>{siteConfig.location}</span></div><a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-white"><InstagramIcon className="mt-0.5 size-4 text-primary" aria-hidden="true" />@asyxgroupcompany</a></div></div>
    </div>
   </div>
   <div className="relative border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><p>© {year} {siteConfig.legalName}. All rights reserved.</p><div className="flex gap-5"><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms">Terms</Link><Link href="/contact">Contact</Link></div></div></div>
   {/* <div className="pointer-events-none select-none overflow-hidden text-center text-[20vw] font-black leading-[.7] text-white/[.025]">ASYX</div> */}
 </footer>
}

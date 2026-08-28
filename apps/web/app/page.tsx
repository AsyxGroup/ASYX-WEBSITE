import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Activity,
} from "lucide-react"
import { Section, SectionHeader } from "@/components/section"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { Marquee, AnimatedCounter } from "@/components/animations"
import { QuoteCTA } from "@/components/quote-cta"
import {
  services,
  tickerItems,
  statsNumbers,
  whyChooseUs,
  clientSectors,
} from "@/lib/data"

const serviceImages = [
  "https://infotech.qa/wp-content/uploads/2025/01/how-Smart-Parking-works-1024x569.jpg",
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=85",
  "https://www.ipriver.co.ke/Images/products/enterprise%20security.jpg",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=85",
  "https://www.plan-group.com/sites/g/files/tkmtob306/files/styles/coh_medium/public/2025-03/PGrbcD71658.jpg.webp?itok=m6yQRkzB",
  "https://www.axialpc.com/assets/img/mobile_laptops.png",
  "https://grupoapotecnologia.com/networking-comunicaciones/switching-routing-wifi/img/switching-routing-wifi-support.webp",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85",
]


export default function HomePage() {
  return (
    <>
      <section className="relative isolate -mt-[72px] min-h-[760px] overflow-hidden bg-[#eef3f7] pt-[96px] text-[#10243b] sm:-mt-[76px] sm:pt-[100px] lg:min-h-[720px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/asyx/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/72 dark:bg-[#071a2d]/68" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/52 to-white/12 dark:from-[#071a2d]/92 dark:via-[#071a2d]/64 dark:to-[#071a2d]/18" />
        <div className="absolute left-[7%] top-[20%] size-2 rounded-full bg-primary/30" />
        <div className="absolute bottom-[10%] right-[8%] size-2.5 rounded-full bg-[#b06a35]/25" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-8 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="w-full max-w-[760px] rounded-[30px] border border-white/60 bg-white/82 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0b2138]/82 sm:p-7 lg:p-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-xs font-semibold text-muted-foreground shadow-sm">
                <span className="rounded-full bg-primary px-3 py-1 text-white">
                  Since 2009
                </span>
                Tanzanian technology company
              </div>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-[#11243d] dark:text-white sm:text-5xl lg:text-[3.7rem]">
                Creative, innovative and simplified{" "}
                <span className="text-primary">technological solutions.</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-white/75 sm:text-lg">
                ASYX designs, deploys, operates and supports smart technologies,
                ICT infrastructure, cybersecurity, telematics, enterprise software
                and managed services for mission-critical environments.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Explore our capabilities <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl border border-border bg-background/90 px-5 py-3.5 text-sm font-semibold text-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-muted"
                >
                  Contact ASYX
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border/70 pt-4 text-xs font-semibold uppercase tracking-[.14em] text-muted-foreground">
                <span>Trusted technology partner</span>
                <span className="hidden size-1 rounded-full bg-primary sm:block" />
                <span>ICT · Cybersecurity · Smart Systems</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Technology ticker: keep a small breathing space below the hero. */}
      <section className="mt-3 border-y border-border bg-background py-4 sm:mt-4">
        <Marquee speed={28}>
          {tickerItems.map((i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 whitespace-nowrap text-xs font-semibold uppercase tracking-[.18em] text-muted-foreground"
            >
              <span className="size-1.5 rounded-full bg-primary" />
              {i}
            </span>
          ))}
        </Marquee>
      </section>

      {/* Core services styled like Nutrio Meals' "Choose Your Perfect Plan" cards. */}
      <Section className="pt-10 sm:pt-12 lg:pt-14">
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary">
              Core service pillars
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              End-to-end technology capability under one accountable partner.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              From infrastructure and cybersecurity to smart systems, software,
              outsourcing and training, ASYX supports the full technology lifecycle.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const number = String(i + 1).padStart(2, "0")
            const image = serviceImages[i % serviceImages.length]

            return (
              <RevealOnScroll key={s.slug} delay={i * 45}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-border bg-card shadow-[0_14px_45px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_22px_60px_rgba(15,23,42,0.14)]">
                  <div className="relative h-48 overflow-hidden bg-muted sm:h-52">
                    <img
                      src={image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d]/55 via-transparent to-transparent" />
                    <span className="absolute right-4 top-4 rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-[11px] font-bold tracking-[.16em] text-primary shadow-sm backdrop-blur">
                      {number}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-muted-foreground">
                      {s.description}
                    </p>

                    <div className="my-6 h-px bg-border" />

                  <ul className="space-y-3">
                    {s.items.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                    <Link
                      href={s.cta.href}
                      className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                    >
                      Explore service <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </article>
              </RevealOnScroll>
            )
          })}
        </div>
      </Section>

      <Section className="bg-[#0d741] text-black">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <RevealOnScroll>
            <img
              src="/asyx/integration.jpg"
              alt="Systems integration and partnerships"
              className="w-full rounded-3xl object-cover shadow-2xl"
            />
          </RevealOnScroll>

          <RevealOnScroll>
            <span className="text-xs font-semibold uppercase tracking-[.2em] text-[#ff657b]">
              Systems integration & partnerships
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Complex environments need systems that work together.
            </h2>
            <p className="mt-4 leading-7 text-black/70">
              ASYX supports environments that combine multiple platforms and
              technologies, working with technology partners and operators to
              promote interoperability, scalability and compliance.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Design and integration across multiple platforms",
                "Operational support for mission-critical systems",
                "Scalable solutions built around client environments",
              ].map((x) => (
                <div key={x} className="flex gap-3 text-sm text-black/80">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#ff657b]" />
                  {x}
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {statsNumbers.map((s, i) => (
            <RevealOnScroll key={s.label} delay={i * 70}>
              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <AnimatedCounter
                  value={s.value}
                  className="text-3xl font-semibold text-primary sm:text-4xl"
                />
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/40">
        <div className="grid gap-10 lg:grid-cols-2">
          <RevealOnScroll>
            <SectionHeader
              eyebrow="Why ASYX"
              title="Built for regulated and high-accountability environments."
              description="The company profile emphasizes operational experience, end-to-end capability, reliability, security, compliance and a strong public-sector track record."
            />
            <div className="mt-6 space-y-3">
              {whyChooseUs.map((x, i) => (
                <div
                  key={x}
                  className="flex items-start gap-4 rounded-xl border border-border bg-background p-4"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-white">
                    0{i + 1}
                  </span>
                  <span className="pt-1 text-sm font-medium">{x}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <Activity className="size-6 text-primary" />
                <h3 className="text-xl font-semibold">Sector experience</h3>
              </div>

              <div className="space-y-5">
                {clientSectors.map((s) => (
                  <div key={s.sector}>
                    <p className="font-semibold">{s.sector}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {s.clients}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/clients"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                View sector experience <ArrowRight className="size-4" />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </Section>

      <QuoteCTA />
    </>
  )
}
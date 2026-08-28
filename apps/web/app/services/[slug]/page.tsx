import { notFound } from "next/navigation"
import { CheckCircle2 } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { QuoteCTA } from "@/components/quote-cta"
import { services } from "@/lib/data"
export function generateStaticParams(){return services.map(s=>({slug:s.slug}))}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const s=services.find(x=>x.slug===slug);if(!s)notFound();return <><PageHero label="ASYX service" title={s.title} subtitle={s.description} bgImage={s.image}/><Section><div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr]"><div><h2 className="text-3xl font-semibold">Capability scope</h2><p className="mt-4 leading-7 text-muted-foreground">ASYX approaches this capability as part of an integrated technology lifecycle, from requirement definition and design through deployment, operation, support and continuous improvement.</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{s.items.map(x=><div key={x} className="flex gap-3 rounded-xl border border-border bg-card p-4"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary"/><span className="text-sm font-medium">{x}</span></div>)}</div></div><img src={s.image} alt="" className="w-full rounded-3xl border border-border object-cover shadow-lg"/></div></Section><QuoteCTA title={`Discuss ${s.title} with ASYX.`}/></>}

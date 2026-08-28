import type { MetadataRoute } from "next"
import { services } from "@/lib/data"
export default function sitemap():MetadataRoute.Sitemap{const base="https://www.asyx.co.tz";const routes=["","/services","/technology","/clients","/about","/contact","/request-quote","/privacy-policy","/terms"];return [...routes.map(r=>({url:`${base}${r}`,lastModified:new Date()})),...services.map(s=>({url:`${base}/services/${s.slug}`,lastModified:new Date()}))]}

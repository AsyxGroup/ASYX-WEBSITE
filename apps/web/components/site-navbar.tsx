"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, X, Clock3 } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { navLinks, siteConfig } from "@/lib/data"

export function SiteNavbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Set your actual launch date/time here.
  // This example is approximately 3 days from now.
  const launchDate = new Date("2026-08-31T00:00:00+03:00").getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  // Countdown
  useEffect(() => {
    const updateCountdown = () => {
      const difference = launchDate - Date.now()

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        return
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }

    updateCountdown()

    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [launchDate])

  const countdownText = `${timeLeft.days}d ${String(timeLeft.hours).padStart(
    2,
    "0"
  )}h ${String(timeLeft.minutes).padStart(2, "0")}m ${String(
    timeLeft.seconds
  ).padStart(2, "0")}s`

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-transparent px-3 py-3 sm:px-5 lg:px-8">
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-5 rounded-[22px] border border-border/70 bg-background/92 px-4 shadow-[0_16px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-300 sm:px-6",
            scrolled ? "min-h-[64px] py-2" : "min-h-[76px] py-3"
          )}
        >
          <Link
            href="/"
            className="inline-flex shrink-0 items-center"
            aria-label={`${siteConfig.name} home`}
          >
            <img
              src="/asyx/logo.png"
              alt={siteConfig.name}
              className={cn(
                "w-auto object-contain transition-all duration-300",
                scrolled ? "h-9" : "h-11 sm:h-12"
              )}
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(`${link.href}/`))

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-200",
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}

                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary transition-all duration-200",
                      active
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-75 group-hover:opacity-50"
                    )}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            {/* Desktop Launch Countdown */}
            <div className="hidden items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-4 py-2 sm:flex">
              <Clock3 className="size-4 text-primary" />

              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Full Self-Service system
                </span>

                <span className="mt-1 text-xs font-bold tabular-nums text-primary">
                  Launching in {countdownText}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-background/70 lg:hidden"
            >
              {open ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
        />

        <div
          className={cn(
            "absolute right-3 top-3 flex max-h-[calc(100vh-1.5rem)] w-[calc(100%-1.5rem)] max-w-sm flex-col overflow-hidden rounded-[22px] border border-border bg-background shadow-2xl transition-all duration-300 sm:right-5 sm:top-5 sm:w-[380px]",
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
          )}
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <img
              src="/asyx/logo.png"
              alt={siteConfig.name}
              className="h-10 w-auto object-contain"
            />

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid size-10 place-items-center rounded-xl border border-border"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4">
            <nav className="flex flex-col">
              {navLinks.map((link) => {
                const active =
                  pathname === link.href ||
                  (link.href !== "/" &&
                    pathname.startsWith(`${link.href}/`))

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center rounded-xl px-3 py-3.5 text-base font-medium transition-colors",
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            <div className="mt-5 space-y-4 border-t border-border pt-5 text-sm">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 font-medium text-foreground"
              >
                <Phone className="size-4 text-primary" />
                {siteConfig.phone}
              </a>

              {/* Mobile Launch Countdown */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
                <div className="flex items-start gap-3">
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10">
                    <Clock3 className="size-5 text-primary" />
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">
                      We’re almost ready
                    </p>

                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      We’re putting the finishing touches on our platform to
                      give you a smooth, complete self-service experience.
                    </p>

                    <div className="mt-3 rounded-lg bg-background px-3 py-2 text-center">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        Full self-service launches in
                      </span>

                      <div className="mt-1 text-sm font-bold tabular-nums text-primary">
                        {countdownText}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-sm text-muted-foreground">
                  Theme
                </span>

                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

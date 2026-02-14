"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Star, Sparkles, Gift } from "lucide-react"

const milestones = [
  {
    icon: Sparkles,
    title: "El Dia Que Te Conoci",
    description: "Desde ese primer momento, supe que mi vida cambiaria para siempre.",
  },
  {
    icon: Heart,
    title: "Nuestra Primera Cita",
    description: "Nervios, risas y el comienzo de algo hermoso que todavia sigue creciendo.",
  },
  {
    icon: Star,
    title: "Nuestro Primer \"Te Quiero\"",
    description: "Tres palabras que cambiaron todo y que repito cada dia con mas fuerza.",
  },
  {
    icon: Gift,
    title: "Hoy y Siempre",
    description: "Cada dia elijo amarte y seguir construyendo nuestra historia juntos.",
  },
]

export function TimelineSection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleItems((prev) => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.3 }
    )

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground">
            Nuestra historia
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Momentos Que Nos Definen
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={milestone.title}
                  ref={(el) => { itemRefs.current[index] = el }}
                  data-index={index}
                  className={`relative flex items-center transition-all duration-700 ${
                    visibleItems.has(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Mobile layout */}
                  <div className="md:hidden flex items-start gap-6 pl-2">
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                        {milestone.title}
                      </h3>
                      <p className="font-sans text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 md:items-center w-full">
                    <div className={`${isEven ? "text-right" : "order-3 text-left"}`}>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                        {milestone.title}
                      </h3>
                      <p className="font-sans text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                    <div className={`relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center ${isEven ? "" : "order-2"}`}>
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className={`${isEven ? "order-3" : ""}`} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

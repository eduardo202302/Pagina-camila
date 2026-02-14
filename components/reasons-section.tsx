"use client"

import { useEffect, useRef, useState } from "react"
import { Heart } from "lucide-react"

const reasons = [
  {
    number: "01",
    title: "Tu sonrisa",
    description: "Porque tu sonrisa tiene el poder de convertir cualquier mal dia en el mejor de todos.",
  },
  {
    number: "02",
    title: "Tu bondad",
    description: "Por la forma en que cuidas de los demas, siempre con un corazon generoso y lleno de amor.",
  },
  {
    number: "03",
    title: "Tu fuerza",
    description: "Porque eres la persona mas fuerte y valiente que conozco, y me inspiras cada dia.",
  },
  {
    number: "04",
    title: "Tu abrazo",
    description: "Porque entre tus brazos encuentro la paz y el hogar que siempre busque.",
  },
  {
    number: "05",
    title: "Tu risa",
    description: "Porque el sonido de tu risa es mi cancion favorita en todo el mundo.",
  },
  {
    number: "06",
    title: "Tu mirada",
    description: "Porque cuando me miras a los ojos, siento que el mundo entero se detiene solo para nosotros.",
  },
]

export function ReasonsSection() {
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
      { threshold: 0.2 }
    )

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground">
            Cada razon es un latido
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Razones Por Las Que Te Quiero
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.number}
              ref={(el) => { itemRefs.current[index] = el }}
              data-index={index}
              className={`group relative bg-background rounded-lg p-8 border border-border hover:border-primary/40 transition-all duration-700 ${
                visibleItems.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <span className="font-serif text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {reason.number}
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-4 h-4 text-primary fill-primary" />
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

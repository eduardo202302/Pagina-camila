"use client"

import { useEffect, useRef, useState } from "react"
import { Heart } from "lucide-react"

export function LoveLetter() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="w-8 h-8 text-primary fill-primary mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Mi Carta Para Ti
          </h2>
        </div>

        <div
          className={`relative bg-card rounded-lg p-8 md:p-12 shadow-lg border border-border transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{
            backgroundImage: "url(/images/love-letter-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-card/85 rounded-lg" />
          <div className="relative z-10">
            <p className="font-sans text-lg md:text-xl leading-relaxed text-foreground mb-6">
              Mi amor,
            </p>
            <p className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground mb-4">
              Desde el momento en que llegaste a mi vida, Sube que ibas hacer especial para mi. Tu sonrisa ilumina mis dias y tu risa es la melodia mas hermosa que he escuchado.
            </p>
            <p className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground mb-4">
              Cada momento a tu lado es un tesoro que guardo en mi corazon. Gracias por ser mi
              complice, mi mejor amiga, mi refugio y mi mayor aventura.
            </p>
            <p className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground mb-4">
              En este dia especial, quiero que sepas que mi amor por ti crece cada dia mas.
              Eres lo mejor que me ha pasado y prometo hacerte feliz todos los dias de mi vida.
            </p>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-foreground mt-8 italic">
              Con todo mi amor, siempre tuyo.
            </p>
            <Heart className="w-5 h-5 text-primary fill-primary mt-4" />
          </div>
        </div>
      </div>
    </section>
  )
}

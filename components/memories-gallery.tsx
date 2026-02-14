"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"

const memories = [
  {
    src: "/images/foto2.jpeg",
    alt: "Atardecer romantico en la playa",
  },
  {
    src: "/images/foto5.jpeg",
    alt: "Cena romantica a la luz de las velas",
  },
  {
    src: "/images/foto4.jpeg",
    alt: "Paseo juntos por un jardin florido",
  },
  {
    src: "/images/foto7.jpeg",
    alt: "Noche bajo las estrellas",
  },
]

export function MemoriesGallery() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground">
            Momentos que atesoro
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Nuestros Recuerdos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {memories.map((memory, index) => (
            <div
              key={memory.src}
              className={`group relative aspect-[4/3] rounded-lg overflow-hidden shadow-md transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Image
                src={memory.src}
                alt={memory.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-primary-foreground fill-primary-foreground" />
                  <p className="font-sans text-primary-foreground text-sm">
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

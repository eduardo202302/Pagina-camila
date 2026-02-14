"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/image.png"
          alt="Rosas rojas romanticas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div
        className={`relative z-10 text-center px-6 transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" />
          <span className="text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground">
            14 de Febrero
          </span>
          <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" />
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight text-balance">
          Para Ti,
          <br />
          <span className="text-primary italic">Mi Amor</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl font-sans text-muted-foreground max-w-md mx-auto leading-relaxed">
          Cada dia a tu lado es un regalo. Hoy quiero recordarte lo especial que eres para mi.
        </p>

        <div className="mt-10 animate-bounce">
          <Heart className="w-8 h-8 text-primary fill-primary mx-auto" />
        </div>
      </div>
    </section>
  )
}

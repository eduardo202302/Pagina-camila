"use client"

import { useState } from "react"
import { Heart } from "lucide-react"

export function InteractiveHeart() {
  const [clicked, setClicked] = useState(false)
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([])

  const handleClick = () => {
    setClicked(true)
    const newSparkles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200,
    }))
    setSparkles(newSparkles)
    setTimeout(() => setSparkles([]), 1000)
    setTimeout(() => setClicked(false), 300)
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-md mx-auto text-center">
        <p className="font-sans text-muted-foreground mb-8 text-lg">
          Toca el corazon y mira la magia
        </p>

        <div className="relative inline-block">
          <button
            onClick={handleClick}
            className={`relative transition-transform duration-300 ${
              clicked ? "scale-125" : "scale-100 hover:scale-110"
            }`}
            aria-label="Corazon interactivo"
          >
            <Heart
              className="w-24 h-24 md:w-32 md:h-32 text-primary fill-primary drop-shadow-lg transition-all"
            />
          </button>

          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="absolute top-1/2 left-1/2 pointer-events-none"
              style={{
                animation: "sparkle-fly 0.8s ease-out forwards",
              }}
            >
              <Heart
                className="w-4 h-4 text-primary fill-primary"
                style={{
                  transform: `translate(${sparkle.x}px, ${sparkle.y}px)`,
                }}
              />
            </div>
          ))}

          <style jsx>{`
            @keyframes sparkle-fly {
              0% {
                opacity: 1;
                transform: scale(1);
              }
              100% {
                opacity: 0;
                transform: scale(0.3);
              }
            }
          `}</style>
        </div>

        <p className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-8">
          Te Quiero
        </p>
        <p className="font-sans text-muted-foreground mt-2">
          Hoy, mañana y siempre.
        </p>
      </div>
    </section>
  )
}

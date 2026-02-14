import { Heart } from "lucide-react"

export function ValentineFooter() {
  return (
    <footer className="py-16 px-6 bg-card text-center">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-px flex-1 bg-border" />
          <Heart className="w-5 h-5 text-primary fill-primary" />
          <div className="h-px flex-1 bg-border" />
        </div>
        <p className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
          Feliz San Valentin
        </p>
        <p className="font-sans text-muted-foreground">
          Hecho con todo mi amor, para la persona mas especial.
        </p>
        <div className="flex items-center justify-center gap-1 mt-6">
          <Heart className="w-3 h-3 text-primary fill-primary" />
          <Heart className="w-4 h-4 text-primary fill-primary" />
          <Heart className="w-3 h-3 text-primary fill-primary" />
        </div>
      </div>
    </footer>
  )
}

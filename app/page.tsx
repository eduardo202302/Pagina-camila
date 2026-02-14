import { FloatingHearts } from "@/components/floating-hearts"
import { HeroSection } from "@/components/hero-section"
import { LoveLetter } from "@/components/love-letter"
import { ReasonsSection } from "@/components/reasons-section"
import { MemoriesGallery } from "@/components/memories-gallery"
import { TimelineSection } from "@/components/timeline-section"
import { InteractiveHeart } from "@/components/interactive-heart"
import { ValentineFooter } from "@/components/valentine-footer"

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <FloatingHearts />
      <HeroSection />
      <LoveLetter />
      <ReasonsSection />
      <MemoriesGallery />
      <TimelineSection />
      <InteractiveHeart />
      <ValentineFooter />
    </main>
  )
}

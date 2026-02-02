"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"
import Link from "next/link"

const galleryImages = [
  { src: "/images/yoga1.jpg", alt: "Outdoor yoga class at sunset" },
  { src: "/images/yoga2.jpg", alt: "Meditation hands in mudra" },
  { src: "/images/yoga3.jpg", alt: "Beach yoga at sunrise" },
  { src: "/images/yoga4.jpg", alt: "Children's yoga class" },
  { src: "/images/yoga5.jpg", alt: "Restorative yoga practice" },
  { src: "/images/yoga6.jpg", alt: "Yoga retreat in nature" },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">
            Gallery
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            Moments of Practice
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A glimpse into our yoga journey together. Follow along for daily inspiration and class updates.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://www.instagram.com/judyrobertsyoga/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <Instagram className="h-5 w-5" />
            <span className="uppercase tracking-wider text-sm">Follow on Instagram</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const videos = [
  {
    title: "Morning Flow for Athletes",
    duration: "25 min",
    description: "Wake up your body and mind with this energizing sequence.",
    thumbnail: "/images/yoga1.jpg",
  },
  {
    title: "Pre-Skate Warm-Up",
    duration: "15 min",
    description: "Essential stretches and movements before hitting the ice.",
    thumbnail: "/images/yoga3.jpg",
  },
  {
    title: "Evening Wind Down",
    duration: "30 min",
    description: "Release tension and prepare for restful sleep.",
    thumbnail: "/images/yoga5.jpg",
  },
]

export function Videos() {
  return (
    <section id="videos" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">
            Practice Anywhere
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            Video Library
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Can't make it to a class? Practice with me anytime with our growing collection of guided sessions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {videos.map((video) => (
            <Card key={video.title} className="group overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                  />
                  <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-foreground/80 text-card text-xs rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {video.title}
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    {video.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Full Video Library
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

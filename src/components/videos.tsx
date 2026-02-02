'use client';

import { Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const videos = [
  {
    title: 'Morning Flow for Athletes',
    duration: '25 min',
    description: 'Wake up your body and mind with this energizing sequence.',
    thumbnail: '/images/yoga1.jpg',
  },
  {
    title: 'Pre-Skate Warm-Up',
    duration: '15 min',
    description: 'Essential stretches and movements before hitting the ice.',
    thumbnail: '/images/yoga3.jpg',
  },
  {
    title: 'Evening Wind Down',
    duration: '30 min',
    description: 'Release tension and prepare for restful sleep.',
    thumbnail: '/images/yoga5.jpg',
  },
];

export function Videos() {
  return (
    <section id="videos" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 space-y-4 text-center">
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase">
            Practice Anywhere
          </p>
          <h2 className="text-foreground font-serif text-4xl font-semibold md:text-5xl">
            Video Library
          </h2>
          <p className="text-foreground/70 mx-auto max-w-2xl">
            Can&apos;t make it to a class? Practice with me anytime with our growing
            collection of guided sessions.
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {videos.map((video) => (
            <Card key={video.title} className="group overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                  />
                  <div className="bg-foreground/40 group-hover:bg-foreground/30 absolute inset-0 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary/90 flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:scale-110">
                      <Play
                        className="text-primary-foreground ml-1 h-6 w-6"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                  <div className="bg-foreground/80 text-card absolute right-3 bottom-3 rounded px-2 py-1 text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-foreground mb-2 font-serif text-lg font-semibold">
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
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Full Video Library
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

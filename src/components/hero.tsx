import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center pt-20"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/yoga2.jpg"
          alt="Yoga practice on the beach at sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="bg-background/60 absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase">
              Welcome
            </p>
            <h1 className="text-foreground font-serif text-5xl leading-tight font-semibold text-balance md:text-6xl lg:text-7xl">
              Find Your Flow,
              <br />
              <span className="text-primary">On & Off the Ice</span>
            </h1>
          </div>

          <p className="text-foreground/80 max-w-lg text-lg leading-relaxed">
            Hi, I’m Judy. I believe yoga is the ultimate recovery for a life
            well-lived. Whether you’re an athlete looking to stay in the game or
            a neighbor seeking a moment of calm, I’m here to help you
            recalibrate your mind and soul.
          </p>

          <p className="text-foreground/70 leading-relaxed">
            After moving from the UK to the shores of Nova Scotia, I fell in
            love with the ocean and the healing power of the Atlantic. My
            practice blends 200hrs of YTT training with a passion for Yin and
            Restorative yoga, creating a space that echoes the welcoming spirit
            of the East Coast.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="#classes">Explore Classes</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

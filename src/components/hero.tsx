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
          src="/images/yogacandles.jpg"
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
            <h1 className="text-foreground font-serif text-4xl leading-tight font-semibold text-balance md:text-5xl lg:text-6xl">
              Rest - Recover - Renew
            </h1>
          </div>

          <p className="text-foreground/80 max-w-lg text-lg leading-relaxed">
            Hi, I’m Judy. I believe that yoga is the ultimate practice to compliment a balanced life. It is an honour to
            have you here and share this space with you. I offer a varied schedule of classes, ranging from higher 
            intensity, specialised practice, to full rest and restore sessions.
          </p>

          <p className="text-foreground/70 leading-relaxed">
            Graduating with my 200hr Yoga Teacher certification on October 2025. I have since also certified in Yin Yoga,
            Restorative Yoga and Children’s Yoga. In total I now hold over 300hrs of Yoga teacher training
            certifications, and am registered with Yoga Alliance Canada.
          </p>

          <p className="text-foreground/70 leading-relaxed">
            Balancing all the demands of modern life, can be challenging. My hope is that my classes can offer an
            escape and recalibration to enable you to find balance, peace and inner power to go forward in your
            most authentic self.
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

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const otherClasses = [
  {
    title: '60 Minute Class – In Person',
    description:
      'Held in person, in the Studio at Dartmouth Sport + Spine, a 60 minute small group class (can also be booked as a private class) focussed on mobility, strength, balance and calm. Bookable Online (for private booking please email).',
    image: '/images/privateclass.jpg',
    featured: true,
    length: '',
  },
  {
    title: '60 Minute Class – Online',
    description:
      'Held online via Zoom, a 60 Minute class that blends a bit of everything – Some higher intensity flows with some calm, restorative poses to rest & reset the body & Mind.',
    image: '/images/image9.jpg',
  },
  {
    title: 'Private Classes',
    description:
      'Held in person or online – tailored to your individual needs.',
    image: '/images/image2.jpg',
  },
  {
    title: 'Ocean Therapy & Natural Connection',
    description:
      'Held in person, outside in nature, either 60 or 90 minute class that combines A variety of yoga practices including asana, Pranayama (Breathwork) and Meditation with the benefits of fresh water healing (Ocean, Lake, Rivers, Pools).',
    image: '/images/image14.jpg',
    length: '',
  },
  {
    title: 'Yin & Restorative',
    description:
      'Held in person or online, A 60 Minute slow and grounding practice to help you find comfort in the uncomfortable. By holding floor- based poses for 5 to 15 minutes, we reach a deep sense of stillness using props like bolsters and blankets to support the meditative journey.',
    image: '/images/image7.jpg',
  },
  {
    title: "Retreats",
    description:
      'Held in person, A half day, full day or multi day customisable retreat for full body and mind reset. Please email to enquire.',
    image: '/images/image13.jpg',
    length: '',
  },
];

export function Classes() {
  return (
    <section id="classes" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 space-y-4 text-center">
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase">
            Offerings
          </p>
          <h2 className="text-foreground font-serif text-4xl font-semibold md:text-5xl">
            Classes & Programs
          </h2>
          <p className="text-foreground/70 mx-auto max-w-2xl">
            From specialized athletic training to peaceful restorative
            practices, there&apos;s a class for every body and every goal.
          </p>
        </div>

        {/* Other Classes Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherClasses.map((classItem) => (
            <Card
              key={classItem.title}
              className="group hover:border-primary/50 transition-colors flex flex-col py-0"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-t-xl">
                <Image
                  src={classItem.image}
                  alt={classItem.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-1">
                <h3 className="text-foreground mb-2 font-serif text-xl font-semibold">
                  {classItem.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed flex-1">
                  {classItem.description}
                </p>
                <div className="mt-6">
                  <Button
                    asChild
                    size="default"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                  >
                    <Link href="https://judyrobertsyoga.setmore.com" target="_blank" rel="noopener noreferrer">
                      Book Now
                    </Link>
                  </Button>
                </div>
                <br />
                <small>{classItem.length}</small>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

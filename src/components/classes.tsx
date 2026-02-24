import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const otherClasses = [
  {
    title: 'Yoga for Figure Skaters',
    description:
      'A speciality 60 Minute class which combines my love for figure skating, and yoga to complement existing personal training practices. As a adult beginner figure skater, I have found yoga to be incredibly helpful in improving my balance, strength, flexibility and mental focus. I wanted to offer a class which may also help other adult Figure skaters in the own skating development.',
    image: '/images/yogaskating.jpg',
    featured: true,
    length: '',
  },
  {
    title: 'Rest and Restore Yoga',
    description:
      'A 60 Minute class that blends a bit of everything – Some higher intensity flows with some calm, restorative in nature poses to rest the body.',
    image: '/images/image9.jpg',
  },
  {
    title: 'Natural Connection',
    description:
      'Varied classes held outside in nature (in the woods, on the beach, on a patio) being in the natural elements, offering an additional grounding space to explore without limitations.',
    image: '/images/image13.jpg',
  },
  {
    title: 'Yin Yoga',
    description:
      'A 60 Minute slow and grounding practice to help you find comfort in the uncomfortable. By holding floor- based poses for 5 to 15 minutes, we reach a deep sense of stillness using props like bolsters and blankets to support the meditative journey.',
    image: '/images/image7.jpg',
    length: '',
  },
  {
    title: 'Retreats & Private Classes',
    description:
      'An hour, a day, a weekend, or a week spent with other like-minded people, who collaborate with shared energy. Private Classes and Retreats can vary in theme and can be tailored to specific needs.',
    image: '/images/image2.jpg',
  },
  {
    title: "Ocean Therapy Yoga",
    description:
      'Combining A variety of yoga practices including asana, Pranayama (Breathwork) and Meditation with the benefits of fresh water healing (Ocean, Lake, Rivers, Pools).',
    image: '/images/image14.jpg',
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
              className="group hover:border-primary/50 transition-colors"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={classItem.image}
                  alt={classItem.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-foreground mb-2 font-serif text-xl font-semibold">
                  {classItem.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {classItem.description}
                </p>
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

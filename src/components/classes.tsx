import Image from 'next/image';
import {
  Sparkles,
  User,
  Moon,
  Baby,
  Heart,
  Leaf,
  Mountain,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const specialtyClass = {
  title: 'Yoga for Figure Skaters',
  description:
    'A speciality class which combines my love for figure skating, and yoga to complement existing personal training practices. As a adult beginner figure skater, I have found yoga to be incredibly helpful in improving my balance, strength, flexibility and mental focus. I wanted to offer a class which may also help other adult Figure skaters in the own skating development.',
  icon: Sparkles,
  featured: true,
  length:
    'Online classes held Every Tuesday Evening 9pm UK / 5pm Atlantic time',
};

const otherClasses = [
  {
    title: 'Private Classes',
    description:
      "I specialize in small, tailored classes designed around your goals. Whether you’re targeting a specific muscle group, prepping for your favorite sport, or simply needing a mindful reset, I offer a personal practice at your own pace.",
    icon: User,
    length: 'Classes can be tailored to your own duration',
  },
  {
    title: 'Yin Yoga',
    description:
      'Yin is a slow, grounding practice designed to help you find comfort in the uncomfortable. By holding floor-based poses for 5 to 15 minutes, we reach a deep sense of stillness using props like bolsters and blankets to support the meditative journey.',
    icon: Moon,
    length: 'Classes are 60 minutes duration',
  },
  {
    title: "Children's Yoga",
    description:
      'These high-energy sessions help children release energy and focus the mind through movement and play. We keep poses brief and engaging, using games, expression, and child-friendly props to foster socialisation and fun in a welcoming environment.',
    icon: Baby,
    length: 'Classes are about 20 minutes in duration',
  },
  {
    title: 'Restorative Yoga',
    description:
      'Unwind and rest. This is a you focussed class where I will assist you to find complete restorative poses. Using props to allow the body and mind fully relax. Poses are often held for longer periods of time. This is a low intensity class and combines physical rest with mental relaxation.',
    icon: Heart,
  },
  {
    title: 'Getting Back to Nature',
    description:
      'Classes held outside in nature (in the woods, on the beach, on a patio) being in the natural elements offers a class an addiontal grounding and space to explore without limitations.',
    icon: Leaf,
  },
  {
    title: 'Retreats',
    description:
      'A day, weekend, or week spent with other like minded people, who collaborate with energy. Retreats can vary in theme and can be tailored to specific needs.',
    icon: Mountain,
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

        {/* Featured Specialty Class */}
        <div className="mb-16">
          <Card className="border-accent bg-card overflow-hidden border-2">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-video lg:aspect-auto">
                  <Image
                    src="/images/yoga7.jpg"
                    alt="Yoga for figure skaters"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="text-accent mb-4 inline-flex items-center gap-2">
                    <specialtyClass.icon className="h-5 w-5" />
                    <span className="text-xs font-semibold tracking-wider uppercase">
                      Specialty Program
                    </span>
                  </div>
                  <h3 className="text-foreground mb-4 font-serif text-3xl font-semibold md:text-4xl">
                    {specialtyClass.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {specialtyClass.description}
                  </p>
                  <br />
                  <small>{specialtyClass.length}</small>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="bg-accent/20 text-accent rounded-full px-3 py-1 text-sm">
                      Flexibility
                    </span>
                    <span className="bg-accent/20 text-accent rounded-full px-3 py-1 text-sm">
                      Balance
                    </span>
                    <span className="bg-accent/20 text-accent rounded-full px-3 py-1 text-sm">
                      Core Strength
                    </span>
                    <span className="bg-accent/20 text-accent rounded-full px-3 py-1 text-sm">
                      Mental Focus
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Other Classes Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherClasses.map((classItem) => (
            <Card
              key={classItem.title}
              className="group hover:border-primary/50 transition-colors"
            >
              <CardContent className="p-6">
                <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full transition-colors">
                  <classItem.icon className="h-6 w-6" />
                </div>
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

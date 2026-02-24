import { Mail, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/judyrobertsyoga/',
    label: 'Instagram',
  },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
];

export function Contact() {
  return (
    <section id="contact" className="bg-primary text-primary-foreground py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <div className="space-y-4">
            <p className="text-primary-foreground/70 text-sm font-medium tracking-[0.3em] uppercase">
              Contact
            </p>
            <h2 className="font-serif text-4xl font-semibold md:text-5xl">
              Let&apos;s Connect
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Ready to start your yoga journey? Have questions about classes or
              private sessions? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="space-y-6">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Link href="mailto:judyrobertsyoga@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                judyrobertsyoga@gmail.com
              </Link>
            </Button>

            <div className="flex items-center justify-center gap-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-primary-foreground/30 hover:bg-primary-foreground/10 flex h-12 w-12 items-center justify-center rounded-full border transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

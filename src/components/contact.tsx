import { Mail, Instagram, Facebook, Youtube } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/judyrobertsyoga/", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70 font-medium">
              Contact
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold">
              Let's Connect
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Ready to start your yoga journey? Have questions about classes or private sessions? I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-6">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Link href="mailto:judyrobertsyoga@gmail.com">
                <Mail className="h-5 w-5 mr-2" />
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
                  className="w-12 h-12 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
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
  )
}

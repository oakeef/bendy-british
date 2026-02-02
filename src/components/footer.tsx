import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="font-serif text-xl font-semibold text-primary">
            Judy Roberts Yoga
          </Link>
          
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Judy Roberts Yoga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background border-border border-t py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Link
            href="/"
            className="text-primary font-serif text-xl font-semibold"
          >
            Judy Roberts Yoga
          </Link>

          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Judy Roberts Yoga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

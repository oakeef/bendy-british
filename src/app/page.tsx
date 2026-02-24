import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Gallery } from '@/components/gallery';
import { Classes } from '@/components/classes';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Classes />
      <Gallery />
      {/* <Videos /> */}
      <Contact />
      <Footer />
    </main>
  );
}

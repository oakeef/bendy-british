import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Gallery } from "@/components/gallery"
import { Classes } from "@/components/classes"
import { Videos } from "@/components/videos"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Gallery />
      <Classes />
      <Videos />
      <Contact />
      <Footer />
    </main>
  )
}

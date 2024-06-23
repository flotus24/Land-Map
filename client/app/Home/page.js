import Navbar from "@/components/navbar"
import Bio from "@/components/bio"
import About from "@/components/about"
import Features from "@/components/features"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Bio />
      <About />
      <Features />
      <Contact />
    </div>
  )
}

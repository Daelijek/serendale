import Hero from "./components/Hero"
import Benefits from "./components/Benefits"
import Reviews from "./components/Reviews"

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Benefits />
      <Reviews />
    </main>
  )
}
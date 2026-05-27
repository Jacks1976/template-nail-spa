import { useEffect, useRef } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Gallery from "./components/Gallery"
import Testimonials from "./components/Testimonials"
import Booking from "./components/Booking"
import Footer from "./components/Footer"

export default function App() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px"
        cursorRef.current.style.top = e.clientY + "px"
      }
      if (ringRef.current) {
        setTimeout(() => {
          ringRef.current.style.left = e.clientX + "px"
          ringRef.current.style.top = e.clientY + "px"
        }, 80)
      }
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <>
      <div className="grain" />
      <div ref={cursorRef} className="cursor hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Booking />
        <Footer />
      </main>
    </>
  )
}

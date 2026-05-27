import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = ["Serviços", "Galeria", "Depoimentos", "Agendar"]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-light tracking-widest text-espresso">
          LUXE <span className="text-rose italic">Nails</span>
        </a>
        <ul className="hidden md:flex gap-10">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="font-body text-sm tracking-widest uppercase text-espresso/70 hover:text-rose transition-colors duration-300">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setOpen(!open)}>
          <span className={`block w-6 h-px bg-espresso transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-espresso transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-espresso transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-cream/98 backdrop-blur-md px-6 pb-6">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 font-body text-sm tracking-widest uppercase text-espresso/70 border-b border-nude">
              {l}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}

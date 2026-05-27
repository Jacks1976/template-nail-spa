import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = ["Serviços", "Galeria", "Depoimentos", "Agendar"]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-xl border-b border-nude/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-px bg-gold transition-all duration-500 group-hover:w-12" />
          <span className="font-display text-xl font-light tracking-[0.3em] text-espresso uppercase">
            Luxe <span className="italic text-rose font-light">Nails</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-12">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="group relative font-body text-[11px] tracking-[0.25em] uppercase text-espresso/50 hover:text-espresso transition-colors duration-500"
              >
                {l}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#agendar"
              className="font-body text-[11px] tracking-[0.25em] uppercase px-6 py-2.5 border border-espresso/20 text-espresso hover:bg-espresso hover:text-cream transition-all duration-500"
            >
              Reservar
            </a>
          </li>
        </ul>

        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen(!open)}>
          <span className={`block w-5 h-px bg-espresso transition-all duration-500 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-espresso transition-all duration-500 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-espresso transition-all duration-500 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-cream/98 backdrop-blur-xl border-t border-nude/20 px-8 pb-8"
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-4 py-4 font-body text-[11px] tracking-[0.25em] uppercase text-espresso/50 border-b border-nude/20 hover:text-espresso transition-colors"
            >
              <span className="w-4 h-px bg-nude/40" />
              {l}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}

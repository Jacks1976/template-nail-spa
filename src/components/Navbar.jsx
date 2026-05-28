import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { label: "Serviços", href: "#serviços" },
    { label: "Galeria", href: "#galeria" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-700 ${
        scrolled
          ? "bg-espresso/80 backdrop-blur-2xl border border-gold/20 shadow-2xl shadow-espresso/40"
          : "bg-espresso/30 backdrop-blur-md border border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center cursor-pointer">
          <img
            src="/images/logo-kf.png"
            alt="KF Nail Design"
            className="h-10 w-auto object-contain"
          />
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="group relative font-body text-[11px] tracking-[0.25em] uppercase text-nude/60 hover:text-nude transition-colors duration-400 cursor-pointer"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#agendar"
              className="font-body text-[11px] tracking-[0.25em] uppercase px-6 py-2.5 bg-gold/10 border border-gold/40 text-gold hover:bg-gold hover:text-espresso transition-all duration-400 rounded-sm cursor-pointer"
            >
              Agendar
            </a>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-nude transition-all duration-500 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-nude transition-all duration-500 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-nude transition-all duration-500 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-white/10 px-6 pb-6"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-4 py-4 font-body text-[11px] tracking-[0.25em] uppercase text-nude/50 border-b border-white/10 hover:text-gold transition-colors cursor-pointer"
            >
              <span className="w-4 h-px bg-gold/40" />
              {l.label}
            </a>
          ))}
          <a
            href="#agendar"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center font-body text-[11px] tracking-[0.25em] uppercase py-3 bg-gold text-espresso cursor-pointer"
          >
            Agendar
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { label: "Serviços",    href: "#serviços" },
    { label: "Galeria",     href: "#galeria" },
    { label: "Sobre",       href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-500 ${
        scrolled ? "border-b border-black/8" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`cursor-pointer flex-shrink-0 transition-all duration-500 ${scrolled ? "border-b border-gold/50 pb-0.5" : ""}`}
        >
          <img
            src="/images/logo-kf.png"
            alt="KF Nail Design"
            style={{ width: "80px", height: "auto" }}
            className="object-contain"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-12">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="group relative font-body text-[10px] tracking-[0.3em] uppercase text-black/40 hover:text-black transition-colors duration-300 cursor-pointer"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#agendar"
          className="hidden md:inline-flex font-body text-[10px] tracking-[0.3em] uppercase px-6 py-2.5 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
        >
          Agendar
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-black transition-all duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-6 h-px bg-black transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-black transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-black/8 px-8 pb-8"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-4 font-body text-[10px] tracking-[0.3em] uppercase text-black/40 border-b border-black/6 hover:text-black transition-colors cursor-pointer"
            >
              {l.label}
              <span className="w-4 h-px bg-gold" />
            </a>
          ))}
          <a
            href="#agendar"
            onClick={() => setOpen(false)}
            className="block mt-6 text-center font-body text-[10px] tracking-[0.3em] uppercase py-4 bg-black text-white cursor-pointer"
          >
            Agendar
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}

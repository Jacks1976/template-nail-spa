import { motion } from "framer-motion"
import { useState } from "react"

const photos = [
  { label: "Red Passion",    img: "/images/nail-red-flat.png",       col: "col-span-2 row-span-2" },
  { label: "Nude Ring",      img: "/images/nail-nude-ring.png",      col: "col-span-1 row-span-1" },
  { label: "Pink Marble",    img: "/images/nail-pink-marble.png",    col: "col-span-1 row-span-1" },
  { label: "Nude Wine",      img: "/images/nail-nude-wine.png",      col: "col-span-1 row-span-1" },
  { label: "Glitter Candle", img: "/images/nail-glitter-candle.png", col: "col-span-1 row-span-1" },
]

const photosBottom = [
  { label: "Mauve Gold", img: "/images/nail-mauve-gold.png",  col: "col-span-1" },
  { label: "Art & File", img: "/images/nail-art-file.png",    col: "col-span-1" },
  { label: "Red Hand",   img: "/images/nail-red-hand.png",    col: "col-span-1" },
]

export default function Gallery() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="galeria" className="py-36 relative overflow-hidden" style={{ background: "#0A0A0A" }}>
      {/* Ghost watermark */}
      <span className="absolute top-4 left-1/2 -translate-x-1/2 font-display font-bold leading-none select-none pointer-events-none whitespace-nowrap" style={{ fontSize: "clamp(5rem, 14vw, 14rem)", color: "rgba(255,255,255,0.02)" }}>
        GALERIA
      </span>

      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-gold" />
              <p className="font-body text-[9px] tracking-[0.5em] uppercase text-gold">
                Nosso trabalho
              </p>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-semibold leading-[0.88] tracking-tight text-white">
              <span className="italic font-light">Galeria</span>
            </h2>
          </div>
          <p className="hidden md:block font-body text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.18)" }}>
            8 trabalhos selecionados
          </p>
        </motion.div>

        {/* Main bento grid */}
        <div className="grid grid-cols-4 gap-2 h-[560px] mb-2">
          {photos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.09 }}
              className={`${p.col} relative overflow-hidden cursor-pointer`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.img
                src={p.img}
                alt={p.label}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{ scale: hovered === i ? 1.06 : 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute inset-0 flex flex-col justify-between p-5"
                animate={{ backgroundColor: hovered === i ? "rgba(10,10,10,0.5)" : "rgba(10,10,10,0)" }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  animate={{ opacity: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.35 }}
                  className="self-end"
                >
                  <span className="font-body text-[8px] tracking-[0.4em] uppercase text-white/60">KF</span>
                </motion.div>
                <motion.div
                  animate={{ opacity: hovered === i ? 1 : 0, y: hovered === i ? 0 : 8 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="w-5 h-px bg-gold mb-2" />
                  <p className="font-display italic text-white text-xl font-light">{p.label}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row — 3 equal columns */}
        <div className="grid grid-cols-3 gap-2 h-[240px]">
          {photosBottom.map((p, i) => (
            <motion.div
              key={i + 5}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (i + 5) * 0.07 }}
              className="relative overflow-hidden cursor-pointer"
              onMouseEnter={() => setHovered(i + 5)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.img
                src={p.img}
                alt={p.label}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{ scale: hovered === i + 5 ? 1.06 : 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-5"
                animate={{ backgroundColor: hovered === i + 5 ? "rgba(10,10,10,0.5)" : "rgba(10,10,10,0)" }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  animate={{ opacity: hovered === i + 5 ? 1 : 0, y: hovered === i + 5 ? 0 : 8 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="w-5 h-px bg-gold mb-2" />
                  <p className="font-display italic text-white text-lg font-light">{p.label}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-5 mt-16"
        >
          <div className="w-12 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          <a
            href="#agendar"
            className="font-body text-[9px] tracking-[0.5em] uppercase hover:text-gold transition-colors duration-300 cursor-pointer"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            Agendar sua transformação
          </a>
          <div className="w-12 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
        </motion.div>
      </div>
    </section>
  )
}

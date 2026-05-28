import { motion } from "framer-motion"
import { useState } from "react"

const photos = [
  { label: "Red Passion",     img: "/images/nail-red-flat.png",      span: "col-span-2 row-span-2" },
  { label: "Nude Ring",       img: "/images/nail-nude-ring.png",     span: "col-span-1 row-span-1" },
  { label: "Nude Wine",       img: "/images/nail-nude-wine.png",     span: "col-span-1 row-span-1" },
  { label: "Pink Marble",     img: "/images/nail-pink-marble.png",   span: "col-span-1 row-span-1" },
  { label: "Glitter Candle",  img: "/images/nail-glitter-candle.png",span: "col-span-1 row-span-1" },
  { label: "Mauve Gold",      img: "/images/nail-mauve-gold.png",    span: "col-span-1 row-span-1" },
  { label: "Nail Art",        img: "/images/nail-art-file.png",      span: "col-span-1 row-span-1" },
  { label: "Red Hand",        img: "/images/nail-red-hand.png",      span: "col-span-1 row-span-1" },
]

export default function Gallery() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="galeria" className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end gap-8 mb-16"
        >
          <div>
            <p className="font-body text-[10px] tracking-[0.5em] uppercase text-rose mb-4">
              Nosso trabalho
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-light text-espresso">
              <span className="italic">Galeria</span>
            </h2>
          </div>
          <div className="mb-3 hidden md:block">
            <div className="w-24 h-px bg-nude/40" />
          </div>
        </motion.div>

        {/* Main bento grid — first 5 items */}
        <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[580px] mb-3">
          {photos.slice(0, 5).map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`${p.span} relative overflow-hidden group cursor-pointer`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.img
                src={p.img}
                alt={p.label}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{ scale: hovered === i ? 1.08 : 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-5"
                animate={{
                  backgroundColor: hovered === i ? "rgba(44,24,16,0.60)" : "rgba(44,24,16,0)",
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{ opacity: hovered === i ? 1 : 0, y: hovered === i ? 0 : 10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-6 h-px bg-gold mb-2" />
                  <p className="font-display italic text-cream text-lg">{p.label}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Second row — remaining 3 items */}
        <div className="grid grid-cols-3 gap-3 h-[280px]">
          {photos.slice(5).map((p, i) => (
            <motion.div
              key={i + 5}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (i + 5) * 0.08 }}
              className="relative overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHovered(i + 5)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.img
                src={p.img}
                alt={p.label}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{ scale: hovered === i + 5 ? 1.08 : 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-5"
                animate={{
                  backgroundColor: hovered === i + 5 ? "rgba(44,24,16,0.60)" : "rgba(44,24,16,0)",
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{ opacity: hovered === i + 5 ? 1 : 0, y: hovered === i + 5 ? 0 : 10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-6 h-px bg-gold mb-2" />
                  <p className="font-display italic text-cream text-lg">{p.label}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          <div className="w-12 h-px bg-nude/30" />
          <a
            href="#agendar"
            className="font-body text-[10px] tracking-[0.4em] uppercase text-espresso/40 hover:text-gold transition-colors duration-300 cursor-pointer"
          >
            Agendar sua transformação
          </a>
          <div className="w-12 h-px bg-nude/30" />
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from "framer-motion"
import { useState } from "react"

const photos = [
  { label: "Gel Nude Matte", img: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=800&q=85", span: "col-span-2 row-span-2" },
  { label: "French Refinada", img: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=85", span: "col-span-1 row-span-1" },
  { label: "Nail Art Floral", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=85", span: "col-span-1 row-span-1" },
  { label: "Stiletto Nude", img: "https://images.unsplash.com/photo-1604655855757-68df66e23f46?w=600&q=85", span: "col-span-1 row-span-1" },
  { label: "Rose Gold", img: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=600&q=85", span: "col-span-1 row-span-1" },
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
            <p className="font-body text-[10px] tracking-[0.5em] uppercase text-rose mb-4">Nosso trabalho</p>
            <h2 className="font-display text-5xl md:text-7xl font-light text-espresso">
              <span className="italic">Galeria</span>
            </h2>
          </div>
          <div className="mb-3 hidden md:block">
            <div className="w-24 h-px bg-nude/40" />
          </div>
        </motion.div>

        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[580px]">
          {photos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`${p.span} relative overflow-hidden group`}
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
                className="absolute inset-0 bg-espresso/0 flex flex-col justify-end p-6"
                animate={{ backgroundColor: hovered === i ? "rgba(44,24,16,0.55)" : "rgba(44,24,16,0)" }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: hovered === i ? 1 : 0, y: hovered === i ? 0 : 10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-6 h-px bg-gold mb-3" />
                  <p className="font-display italic text-cream text-xl">{p.label}</p>
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
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-espresso/30">Substitua pelas suas fotos</p>
          <div className="w-12 h-px bg-nude/30" />
        </motion.div>
      </div>
    </section>
  )
}

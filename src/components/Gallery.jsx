import { motion } from "framer-motion"

const items = [
  { label: "Gel Nude", size: "col-span-1 row-span-2", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80" },
  { label: "Nail Art Floral", size: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80" },
  { label: "French Gel", size: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400&q=80" },
  { label: "Alongamento Natural", size: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=400&q=80" },
  { label: "Glitter Rose Gold", size: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80" },
  { label: "Stiletto Gel", size: "col-span-1 row-span-2", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80" },
  { label: "Marble Nails", size: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=400&q=80" },
]

export default function Gallery() {
  return (
    <section id="galeria" className="py-28 bg-espresso px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">Nosso trabalho</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream">
            <span className="italic text-nude">Galeria</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 grid-rows-3 gap-2 h-[600px]">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className={`${item.size} relative overflow-hidden group cursor-pointer`}
            >
              <img
                src={item.img}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/50 transition-all duration-500" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="font-display italic text-cream text-lg">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

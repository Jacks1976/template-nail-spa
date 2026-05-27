import { motion } from "framer-motion"

const services = [
  { name: "Alongamento em Gel", desc: "Extensão natural e resistente com gel de alta qualidade. Durabilidade incomparável.", price: "A partir de R$ 120", icon: "✦" },
  { name: "Gel em Fibra de Vidro", desc: "Reforço com fibra de vidro para unhas mais resistentes e flexíveis.", price: "A partir de R$ 100", icon: "◈" },
  { name: "Nail Art Premium", desc: "Designs exclusivos e personalizados. Cada unha é uma obra de arte.", price: "A partir de R$ 60", icon: "❋" },
  { name: "Manutenção em Gel", desc: "Manutenção completa para manter suas unhas sempre impecáveis.", price: "A partir de R$ 80", icon: "◇" },
  { name: "Banho de Gel", desc: "Camada protetora de gel para unhas naturais com acabamento perfeito.", price: "A partir de R$ 70", icon: "◉" },
  { name: "Remoção + Aplicação", desc: "Remoção segura e nova aplicação com cuidado total com a saúde da unha.", price: "A partir de R$ 140", icon: "✿" },
]

export default function Services() {
  return (
    <section id="serviços" className="py-28 bg-cream px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-rose mb-4">O que oferecemos</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-espresso">Nossos <span className="italic text-rose">Serviços</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-nude/30">
          {services.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} whileHover={{ backgroundColor: "#2C1810", color: "#FAF6F1" }} className="group bg-cream p-10 transition-colors duration-500 cursor-default">
              <span className="block text-2xl text-rose mb-6 group-hover:text-gold transition-colors duration-500">{s.icon}</span>
              <h3 className="font-display text-2xl font-light text-espresso group-hover:text-cream transition-colors duration-500 mb-3">{s.name}</h3>
              <p className="font-body font-light text-espresso/60 group-hover:text-nude/70 transition-colors duration-500 text-sm leading-relaxed mb-6">{s.desc}</p>
              <span className="font-body text-xs tracking-widest uppercase text-rose group-hover:text-gold transition-colors duration-500">{s.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

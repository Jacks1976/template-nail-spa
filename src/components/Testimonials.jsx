import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  { name: "Ana Carolina M.", city: "São Paulo, SP", text: "Minhas unhas nunca foram tão lindas. O atendimento é impecável e o resultado sempre supera minhas expectativas. Voltei três vezes esse mês.", stars: 5 },
  { name: "Juliana Mendes", city: "Campinas, SP", text: "A técnica em gel é incrível — dura muito mais do que imaginei. O ambiente é sofisticado e me sinto especial a cada visita. Indispensável.", stars: 5 },
  { name: "Fernanda Lima", city: "São Paulo, SP", text: "Ambiente lindo, atendimento personalizado e resultado perfeito. Me sinto uma rainha cada vez que saio daqui. Recomendo de olhos fechados.", stars: 5 },
  { name: "Mariana Costa", city: "Santos, SP", text: "Profissionalismo e carinho em cada detalhe. A nail art ficou exatamente como eu queria — até melhor. Um lugar que realmente entende de luxo.", stars: 5 },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <section id="depoimentos" className="py-32 bg-espresso relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-display text-[25rem] text-cream/[0.015] leading-none select-none">"</span>
      </div>

      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-[10px] tracking-[0.5em] uppercase text-gold mb-4">Experiências reais</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream">
            O que nossas <span className="italic text-nude">clientes</span><br />dizem
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="flex justify-center gap-1.5 mb-10">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-gold text-sm">★</span>
              ))}
            </div>

            <blockquote className="font-display text-2xl md:text-3xl font-light italic text-cream/90 leading-relaxed mb-12 max-w-2xl mx-auto">
              "{testimonials[current].text}"
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="w-8 h-px bg-gold/40" />
              <div>
                <p className="font-body text-sm tracking-widest text-nude">{testimonials[current].name}</p>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-nude/30 mt-1">{testimonials[current].city}</p>
              </div>
              <div className="w-8 h-px bg-gold/40" />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-500 ${
                i === current
                  ? "w-8 h-px bg-gold"
                  : "w-3 h-px bg-nude/30 hover:bg-nude/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

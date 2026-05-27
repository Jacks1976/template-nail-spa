import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  { name: "Ana Carolina", role: "Cliente há 2 anos", text: "Minhas unhas nunca foram tão lindas. O atendimento é impecável e o resultado sempre supera minhas expectativas. Não troco por nada!", stars: 5 },
  { name: "Juliana Mendes", role: "Cliente há 1 ano", text: "A técnica em gel é incrível, dura muito mais do que imaginei. Já indiquei para todas as minhas amigas. Lugar maravilhoso!", stars: 5 },
  { name: "Fernanda Lima", role: "Cliente há 6 meses", text: "Ambiente lindo, atendimento personalizado e resultado perfeito. Me sinto uma rainha cada vez que saio daqui.", stars: 5 },
  { name: "Mariana Costa", role: "Cliente há 3 anos", text: "Profissionalismo e carinho em cada detalhe. A nail art ficou exatamente como eu queria. Amei demais!", stars: 5 },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section id="depoimentos" className="py-28 bg-cream px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-rose mb-4">O que dizem</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-espresso"><span className="italic text-rose">Depoimentos</span></h2>
        </motion.div>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.5 }} className="text-center px-8">
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(testimonials[current].stars)].map((_, i) => (<span key={i} className="text-gold text-lg">★</span>))}
              </div>
              <p className="font-display text-2xl md:text-3xl font-light italic text-espresso leading-relaxed mb-10">"{testimonials[current].text}"</p>
              <div>
                <p className="font-body font-medium text-espresso tracking-wide">{testimonials[current].name}</p>
                <p className="font-body text-sm text-espresso/50 mt-1">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-6 mt-14">
            <button onClick={prev} className="w-10 h-10 border border-nude flex items-center justify-center text-espresso/50 hover:border-rose hover:text-rose transition-colors duration-300">←</button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (<button key={i} onClick={() => setCurrent(i)} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-rose w-6" : "bg-nude"}`} />))}
            </div>
            <button onClick={next} className="w-10 h-10 border border-nude flex items-center justify-center text-espresso/50 hover:border-rose hover:text-rose transition-colors duration-300">→</button>
          </div>
        </div>
      </div>
    </section>
  )
}

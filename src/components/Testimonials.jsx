import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Ana Carolina M.",
    city: "Greenville, SC",
    text: "Katiuscia é incrível. Minhas unhas nunca ficaram tão lindas — o atendimento é impecável e o resultado sempre supera minhas expectativas.",
    stars: 5,
  },
  {
    name: "Juliana Ferreira",
    city: "Spartanburg, SC",
    text: "A técnica em gel da Katiuscia é simplesmente perfeita. Dura muito mais do que imaginei e o ambiente é sofisticado. Indispensável.",
    stars: 5,
  },
  {
    name: "Fernanda Costa",
    city: "Greer, SC",
    text: "Atenção personalizada e resultado que fala por si. Me sinto uma rainha cada vez que saio daqui. A nail art ficou exatamente como sonhei.",
    stars: 5,
  },
  {
    name: "Mariana Oliveira",
    city: "Greenville, SC",
    text: "Profissionalismo e carinho em cada detalhe. A KF Nail Design é um lugar que realmente entende o que é luxo com qualidade real.",
    stars: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <section id="depoimentos" className="py-36 bg-white relative overflow-hidden">
      {/* Ghost section number */}
      <span className="absolute top-8 left-8 font-display text-[12rem] font-bold leading-none select-none pointer-events-none" style={{ color: "rgba(0,0,0,0.025)" }}>
        04
      </span>

      {/* Giant editorial quote mark */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 font-display leading-none select-none pointer-events-none" style={{ fontSize: "18rem", color: "rgba(201,169,110,0.06)" }}>
        "
      </div>

      <div className="max-w-3xl mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-gold" />
            <p className="font-body text-[9px] tracking-[0.5em] uppercase text-gold">
              Experiências reais
            </p>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-semibold leading-[0.9] tracking-tight" style={{ color: "#0A0A0A" }}>
            O que nossas{" "}
            <span className="italic font-light">clientes</span>
            <br />dizem
          </h2>
        </motion.div>

        {/* Quote carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            {/* Stars */}
            <div className="flex justify-center gap-2 mb-10">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-gold fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-display text-2xl md:text-3xl font-light italic leading-[1.5] mb-12 max-w-2xl mx-auto" style={{ color: "rgba(0,0,0,0.75)" }}>
              "{testimonials[current].text}"
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center justify-center gap-5">
              <div className="w-10 h-px" style={{ background: "rgba(201,169,110,0.4)" }} />
              <div>
                <p className="font-body text-sm font-medium tracking-wider" style={{ color: "#0A0A0A" }}>
                  {testimonials[current].name}
                </p>
                <p className="font-body text-[9px] tracking-[0.35em] uppercase mt-1" style={{ color: "rgba(0,0,0,0.28)" }}>
                  {testimonials[current].city}
                </p>
              </div>
              <div className="w-10 h-px" style={{ background: "rgba(201,169,110,0.4)" }} />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="flex justify-center items-center gap-3 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-400 cursor-pointer rounded-none"
              style={{
                width: i === current ? "2.5rem" : "1rem",
                height: "1px",
                background: i === current ? "#C9A96E" : "rgba(0,0,0,0.18)",
              }}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

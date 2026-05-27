import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative h-[600px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&q=90"
                alt="Nail artist"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-espresso p-8 w-48"
            >
              <p className="font-display text-5xl font-light text-gold">5+</p>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-nude/60 mt-1">Anos de experiência</p>
            </motion.div>

            {/* Gold border accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-gold/30" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pl-20 pt-16 lg:pt-0"
          >
            <p className="font-body text-[10px] tracking-[0.5em] uppercase text-gold mb-6">Nossa história</p>

            <h2 className="font-display text-5xl md:text-6xl font-light text-espresso leading-tight mb-8">
              Onde arte encontra<br />
              <span className="italic text-rose">perfeição</span>
            </h2>

            <div className="w-12 h-px bg-gold mb-8" />

            <p className="font-body font-light text-espresso/60 leading-loose mb-6 text-sm">
              Há mais de 5 anos transformando a relação das mulheres com suas mãos. Cada serviço é uma experiência sensorial única, onde técnica e arte se encontram em perfeita harmonia.
            </p>
            <p className="font-body font-light text-espresso/60 leading-loose mb-12 text-sm">
              Usamos apenas produtos premium importados, garantindo durabilidade e saúde para suas unhas. Porque você merece o melhor — sempre.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-nude/30">
              {[
                { n: "500+", label: "Clientes satisfeitas" },
                { n: "12", label: "Técnicas exclusivas" },
                { n: "100%", label: "Produtos premium" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-light text-espresso">{s.n}</p>
                  <p className="font-body text-[10px] tracking-wide uppercase text-espresso/40 mt-1 leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

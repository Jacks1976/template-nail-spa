import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="sobre" className="py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-28 h-28 border-t-2 border-l-2 border-gold/40 pointer-events-none" />

            <div className="relative h-[640px] overflow-hidden">
              <img
                src="/images/owner-katiuscia.jpg"
                alt="Katiuscia — KF Nail Design"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-espresso p-8 w-52 shadow-2xl"
            >
              <p className="font-display text-5xl font-light text-gold">3+</p>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-nude/60 mt-1 leading-relaxed">
                Anos de<br />experiência
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pl-20 pt-16 lg:pt-0"
          >
            <p className="font-body text-[10px] tracking-[0.5em] uppercase text-gold mb-6">
              Conheça a Katiuscia
            </p>

            <h2 className="font-display text-5xl md:text-6xl font-light text-espresso leading-tight mb-8">
              Paixão por cada<br />
              <span className="italic text-rose">detalhe</span>
            </h2>

            <div className="w-12 h-px bg-gold mb-8" />

            <p className="font-body font-light text-espresso/60 leading-loose mb-6 text-sm">
              Sou Katiuscia, e transformar unhas em arte é minha vocação. Cada cliente que entra pela minha porta recebe atenção exclusiva, técnica apurada e um cuidado que vai além do estético.
            </p>
            <p className="font-body font-light text-espresso/60 leading-loose mb-12 text-sm">
              Trabalho com produtos premium importados e técnicas em gel que garantem durabilidade, beleza e saúde para suas unhas. Porque você merece se sentir especial todos os dias.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-nude/30">
              {[
                { n: "300+", label: "Clientes satisfeitas" },
                { n: "8", label: "Técnicas em gel" },
                { n: "100%", label: "Produtos premium" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-light text-espresso">{s.n}</p>
                  <p className="font-body text-[10px] tracking-wide uppercase text-espresso/40 mt-1 leading-relaxed">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

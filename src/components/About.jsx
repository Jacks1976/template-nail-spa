import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="sobre" className="py-36 bg-white overflow-hidden relative">
      {/* Ghost section number — offset right for asymmetry */}
      <span className="absolute top-8 right-8 font-display text-[12rem] font-bold leading-none select-none pointer-events-none" style={{ color: "rgba(0,0,0,0.025)" }}>
        01
      </span>

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Gold corner mark */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-gold pointer-events-none" />

            <div className="relative h-[680px] overflow-hidden">
              <img
                src="/images/owner-katiuscia.jpg"
                alt="Katiuscia — KF Nail Design"
                className="w-full h-full object-cover object-top"
                style={{ filter: "brightness(0.95) contrast(1.05)" }}
              />
              {/* Bottom fade — blends photo background into white section */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/70 to-transparent" />
              {/* Side fades — softens any background bleed */}
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white/20 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white/20 to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 p-8 w-52"
              style={{ background: "#0A0A0A" }}
            >
              <p className="font-display text-5xl font-semibold text-gold">3+</p>
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-white/40 mt-2 leading-relaxed">
                Anos de<br />Experiência
              </p>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pl-24 pt-20 lg:pt-16"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px bg-gold" />
              <p className="font-body text-[9px] tracking-[0.5em] uppercase text-gold">
                Conheça a Katiuscia
              </p>
            </div>

            <h2 className="font-display text-5xl md:text-6xl lg:text-[5.5rem] font-semibold leading-[0.88] tracking-tight mb-12" style={{ color: "#0A0A0A" }}>
              Paixão por<br />cada{" "}
              <span className="italic font-light text-gold">detalhe</span>
            </h2>

            <p className="font-body font-light leading-[1.9] mb-6 text-[15px] max-w-sm" style={{ color: "rgba(0,0,0,0.5)" }}>
              Sou Katiuscia, e transformar unhas em arte é minha vocação. Cada cliente recebe atenção exclusiva, técnica refinada e um cuidado que vai além do estético.
            </p>
            <p className="font-body font-light leading-[1.9] mb-16 text-[15px] max-w-sm" style={{ color: "rgba(0,0,0,0.5)" }}>
              Trabalho com produtos premium importados e técnicas em gel que garantem durabilidade, beleza e saúde. Porque você merece se sentir especial todos os dias.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-black/8">
              {[
                { n: "300+", label: "Clientes satisfeitas" },
                { n: "8",    label: "Técnicas em gel" },
                { n: "100%", label: "Produtos premium" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-4xl font-semibold leading-none mb-2" style={{ color: "#0A0A0A" }}>{s.n}</p>
                  <p className="font-body text-[9px] tracking-[0.2em] uppercase leading-relaxed" style={{ color: "rgba(0,0,0,0.3)" }}>
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

import { motion } from "framer-motion"

const services = [
  { num: "01", name: "Alongamento em Gel",    desc: "Extensão natural e resistente com gel importado de alta qualidade. Durabilidade de até 4 semanas.", price: "R$ 120", time: "2h" },
  { num: "02", name: "Gel em Fibra de Vidro", desc: "Reforço com fibra de vidro para unhas mais resistentes, flexíveis e com acabamento ultra fino.",    price: "R$ 100", time: "1h30" },
  { num: "03", name: "Nail Art Premium",       desc: "Designs exclusivos do minimalismo elegante às criações artísticas mais elaboradas.",                price: "R$ 60+", time: "1h" },
  { num: "04", name: "Manutenção em Gel",      desc: "Reequilíbrio, lixamento e reaplicação para manter o resultado perfeito por mais tempo.",            price: "R$ 80",  time: "1h30" },
  { num: "05", name: "Banho de Gel",           desc: "Camada protetora sobre as unhas naturais. Brilho duradouro, resistência e proteção total.",          price: "R$ 70",  time: "1h" },
  { num: "06", name: "Remoção + Aplicação",    desc: "Remoção segura sem danos seguida de nova aplicação completa. Transição perfeita entre estilos.",    price: "R$ 140", time: "3h" },
]

export default function Services() {
  return (
    <section id="serviços" className="py-36 bg-white relative overflow-hidden">
      {/* Ghost section number */}
      <span className="absolute top-8 right-8 font-display text-[12rem] font-bold leading-none select-none pointer-events-none" style={{ color: "rgba(0,0,0,0.025)" }}>
        02
      </span>

      <div className="max-w-7xl mx-auto px-8">
        {/* Header — asymmetric split */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-24"
        >
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-gold" />
              <p className="font-body text-[9px] tracking-[0.5em] uppercase text-gold">
                O que oferecemos
              </p>
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-[6rem] font-semibold leading-[0.88] tracking-tight" style={{ color: "#0A0A0A" }}>
              Nossos<br />
              <span className="italic font-light">Serviços</span>
            </h2>
          </div>
          <p className="font-body font-light text-sm max-w-xs leading-[1.9] md:mb-3" style={{ color: "rgba(0,0,0,0.35)" }}>
            Cada serviço executado com precisão e produtos da mais alta qualidade.
          </p>
        </motion.div>

        {/* Service list — editorial rows */}
        <div className="divide-y divide-black/6">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group grid grid-cols-12 gap-4 py-8 items-center hover:bg-black/[0.015] transition-colors duration-300 cursor-default"
            >
              {/* Index number */}
              <div className="col-span-1">
                <span className="font-body text-[10px] tracking-widest transition-colors duration-300 group-hover:text-gold" style={{ color: "rgba(0,0,0,0.18)" }}>
                  {s.num}
                </span>
              </div>

              <div className="col-span-11 grid grid-cols-11 gap-4 items-center border-l-2 border-transparent group-hover:border-gold pl-4 transition-all duration-300">
                {/* Service name */}
                <div className="col-span-4">
                  <h3 className="font-display text-2xl font-semibold transition-colors duration-300" style={{ color: "#0A0A0A" }}>
                    {s.name}
                  </h3>
                </div>
                {/* Description */}
                <div className="col-span-5 hidden md:block">
                  <p className="font-body font-light text-sm leading-relaxed transition-colors duration-300" style={{ color: "rgba(0,0,0,0.35)" }}>
                    {s.desc}
                  </p>
                </div>
                {/* Price + time */}
                <div className="col-span-6 md:col-span-2 text-right">
                  <p className="font-display text-2xl font-semibold text-gold">{s.price}</p>
                  <p className="font-body text-[9px] tracking-widest uppercase mt-1" style={{ color: "rgba(0,0,0,0.2)" }}>{s.time}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-black/6 flex items-center justify-between flex-wrap gap-4"
        >
          <p className="font-body text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(0,0,0,0.2)" }}>
            * Preços podem variar conforme complexidade
          </p>
          <a
            href="#agendar"
            className="group flex items-center gap-3 font-body text-[10px] tracking-[0.3em] uppercase hover:text-gold transition-colors duration-300 cursor-pointer"
            style={{ color: "#0A0A0A" }}
          >
            Agendar agora
            <span className="w-6 h-px bg-black group-hover:w-10 group-hover:bg-gold transition-all duration-400" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

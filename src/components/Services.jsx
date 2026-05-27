import { motion } from "framer-motion"

const services = [
  { num: "I", name: "Alongamento em Gel", desc: "Extensão natural e resistente com gel importado de alta qualidade. Durabilidade incomparável por até 4 semanas.", price: "R$ 120", time: "2h" },
  { num: "II", name: "Gel em Fibra de Vidro", desc: "Reforço com fibra de vidro para unhas mais resistentes, flexíveis e com acabamento ultra fino.", price: "R$ 100", time: "1h30" },
  { num: "III", name: "Nail Art Premium", desc: "Designs exclusivos e personalizados. Desde o minimalismo elegante até criações artísticas elaboradas.", price: "R$ 60+", time: "1h" },
  { num: "IV", name: "Manutenção em Gel", desc: "Manutenção completa com reequilíbrio, lixamento e reaplicação para manter o resultado perfeito.", price: "R$ 80", time: "1h30" },
  { num: "V", name: "Banho de Gel", desc: "Camada protetora de gel sobre as unhas naturais. Brilho duradouro e proteção total.", price: "R$ 70", time: "1h" },
  { num: "VI", name: "Remoção + Nova Aplicação", desc: "Remoção segura sem danos com nova aplicação completa. Transição perfeita entre estilos.", price: "R$ 140", time: "3h" },
]

export default function Services() {
  return (
    <section id="serviços" className="py-32 bg-espresso relative overflow-hidden">
      {/* Background text */}
      <div className="absolute top-0 right-0 font-display text-[20rem] text-cream/[0.02] leading-none pointer-events-none select-none">
        GEL
      </div>

      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-20 flex-wrap gap-6"
        >
          <div>
            <p className="font-body text-[10px] tracking-[0.5em] uppercase text-gold mb-4">O que oferecemos</p>
            <h2 className="font-display text-5xl md:text-7xl font-light text-cream leading-tight">
              Nossos<br /><span className="italic text-nude">Serviços</span>
            </h2>
          </div>
          <p className="font-body font-light text-nude/40 text-sm max-w-xs leading-loose">
            Cada serviço é executado com precisão milimétrica e produtos da mais alta qualidade.
          </p>
        </motion.div>

        <div className="divide-y divide-nude/10">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group grid grid-cols-12 gap-6 py-8 items-center hover:bg-nude/5 transition-colors duration-500 px-4 -mx-4 cursor-default"
            >
              <div className="col-span-1">
                <span className="font-display text-sm font-light text-gold/40 group-hover:text-gold transition-colors duration-500">{s.num}</span>
              </div>
              <div className="col-span-5">
                <h3 className="font-display text-2xl font-light text-cream group-hover:text-nude transition-colors duration-500">{s.name}</h3>
              </div>
              <div className="col-span-4 hidden md:block">
                <p className="font-body font-light text-nude/40 text-sm leading-relaxed group-hover:text-nude/60 transition-colors duration-500">{s.desc}</p>
              </div>
              <div className="col-span-2 md:col-span-2 text-right">
                <p className="font-display text-xl text-gold">{s.price}</p>
                <p className="font-body text-[10px] tracking-widest uppercase text-nude/30 mt-1">{s.time}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-nude/10 flex items-center justify-between flex-wrap gap-4"
        >
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-nude/30">* Preços sujeitos a alteração conforme complexidade</p>
          <a href="#agendar" className="group flex items-center gap-3 font-body text-[11px] tracking-[0.3em] uppercase text-gold hover:text-nude transition-colors duration-500">
            Agendar agora
            <span className="w-6 h-px bg-gold group-hover:w-10 transition-all duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

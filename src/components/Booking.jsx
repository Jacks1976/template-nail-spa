import { motion } from "framer-motion"
import { useState } from "react"

export default function Booking() {
  const [form, setForm] = useState({ nome: "", telefone: "", servico: "", data: "", mensagem: "" })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleWhatsApp = () => {
    const msg = `Olá Katiuscia! Gostaria de agendar:%0A%0ANome: ${form.nome}%0AServiço: ${form.servico}%0AData preferida: ${form.data}%0ATelefone: ${form.telefone}%0A${form.mensagem ? `Obs: ${form.mensagem}` : ""}`
    window.open(`https://wa.me/5511999999999?text=${msg}`, "_blank")
  }

  return (
    <section id="agendar" className="py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 border-r border-b border-nude/20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-l border-t border-nude/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-[10px] tracking-[0.5em] uppercase text-gold mb-6">
              Reserve seu horário
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-espresso leading-tight mb-8">
              Vamos criar algo<br />
              <span className="italic text-rose">extraordinário</span>
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="font-body font-light text-espresso/50 leading-loose text-sm mb-12">
              Agende sua visita com a Katiuscia e deixe-nos cuidar de cada detalhe. Respondemos em até 2 horas no horário de atendimento.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: "Atendimento",
                  value: "Seg–Sex 9h–19h · Sáb 9h–17h",
                },
                {
                  icon: (
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                  label: "Localização",
                  value: "Greenville, SC — EUA",
                },
                {
                  icon: (
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                  ),
                  label: "WhatsApp",
                  value: "(11) 99999-9999",
                },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <span className="mt-0.5">{info.icon}</span>
                  <div>
                    <p className="font-body text-[10px] tracking-[0.3em] uppercase text-espresso/40 mb-1">
                      {info.label}
                    </p>
                    <p className="font-body text-sm text-espresso/70">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {[
              { name: "nome",     placeholder: "Nome completo", type: "text" },
              { name: "telefone", placeholder: "WhatsApp",      type: "tel" },
              { name: "data",     placeholder: "Data preferida",type: "date" },
            ].map((f) => (
              <div key={f.name} className="relative group">
                <input
                  type={f.type}
                  name={f.name}
                  placeholder={f.placeholder}
                  value={form[f.name]}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-espresso/15 py-4 font-body text-sm text-espresso placeholder:text-espresso/30 focus:outline-none transition-colors duration-300 group-hover:border-espresso/30 focus:border-gold"
                />
                <div className="absolute bottom-0 left-0 w-0 h-px bg-gold group-focus-within:w-full transition-all duration-500" />
              </div>
            ))}

            <div className="relative group">
              <select
                name="servico"
                value={form.servico}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-espresso/15 py-4 font-body text-sm text-espresso focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
              >
                <option value="">Selecione o serviço</option>
                <option>Alongamento em Gel — R$ 120</option>
                <option>Gel em Fibra de Vidro — R$ 100</option>
                <option>Nail Art Premium — R$ 60+</option>
                <option>Manutenção em Gel — R$ 80</option>
                <option>Banho de Gel — R$ 70</option>
                <option>Remoção + Nova Aplicação — R$ 140</option>
              </select>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gold group-focus-within:w-full transition-all duration-500" />
            </div>

            <div className="relative group">
              <textarea
                name="mensagem"
                placeholder="Observações (opcional)"
                value={form.mensagem}
                onChange={handleChange}
                rows={3}
                className="w-full bg-transparent border-b border-espresso/15 py-4 font-body text-sm text-espresso placeholder:text-espresso/30 focus:outline-none transition-colors duration-300 resize-none"
              />
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gold group-focus-within:w-full transition-all duration-500" />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={handleWhatsApp}
              className="group relative w-full mt-4 py-5 bg-espresso text-cream font-body text-[11px] tracking-[0.4em] uppercase overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 group-hover:text-espresso transition-colors duration-500">
                Agendar via WhatsApp
              </span>
              <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

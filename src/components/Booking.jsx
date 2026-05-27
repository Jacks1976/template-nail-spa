import { motion } from "framer-motion"
import { useState } from "react"

export default function Booking() {
  const [form, setForm] = useState({ nome: "", telefone: "", servico: "", data: "", mensagem: "" })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleWhatsApp = () => {
    const msg = `Olá! Gostaria de agendar:%0A%0ANome: ${form.nome}%0AServiço: ${form.servico}%0AData preferida: ${form.data}%0ATelefone: ${form.telefone}%0A${form.mensagem ? `Obs: ${form.mensagem}` : ""}`
    window.open(`https://wa.me/5511999999999?text=${msg}`, "_blank")
  }

  return (
    <section id="agendar" className="py-32 bg-cream relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-64 h-64 border-r border-b border-nude/20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-l border-t border-nude/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-[10px] tracking-[0.5em] uppercase text-rose mb-6">Reserve seu horário</p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-espresso leading-tight mb-8">
              Vamos criar algo<br /><span className="italic text-rose">extraordinário</span>
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="font-body font-light text-espresso/50 leading-loose text-sm mb-12">
              Agende sua visita e deixe-nos cuidar de cada detalhe. Responderemos em até 2 horas no horário de atendimento.
            </p>

            <div className="space-y-6">
              {[
                { icon: "◈", label: "Atendimento", value: "Seg–Sex 9h–19h · Sáb 9h–17h" },
                { icon: "◉", label: "Localização", value: "Rua das Flores, 123 · São Paulo" },
                { icon: "✦", label: "WhatsApp", value: "(11) 99999-9999" },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <span className="text-gold text-sm mt-0.5">{info.icon}</span>
                  <div>
                    <p className="font-body text-[10px] tracking-[0.3em] uppercase text-espresso/40 mb-1">{info.label}</p>
                    <p className="font-body text-sm text-espresso/70">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {[
              { name: "nome", placeholder: "Nome completo", type: "text" },
              { name: "telefone", placeholder: "WhatsApp", type: "tel" },
              { name: "data", placeholder: "Data preferida", type: "date" },
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
              className="group relative w-full mt-4 py-5 bg-espresso text-cream font-body text-[11px] tracking-[0.4em] uppercase overflow-hidden"
            >
              <span className="relative z-10">Agendar via WhatsApp</span>
              <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="absolute z-10 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-espresso font-body text-[11px] tracking-[0.4em] uppercase">
                Agendar via WhatsApp
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

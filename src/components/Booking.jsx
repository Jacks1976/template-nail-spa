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
    <section id="agendar" className="min-h-screen flex flex-col lg:flex-row overflow-hidden">

      {/* Left — black info panel */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="lg:w-[45%] flex items-center px-10 md:px-16 py-24 lg:py-36 relative overflow-hidden"
        style={{ background: "#0A0A0A" }}
      >
        {/* Ghost section number */}
        <span className="absolute bottom-8 right-8 font-display text-[12rem] font-bold leading-none select-none pointer-events-none" style={{ color: "rgba(255,255,255,0.02)" }}>
          05
        </span>

        <div className="max-w-sm">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-px bg-gold" />
            <p className="font-body text-[9px] tracking-[0.5em] uppercase text-gold">
              Reserve seu horário
            </p>
          </div>

          <h2 className="font-display text-5xl md:text-6xl font-semibold text-white leading-[0.88] tracking-tight mb-3">
            Vamos criar
          </h2>
          <h2 className="font-display text-5xl md:text-6xl font-semibold italic font-light text-gold leading-[0.88] tracking-tight mb-14">
            algo especial
          </h2>

          <p className="font-body font-light leading-[1.9] text-[14px] mb-16 max-w-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Agende com a Katiuscia e deixe cada detalhe por conta da gente. Resposta em até 2 horas.
          </p>

          <div className="space-y-8">
            {[
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: "Horários",
                value: "Seg–Sex 9h–19h · Sáb 9h–17h",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
                label: "Localização",
                value: "Greenville, SC — EUA",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                ),
                label: "WhatsApp",
                value: "(11) 99999-9999",
              },
            ].map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <span className="text-gold mt-0.5 flex-shrink-0">{info.icon}</span>
                <div>
                  <p className="font-body text-[9px] tracking-[0.35em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.22)" }}>
                    {info.label}
                  </p>
                  <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right — white form panel */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white lg:w-[55%] flex items-center px-10 md:px-16 py-24 lg:py-36"
      >
        <div className="w-full max-w-md space-y-8">
          <p className="font-body text-[9px] tracking-[0.5em] uppercase mb-12" style={{ color: "rgba(0,0,0,0.3)" }}>
            Preencha o formulário
          </p>

          {[
            { name: "nome",     placeholder: "Nome completo",  type: "text", label: "Nome" },
            { name: "telefone", placeholder: "WhatsApp",       type: "tel",  label: "WhatsApp" },
            { name: "data",     placeholder: "Data preferida", type: "date", label: "Data" },
          ].map((f) => (
            <div key={f.name} className="relative group">
              <label htmlFor={f.name} className="block font-body text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.28)" }}>
                {f.label}
              </label>
              <input
                id={f.name}
                type={f.type}
                name={f.name}
                placeholder={f.placeholder}
                value={form[f.name]}
                onChange={handleChange}
                className="w-full bg-transparent border-b py-3 font-body text-sm placeholder:text-black/20 focus:outline-none transition-colors duration-300 focus:border-gold"
                style={{ borderColor: "rgba(0,0,0,0.1)", color: "#0A0A0A" }}
              />
            </div>
          ))}

          <div className="relative">
            <label htmlFor="servico" className="block font-body text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.28)" }}>
              Serviço
            </label>
            <select
              id="servico"
              name="servico"
              value={form.servico}
              onChange={handleChange}
              className="w-full bg-transparent border-b py-3 font-body text-sm focus:outline-none transition-colors duration-300 appearance-none cursor-pointer focus:border-gold"
              style={{ borderColor: "rgba(0,0,0,0.1)", color: "#0A0A0A" }}
            >
              <option value="">Selecione o serviço</option>
              <option>Alongamento em Gel — R$ 120</option>
              <option>Gel em Fibra de Vidro — R$ 100</option>
              <option>Nail Art Premium — R$ 60+</option>
              <option>Manutenção em Gel — R$ 80</option>
              <option>Banho de Gel — R$ 70</option>
              <option>Remoção + Aplicação — R$ 140</option>
            </select>
          </div>

          <div className="relative">
            <label htmlFor="mensagem" className="block font-body text-[9px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(0,0,0,0.28)" }}>
              Observações
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Opcional"
              value={form.mensagem}
              onChange={handleChange}
              rows={3}
              className="w-full bg-transparent border-b py-3 font-body text-sm placeholder:text-black/20 focus:outline-none transition-colors duration-300 resize-none focus:border-gold"
              style={{ borderColor: "rgba(0,0,0,0.1)", color: "#0A0A0A" }}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.005 }}
            whileTap={{ scale: 0.995 }}
            onClick={handleWhatsApp}
            className="group relative w-full mt-6 py-5 font-body text-[10px] tracking-[0.4em] uppercase overflow-hidden cursor-pointer text-white"
            style={{ background: "#0A0A0A" }}
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-400">
              Agendar via WhatsApp
            </span>
            <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-400" />
          </motion.button>
        </div>
      </motion.div>

    </section>
  )
}

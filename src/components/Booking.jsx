import { motion } from "framer-motion"
import { useState } from "react"

export default function Booking() {
  const [form, setForm] = useState({ nome: "", telefone: "", servico: "", data: "", mensagem: "" })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleWhatsApp = () => {
    const msg = `Olá! Gostaria de agendar:%0ANome: ${form.nome}%0AServiço: ${form.servico}%0AData: ${form.data}%0AMensagem: ${form.mensagem}`
    window.open(`https://wa.me/5511999999999?text=${msg}`, "_blank")
  }

  return (
    <section id="agendar" className="py-28 bg-espresso px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">Reserve seu horário</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream"><span className="italic text-nude">Agendar</span></h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-4">
          {[
            { name: "nome", placeholder: "Seu nome completo", type: "text" },
            { name: "telefone", placeholder: "Seu WhatsApp", type: "tel" },
            { name: "data", placeholder: "Data desejada", type: "date" },
          ].map((f) => (
            <input key={f.name} type={f.type} name={f.name} placeholder={f.placeholder} value={form[f.name]} onChange={handleChange} className="w-full bg-transparent border-b border-nude/30 py-4 font-body text-cream placeholder:text-nude/40 focus:outline-none focus:border-gold transition-colors duration-300 text-sm" />
          ))}
          <select name="servico" value={form.servico} onChange={handleChange} className="w-full bg-transparent border-b border-nude/30 py-4 font-body text-cream focus:outline-none focus:border-gold transition-colors duration-300 text-sm appearance-none cursor-pointer">
            <option value="" className="bg-espresso">Selecione o serviço</option>
            <option value="Alongamento em Gel" className="bg-espresso">Alongamento em Gel</option>
            <option value="Gel em Fibra de Vidro" className="bg-espresso">Gel em Fibra de Vidro</option>
            <option value="Nail Art Premium" className="bg-espresso">Nail Art Premium</option>
            <option value="Manutenção em Gel" className="bg-espresso">Manutenção em Gel</option>
            <option value="Banho de Gel" className="bg-espresso">Banho de Gel</option>
            <option value="Remoção + Aplicação" className="bg-espresso">Remoção + Aplicação</option>
          </select>
          <textarea name="mensagem" placeholder="Alguma observação? (opcional)" value={form.mensagem} onChange={handleChange} rows={3} className="w-full bg-transparent border-b border-nude/30 py-4 font-body text-cream placeholder:text-nude/40 focus:outline-none focus:border-gold transition-colors duration-300 text-sm resize-none" />
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleWhatsApp} className="w-full mt-6 py-5 bg-gold text-espresso font-body text-sm tracking-widest uppercase hover:bg-nude transition-colors duration-300">
            Agendar via WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

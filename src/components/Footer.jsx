import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-espresso border-t border-nude/10 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-display text-3xl font-light text-cream mb-4">LUXE <span className="italic text-nude">Nails</span></h3>
            <p className="font-body font-light text-nude/50 text-sm leading-relaxed">Especialistas em alongamento de unhas em gel. Arte e perfeição em cada detalhe.</p>
          </div>
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-gold mb-6">Horários</p>
            <div className="space-y-2 font-body text-sm text-nude/60">
              <p>Segunda a Sexta — 9h às 19h</p>
              <p>Sábado — 9h às 17h</p>
              <p>Domingo — Fechado</p>
            </div>
          </div>
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-gold mb-6">Contato</p>
            <div className="space-y-2 font-body text-sm text-nude/60">
              <p>(11) 99999-9999</p>
              <p>contato@luxenails.com.br</p>
              <p>Rua das Flores, 123 — SP</p>
            </div>
            <div className="flex gap-4 mt-6">
              {["Instagram", "WhatsApp", "Facebook"].map((s) => (
                <a key={s} href="#" className="font-body text-xs tracking-widest text-nude/40 hover:text-gold transition-colors duration-300">{s}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-nude/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-nude/30">© 2025 Luxe Nails. Todos os direitos reservados.</p>
          <p className="font-body text-xs text-nude/20">Template by Jacks Dev</p>
        </div>
      </div>
    </footer>
  )
}

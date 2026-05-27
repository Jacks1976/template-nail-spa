import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-espresso">
      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold" />
              <span className="font-display text-2xl font-light tracking-[0.3em] text-cream uppercase">
                Luxe <span className="italic text-nude">Nails</span>
              </span>
            </div>
            <p className="font-body font-light text-nude/40 text-sm leading-loose max-w-xs">
              Especialistas em alongamento de unhas em gel. Arte, precisão e elegância em cada detalhe desde 2020.
            </p>
          </div>

          <div>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold mb-6">Horários</p>
            <div className="space-y-3 font-body text-sm text-nude/40">
              <p>Segunda – Sexta<br /><span className="text-nude/60">9h às 19h</span></p>
              <p>Sábado<br /><span className="text-nude/60">9h às 17h</span></p>
              <p>Domingo<br /><span className="text-nude/30 line-through">Fechado</span></p>
            </div>
          </div>

          <div>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold mb-6">Contato</p>
            <div className="space-y-3 font-body text-sm text-nude/40">
              <p>(11) 99999-9999</p>
              <p>contato@luxenails.com.br</p>
              <p>Rua das Flores, 123<br />São Paulo — SP</p>
            </div>
            <div className="flex gap-5 mt-8">
              {["IG", "WA", "FB"].map((s) => (
                <a key={s} href="#" className="font-body text-[10px] tracking-[0.3em] text-nude/30 hover:text-gold transition-colors duration-300 border-b border-transparent hover:border-gold pb-0.5">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-nude/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[10px] tracking-widest text-nude/20">© 2025 Luxe Nails · Todos os direitos reservados</p>
          <p className="font-body text-[10px] tracking-widest text-nude/15">Desenvolvido por <span className="text-gold/30">Jacks Dev</span></p>
        </div>
      </div>
    </footer>
  )
}

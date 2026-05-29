import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer style={{ background: "#0A0A0A" }}>
      {/* Top gold hairline */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 pt-20 pb-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          {/* Brand column */}
          <div className="md:col-span-5">
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-6 cursor-pointer"
            >
              <img
                src="/images/logo-kf.png"
                alt="KF Nail Design"
                className="h-10 w-auto object-contain"
              />
            </motion.a>
            <p className="font-body text-[9px] tracking-[0.5em] uppercase mb-5" style={{ color: "rgba(201,169,110,0.5)" }}>
              Beleza · Detalhe · Confiança
            </p>
            <p className="font-body font-light text-sm leading-[1.9] max-w-xs" style={{ color: "rgba(255,255,255,0.22)" }}>
              Especialistas em alongamento de unhas em gel. Arte, precisão e elegância em cada detalhe.
            </p>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-3">
            <p className="font-body text-[9px] tracking-[0.4em] uppercase mb-8" style={{ color: "rgba(201,169,110,0.45)" }}>
              Navegação
            </p>
            <ul className="space-y-4">
              {["Serviços", "Galeria", "Sobre", "Depoimentos", "Agendar"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="font-body text-sm hover:text-gold transition-colors duration-300 cursor-pointer"
                    style={{ color: "rgba(255,255,255,0.28)" }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + contact column */}
          <div className="md:col-span-4">
            <p className="font-body text-[9px] tracking-[0.4em] uppercase mb-8" style={{ color: "rgba(201,169,110,0.45)" }}>
              Horários
            </p>
            <div className="space-y-3 font-body text-sm mb-10" style={{ color: "rgba(255,255,255,0.22)" }}>
              <p>Segunda – Sexta&ensp;<span style={{ color: "rgba(255,255,255,0.42)" }}>9h–19h</span></p>
              <p>Sábado&ensp;<span style={{ color: "rgba(255,255,255,0.42)" }}>9h–17h</span></p>
              <p className="line-through" style={{ color: "rgba(255,255,255,0.12)" }}>Domingo — Fechado</p>
            </div>

            <p className="font-body text-[9px] tracking-[0.4em] uppercase mb-5" style={{ color: "rgba(201,169,110,0.45)" }}>
              Contato
            </p>
            <div className="space-y-2 font-body text-sm mb-8" style={{ color: "rgba(255,255,255,0.22)" }}>
              <p>(11) 99999-9999</p>
              <p>kfnaildesign@gmail.com</p>
              <p>Greenville, SC</p>
            </div>

            <div className="flex gap-5">
              {[
                { label: "Instagram", href: "#" },
                { label: "WhatsApp", href: "#" },
                { label: "Facebook", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="font-body text-[9px] tracking-[0.3em] uppercase hover:text-gold transition-colors duration-300 border-b border-transparent hover:border-gold/40 pb-0.5 cursor-pointer"
                  style={{ color: "rgba(255,255,255,0.18)" }}
                >
                  {s.label.slice(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="h-px mb-8" style={{ background: "rgba(255,255,255,0.05)" }} />
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-body text-[9px] tracking-widest" style={{ color: "rgba(255,255,255,0.12)" }}>
            © 2025 KF Nail Design · Todos os direitos reservados
          </p>
          <p className="font-body text-[9px] tracking-widest" style={{ color: "rgba(255,255,255,0.08)" }}>
            Desenvolvido por <span style={{ color: "rgba(201,169,110,0.28)" }}>Jacks Dev</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

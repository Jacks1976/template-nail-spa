import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-espresso">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          <div className="md:col-span-2">
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
                className="h-14 w-auto object-contain"
              />
            </motion.a>
            <p className="font-body text-[11px] tracking-[0.4em] uppercase text-gold/60 mb-4">
              Beleza • Detalhe • Confiança
            </p>
            <p className="font-body font-light text-nude/40 text-sm leading-loose max-w-xs">
              Especialistas em alongamento de unhas em gel. Arte, precisão e elegância em cada detalhe.
            </p>
          </div>

          <div>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold mb-6">
              Horários
            </p>
            <div className="space-y-3 font-body text-sm text-nude/40">
              <p>
                Segunda – Sexta<br />
                <span className="text-nude/60">9h às 19h</span>
              </p>
              <p>
                Sábado<br />
                <span className="text-nude/60">9h às 17h</span>
              </p>
              <p>
                Domingo<br />
                <span className="text-nude/30 line-through">Fechado</span>
              </p>
            </div>
          </div>

          <div>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold mb-6">
              Contato
            </p>
            <div className="space-y-3 font-body text-sm text-nude/40">
              <p>(11) 99999-9999</p>
              <p>kfnaildesign@gmail.com</p>
              <p>Greenville, SC — EUA</p>
            </div>

            <div className="flex gap-5 mt-8">
              {[
                { label: "Instagram", href: "#" },
                { label: "WhatsApp", href: "#" },
                { label: "Facebook", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="font-body text-[10px] tracking-[0.3em] text-nude/30 hover:text-gold transition-colors duration-300 border-b border-transparent hover:border-gold pb-0.5 cursor-pointer"
                >
                  {s.label.slice(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="h-px bg-nude/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[10px] tracking-widest text-nude/20">
            © 2025 KF Nail Design · Todos os direitos reservados
          </p>
          <p className="font-body text-[10px] tracking-widest text-nude/15">
            Desenvolvido por <span className="text-gold/40">Jacks Dev</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

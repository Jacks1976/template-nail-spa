import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-espresso">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="/images/nail-red-hand.png"
          alt="KF Nail Design"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/50 to-espresso/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/60 via-transparent to-espresso/60" />
      </motion.div>

      {/* Side decorative lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-gold/50" />
        <span className="font-body text-[8px] tracking-[0.5em] uppercase text-gold/40 [writing-mode:vertical-lr] my-4">
          KF Nail Design
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-px bg-gold mx-auto mb-8 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-[10px] tracking-[0.6em] uppercase text-gold/80 mb-8"
        >
          Beleza • Detalhe • Confiança
        </motion.p>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-7xl md:text-[9rem] font-light text-cream leading-[0.9] tracking-tight"
          >
            Unhas que
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-7xl md:text-[9rem] font-light italic text-gold leading-[0.9] tracking-tight"
          >
            encantam
          </motion.h1>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-10 origin-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="font-body font-light text-nude/60 text-base max-w-sm mx-auto mb-14 leading-loose tracking-wide"
        >
          Especialistas em gel com técnica e delicadeza.<br />
          Cada detalhe pensado para você.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#agendar"
            className="group relative px-12 py-4 bg-gold text-espresso font-body text-[11px] tracking-[0.3em] uppercase overflow-hidden cursor-pointer"
          >
            <span className="relative z-10">Agendar Agora</span>
            <div className="absolute inset-0 bg-nude translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
          <a
            href="#serviços"
            className="flex items-center gap-3 font-body text-[11px] tracking-[0.3em] uppercase text-nude/60 hover:text-gold transition-colors duration-500 group cursor-pointer"
          >
            <span className="w-6 h-px bg-nude/40 group-hover:w-10 group-hover:bg-gold transition-all duration-500" />
            Ver Serviços
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent" />
          <span className="font-body text-[9px] tracking-[0.4em] uppercase text-nude/30">scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

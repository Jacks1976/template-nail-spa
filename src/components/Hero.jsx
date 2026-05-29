import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])

  return (
    <section ref={ref} className="relative min-h-screen flex overflow-hidden pt-[57px]" style={{ background: "#0A0A0A" }}>
      {/* Left — editorial text panel */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-[52%] px-10 md:px-16 lg:px-24 py-28" style={{ background: "#0A0A0A" }}>
        <motion.div style={{ y: textY }} className="max-w-lg">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-body text-[9px] tracking-[0.7em] uppercase text-gold mb-14"
          >
            Beleza · Detalhe · Confiança
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 110 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[5.5rem] md:text-[7.5rem] lg:text-[9rem] leading-[0.85] tracking-tight text-white"
            >
              Unhas
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 110 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[5.5rem] md:text-[7.5rem] lg:text-[9rem] italic font-light leading-[0.85] tracking-tight text-gold"
            >
              que
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-16">
            <motion.h1
              initial={{ y: 110 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[5.5rem] md:text-[7.5rem] lg:text-[9rem] leading-[0.85] tracking-tight text-white"
            >
              encantam
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="w-12 h-px bg-gold mb-10 origin-left"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="font-body font-light text-white/30 text-sm leading-loose max-w-xs mb-14"
          >
            Especialistas em gel com técnica refinada e atenção exclusiva a cada detalhe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-5 items-start"
          >
            <a
              href="#agendar"
              className="group relative px-10 py-4 bg-gold text-black font-body text-[10px] tracking-[0.35em] uppercase overflow-hidden cursor-pointer"
            >
              <span className="relative z-10">Agendar Agora</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-400" />
            </a>
            <a
              href="#galeria"
              className="flex items-center gap-3 font-body text-[10px] tracking-[0.3em] uppercase text-white/25 hover:text-gold transition-colors duration-300 group cursor-pointer self-center"
            >
              <span className="w-5 h-px bg-white/20 group-hover:w-8 group-hover:bg-gold transition-all duration-400" />
              Ver Galeria
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-10 md:left-16 lg:left-24 flex items-center gap-4"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent"
          />
          <span className="font-body text-[8px] tracking-[0.5em] uppercase text-white/15">Scroll</span>
        </motion.div>
      </div>

      {/* Right — photo panel */}
      <motion.div
        style={{ y: imgY }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block absolute right-0 top-0 w-[50%] h-full"
      >
        <img
          src="/images/nail-red-hand.png"
          alt="KF Nail Design — nail art"
          className="w-full h-full object-cover object-center"
        />
        {/* Thin gold border */}
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-8 flex items-center gap-3"
        >
          <div className="w-6 h-px bg-gold" />
          <span className="font-body text-[8px] tracking-[0.4em] uppercase text-white/40">KF Nail Design</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

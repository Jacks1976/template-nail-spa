import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-espresso">
      {/* Background photo */}
      <img
        src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1600&q=90"
        alt="Nail spa background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-espresso/90 via-espresso/70 to-rose/40" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full border border-gold/20 opacity-40" />
      <div className="absolute top-32 right-20 w-48 h-48 rounded-full border border-gold/10 opacity-30" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full border border-nude/10 opacity-20" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-6"
        >
          Spa de Alongamento em Gel
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-6xl md:text-8xl font-light text-cream leading-none mb-6"
        >
          Arte que
          <br />
          <span className="italic text-nude">transforma</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body font-light text-nude/70 text-lg max-w-md mx-auto mb-12 leading-relaxed"
        >
          Unhas impecáveis com técnicas exclusivas em gel. Beleza e elegância em cada detalhe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#agendar" className="px-10 py-4 bg-gold text-espresso font-body text-sm tracking-widest uppercase hover:bg-nude transition-colors duration-300">
            Agendar Agora
          </a>
          <a href="#serviços" className="px-10 py-4 border border-nude/40 text-nude font-body text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors duration-300">
            Ver Serviços
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs tracking-widest uppercase text-nude/40">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-nude/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}

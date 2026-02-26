'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-walnut-400">
      {/* Wood grain base texture */}
      <div className="absolute inset-0 wood-grain-texture opacity-80" />
      {/* Climbing wall grid overlay */}
      <div className="absolute inset-0 climb-grid-texture" />
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-walnut-400/30 via-transparent to-walnut-400/60" />

      {/* Decorative corner grain lines — left */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{
          background: 'linear-gradient(to bottom, transparent, #C8860A55, transparent)',
        }}
      />
      {/* Decorative line — right */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1"
        style={{
          background: 'linear-gradient(to bottom, transparent, #C8860A55, transparent)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0.2)}
          className="font-body text-xs tracking-widest2 uppercase text-amber-100 mb-6"
        >
          Handcrafted in Scandinavia
        </motion.p>

        {/* Main headline */}
        <motion.h1
          {...fadeUp(0.4)}
          className="font-display font-black text-cream-100 leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
        >
          Wood that trains
          <br />
          <em className="text-amber-200 not-italic">your hands.</em>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.6)}
          className="font-body text-stone-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Finger training boards and holds, milled from locally sourced
          Norwegian timber. Built to last. Built to climb.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.8)} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollTo('products')}
            className="px-8 py-4 bg-amber-300 text-walnut-400 font-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-amber-200 transition-colors duration-200 min-w-[180px]"
          >
            See Our Boards
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="px-8 py-4 border border-cream-300/40 text-cream-200 font-body font-medium text-sm tracking-widest uppercase rounded-sm hover:border-cream-200 hover:text-cream-100 transition-colors duration-200 min-w-[180px]"
          >
            Our Story
          </button>
        </motion.div>

        {/* Amber accent line */}
        <motion.div
          {...fadeUp(1.0)}
          className="mt-12 flex justify-center"
        >
          <div className="w-16 h-0.5 bg-amber-300 opacity-60" />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs tracking-widest uppercase text-stone-200 opacity-60">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-amber-300/60 to-transparent" />
      </motion.div>
    </section>
  )
}

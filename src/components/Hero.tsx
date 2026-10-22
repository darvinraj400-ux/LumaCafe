import { Suspense } from 'react'
import { motion } from 'framer-motion'
import CoffeeScene from './CoffeeScene'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Clean warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0e08] via-[#2d1810] to-[#1a0e08]" />
      
      {/* Subtle warm glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full bg-amber-900/10 blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-orange-900/8 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-8 items-center pt-24 pb-16">
        {/* Left content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/20 border border-amber-700/20 text-amber-200/80 text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Premium Artisan Coffee
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
          >
            Crafted with
            <br />
            <span className="text-gradient italic font-medium">Passion</span>
            <span className="text-cream/80"> &amp;</span>
            <br />
            <span className="text-cream/90">Precision</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-cream/50 text-lg max-w-md leading-relaxed"
          >
            Every cup tells a story of carefully selected beans, expert roasting, 
            and the art of the perfect brew.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#menu"
              className="group px-8 py-4 bg-gradient-to-b from-amber-700 to-amber-900 text-cream rounded-full font-semibold hover:from-amber-600 hover:to-amber-800 transition-all duration-300 shadow-xl shadow-amber-950/50 hover:scale-105 border border-amber-600/30"
            >
              <span className="flex items-center gap-2">
                Explore Menu
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white/5 text-cream rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10"
            >
              Our Story
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex gap-8 pt-6 border-t border-white/5"
          >
            {[
              { value: '15+', label: 'Years' },
              { value: '50K+', label: 'Cups Daily' },
              { value: '4.9', label: 'Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                <div className="text-cream/40 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="h-[450px] sm:h-[500px] lg:h-[600px] relative"
        >
          {/* Soft glow behind scene */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full bg-gradient-radial from-amber-800/20 via-amber-900/5 to-transparent blur-3xl" />
          </div>

          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-amber-700/30 border-t-amber-500 rounded-full animate-spin" />
            </div>
          }>
            <CoffeeScene />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cream/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cream/30 to-transparent" />
      </motion.div>
    </section>
  )
}

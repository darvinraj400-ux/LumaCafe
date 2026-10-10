import { Suspense } from 'react'
import { motion } from 'framer-motion'
import CoffeeScene from './CoffeeScene'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-espresso via-coffee-900 to-espresso" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-coffee-700/10 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-coffee-500/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center pt-20">
        {/* Left content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-light text-coffee-300 text-sm font-medium mb-6">
              ✨ Premium Artisan Coffee
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl font-bold leading-tight"
          >
            Crafted with
            <br />
            <span className="text-gradient">Passion</span> &
            <br />
            <span className="italic font-medium">Precision</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-cream/60 text-lg max-w-md leading-relaxed"
          >
            Every cup tells a story of carefully selected beans, expert roasting, 
            and the art of the perfect brew. Experience coffee like never before.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#menu"
              className="px-8 py-4 bg-gradient-to-r from-coffee-500 to-coffee-700 text-cream rounded-full font-semibold hover:from-coffee-400 hover:to-coffee-600 transition-all duration-300 shadow-xl shadow-coffee-900/50 hover:shadow-coffee-800/50 hover:scale-105"
            >
              Explore Menu
            </a>
            <a
              href="#about"
              className="px-8 py-4 glass text-cream rounded-full font-semibold hover:bg-coffee-800/30 transition-all duration-300 hover:scale-105"
            >
              Our Story
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex gap-8 pt-4"
          >
            {[
              { value: '15+', label: 'Years' },
              { value: '50K+', label: 'Cups Daily' },
              { value: '4.9', label: 'Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                <div className="text-cream/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="h-[500px] lg:h-[600px] relative"
        >
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-coffee-500/30 border-t-coffee-400 rounded-full animate-spin" />
            </div>
          }>
            <CoffeeScene />
          </Suspense>
          
          {/* Glow effect behind 3D scene */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="w-80 h-80 rounded-full bg-coffee-500/20 blur-3xl" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-coffee-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

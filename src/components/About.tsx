import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    icon: '🌱',
    title: 'Ethically Sourced',
    description: 'Direct trade with farmers in Colombia, Ethiopia, and Guatemala.',
  },
  {
    icon: '🔥',
    title: 'Artisan Roasted',
    description: 'Small-batch roasting to bring out each bean\'s unique character.',
  },
  {
    icon: '👨‍🍳',
    title: 'Expert Baristas',
    description: 'Over 200 hours of training to master perfect extraction.',
  },
  {
    icon: '♻️',
    title: 'Sustainable',
    description: 'Zero-waste with compostable packaging and carbon-neutral ops.',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0805] via-[#1a0e08] to-[#0f0805]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-950/50 to-[#0f0805] overflow-hidden border border-amber-900/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="text-7xl opacity-80">☕</div>
                    <div className="font-display text-3xl text-gradient font-bold">Since 2009</div>
                    <div className="text-cream/40 text-sm">Crafting perfection, one cup at a time</div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-xl font-bold text-gradient">15+</div>
                  <div className="text-[10px] text-cream/50 uppercase tracking-wider">Years</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 shadow-2xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">⭐</span>
                  <div>
                    <div className="text-sm font-semibold text-cream/90">4.9/5</div>
                    <div className="text-[10px] text-cream/40">2000+ Reviews</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-900/20 border border-amber-700/20 text-amber-200/70 text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Where Every Bean
                <br />
                <span className="text-gradient italic font-medium">Tells a Story</span>
              </h2>
              <p className="text-cream/45 text-base leading-relaxed">
                Founded in 2009, Brew & Bean started as a small corner café with a 
                big dream — to bring the world's finest coffee to our community. 
                Today, we continue that mission with the same passion and dedication.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="glass-light rounded-xl p-4 hover:bg-white/[0.03] transition-all duration-300 group"
                >
                  <span className="text-xl mb-2 block group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </span>
                  <h3 className="font-semibold text-cream/85 text-sm mb-1">{feature.title}</h3>
                  <p className="text-cream/40 text-xs leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

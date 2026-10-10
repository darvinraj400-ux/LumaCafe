import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    icon: '🌱',
    title: 'Ethically Sourced',
    description: 'Direct trade relationships with farmers in Colombia, Ethiopia, and Guatemala.',
  },
  {
    icon: '🔥',
    title: 'Artisan Roasted',
    description: 'Small-batch roasting in-house to bring out each bean\'s unique character.',
  },
  {
    icon: '👨‍🍳',
    title: 'Expert Baristas',
    description: 'Our team trains over 200 hours to master the craft of perfect extraction.',
  },
  {
    icon: '♻️',
    title: 'Sustainable',
    description: 'Zero-waste commitment with compostable packaging and carbon-neutral operations.',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso to-coffee-900/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-coffee-700/5 blur-3xl -translate-y-1/2" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main visual */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-coffee-800 to-coffee-900 overflow-hidden border border-coffee-700/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="text-8xl">☕</div>
                    <div className="font-display text-3xl text-gradient font-bold">Since 2009</div>
                    <div className="text-cream/50">Crafting perfection, one cup at a time</div>
                  </div>
                </div>
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-20 h-20 border border-coffee-500 rounded-full" />
                  <div className="absolute bottom-4 right-4 w-32 h-32 border border-coffee-500 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-coffee-500 rounded-full" />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">15+</div>
                  <div className="text-xs text-cream/60">Years of Excellence</div>
                </div>
              </motion.div>

              {/* Another floating element */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">⭐</span>
                  <div>
                    <div className="text-sm font-bold text-cream">4.9/5</div>
                    <div className="text-xs text-cream/60">2000+ Reviews</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full glass-light text-coffee-300 text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Where Every Bean
                <br />
                <span className="text-gradient">Tells a Story</span>
              </h2>
              <p className="text-cream/60 text-lg leading-relaxed">
                Founded in 2009, Brew & Bean started as a small corner café with a 
                big dream — to bring the world's finest coffee to our community. 
                Today, we continue that mission with the same passion and dedication.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="glass-light rounded-xl p-4 hover:bg-coffee-800/30 transition-all duration-300 group"
                >
                  <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </span>
                  <h3 className="font-semibold text-cream mb-1">{feature.title}</h3>
                  <p className="text-cream/50 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

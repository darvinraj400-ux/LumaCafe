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
          {/* Left - Animated Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            {/* Main image */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-0 w-[320px] h-[320px] rounded-3xl overflow-hidden shadow-2xl shadow-amber-950/50 border-2 border-amber-700/20"
            >
              <img 
                src="https://image.qwenlm.ai/generated-images/59b8e439-b231-427a-91f2-c2aa897274a6/_result.png" 
                alt="Coffee shop interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
            </motion.div>

            {/* Floating image 1 */}
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                x: [0, -8, 0],
                rotate: [0, -2, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-0 right-0 w-[240px] h-[240px] rounded-2xl overflow-hidden shadow-xl shadow-amber-950/40 border border-amber-700/20"
            >
              <img 
                src="https://image.qwenlm.ai/generated-images/b305b7bb-8ca8-4dd3-b66d-6b98bf8f22a4/_result.png" 
                alt="Coffee beans" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-black/30 to-transparent" />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute top-1/2 right-10 glass rounded-2xl p-4 shadow-2xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">15+</div>
                <div className="text-[10px] text-cream/50 uppercase tracking-wider">Years</div>
              </div>
            </motion.div>

            {/* Another floating badge */}
            <motion.div
              animate={{ 
                y: [0, 6, 0],
                scale: [1, 1.03, 1]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
              className="absolute bottom-20 left-10 glass rounded-2xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">⭐</span>
                <div>
                  <div className="text-sm font-semibold text-cream/90">4.9/5</div>
                  <div className="text-[10px] text-cream/40">2000+ Reviews</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative glow */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-amber-600/20 blur-3xl"
            />
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

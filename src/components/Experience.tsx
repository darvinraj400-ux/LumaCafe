import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    step: '01',
    title: 'Select Your Beans',
    description: 'Choose from our curated selection of single-origin and blend options, each with unique flavor profiles.',
    icon: '🫘',
  },
  {
    step: '02',
    title: 'Expert Roasting',
    description: 'Our master roasters bring out the best in every batch using precision temperature control.',
    icon: '🔥',
  },
  {
    step: '03',
    title: 'Perfect Extraction',
    description: 'Trained baristas use precise timing, temperature, and pressure for the ideal cup.',
    icon: '⏱️',
  },
  {
    step: '04',
    title: 'Savor the Moment',
    description: 'Enjoy your crafted beverage in our cozy space or take it with you on the go.',
    icon: '✨',
  },
]

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Coffee Enthusiast',
    text: 'The pour-over here is absolutely transcendent. I\'ve traveled the world for coffee, and this ranks in my top 3.',
    rating: 5,
  },
  {
    name: 'James Chen',
    role: 'Regular Customer',
    text: 'My morning ritual wouldn\'t be complete without Brew & Bean. The consistency and quality is unmatched.',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Food Blogger',
    text: 'Not just coffee — it\'s an experience. The ambiance, the aroma, the attention to detail. Pure perfection.',
    rating: 5,
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/30 via-espresso to-coffee-900/20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coffee-700/50 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-light text-coffee-300 text-sm font-medium mb-4">
            The Experience
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            From Bean to <span className="text-gradient">Bliss</span>
          </h2>
          <p className="text-cream/50 max-w-2xl mx-auto text-lg">
            Every step of our process is designed to deliver an extraordinary coffee experience.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-32">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.step}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >
              {/* Connector line */}
              {i < 3 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-coffee-700/50 to-transparent" />
              )}
              
              <div className="glass rounded-2xl p-6 text-center hover:bg-coffee-800/30 transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {exp.icon}
                </div>
                <div className="text-coffee-400 font-display text-lg font-bold mb-2">
                  {exp.step}
                </div>
                <h3 className="font-display text-xl font-semibold text-cream mb-3">
                  {exp.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold">
            What Our <span className="text-gradient">Guests</span> Say
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-coffee-800/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <span key={j} className="text-coffee-400">★</span>
                ))}
              </div>
              <p className="text-cream/70 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coffee-400 to-coffee-700 flex items-center justify-center text-cream font-bold text-sm">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-cream text-sm">{testimonial.name}</div>
                  <div className="text-cream/50 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    step: '01',
    title: 'Select Your Beans',
    description: 'Choose from our curated selection of single-origin and blend options.',
  },
  {
    step: '02',
    title: 'Expert Roasting',
    description: 'Master roasters bring out the best using precision temperature control.',
  },
  {
    step: '03',
    title: 'Perfect Extraction',
    description: 'Precise timing, temperature, and pressure for the ideal cup.',
  },
  {
    step: '04',
    title: 'Savor the Moment',
    description: 'Enjoy in our cozy space or take it with you on the go.',
  },
]

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Coffee Enthusiast',
    text: 'The pour-over here is absolutely transcendent. I\'ve traveled the world for coffee, and this ranks in my top 3.',
  },
  {
    name: 'James Chen',
    role: 'Regular Customer',
    text: 'My morning ritual wouldn\'t be complete without Brew & Bean. The consistency and quality is unmatched.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Food Blogger',
    text: 'Not just coffee — it\'s an experience. The ambiance, the aroma, the attention to detail. Pure perfection.',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0805] via-[#1a0e08] to-[#0f0805]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-900/20 border border-amber-700/20 text-amber-200/70 text-sm font-medium mb-4">
            The Experience
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            From Bean to <span className="text-gradient italic font-medium">Bliss</span>
          </h2>
          <p className="text-cream/40 max-w-xl mx-auto text-base">
            Every step of our process is designed to deliver an extraordinary coffee experience.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-24">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-6 text-center hover:bg-white/[0.03] transition-all duration-500 h-full">
                <div className="text-amber-600/60 font-display text-3xl font-bold mb-3">
                  {exp.step}
                </div>
                <h3 className="font-display text-lg font-semibold text-cream/90 mb-2">
                  {exp.title}
                </h3>
                <p className="text-cream/40 text-sm leading-relaxed">
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold">
            What Our <span className="text-gradient italic font-medium">Guests</span> Say
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-white/[0.03] transition-all duration-500"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-amber-500/80 text-sm">★</span>
                ))}
              </div>
              <p className="text-cream/55 italic mb-5 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center text-cream/90 font-semibold text-sm border border-amber-600/30">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-medium text-cream/80 text-sm">{testimonial.name}</div>
                  <div className="text-cream/35 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

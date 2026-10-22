import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const menuItems = [
  {
    name: 'Espresso Classico',
    description: 'Rich, bold single shot with a perfect crema',
    price: '$4.50',
    category: 'Classic',
  },
  {
    name: 'Velvet Latte',
    description: 'Silky smooth with microfoam art and vanilla notes',
    price: '$5.80',
    category: 'Signature',
  },
  {
    name: 'Caramel Macchiato',
    description: 'Layered espresso with buttery caramel drizzle',
    price: '$6.20',
    category: 'Signature',
  },
  {
    name: 'Cold Brew Reserve',
    description: '24-hour steeped single origin, smooth & complex',
    price: '$5.50',
    category: 'Cold',
  },
  {
    name: 'Mocha Noir',
    description: 'Dark chocolate meets double espresso perfection',
    price: '$6.50',
    category: 'Signature',
  },
  {
    name: 'Matcha Fusion',
    description: 'Ceremonial grade matcha with oat milk harmony',
    price: '$6.00',
    category: 'Specialty',
  },
  {
    name: 'Affogato Dream',
    description: 'Hot espresso poured over artisan vanilla gelato',
    price: '$7.00',
    category: 'Dessert',
  },
  {
    name: 'Pour Over Single',
    description: 'Hand-poured Ethiopian Yirgacheffe, bright & floral',
    price: '$7.50',
    category: 'Single Origin',
  },
]

function MenuCard({ item, index }: { item: typeof menuItems[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="menu-card group relative glass rounded-2xl p-5 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-[10px] font-semibold text-amber-400/70 uppercase tracking-widest bg-amber-900/20 px-2.5 py-1 rounded-full border border-amber-700/20">
          {item.category}
        </span>
      </div>

      <h3 className="font-display text-lg font-semibold text-cream/90 mb-1.5 group-hover:text-amber-200 transition-colors">
        {item.name}
      </h3>
      
      <p className="text-cream/40 text-sm leading-relaxed mb-4">
        {item.description}
      </p>

      <div className="flex items-center justify-between pt-3 border-t border-white/5">
        <span className="text-xl font-bold text-gradient">{item.price}</span>
        <button className="px-4 py-1.5 bg-white/5 hover:bg-amber-900/30 text-cream/60 hover:text-cream rounded-full text-xs font-medium transition-all duration-300 border border-white/5 hover:border-amber-700/30">
          Add to Cart
        </button>
      </div>
    </motion.div>
  )
}

export default function MenuSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section id="menu" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0805] via-[#1a0e08] to-[#0f0805]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-amber-900/20 border border-amber-700/20 text-amber-200/70 text-sm font-medium mb-4"
          >
            Our Menu
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-4xl md:text-5xl font-bold mb-4"
          >
            Crafted <span className="text-gradient italic font-medium">Beverages</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-cream/40 max-w-xl mx-auto text-base"
          >
            Each drink is a masterpiece, crafted by our expert baristas using 
            the finest ingredients sourced from around the world.
          </motion.p>
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {menuItems.map((item, index) => (
            <MenuCard key={item.name} item={item} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-b from-amber-700 to-amber-900 text-cream rounded-full font-medium hover:from-amber-600 hover:to-amber-800 transition-all duration-300 border border-amber-600/30 hover:scale-105"
          >
            View Full Menu
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

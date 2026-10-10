import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const menuItems = [
  {
    name: 'Espresso Classico',
    description: 'Rich, bold single shot with a perfect crema',
    price: '$4.50',
    category: 'Classic',
    image: '☕',
    popular: true,
  },
  {
    name: 'Velvet Latte',
    description: 'Silky smooth with microfoam art and vanilla notes',
    price: '$5.80',
    category: 'Signature',
    image: '🥛',
    popular: true,
  },
  {
    name: 'Caramel Macchiato',
    description: 'Layered espresso with buttery caramel drizzle',
    price: '$6.20',
    category: 'Signature',
    image: '🍯',
    popular: false,
  },
  {
    name: 'Cold Brew Reserve',
    description: '24-hour steeped single origin, smooth & complex',
    price: '$5.50',
    category: 'Cold',
    image: '🧊',
    popular: true,
  },
  {
    name: 'Mocha Noir',
    description: 'Dark chocolate meets double espresso perfection',
    price: '$6.50',
    category: 'Signature',
    image: '🍫',
    popular: false,
  },
  {
    name: 'Matcha Fusion',
    description: 'Ceremonial grade matcha with oat milk harmony',
    price: '$6.00',
    category: 'Specialty',
    image: '🍵',
    popular: false,
  },
  {
    name: 'Affogato Dream',
    description: 'Hot espresso poured over artisan vanilla gelato',
    price: '$7.00',
    category: 'Dessert',
    image: '🍨',
    popular: true,
  },
  {
    name: 'Pour Over Single',
    description: 'Hand-poured Ethiopian Yirgacheffe, bright & floral',
    price: '$7.50',
    category: 'Single Origin',
    image: '🫖',
    popular: false,
  },
]

function MenuCard({ item, index }: { item: typeof menuItems[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="menu-card group relative glass rounded-2xl p-6 cursor-pointer"
    >
      {item.popular && (
        <div className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-coffee-400 to-coffee-600 rounded-full text-xs font-bold text-cream">
          Popular
        </div>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
          {item.image}
        </span>
        <span className="text-xs font-medium text-coffee-400 uppercase tracking-wider bg-coffee-900/50 px-2 py-1 rounded-full">
          {item.category}
        </span>
      </div>

      <h3 className="font-display text-xl font-semibold text-cream mb-2 group-hover:text-coffee-300 transition-colors">
        {item.name}
      </h3>
      
      <p className="text-cream/50 text-sm leading-relaxed mb-4">
        {item.description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gradient">{item.price}</span>
        <button className="px-4 py-2 bg-coffee-800/50 hover:bg-coffee-700/50 text-cream/80 hover:text-cream rounded-full text-sm font-medium transition-all duration-300 border border-coffee-700/30 hover:border-coffee-500/50">
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
    <section id="menu" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso via-coffee-900/50 to-espresso" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coffee-700/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full glass-light text-coffee-300 text-sm font-medium mb-4"
          >
            Our Menu
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6"
          >
            Crafted <span className="text-gradient">Beverages</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-cream/50 max-w-2xl mx-auto text-lg"
          >
            Each drink is a masterpiece, crafted by our expert baristas using 
            the finest ingredients sourced from around the world.
          </motion.p>
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-coffee-500 to-coffee-700 text-cream rounded-full font-semibold hover:from-coffee-400 hover:to-coffee-600 transition-all duration-300 shadow-xl shadow-coffee-900/50 hover:scale-105"
          >
            View Full Menu
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

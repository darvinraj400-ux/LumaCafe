import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0805] via-[#1a0e08] to-[#0f0805]" />
      
      {/* Warm glow effects */}
      <div className="absolute top-1/2 right-1/3 w-[800px] h-[800px] rounded-full bg-amber-900/15 blur-[150px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-900/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center pt-24 pb-16">
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

        {/* Right - Animated Image Gallery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative h-[500px] lg:h-[600px]"
        >
          {/* Main featured image */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 1, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-3xl overflow-hidden shadow-2xl shadow-amber-950/50 border-2 border-amber-700/20"
          >
            <img 
              src="https://image.qwenlm.ai/generated-images/502a7817-dcc1-4049-b4a5-0128a14c8355/_result.png" 
              alt="Premium coffee" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>

          {/* Floating image 1 - Coffee beans */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 3, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-10 right-0 w-[180px] h-[180px] rounded-2xl overflow-hidden shadow-xl shadow-amber-950/40 border border-amber-700/20"
          >
            <img 
              src="https://image.qwenlm.ai/generated-images/b305b7bb-8ca8-4dd3-b66d-6b98bf8f22a4/_result.png" 
              alt="Coffee beans" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
          </motion.div>

          {/* Floating image 2 - Coffee shop */}
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
              delay: 2
            }}
            className="absolute bottom-10 left-0 w-[200px] h-[200px] rounded-2xl overflow-hidden shadow-xl shadow-amber-950/40 border border-amber-700/20"
          >
            <img 
              src="https://image.qwenlm.ai/generated-images/59b8e439-b231-427a-91f2-c2aa897274a6/_result.png" 
              alt="Coffee shop" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-20 h-20 rounded-full bg-amber-600/20 blur-2xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-orange-600/20 blur-2xl"
          />
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

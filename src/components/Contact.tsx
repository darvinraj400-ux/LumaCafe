import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/20 via-espresso to-espresso" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coffee-700/50 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-light text-coffee-300 text-sm font-medium mb-4">
            Visit Us
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Come <span className="text-gradient">Say Hello</span>
          </h2>
          <p className="text-cream/50 max-w-2xl mx-auto text-lg">
            We'd love to welcome you to our space. Come experience the warmth of great coffee and even better company.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 space-y-6">
              <h3 className="font-display text-2xl font-bold text-cream">Find Us</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-coffee-800/50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-coffee-400" />
                  </div>
                  <div>
                    <div className="font-medium text-cream">Location</div>
                    <div className="text-cream/50 text-sm">123 Coffee Lane, Artisan District<br />Portland, OR 97201</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-coffee-800/50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-coffee-400" />
                  </div>
                  <div>
                    <div className="font-medium text-cream">Phone</div>
                    <div className="text-cream/50 text-sm">(503) 555-BREW</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-coffee-800/50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-coffee-400" />
                  </div>
                  <div>
                    <div className="font-medium text-cream">Email</div>
                    <div className="text-cream/50 text-sm">hello@brewandbean.co</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-coffee-800/50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-coffee-400" />
                  </div>
                  <div>
                    <div className="font-medium text-cream">Hours</div>
                    <div className="text-cream/50 text-sm">
                      Mon - Fri: 6:00 AM - 9:00 PM<br />
                      Sat - Sun: 7:00 AM - 10:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6">
              <h4 className="font-medium text-cream mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {['Instagram', 'Twitter', 'Facebook', 'TikTok'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-4 py-2 glass-light rounded-full text-cream/70 hover:text-coffee-300 hover:bg-coffee-800/30 transition-all text-sm"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-cream mb-6">
                Reserve a Table
              </h3>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-cream/60 text-sm mb-1 block">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-coffee-900/50 border border-coffee-700/30 rounded-xl text-cream placeholder-cream/30 focus:outline-none focus:border-coffee-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-cream/60 text-sm mb-1 block">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-coffee-900/50 border border-coffee-700/30 rounded-xl text-cream placeholder-cream/30 focus:outline-none focus:border-coffee-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-cream/60 text-sm mb-1 block">Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-coffee-900/50 border border-coffee-700/30 rounded-xl text-cream placeholder-cream/30 focus:outline-none focus:border-coffee-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-cream/60 text-sm mb-1 block">Guests</label>
                    <select className="w-full px-4 py-3 bg-coffee-900/50 border border-coffee-700/30 rounded-xl text-cream focus:outline-none focus:border-coffee-500/50 transition-colors">
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-cream/60 text-sm mb-1 block">Special Requests</label>
                  <textarea
                    rows={3}
                    placeholder="Any special requests or dietary needs..."
                    className="w-full px-4 py-3 bg-coffee-900/50 border border-coffee-700/30 rounded-xl text-cream placeholder-cream/30 focus:outline-none focus:border-coffee-500/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-coffee-500 to-coffee-700 text-cream rounded-xl font-semibold hover:from-coffee-400 hover:to-coffee-600 transition-all duration-300 shadow-xl shadow-coffee-900/50 hover:scale-[1.02]"
                >
                  Reserve Now
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

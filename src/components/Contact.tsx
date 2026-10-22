import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0805] via-[#1a0e08] to-[#0f0805]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-900/20 border border-amber-700/20 text-amber-200/70 text-sm font-medium mb-4">
            Visit Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Come <span className="text-gradient italic font-medium">Say Hello</span>
          </h2>
          <p className="text-cream/40 max-w-xl mx-auto text-base">
            We'd love to welcome you to our space. Come experience the warmth of great coffee and even better company.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="glass rounded-2xl p-7 space-y-5">
              <h3 className="font-display text-xl font-semibold text-cream/90">Find Us</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-900/30 flex items-center justify-center flex-shrink-0 border border-amber-700/20">
                    <MapPin className="w-4 h-4 text-amber-400/70" />
                  </div>
                  <div>
                    <div className="font-medium text-cream/80 text-sm">Location</div>
                    <div className="text-cream/40 text-sm">123 Coffee Lane, Artisan District<br />Portland, OR 97201</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-900/30 flex items-center justify-center flex-shrink-0 border border-amber-700/20">
                    <Phone className="w-4 h-4 text-amber-400/70" />
                  </div>
                  <div>
                    <div className="font-medium text-cream/80 text-sm">Phone</div>
                    <div className="text-cream/40 text-sm">(503) 555-BREW</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-900/30 flex items-center justify-center flex-shrink-0 border border-amber-700/20">
                    <Mail className="w-4 h-4 text-amber-400/70" />
                  </div>
                  <div>
                    <div className="font-medium text-cream/80 text-sm">Email</div>
                    <div className="text-cream/40 text-sm">hello@brewandbean.co</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-900/30 flex items-center justify-center flex-shrink-0 border border-amber-700/20">
                    <Clock className="w-4 h-4 text-amber-400/70" />
                  </div>
                  <div>
                    <div className="font-medium text-cream/80 text-sm">Hours</div>
                    <div className="text-cream/40 text-sm">
                      Mon - Fri: 6:00 AM - 9:00 PM<br />
                      Sat - Sun: 7:00 AM - 10:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-5">
              <h4 className="font-medium text-cream/80 text-sm mb-3">Follow Us</h4>
              <div className="flex gap-2">
                {['Instagram', 'Twitter', 'Facebook', 'TikTok'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-3 py-1.5 glass-light rounded-full text-cream/50 hover:text-cream/80 hover:bg-white/[0.05] transition-all text-xs"
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
            <div className="glass rounded-2xl p-7">
              <h3 className="font-display text-xl font-semibold text-cream/90 mb-5">
                Reserve a Table
              </h3>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-cream/50 text-xs mb-1.5 block uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-xl text-cream/90 placeholder-cream/20 focus:outline-none focus:border-amber-700/40 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-cream/50 text-xs mb-1.5 block uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-xl text-cream/90 placeholder-cream/20 focus:outline-none focus:border-amber-700/40 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-cream/50 text-xs mb-1.5 block uppercase tracking-wider">Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-xl text-cream/90 focus:outline-none focus:border-amber-700/40 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-cream/50 text-xs mb-1.5 block uppercase tracking-wider">Guests</label>
                    <select className="w-full px-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-xl text-cream/90 focus:outline-none focus:border-amber-700/40 transition-colors text-sm">
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-cream/50 text-xs mb-1.5 block uppercase tracking-wider">Special Requests</label>
                  <textarea
                    rows={3}
                    placeholder="Any special requests or dietary needs..."
                    className="w-full px-4 py-2.5 bg-white/[0.03] border border-white/10 rounded-xl text-cream/90 placeholder-cream/20 focus:outline-none focus:border-amber-700/40 transition-colors resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3.5 bg-gradient-to-b from-amber-700 to-amber-900 text-cream rounded-xl font-medium hover:from-amber-600 hover:to-amber-800 transition-all duration-300 border border-amber-600/30 hover:scale-[1.02]"
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

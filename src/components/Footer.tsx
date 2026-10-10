import { Coffee } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-espresso" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coffee-700/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coffee-400 to-coffee-700 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-cream" />
              </div>
              <span className="font-display text-xl font-bold text-cream">
                Brew & Bean
              </span>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed">
              Crafting extraordinary coffee experiences since 2009. Every cup is a journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Menu', 'About', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-cream/50 hover:text-coffee-300 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Products</h4>
            <ul className="space-y-2">
              {['Espresso', 'Pour Over', 'Cold Brew', 'Specialty Drinks', 'Merchandise'].map((item) => (
                <li key={item}>
                  <a href="#menu" className="text-cream/50 hover:text-coffee-300 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Stay Updated</h4>
            <p className="text-cream/50 text-sm mb-4">
              Subscribe for exclusive offers and coffee tips.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 bg-coffee-900/50 border border-coffee-700/30 rounded-lg text-cream text-sm placeholder-cream/30 focus:outline-none focus:border-coffee-500/50 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-coffee-600 hover:bg-coffee-500 text-cream rounded-lg text-sm font-medium transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-coffee-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-sm">
            © 2024 Brew & Bean. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <a key={link} href="#" className="text-cream/40 hover:text-coffee-300 transition-colors text-sm">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

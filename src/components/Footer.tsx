import { Coffee } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0503]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center border border-amber-600/30">
                <Coffee className="w-4 h-4 text-amber-100" />
              </div>
              <span className="font-display text-lg font-semibold text-cream/90 tracking-tight">
                Brew & Bean
              </span>
            </div>
            <p className="text-cream/35 text-sm leading-relaxed">
              Crafting extraordinary coffee experiences since 2009. Every cup is a journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cream/70 text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Menu', 'About', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-cream/35 hover:text-amber-300/70 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-cream/70 text-sm mb-4">Products</h4>
            <ul className="space-y-2">
              {['Espresso', 'Pour Over', 'Cold Brew', 'Specialty Drinks', 'Merchandise'].map((item) => (
                <li key={item}>
                  <a href="#menu" className="text-cream/35 hover:text-amber-300/70 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-cream/70 text-sm mb-4">Stay Updated</h4>
            <p className="text-cream/35 text-sm mb-3">
              Subscribe for exclusive offers and coffee tips.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 bg-white/[0.03] border border-white/10 rounded-lg text-cream/90 text-sm placeholder-cream/20 focus:outline-none focus:border-amber-700/40 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-b from-amber-700 to-amber-900 text-cream rounded-lg text-sm font-medium transition-colors border border-amber-600/30 hover:from-amber-600 hover:to-amber-800"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/25 text-sm">
            © 2024 Brew & Bean. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <a key={link} href="#" className="text-cream/25 hover:text-amber-300/70 transition-colors text-sm">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

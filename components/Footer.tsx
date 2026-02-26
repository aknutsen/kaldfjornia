import Logo from './Logo'

const navLinks = [
  { href: '#products', label: 'Boards' },
  { href: '#about',   label: 'Our Story' },
  { href: '#contact', label: 'Inquire' },
]

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-walnut-400 text-stone-100 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-walnut-200/20">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Logo className="h-16 w-auto" variant="light" showWordmark />
            <p className="font-body text-sm text-stone-200 leading-relaxed max-w-[220px]">
              Handcrafted climbing tools from the north. Built to last, designed
              to train.
            </p>
          </div>

          {/* Nav column */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-stone-200 mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-body text-sm text-stone-100 hover:text-amber-200 transition-colors duration-150"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / contact column */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-stone-200 mb-5">
              Follow Along
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Instagram', href: '#' },
                { label: 'Facebook',  href: '#' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-body text-sm text-stone-100 hover:text-amber-200 transition-colors duration-150"
                    aria-label={`${label} (coming soon)`}
                  >
                    {label}
                    <span className="ml-2 font-body text-[10px] tracking-wide text-stone-300 uppercase">
                      Coming soon
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Amber accent line */}
            <div className="mt-8 w-10 h-0.5 bg-amber-300 opacity-60" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-stone-300">
            © {year} Kaldfjornia. All rights reserved.
          </p>
          <p className="font-body text-xs italic text-stone-400">
            Made with locally sourced timber and a lot of chalk.
          </p>
        </div>
      </div>
    </footer>
  )
}

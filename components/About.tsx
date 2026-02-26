import SectionWrapper from './SectionWrapper'

const stats = [
  { value: '< 100km', label: 'sourcing radius' },
  { value: 'FSC only', label: 'certified timber' },
  { value: '0', label: 'synthetic finishes' },
]

export default function About() {
  return (
    <section id="about" className="bg-cream-100 py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left column — text */}
          <SectionWrapper className="lg:border-l-4 lg:border-amber-300 lg:pl-10">
            <p className="font-body text-xs tracking-widest2 uppercase text-amber-300 mb-6">
              Our Story
            </p>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-walnut-300 leading-[1.1] mb-8">
              Made from the forest.
              <br />
              Built for the wall.
            </h2>

            <div className="space-y-5 font-body text-walnut-100 text-base leading-relaxed">
              <p>
                Kaldfjornia started with a simple frustration: every hangboard
                on the market was either plastic, shipped from abroad, or finished
                with chemicals that off-gas onto your fingertips. I wanted wood —
                real, local, honest wood — and I couldn&apos;t find it.
              </p>
              <p>
                So I started milling my own. The timber comes from sawmills and
                forestry operations within a hundred kilometres of our workshop.
                Offcuts, wind-fallen trees, salvaged gymnasium floors — wood that
                would otherwise be chipped or left to rot. We turn it into
                something that lasts decades and only gets better with use.
              </p>
              <p>
                Every board is shaped by hand, finished with natural oils or
                beeswax, and built to the tolerances that fingertip training
                demands. No two pieces are identical. That&apos;s not a flaw —
                it&apos;s the point.
              </p>
            </div>

            {/* Founder signature */}
            <p className="mt-8 font-body text-sm italic text-stone-300">
              — Founder, Kaldfjornia
            </p>

            {/* Stats row */}
            <div className="mt-12 flex flex-wrap gap-10">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="font-display text-3xl font-bold text-amber-300">
                    {value}
                  </span>
                  <span className="font-body text-xs tracking-widest uppercase text-stone-300 mt-1">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </SectionWrapper>

          {/* Right column — typographic decoration */}
          <SectionWrapper delay={0.2} className="relative flex flex-col justify-start pt-8 lg:pt-0">
            {/* Giant decorative year text */}
            <div
              className="font-display font-black text-cream-300 leading-none select-none pointer-events-none"
              style={{ fontSize: 'clamp(8rem, 18vw, 16rem)', lineHeight: 0.9 }}
              aria-hidden="true"
            >
              EST.
              <br />
              2024
            </div>

            {/* Amber rule */}
            <div className="w-16 h-1 bg-amber-300 my-8 ml-2" />

            {/* Secondary note */}
            <p className="font-body text-sm text-stone-300 max-w-xs leading-relaxed ml-2">
              A small workshop. A short supply chain. Tools built the way climbers
              think about gear — simple, functional, uncompromising.
            </p>

            {/* Decorative grain lines */}
            <div className="mt-10 ml-2 space-y-1.5" aria-hidden="true">
              {[80, 60, 95, 45, 70, 55, 85].map((w, i) => (
                <div
                  key={i}
                  className="h-px bg-amber-300"
                  style={{ width: `${w}%`, opacity: 0.15 + i * 0.04 }}
                />
              ))}
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  )
}

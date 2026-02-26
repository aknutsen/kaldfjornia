import SectionWrapper from './SectionWrapper'

const values = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        {/* Map pin / location */}
        <circle cx="16" cy="13" r="5" />
        <path d="M16 2C10.477 2 6 6.477 6 12c0 7 10 18 10 18s10-11 10-18c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    title: 'Locally Sourced',
    description: 'Within 100 km of our workshop. We know the sawmill, and often the tree.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        {/* Circular arrow / recycle */}
        <path d="M6 16a10 10 0 0 1 10-10" />
        <path d="M10 6l-4 0 0 4" />
        <path d="M26 16a10 10 0 0 1-10 10" />
        <path d="M22 26l4 0 0-4" />
      </svg>
    ),
    title: 'Zero Waste',
    description: 'Offcuts become smaller products. Sawdust becomes fire starter. Nothing is wasted.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        {/* Shield */}
        <path d="M16 3 L28 7 L28 16 C28 23 22 28 16 30 C10 28 4 23 4 16 L4 7 Z" />
        <polyline points="11,16 14,19 21,12" />
      </svg>
    ),
    title: 'Made to Last',
    description: 'No planned obsolescence. Dense hardwoods, natural finishes, traditional joinery.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        {/* Hand with extended fingers — climber's hand */}
        <path d="M8 22 L8 12 Q8 10 10 10 Q12 10 12 12 L12 9 Q12 7 14 7 Q16 7 16 9 L16 8 Q16 6 18 6 Q20 6 20 8 L20 9 Q20 7 22 7 Q24 7 24 9 L24 22 Q24 26 20 26 L12 26 Q8 26 8 22Z" />
        <line x1="12" y1="12" x2="12" y2="19" />
        <line x1="16" y1="9" x2="16" y2="19" />
        <line x1="20" y1="8" x2="20" y2="19" />
      </svg>
    ),
    title: 'Climber Designed',
    description: 'Pocket depth and edge radii set by training data, not aesthetics.',
  },
]

export default function Values() {
  return (
    <section className="bg-walnut-400 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {values.map(({ icon, title, description }, index) => (
            <SectionWrapper key={title} delay={index * 0.12}>
              <div className="flex flex-col items-center text-center gap-4">
                {/* Icon */}
                <div className="text-amber-200 mb-2">
                  {icon}
                </div>
                {/* Title */}
                <h3 className="font-body text-xs font-semibold tracking-widest uppercase text-cream-100">
                  {title}
                </h3>
                {/* Description */}
                <p className="font-body text-xs text-stone-100 leading-relaxed max-w-[160px]">
                  {description}
                </p>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import type { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
}

const scrollToContact = (productId: string) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('inquireProduct', productId)
  }
  const el = document.getElementById('contact')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group bg-cream-100 rounded-sm overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md">
      {/* Placeholder image — CSS wood grain + hangboard outline */}
      <div className="relative aspect-[4/3] bg-cream-300 wood-grain-texture overflow-hidden">
        {/* Subtle inner grain layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-200/40 to-walnut-50/20" />

        {/* Schematic hangboard SVG illustration */}
        <div className="absolute inset-0 flex items-center justify-center text-walnut-50">
          <svg
            viewBox="0 0 200 100"
            fill="none"
            className="w-3/4 max-w-[200px] opacity-20 group-hover:opacity-30 transition-opacity duration-300"
            aria-hidden="true"
          >
            <rect x="4" y="16" width="192" height="68" rx="6" stroke="currentColor" strokeWidth="2" />
            {/* Left pocket */}
            <rect x="22" y="26" width="48" height="36" rx="14" fill="currentColor" fillOpacity="0.4" />
            {/* Center pocket */}
            <rect x="80" y="20" width="40" height="44" rx="20" fill="currentColor" fillOpacity="0.4" />
            {/* Right pocket */}
            <rect x="130" y="26" width="48" height="36" rx="14" fill="currentColor" fillOpacity="0.4" />
            {/* Wood grain lines */}
            <line x1="4" y1="36" x2="196" y2="35" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.8" />
            <line x1="4" y1="50" x2="196" y2="51" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.6" />
            <line x1="4" y1="64" x2="196" y2="63" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="font-body text-[10px] tracking-widest uppercase bg-walnut-300/80 text-cream-100 px-2 py-1 rounded-sm">
            {product.category.replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        {/* Wood species */}
        <p className="font-body text-[11px] tracking-widest uppercase text-amber-300">
          {product.woodSpecies} · {product.origin}
        </p>

        {/* Name */}
        <h3 className="font-display text-xl font-semibold text-walnut-300 leading-tight">
          {product.name}
        </h3>

        {/* Tagline */}
        <p className="font-body text-sm text-stone-300 italic leading-snug">
          {product.tagline}
        </p>

        {/* Description */}
        <p className="font-body text-sm text-walnut-100 leading-relaxed flex-1">
          {product.description}
        </p>

        {/* Dimensions */}
        <p className="font-body text-xs text-stone-300 tracking-wide">
          {product.dimensions}
        </p>

        {/* Feature list */}
        <ul className="space-y-1">
          {product.features.slice(0, 3).map((f, i) => (
            <li key={i} className="font-body text-xs text-walnut-100 flex items-start gap-2">
              <span className="text-amber-300 mt-0.5 shrink-0">—</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* Sustainability note */}
        <p className="font-body text-xs text-moss-300 italic border-t border-cream-300 pt-3 mt-1">
          ♻ {product.sustainabilityNote ?? `Made from locally sourced ${product.woodSpecies}.`}
        </p>

        {/* CTA */}
        <button
          onClick={() => scrollToContact(product.id)}
          className="mt-2 w-full py-3 bg-walnut-300 text-cream-100 font-body font-medium text-sm tracking-widest uppercase rounded-sm hover:bg-amber-300 hover:text-walnut-400 transition-colors duration-200"
        >
          Inquire About This Board
        </button>
      </div>
    </article>
  )
}

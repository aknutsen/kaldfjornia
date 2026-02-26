import SectionWrapper from './SectionWrapper'
import ProductCard from './ProductCard'
import { products } from '@/lib/products'

export default function Products() {
  return (
    <section id="products" className="bg-cream-200 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <SectionWrapper className="text-center mb-16">
          <p className="font-body text-xs tracking-widest2 uppercase text-amber-300 mb-4">
            Our Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-walnut-300 mb-4">
            The Boards
          </h2>
          <p className="font-body text-stone-300 text-lg max-w-xl mx-auto leading-relaxed">
            Each piece is one-of-a-kind. All are made by hand, in small batches,
            from a single species of locally sourced timber.
          </p>
          {/* Amber accent */}
          <div className="mt-8 flex justify-center">
            <div className="w-12 h-0.5 bg-amber-300" />
          </div>
        </SectionWrapper>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-10">
          {products.map((product, index) => (
            <SectionWrapper key={product.id} delay={index * 0.1}>
              <ProductCard product={product} />
            </SectionWrapper>
          ))}
        </div>

        {/* Bottom note */}
        <SectionWrapper className="mt-16 text-center" delay={0.3}>
          <p className="font-body text-sm text-stone-300 max-w-lg mx-auto leading-relaxed">
            All products are made to order. Lead times vary by complexity and
            current queue. Contact us to discuss your needs.
          </p>
        </SectionWrapper>
      </div>
    </section>
  )
}

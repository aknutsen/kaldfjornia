export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  woodSpecies: string
  origin: string
  dimensions: string
  features: string[]
  category: 'hangboard' | 'training-block' | 'campus-rung'
  sustainabilityNote?: string
}

export const products: Product[] = [
  {
    id: 'fjord-board-pro',
    name: 'Fjord Board Pro',
    tagline: 'The full-spectrum hangboard',
    description:
      'A comprehensive campus board offering four edge depths, three pocket configurations, and two slopers — everything you need to systematically build finger strength. Hewn from a single piece of Norwegian birch, each board has its own grain character.',
    woodSpecies: 'Norwegian Birch',
    origin: 'Vestland, Norway',
    dimensions: '100 × 15 × 4 cm',
    features: [
      '20 mm, 18 mm, 14 mm, and 10 mm edges',
      'Two-pad, three-pad, and four-pad pockets',
      '10° and 20° sloper jugs',
      'Lightly sanded to 220 grit, unsealed',
      'Pre-drilled wall-mount holes',
    ],
    category: 'hangboard',
  },
  {
    id: 'pocket-master',
    name: 'Pocket Master',
    tagline: 'For pocket specialists',
    description:
      'Five pocket configurations in one compact board, designed to isolate and train pocket strength across all depths. The oak grain provides natural grip variation across the surface — no sanding uniformity here.',
    woodSpecies: 'Norwegian Oak',
    origin: 'Telemark, Norway',
    dimensions: '60 × 12 × 3.5 cm',
    features: [
      'Single-pad pockets at 30 mm, 25 mm, 20 mm, and 15 mm',
      'Two-pad open and closed pockets',
      'Three-pad pocket at 25 mm',
      'Open-ended pocket for mono training',
      'No finish — raw oak for authentic texture',
    ],
    category: 'hangboard',
  },
  {
    id: 'the-minimalist',
    name: 'The Minimalist',
    tagline: 'Two edges. No distractions.',
    description:
      'For those who know exactly what they need. A clean, wall-flush board with one generous edge and one demanding edge. Cherry wood brings warmth and density, and its natural oils keep the surface conditioned over time.',
    woodSpecies: 'Norwegian Cherry',
    origin: 'Akershus, Norway',
    dimensions: '45 × 10 × 3 cm',
    features: [
      '20 mm comfort edge with 5° back-bevel',
      '12 mm performance edge, square cut',
      'Wall-flush mounting (no protrusion)',
      'Natural cherry oil finish',
      'Compact — fits in a doorframe or low ceiling',
    ],
    category: 'hangboard',
  },
  {
    id: 'pinch-block-duo',
    name: 'Pinch Block Duo',
    tagline: 'Built for the forgotten muscle group',
    description:
      'A matched pair of maple pinch blocks for dedicated pinch strength training. Hang plates directly or attach a pulley for eccentric loading. Dense Norwegian maple gives consistent feel across both blocks — because symmetry matters.',
    woodSpecies: 'Norwegian Maple',
    origin: 'Innlandet, Norway',
    dimensions: '10 × 8 × 5 cm per block',
    features: [
      'Ergonomic 50 mm pinch width',
      'M8 bolt hole for weight plates or carabiner',
      'Matched pair — same log, same grain direction',
      'Light wax finish for skin comfort',
      'Includes steel bolt and wing nut per block',
    ],
    category: 'training-block',
  },
]

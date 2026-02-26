import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kaldfjornia — Handcrafted Climbing Tools',
  description:
    'Finger training tools and hangboards made from locally sourced Norwegian wood. Designed by climbers, built for the long haul.',
  keywords: ['hangboard', 'fingerboard', 'climbing training', 'wooden hangboard', 'sustainable climbing', 'Norway'],
  openGraph: {
    title: 'Kaldfjornia — Handcrafted Climbing Tools',
    description: 'Finger training tools made from locally sourced Norwegian wood.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream-200 text-walnut-300 font-body antialiased">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  )
}

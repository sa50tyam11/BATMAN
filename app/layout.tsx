import { Barlow, Instrument_Serif } from 'next/font/google'
import './globals.css'

const barlow = Barlow({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-barlow',
})

const instrument = Instrument_Serif({ 
  subsets: ['latin'],
  weight: ['400'], 
  style: ['italic'],
  variable: '--font-instrument',
})

// --- ADDED THIS BLOCK FOR THE BROWSER TAB COLOR ---
export const viewport = {
  // Browsers ONLY accept solid colors here, no gradients.
  // Change this HEX code to any solid color you want. 
  // #0a0a0a matches your dark background perfectly.
  themeColor: '#0a0a0a', 
}

export const metadata = {
  title: 'Satyam Kumar Jha | SENO Studio',
  description: 'Full Stack Developer & Founder of SENO',
  metadataBase: new URL('https://www.senostudio.in'),
  icons: {
    icon: [{ url: '/senol.png', sizes: 'any', type: 'image/png' }],
    apple: [{ url: '/senol.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'Satyam Kumar Jha | Full Stack Developer',
    description: 'Explore the portfolio of Satyam Jha. Building high-performance, interactive web applications.',
    url: 'https://www.senostudio.in', 
    siteName: 'Satyam Kumar Jha',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Satyam Jha Portfolio Hero Section',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className={`${barlow.variable} ${instrument.variable} font-sans bg-[#0a0a0a] text-white antialiased selection:bg-[#EF4444] selection:text-white`} 
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
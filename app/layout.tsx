import { ClerkProvider } from '@clerk/nextjs'
import { Barlow, Instrument_Serif } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import SmoothScroll from '@/components/SmoothScroll'
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

export const viewport = {
  themeColor: '#0a0a0a',
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://satyamkrjha.site'),
  title: "Satyam Kumar Jha | Full Stack Developer (Next.js, React, TypeScript)",
  description: "BCA student and full-stack developer building production web apps with Next.js, TypeScript, and React. Open to internship and junior software engineering roles.",
  keywords: ["Satyam Kumar Jha", "Satya", "Portfolio", "Full Stack Developer", "Next.js Developer", "React Developer", "TypeScript", "SENO Studio", "Web Developer", "Software Engineer", "Internship"],
  authors: [{ name: "Satyam Kumar Jha", url: "https://satyamkrjha.site" }],
  creator: "Satyam Kumar Jha",
  publisher: "Satyam Kumar Jha",
  alternates: {
    canonical: 'https://satyamkrjha.site',
  },
  openGraph: {
    title: "Satyam Kumar Jha | Full Stack Developer (Next.js, React, TypeScript)",
    description: "BCA student and full-stack developer building production web apps with Next.js, TypeScript, and React. Open to internship and junior software engineering roles.",
    url: "https://satyamkrjha.site",
    siteName: "Satyam Kumar Jha",
    images: [
      {
        url: "https://satyamkrjha.site/ogtag.jpg",
        width: 1200,
        height: 630,
        alt: "Satyam Kumar Jha - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyam Kumar Jha | Full Stack Developer (Next.js, React, TypeScript)",
    description: "BCA student and full-stack developer building production web apps with Next.js, TypeScript, and React. Open to internship and junior roles.",
    images: ["https://satyamkrjha.site/ogtag.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${barlow.variable} ${instrument.variable} font-sans bg-[#0a0a0a] light:bg-white text-white light:text-[#111111] antialiased selection:bg-[#a3e635] selection:text-white transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider>
            {/* Sign in/sign up removed from global nav — auth only used on /guestbook */}
            <Navbar />
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
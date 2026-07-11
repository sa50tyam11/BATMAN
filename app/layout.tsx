import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from '@clerk/nextjs'
import { Barlow, Instrument_Serif } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
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

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://satyamseno.netlify.app'),
  title: "Satyam Kumar Jha | Full Stack Developer",
  description: "Full Stack Developer building fast, premium web platforms for clients. Founder of SENO Studio.",
  openGraph: {
    title: "Satyam Kumar Jha | Full Stack Developer",
    description: "Full Stack Developer building fast, premium web platforms for clients. Founder of SENO Studio.",
    url: "https://satyamseno.netlify.app",
    siteName: "Satyam Kumar Jha",
    images: [
      {
        url: "/ogtag.jpg",
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
    title: "Satyam Kumar Jha | Full Stack Developer",
    description: "Full Stack Developer building fast, premium web platforms for clients.",
    images: ["/ogtag.jpg"],
  },
  icons: {
    icon: "/portrait-reveal.jpg",
    shortcut: "/portrait-reveal.jpg",
    apple: "/portrait-reveal.jpg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${barlow.variable} ${instrument.variable} font-sans bg-[#0a0a0a] light:bg-[#fafafa] text-white light:text-[#111111] antialiased selection:bg-[#a3e635] selection:text-white transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider>
            <header className="absolute top-0 right-0 p-4 z-[200]">
              <Show when="signed-out">
                <SignInButton />
                <SignUpButton />
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </header>
            <Navbar />
            {children}
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
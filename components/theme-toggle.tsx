"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
        <div className="w-4 h-4 rounded-full bg-white/20 animate-pulse" />
      </div>
    )
  }

  const cycleTheme = () => {
    if (theme === 'dark') setTheme('light')
    else if (theme === 'light') setTheme('system')
    else setTheme('dark')
  }

  return (
    <button
      onClick={cycleTheme}
      className="group relative flex items-center justify-center w-10 h-10 border border-white/20 rounded-full bg-white/5 hover:border-[#6C63FF] transition-colors backdrop-blur-sm overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="relative flex items-center justify-center w-full h-full text-white group-hover:text-[#6C63FF] transition-colors">
        {theme === 'dark' && <Moon size={16} />}
        {theme === 'light' && <Sun size={16} />}
        {theme === 'system' && <Monitor size={16} />}
      </div>
    </button>
  )
}

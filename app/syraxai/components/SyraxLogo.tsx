'use client'

import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export function SyraxLogo({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme()
  const logoSrc = resolvedTheme === 'dark' 
    ? "/syraxai/media/images/green-dark.png" 
    : "/syraxai/media/images/dark-green.png"
    
  return (
    <div className={`h-8 ${className} flex items-center`}>
      <Image
        src={logoSrc}
        alt="Syrax Logo"
        width={120}
        height={32}
        className="h-auto w-auto"
        priority
      />
    </div>
  )
}

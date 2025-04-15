'use client'

import React from 'react'
import Image from 'next/image'

export function SyraxLogo({ className }: { className?: string }) {
  return (
    <div className={`h-8 ${className} flex items-center`}>
      <Image
        src="/syraxai/media/images/dark-green.png"
        alt="Syrax Logo"
        width={120}
        height={32}
        className="h-auto w-auto"
        priority
      />
    </div>
  )
}

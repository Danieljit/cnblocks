import React from 'react'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/theme-provider'
import './styles.css'

export const metadata = {
  title: 'SyraxAI - Advanced Blockchain Trading Platform',
  description: 'Experience the future of blockchain trading with SyraxAI, featuring advanced AI-powered analytics and seamless trading experiences.',
  icons: {
    icon: '/syraxai/media/images/favicon.svg',
  },
}

export default function SyraxAILayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="font-sans">{children}</div>
    </ThemeProvider>
  )
}

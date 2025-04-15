import React from 'react'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export default function PartnerShowcase() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <TextEffect
          preset="fade-in-blur"
          speedSegment={0.3}
          as="h2"
          className="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Powered by industry leaders
        </TextEffect>
        
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            },
            ...transitionVariants,
          }}
          className="mx-auto mt-12 max-w-5xl">
          
          {/* Partners */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            <div className="flex items-center">
              <span className="text-xl font-semibold">Debridge</span>
            </div>
            <div className="flex items-center">
              <span className="text-xl font-semibold">•</span>
            </div>
            <div className="flex items-center">
              <span className="text-xl font-semibold">Hyperliquid</span>
            </div>
            <div className="flex items-center">
              <span className="text-xl font-semibold">•</span>
            </div>
            <div className="flex items-center">
              <span className="text-xl font-semibold">Partners</span>
            </div>
          </div>
          
          {/* Chains */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <div className="h-8 w-8 rounded-full bg-primary"></div>
              </div>
              <h3 className="mb-2 text-xl font-bold">SONIC</h3>
              <p className="text-center text-sm text-muted-foreground">Live Now</p>
            </div>
            
            <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <div className="h-8 w-8 rounded-full bg-primary"></div>
              </div>
              <h3 className="mb-2 text-xl font-bold">SOLANA</h3>
              <p className="text-center text-sm text-muted-foreground">Coming Soon</p>
            </div>
            
            <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <div className="h-8 w-8 rounded-full bg-primary"></div>
              </div>
              <h3 className="mb-2 text-xl font-bold">More Chains</h3>
              <p className="text-center text-sm text-muted-foreground">To Be Announced</p>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  )
}

import React from 'react'
import Image from 'next/image'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import { LayoutGrid, LineChart, Shield, Layers } from 'lucide-react'

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

export default function TradingExperience() {
  return (
    <section className="bg-muted py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            The Complete Trading Experience
          </TextEffect>
        </div>
        
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
          className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          
          {/* Feature 1 */}
          <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <LayoutGrid className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">All-In-One Interface</h3>
            <p className="text-muted-foreground">Access every DEX on the chain through a single platform</p>
          </div>
          
          {/* Feature 2 */}
          <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Advanced Trading Tools</h3>
            <p className="text-muted-foreground">Coming soon - limit orders, DCA, and more</p>
          </div>
          
          {/* Feature 3 */}
          <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <LineChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Real-Time Data</h3>
            <p className="text-muted-foreground">Make informed decisions with up-to-date market information</p>
          </div>
          
          {/* Feature 4 */}
          <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Non-Custodial Security</h3>
            <p className="text-muted-foreground">Maintain full control of your assets at all times</p>
          </div>
        </AnimatedGroup>
        
        {/* Trading Interface Mockup */}
        <div className="mx-auto mt-16 overflow-hidden rounded-xl border bg-card p-4 shadow-md">
          <div className="aspect-video rounded-lg overflow-hidden">
            <Image 
              src="/syraxai/media/images/token-page-with-window.png"
              alt="SyraxAI Trading Interface"
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

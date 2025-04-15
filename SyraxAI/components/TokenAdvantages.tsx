import React from 'react'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
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

export default function TokenAdvantages() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Hold $SYRAX. Reduce Your Fees.
          </TextEffect>
          <TextEffect
            per="line"
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.5}
            as="p"
            className="mx-auto mt-6 max-w-3xl text-balance text-lg md:text-xl">
            Our token-based discount system rewards loyal traders.
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
          className="mx-auto mt-12 max-w-3xl">
          
          <div className="rounded-xl border bg-card p-8 shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Hold $SYRAX tokens to unlock tiered discounts</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Discounts range from 5% to 50% based on holdings</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Active traders earn additional discounts through our XP system</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Combined discounts can reduce fees by up to 65%</span>
              </li>
            </ul>
            
            <div className="mt-8 text-center">
              <Button asChild size="lg" className="rounded-xl px-5 text-base">
                <Link href="#token-benefits">
                  <span className="text-nowrap">Learn More About $SYRAX Benefits</span>
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  )
}

import React from 'react'
import Link from 'next/link'
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

export default function FinalCTA() {
  return (
    <section className="bg-primary py-24 text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to level up your trading?
          </TextEffect>
          <TextEffect
            per="line"
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.5}
            as="p"
            className="mx-auto mt-6 max-w-3xl text-balance text-lg md:text-xl">
            Get started with Syrax and experience on-chain trading with the speed, security, and simplicity of a centralized exchange.
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
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            
            <Button 
              asChild 
              size="lg" 
              variant="secondary" 
              className="w-full rounded-xl px-8 text-base font-bold sm:w-auto">
              <Link href="#trade">
                <span className="text-nowrap">START TRADING</span>
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="w-full rounded-xl border-primary-foreground/20 bg-transparent px-8 text-base font-bold text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto">
              <Link href="#community">
                <span className="text-nowrap">JOIN OUR COMMUNITY</span>
              </Link>
            </Button>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  )
}

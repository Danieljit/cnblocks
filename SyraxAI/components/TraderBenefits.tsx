import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import { Trophy, Calendar, Flame, TrendingUp } from 'lucide-react'

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

export default function TraderBenefits() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Rewards for Active Traders
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
          
          {/* Benefit 1 */}
          <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Earn XP Through Activity</h3>
            <p className="text-muted-foreground">Earn XP through trading activity and platform engagement</p>
          </div>
          
          {/* Benefit 2 */}
          <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Trading Ranks</h3>
            <p className="text-muted-foreground">Progress through trading ranks for additional fee discounts</p>
          </div>
          
          {/* Benefit 3 */}
          <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Daily & Weekly Challenges</h3>
            <p className="text-muted-foreground">Complete daily and weekly challenges for bonus rewards</p>
          </div>
          
          {/* Benefit 4 */}
          <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Flame className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Trading Streaks</h3>
            <p className="text-muted-foreground">Maintain trading streaks for XP multipliers</p>
          </div>
        </AnimatedGroup>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="rounded-xl px-5 text-base">
            <Link href="#xp-system">
              <span className="text-nowrap">Learn More About Our XP System</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Coins, PiggyBank, ArrowRightLeft } from 'lucide-react'
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

export default function FeatureGrid() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
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
          className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          
          {/* Box 1: Speed */}
          <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Speed</h3>
            <h4 className="mb-2 text-lg font-semibold">{"<"}1s Execution</h4>
            <p className="mb-4 text-muted-foreground">While others wait for quotes and wallet signatures, you're already in. Real-time quotes and {"<"}100ms signatures via TEEs.</p>
            <p className="text-sm font-medium text-primary">Lightning-fast execution</p>
          </div>
          
          {/* Box 2: $SYRAX Token */}
          <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Coins className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">$SYRAX Token</h3>
            <h4 className="mb-2 text-lg font-semibold">Hold & Save</h4>
            <p className="mb-4 text-muted-foreground">Hold $SYRAX tokens to unlock trading fee discounts and additional benefits.</p>
            <p className="mb-2 text-sm font-medium text-primary">Your key to premium trading</p>
            <Link href="#token" className="group inline-flex items-center text-sm font-medium text-primary">
              Learn more
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          {/* Box 3: Low Fees */}
          <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <PiggyBank className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Low Fees</h3>
            <h4 className="mb-2 text-lg font-semibold">Pay Up To 50% Less</h4>
            <p className="mb-4 text-muted-foreground">With fees of just 0.4% on buys and 0.6% on sells, you'll pay at most half of what you would at competitor platforms.</p>
            <p className="text-sm font-medium text-primary">Keep more of your profits</p>
          </div>
          
          {/* Box 4: Cross-Chain Transfers */}
          <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <ArrowRightLeft className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Cross-Chain Transfers</h3>
            <h4 className="mb-2 text-lg font-semibold">Move Funds Across Chains</h4>
            <p className="mb-4 text-muted-foreground">Seamlessly transfer assets between blockchains with our native Debridge integration. No additional platform fees.</p>
            <p className="text-sm font-medium text-primary">Simplified cross-chain trading</p>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  )
}

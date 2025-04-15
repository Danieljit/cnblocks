import React from 'react'
import { TextEffect } from '@/components/motion-primitives/text-effect'

export default function BoldStatement() {
  return (
    <section className="bg-primary py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
            Trade like a professional. Pay less than everyone else.
          </TextEffect>
          <TextEffect
            per="line"
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.5}
            as="p"
            className="mx-auto mt-6 max-w-3xl text-balance text-lg text-primary-foreground/90 md:text-xl">
            Our competitive fee structure of 0.4% on buys and 0.6% on sells helps you maximize your trading profits. Token holders and active traders can unlock even greater savings.
          </TextEffect>
        </div>
      </div>
    </section>
  )
}

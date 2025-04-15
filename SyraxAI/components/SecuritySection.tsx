import React from 'react'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import { Shield, Lock, CheckCircle, FileCheck } from 'lucide-react'

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

export default function SecuritySection() {
  return (
    <section className="bg-muted py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Security You Can Trust
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
          
          {/* Security Feature 1 */}
          <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Non-custodial Platform</h3>
            <p className="text-muted-foreground">You always control your assets</p>
          </div>
          
          {/* Security Feature 2 */}
          <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Secure Transaction Signing</h3>
            <p className="text-muted-foreground">With advanced TEE technology</p>
          </div>
          
          {/* Security Feature 3 */}
          <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <FileCheck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Platform Audited</h3>
            <p className="text-muted-foreground">By Cantina (audit in progress)</p>
          </div>
          
          {/* Security Feature 4 */}
          <div className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Additional Security</h3>
            <p className="text-muted-foreground">Multi-layered security protocols to protect your assets</p>
          </div>
        </AnimatedGroup>
        
        <div className="mx-auto mt-16 max-w-3xl rounded-xl border bg-card p-8 shadow-md">
          <div className="flex items-center justify-center">
            <Shield className="mr-2 h-8 w-8 text-primary" />
            <h3 className="text-2xl font-bold">Your Security is Our Priority</h3>
          </div>
          <p className="mt-4 text-center text-muted-foreground">
            We've designed Syrax with security as a foundational principle. Our non-custodial approach ensures you always maintain control of your assets, while our advanced TEE technology provides secure transaction signing without compromising on speed.
          </p>
        </div>
      </div>
    </section>
  )
}

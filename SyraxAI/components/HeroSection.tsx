import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export default function HeroSection() {
  return (
    <section className="overflow-hidden">
      <div className="relative pt-24 md:pt-36">
        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
            <AnimatedGroup variants={transitionVariants}>
              <Link
                href="#sonic"
                className="hover:bg-[hsl(162,84%,48%)]/90 bg-[hsl(162,84%,48%)]/80 group mx-auto flex w-fit items-center gap-4 rounded-full border border-[hsl(162,84%,48%)]/20 p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300">
                <span className="text-zinc-900 text-sm font-medium">Live on Sonic 🚀</span>
                <span className="block h-4 w-0.5 border-l bg-zinc-900/30"></span>

                <div className="bg-zinc-900/10 group-hover:bg-zinc-900/20 size-6 overflow-hidden rounded-full duration-500">
                  <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3 text-zinc-900" />
                    </span>
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3 text-zinc-900" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedGroup>

            <h1 className="mt-8 text-balance text-6xl font-bold md:text-7xl lg:mt-16 xl:text-[5.25rem]">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                className="text-zinc-900 dark:text-[hsl(162,84%,48%)] font-black">
                SyraxAI
              </TextEffect>
            </h1>
            <h2 className="mx-auto mt-8 max-w-2xl text-balance text-2xl font-semibold">
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}>
                Trade everything on-chain with a CEX-like experience
              </TextEffect>
            </h2>
            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.7}
              as="p"
              className="mx-auto mt-4 max-w-2xl text-balance text-lg text-muted-foreground">
              Real-time data. Everything in one place. Industry-leading fee structure with just 0.4% on buys and 0.6% on sells.
            </TextEffect>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
              <div
                key={1}
                className="bg-[hsl(162,84%,48%)]/10 rounded-[calc(var(--radius-xl)+0.125rem)] border border-[hsl(162,84%,48%)]/20 p-0.5 shadow-sm">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl px-5 text-base font-bold bg-[hsl(162,84%,48%)] hover:bg-[hsl(162,84%,48%)]/90 text-zinc-900">
                  <Link href="#trade">
                    <span className="text-nowrap">Start Trading</span>
                  </Link>
                </Button>
              </div>
              <div
                key={2}
                className="hover:bg-[hsl(162,84%,48%)]/90 bg-[hsl(162,84%,48%)]/80 dark:bg-[hsl(162,84%,48%)]/70 group mx-auto flex w-fit items-center gap-4 rounded-full border border-[hsl(162,84%,48%)]/20 dark:border-[hsl(162,84%,48%)]/30 p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300">
                <span className="text-zinc-900 dark:text-zinc-900 text-sm font-medium">Solana <span className="font-bold">launching soon</span></span>
              </div>
            </AnimatedGroup>
          </div>
        </div>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}>
          <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
            <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
              {/* Trading interface video */}
              <div className="aspect-15/8 relative rounded-2xl overflow-hidden">
                <video 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/syraxai/media/videos/web-platform-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Fallback image for when video can't load */}
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 opacity-0 pointer-events-none">
                  <Image 
                    src="/syraxai/media/images/token-page-with-window.png" 
                    alt="Trading Interface" 
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  )
}

import React from 'react'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

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

export default function FAQSection() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
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
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-semibold">
                What is Syrax, and how does it differ from other trading platforms?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Syrax is a comprehensive trading terminal that brings the speed and usability of centralized exchanges to on-chain trading. We offer competitive fees (0.4% buys, 0.6% sells), fast execution, and access to all DEXes through one interface, making it easier for both new and experienced traders to access the wide range of assets available on-chain.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-semibold">
                How do the token-based discounts work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                By holding $SYRAX tokens, you unlock tiered fee discounts. These range from 5% with minimal holdings to 50% for larger holders. These discounts can stack with our XP-based trading discounts for maximum savings.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Which chains does Syrax currently support?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Syrax is currently live on Sonic, with plans to expand to Solana, Base (Coinbase's Layer-2), and other chains in the future.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-semibold">
                How does the XP system work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You earn XP through trading activity, completing daily and weekly quests, and maintaining trading streaks. As you accumulate XP, you progress through trading ranks, each offering increasing fee discounts and other benefits.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-lg font-semibold">
                What is the cross-chain transfer functionality?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Through our native integration with Debridge, you can move assets between different blockchains quickly and easily. While Syrax doesn't charge additional fees for this service, standard Debridge/solver fees will apply.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Is Syrax secure?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. Syrax is a non-custodial platform, meaning you always maintain control of your assets. We're currently undergoing a security audit by Cantina, and we employ advanced security measures like TEE technology for transaction signing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AnimatedGroup>
      </div>
    </section>
  )
}

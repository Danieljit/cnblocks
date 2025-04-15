import React from 'react'
import { SiteFooter } from '@/components/site-footer'

// Import components
import { SyraxHeader } from './components/SyraxHeader'
import HeroSection from '@/SyraxAI/components/HeroSection'
import PartnerShowcase from '@/SyraxAI/components/PartnerShowcase'
import FeatureGrid from '@/SyraxAI/components/FeatureGrid'
import BoldStatement from '@/SyraxAI/components/BoldStatement'
import TokenAdvantages from '@/SyraxAI/components/TokenAdvantages'
import TradingExperience from '@/SyraxAI/components/TradingExperience'
import TraderBenefits from '@/SyraxAI/components/TraderBenefits'
import SecuritySection from '@/SyraxAI/components/SecuritySection'
import FinalCTA from '@/SyraxAI/components/FinalCTA'
import FAQSection from '@/SyraxAI/components/FAQSection'
import CustomFooter from '@/SyraxAI/components/CustomFooter'

export default function SyraxAIWebsite() {
  return (
    <>
      <SyraxHeader />
      <HeroSection />
      <PartnerShowcase />
      <FeatureGrid />
      <BoldStatement />
      <TokenAdvantages />
      <TradingExperience />
      <TraderBenefits />
      <SecuritySection />
      <FinalCTA />
      <FAQSection />
      <CustomFooter />
    </>
  )
}

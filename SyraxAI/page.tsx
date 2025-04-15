import React from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

// Import components
import HeroSection from './components/HeroSection'
import PartnerShowcase from './components/PartnerShowcase'
import FeatureGrid from './components/FeatureGrid'
import BoldStatement from './components/BoldStatement'
import TokenAdvantages from './components/TokenAdvantages'
import TradingExperience from './components/TradingExperience'
import TraderBenefits from './components/TraderBenefits'
import SecuritySection from './components/SecuritySection'
import FinalCTA from './components/FinalCTA'
import FAQSection from './components/FAQSection'
import CustomFooter from './components/CustomFooter'

export default function SyraxAIWebsite() {
  return (
    <>
      <SiteHeader />
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

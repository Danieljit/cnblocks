'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { SyraxLogo } from './SyraxLogo'
import { Menu, MenuItem, HoveredLink, ProductItem } from '@/components/ui/navbar-menu'

export function SyraxHeader() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <header className="border-b dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]">
      <div className="mx-auto flex max-w-7xl justify-between px-6 py-4 lg:px-4">
        <div className="flex gap-6 items-center">
          <Link
            href="/syraxai"
            className="flex w-fit items-center gap-2"
          >
            <SyraxLogo />
          </Link>

          <Menu setActive={setActive} className="ml-4">
            <MenuItem setActive={setActive} active={active} item="Features">
              <div className="flex flex-col space-y-4 text-sm min-w-[200px]">
                <HoveredLink href="#trading">Trading Interface</HoveredLink>
                <HoveredLink href="#analytics">Advanced Analytics</HoveredLink>
                <HoveredLink href="#security">Security Features</HoveredLink>
                <HoveredLink href="#mobile">Mobile Access</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Trading Platform"
                  href="#trading-platform"
                  src="/syraxai/media/images/token-page-with-window.png"
                  description="Advanced trading with real-time market data and analytics."
                />
                <ProductItem
                  title="Mobile App"
                  href="#mobile-app"
                  src="/syraxai/media/images/portfolio-wallets.png"
                  description="Trade on the go with our secure and intuitive mobile application."
                />
                <ProductItem
                  title="AI Assistant"
                  href="#ai-assistant"
                  src="/syraxai/media/images/ai-chat-empty.png"
                  description="Get trading insights and market analysis from our AI assistant."
                />
                <ProductItem
                  title="Token Explorer"
                  href="#token-explorer"
                  src="/syraxai/media/images/token-page-with-window.png"
                  description="Discover and analyze tokens with our comprehensive explorer."
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Token">
              <div className="flex flex-col space-y-4 text-sm min-w-[200px]">
                <HoveredLink href="#tokenomics">Tokenomics</HoveredLink>
                <HoveredLink href="#staking">Staking Rewards</HoveredLink>
                <HoveredLink href="#governance">Governance</HoveredLink>
                <HoveredLink href="#utility">Token Utility</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="FAQ">
              <div className="flex flex-col space-y-4 text-sm min-w-[200px]">
                <HoveredLink href="#general">General Questions</HoveredLink>
                <HoveredLink href="#trading-faq">Trading</HoveredLink>
                <HoveredLink href="#security-faq">Security</HoveredLink>
                <HoveredLink href="#token-faq">Token</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
        <div className="-mr-2 flex items-center">
          <Button
            asChild
            variant="default"
            size="sm"
            className="mr-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="#trade" className="text-sm">
              Start Trading
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

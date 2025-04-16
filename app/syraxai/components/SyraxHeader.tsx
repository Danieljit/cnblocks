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
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <div className="flex items-center justify-center rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 px-6 py-3 shadow-lg">
        <div className="flex gap-6 items-center">
          <Link
            href="/syraxai"
            className="flex w-fit items-center gap-2"
          >
            <SyraxLogo />
          </Link>

          <Menu setActive={setActive} className="ml-4">
            <MenuItem setActive={setActive} active={active} item="Referrals">
              <div className="flex flex-col space-y-4 text-sm min-w-[200px]">
                <HoveredLink href="#referral-program" className="text-emerald-600 dark:text-emerald-400 font-medium">Referral Program</HoveredLink>
                <HoveredLink href="#rewards">Rewards</HoveredLink>
                <HoveredLink href="#leaderboard">Leaderboard</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Incentives">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Trading Rewards"
                  href="#trading-rewards"
                  src="/syraxai/media/images/token-page-with-window.png"
                  description="Earn rewards for active trading on our platform."
                />
                <ProductItem
                  title="Staking Benefits"
                  href="#staking-benefits"
                  src="/syraxai/media/images/portfolio-wallets.png"
                  description="Stake your tokens to earn passive income and platform benefits."
                />
                <ProductItem
                  title="Loyalty Program"
                  href="#loyalty-program"
                  src="/syraxai/media/images/ai-chat-empty.png"
                  description="Exclusive benefits for our most loyal users."
                />
                <ProductItem
                  title="Airdrops"
                  href="#airdrops"
                  src="/syraxai/media/images/token-page-with-window.png"
                  description="Participate in regular token airdrops and special events."
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Tokenomics">
              <div className="flex flex-col space-y-4 text-sm min-w-[200px]">
                <HoveredLink href="#token-distribution">Distribution</HoveredLink>
                <HoveredLink href="#utility" className="text-emerald-600 dark:text-emerald-400 font-medium">Utility</HoveredLink>
                <HoveredLink href="#governance">Governance</HoveredLink>
                <HoveredLink href="#staking">Staking</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
        <div className="ml-6 flex items-center gap-3">
          <ThemeToggle />
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-[hsl(162,84%,48%)] text-[hsl(162,84%,48%)] hover:bg-[hsl(162,84%,48%)/10] dark:border-[hsl(162,84%,48%)] dark:text-[hsl(162,84%,48%)] dark:hover:bg-[hsl(162,84%,48%)/20]"
          >
            <Link href="#api" className="text-sm font-medium">
              API
            </Link>
          </Button>
          <Button
            asChild
            variant="default"
            size="sm"
            className="bg-[hsl(162,84%,48%)] hover:bg-[hsl(162,84%,48%)/90] text-white"
          >
            <Link href="#trade" className="text-sm font-medium">
              Start Trading
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

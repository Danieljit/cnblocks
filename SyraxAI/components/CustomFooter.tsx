import React from 'react'
import Link from 'next/link'
import { Twitter, MessageCircle, FileText, HelpCircle } from 'lucide-react'

export default function CustomFooter() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col">
              <h3 className="mb-4 text-lg font-bold">Syrax</h3>
              <p className="text-sm text-muted-foreground">Trade everything on-chain with a CEX-like experience</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="mb-4 text-lg font-bold">Social Links</h3>
              <div className="flex flex-col space-y-2">
                <Link href="#twitter" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </Link>
                <Link href="#telegram" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Telegram
                </Link>
                <Link href="#discord" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Discord
                </Link>
                <Link href="#medium" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                  <FileText className="mr-2 h-4 w-4" />
                  Medium
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col">
              <h3 className="mb-4 text-lg font-bold">Community</h3>
              <div className="flex flex-col space-y-2">
                <Link href="#join" className="text-sm text-muted-foreground hover:text-foreground">
                  Join Community
                </Link>
                <Link href="#docs" className="text-sm text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
                <Link href="#support" className="text-sm text-muted-foreground hover:text-foreground">
                  Support
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col">
              <h3 className="mb-4 text-lg font-bold">Legal</h3>
              <div className="flex flex-col space-y-2">
                <Link href="#terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
                <Link href="#privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 border-t pt-6">
            <p className="text-center text-sm text-muted-foreground">
              2025 Syrax.ai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

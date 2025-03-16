"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { Anchor, Menu, X } from "lucide-react"

// Import site data
import { companyInfo } from "@/lib/site-data"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  return (
    <header className="bg-blue-gradient text-white py-3.5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo - always visible */}
          <Link href="/" className="text-base font-medium flex items-center gap-2">
            <Anchor className="h-5 w-5" />
            <span>{companyInfo.shortName}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/about" className="text-base hover:text-secondary transition-colors">
              About
            </Link>
            <Link href="/faq" className="text-base hover:text-secondary transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-base hover:text-secondary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Book Now Button - Desktop only */}
          <div className="flex items-center">
            <Link href="/booking" className="hidden md:inline-flex btn-secondary text-sm">
              BOOK NOW
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-base hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/faq"
                className="text-base hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-base hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/booking"
                className="btn-secondary text-sm w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                BOOK NOW
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}


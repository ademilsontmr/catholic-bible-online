'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/bible', label: 'Bible' },
    { href: '/prayers', label: 'Prayers' },
    { href: '/novenas', label: 'Novenas' },
    { href: '/saints', label: 'Saints' },
    { href: '/devotionals', label: 'Devotionals' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <div className="md:hidden">
      {/* Mobile menu button */}
      <button
        type="button"
        className="text-gray-700 hover:text-red-600 p-2 transition-colors duration-200 rounded-md hover:bg-red-50"
        aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
        onClick={toggleMenu}
      >
        {isOpen ? (
          // X icon for close
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon for open
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 mobile-menu-overlay" onClick={closeMenu}>
          <div 
            className="fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg mobile-menu-content"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="px-4 py-2 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  )
} 
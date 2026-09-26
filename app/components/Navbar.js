'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Artikel', href: '/artikel' },
    { label: 'Daftar Unit', href: '/DaftarUnit' },
    { label: 'Tentang Kami', href: '/TentangKami' },
    { label: 'Kontak', href: '/Kontak' },
  ]

  return (
    <div className="bg-yellow-300 px-4 md:px-10 py-3 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo_pixel.png"
            alt="Logo"
            width={32}
            height={32}
            className="w-8 h-8"
            priority
          />
          <span className="text-black font-semibold text-lg">Pixelnesia</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 items-center relative">
          {navItems.map((item) => {
            const isActive = pathname.toLowerCase() === item.href.toLowerCase()
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-white text-black rounded-b-xl shadow-md -mt-4'
                    : 'text-black hover:text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-yellow-200 px-4 py-2 rounded-md shadow-md">
          {navItems.map((item) => {
            const isActive = pathname.toLowerCase() === item.href.toLowerCase()
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded text-sm font-semibold ${
                  isActive
                    ? 'bg-white text-black'
                    : 'text-black hover:text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

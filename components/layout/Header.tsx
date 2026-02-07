"use client"

import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 z-50 w-full transition-all duration-300 bg-white dark:bg-slate-900"
    >
      {/* Announcement Bar */}
      <div
        id="announcement-bar"
        className="bg-neutral-800 text-white py-2 px-4 text-sm transition-all duration-300"
      >
        <div className="container mx-auto flex justify-center">
          <span className="hidden md:inline text-center">
            In the event of a medical emergency, CALL 999 immediately, as urgent hospital treatment may be required.
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://app.therapyclinics.co.uk/assets/logo-3lP8_pzo.svg"
              alt="Therapy Clinics"
              width={180}
              height={40}
              priority
            />
          </Link>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="#signup"
              className="hidden md:inline-flex items-center rounded-full px-6 py-2 font-medium text-white shadow-lg transition-all duration-300
                         bg-[var(--color-primary-700)] hover:bg-[var(--color-primary-600)]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

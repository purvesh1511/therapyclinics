"use client"

import { MapPin } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function HeroSection() {
  const [query, setQuery] = useState("")
const [location, setlocation] = useState("")
  return (
    <section className="relative text-center md:py-10 mt-30 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      {/* Heading */}
      <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-gray-100">
        Start your health, wellness,
        <br />
        <span className="text-[var(--color-primary-700)] dark:text-[var(--color-primary-400)]">
          and recovery journey
        </span>
      </h1>

      {/* Description */}
      <p className="mx-auto mb-10 max-w-2xl text-l text-gray-700 dark:text-gray-300">
        Start by searching for a specific practitioner, service or health concern in your local area.
      </p>

      {/* Search Bar */}
      <div className="mx-auto flex max-w-3xl items-center rounded-full border border-gray-300 bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-slate-900">
        {/* Search Input */}
        <div className="flex-1 pl-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for practitioners, services, or health concerns..."
            className="w-full bg-transparent py-4 text-gray-800 placeholder-gray-500 outline-none dark:text-gray-100 dark:placeholder-gray-400"
          />
        </div>

        {/* Location + Button */}
        <div className="flex items-center">
          <div className="mr-4 h-8 border-r border-gray-300 dark:border-gray-700" />

          <MapPin className="mr-2 h-5 w-5 text-[var(--color-primary-700)] dark:text-[var(--color-primary-600)]" />

          <span className="mr-6 hidden md:inline text-gray-700 dark:text-gray-300">
            <input
            type="text"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
            placeholder="Search for practitioners, services, or health concerns..."
            className="w-full bg-transparent py-4 text-gray-800 placeholder-gray-500 outline-none dark:text-gray-100 dark:placeholder-gray-400"
          />
          </span>

          <button
            type="button"
            className="rounded-full px-8 py-3 font-medium text-white transition bg-[var(--color-primary-700)] hover:bg-[var(--color-primary-600)]"
          >
            Search
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mt-12 flex justify-center">
        <div className="relative w-full max-w-6xl">
          <Image
            src="/images/hero-banner.png"
            alt="Hero"
            width={1200}
            height={800}
            className="w-full h-auto object-cover rounded-t-3xl md:rounded-3xl"
            priority
          />
        </div>
      </div>
    </section>
  )
}

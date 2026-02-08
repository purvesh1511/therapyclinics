"use client"

import { MapPin } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [query, setQuery] = useState("")
  const [location, setLocation] = useState("")

  return (
    <section className="relative text-center md:py-10 mt-30 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">

      {/* Heading */}
      <h1 className="mb-6 text-4xl font-serif font-weight-100 md:text-5xl lg:text-5xl">
        Start your <span className="italic">health, wellness,</span>
        <br />
        <span className="italic text-[var(--color-primary-700)] dark:text-[var(--color-primary-400)]">
          and recovery journey
        </span>
      </h1>

      {/* Description */}
      <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
        Start by searching for a specific practitioner, service or health concern in your local area.
      </p>

      {/* Search Bar */}
      <div className="mx-auto flex max-w-3xl items-center rounded-full border bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-slate-900">

        {/* Query input */}
        <div className="flex-1 pl-4">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for practitioners, services, or health concerns..."
            className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        {/* Divider */}
        <div className="mx-4 hidden h-8 border-r md:block dark:border-gray-700" />

        {/* Location */}
        <div className="hidden md:flex items-center gap-2 pr-2">
          <MapPin className="h-5 w-5 text-[var(--color-primary-700)] dark:text-[var(--color-primary-600)]" />
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="w-40 border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        {/* Button */}
        <Button className="rounded-full px-8 bg-[var(--color-primary-700)] hover:bg-[var(--color-primary-600)] text-white">
          Search
        </Button>
      </div>

      {/* Hero Image */}
      <div className="mt-12 flex justify-center">
        <div className="relative w-full max-w-6xl">
          <Image
            src="/images/hero-banner.png"
            alt="Hero"
            width={1200}
            height={800}
            priority
            className="w-full h-auto rounded-t-3xl object-cover md:rounded-3xl"
          />
        </div>
      </div>

    </section>
  )
}

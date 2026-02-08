"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function HealthCarePractice() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-10">

        {/* Left Card */}
        <Card className="w-full md:w-1/2 overflow-hidden shadow-lg">
          <div className="relative h-64">
            <Image
              src="/images/physio-clinic.jpg"
              alt="Clinic"
              fill
              className="object-cover"
            />

            <Badge className="absolute top-4 right-4 bg-red-500 hover:bg-red-500 flex gap-1">
              <Check className="h-4 w-4" />
              Verified
            </Badge>
          </div>

          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-1">
              Wellness Physio Clinic
            </h2>

            <p className="text-green-400 mb-2">
              Physiotherapy • Sports Rehab
            </p>

            <p className="text-muted-foreground mb-2">
              <span className="font-medium">Kensington, London</span>
            </p>

            <p className="text-muted-foreground mb-4">
              Sessions from <span className="font-semibold">£65</span>
            </p>

            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="flex gap-1">
                <Check className="h-4 w-4 text-green-500" />
                Free Consultation
              </Badge>

              <Badge variant="outline" className="flex gap-1">
                <Check className="h-4 w-4 text-green-500" />
                Evening Appointments
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Right Content */}
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <p className="text-sm text-teal-400 mb-2">
            Are you an accredited health care practice?
          </p>

          <h1 className="text-3xl font-bold mb-6">
            Join UK's largest healthcare & wellness platform
          </h1>

          <ul className="space-y-4 mb-6">
            {[
              "Create your free business profile and get discovered",
              "Be discovered when new patients are actively choosing a clinic",
              "Access tools to support your growth and visibility",
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <Button className="bg-orange-500 hover:bg-orange-600 w-max">
            List Your Services
          </Button>
        </div>

      </div>
    </section>
  )
}

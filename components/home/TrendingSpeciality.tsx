import { MapPin } from "lucide-react"
import Image from "next/image"
import { getHomepageSpecialties } from "@/lib/getHomepageSpecialties";


export default async function TrendingSpeciality() {
  const healthSpecialties = await getHomepageSpecialties()
  console.log(healthSpecialties)
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8">
          Trending health concerns
        </h2>

        <div className="flex flex-wrap justify-center gap-9">
          {healthSpecialties.map((concern: any, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center w-24"
            >
              <div className="relative">
                <div className="relative overflow-hidden rounded-full shadow-lg transition-all duration-300 ease-out group-hover:shadow-xl group-hover:shadow-blue-500/20 dark:group-hover:shadow-purple-500/20">
                  <Image
                    src={concern.image || "/images/placeholder.jpg"}
                    alt={concern.name}
                    width={100}
                    height={100}
                    className="w-20 h-20 md:w-24 md:h-24 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>
              <span className="mt-3 text-sm md:text-base font-medium text-gray-900 dark:text-gray-100 transition-all duration-300 font-semibold">
                {concern.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
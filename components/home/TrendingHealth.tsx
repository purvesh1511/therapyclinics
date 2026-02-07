import Image from "next/image";
import { getHomepageConcerns } from "@/lib/getHomepageConcerns";

export default async function TrendingHealth() {
  const healthConcerns = await getHomepageConcerns();
  
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Trending health concerns
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {healthConcerns.map((concern: any) => (
            <div key={concern.id} className="flex flex-col items-center w-24">
              <Image
                src={concern.image_url}
                alt={concern.name}
                width={96}
                height={96}
                className="rounded-full object-cover"
              />
              <span className="mt-3 font-semibold">{concern.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

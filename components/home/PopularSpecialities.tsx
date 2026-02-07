import { getPopularSpecialities } from "@/lib/getPopularSpecialities";
import { getPopularCondition } from "@/lib/getPopularCondition";
import { getPopularTherapies } from "@/lib/getPopularTherapies";

import PopularSpecialtiesClient from "./PopularSpecialtiesClient";

export default async function PopularSpecialties() {
  const popularSpecialities = await getPopularSpecialities();
  const popularCondition = await getPopularCondition();
  const popularTherapies = await getPopularTherapies();

  return (
    <section className="bg-[var(--color-primary-600)] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <div>
          <PopularSpecialtiesClient popularSpecialities={popularSpecialities} />
        </div>
        <hr className="border-[var(--color-primary-500)]" />
        <div>
          <PopularSpecialtiesClient popularSpecialities={popularCondition} />
        </div>
        <hr className="border-[var(--color-primary-500)]" />
        <div>
          <PopularSpecialtiesClient popularSpecialities={popularTherapies} />
        </div>
      </div>
    </section>
  )
}
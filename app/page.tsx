import HeroSection from "@/components/home/HeroSection"
import TrendingHealth from "@/components/home/TrendingHealth";
import TrendingSpeciality from "@/components/home/TrendingSpeciality";
import PopularSpecialties from "@/components/home/PopularSpecialities";
import HealthCarePractice from "@/components/home/HealthCarePractice";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Therapy Clinics + No. 1 Health &amp; Wellness Platform in the UK",
  description: "Find trusted clinics for therapy, health, wellness &amp; recovery. Start by searching for a specific practitioner, service or health concern in your local area.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrendingHealth />
      <TrendingSpeciality />
      <PopularSpecialties />
      <HealthCarePractice />
    </>
  );
}

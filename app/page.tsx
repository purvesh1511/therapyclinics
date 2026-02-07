import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection"
import TrendingHealth from "@/components/home/TrendingHealth";
import TrendingSpeciality from "@/components/home/TrendingSpeciality";
import PopularSpecialties from "@/components/home/PopularSpecialities";
import HealthCarePractice from "@/components/home/HealthCarePractice";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <TrendingHealth />
      <TrendingSpeciality />
      <PopularSpecialties />
      <HealthCarePractice />
      <Footer />
    </>
  );
}

import CTASection from "@/components/partners/CTASection";
import FAQSection from "@/components/partners/FAQSection";
import PricingSection from "@/components/partners/PricingSection";
import ProblemSection from "@/components/partners/ProblemSection";
import ProviderSection from "@/components/partners/ProviderSection";
import SolutionSection from "@/components/partners/SolutionSection";
import StatsSection from "@/components/partners/StatsSection";

export default function Partners() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 pt-40 text-gray-800 font-sans">
        <main>
          {/* Hero Section */}
          <ProviderSection />


          {/* Problem Section */}
          <ProblemSection />

          {/* Solution Section */}
          <SolutionSection />

          {/* Stats Section */}
          <StatsSection />

          {/* Pricing Section */}
          <PricingSection />

          {/* FAQ Section */}
          <FAQSection />

          {/* CTA Section */}
          <CTASection />
        </main>
      </div>
    </>
  );
}
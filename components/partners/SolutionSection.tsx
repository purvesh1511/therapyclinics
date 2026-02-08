import { Button } from "@/components/ui/button"

export default function SolutionSection() {

  return (
    <section className="py-16 bg-gray-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h4 className="text-xl font-bold font-arial text-primary mb-4 text-center">
            Introducing
          </h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            A patient discovery platform for private clinics
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            A more sustainable channel to generate qualified leads over time
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-blue-100">
              <h3 className="font-bold text-3xl mb-4">Built for private health, wellness, and therapy clinics</h3>
              <p className="text-gray-700">A dedicated platform for private practices, not generic directories.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-blue-100">
              <h3 className="font-bold text-3xl mb-4">Treatments, locations, and expertise presented clearly</h3>
              <p className="text-gray-700">Patients can easily find and compare relevant clinics.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-blue-100">
              <h3 className="font-bold text-3xl mb-4">UK's most comprehensive primary care comparison engine</h3>
              <p className="text-gray-700">One of the most comprehensive treatment price comparison engines in the UK.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-blue-100">
              <h3 className="font-bold text-3xl mb-4">Pages cited by leading AI tools</h3>
              <p className="text-gray-700">Our pages are frequently cited when patients research clinics using AI.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-blue-100">
              <h3 className="font-bold text-3xl mb-4">Improved search visibility</h3>
              <p className="text-gray-700">Reduce reliance on paid acquisition channels with better organic reach.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-blue-100">
              <h3 className="font-bold text-3xl mb-4">Helps patients find you at decision stage</h3>
              <p className="text-gray-700">Connect with nearby patients who are ready to book.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

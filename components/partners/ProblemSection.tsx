import { Button } from "@/components/ui/button"

export default function ProblemSection() {

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-1xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Being a good clinic is no longer enough
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            How patients decide which clinic to contact has fundamentally changed
          </p>

          <div className="grid md:grid-cols-4 gap-1">
            <div className="p-8">
              <h3 className="font-bold text-center text-3xl mb-3">Patients research across multiple platforms</h3>
              <p className="text-center text-gray-600">Before choosing a clinic, patients check Google, directories, and AI tools.</p>
            </div>
            <div className="p-8">
              <h3 className="font-bold text-3xl text-center mb-3">Visibility matters as much as reputation</h3>
              <p className="text-center text-gray-600">Many great clinics are losing patients without realising it.</p>
            </div>
            <div className="p-8">
              <h3 className="font-bold text-3xl text-center mb-3">AI tools influence which clinics get found</h3>
              <p className="text-center text-gray-600">AI and search tools now determine which clinics are surfaced first.</p>
            </div>
            <div className="p-8">
              <h3 className="font-bold text-3xl text-center mb-3">Many clinics are filtered out early</h3>
              <p className="text-center text-gray-600">Before patients even compare options, clinics are already filtered out.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"

export default function HealthCarePractice() {
  
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-10">

        <div className="bg-white-800 rounded-xl shadow-lg overflow-hidden w-full md:w-1/2">
          <div className="relative">
            <img src="/images/physio-clinic.jpg" alt="Clinic" className="w-full h-64 object-cover" />
              <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Verified
              </span>
              <div className="absolute top-4 left-4 bg-white text-gray-800 px-3 py-1 rounded-full font-bold">WP</div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-1">Wellness Physio Clinic</h2>
            <p className="text-green-400 mb-2">Physiotherapy • Sports Rehab</p>
            <p className="text-gray-400 mb-4"><span className="font-medium">Kensington, London</span></p>
            <p className="text-gray-400 mb-4">Sessions from <span className="font-semibold">£65</span></p>
            <div className="flex gap-3">
              <span className="bg-gray-700 px-3 py-1 rounded-full text-white text-sm flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Free Consultation
              </span>
              <span className="bg-gray-700 px-3 py-1 rounded-full  text-white text-sm flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Evening Appointments
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center w-full md:w-1/2">
          <p className="text-sm text-teal-400 mb-2">Are you an accredited health care practice?</p>
          <h1 className="text-3xl font-bold mb-6">Join UK's largest healthcare & wellness platform</h1>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Create your free business profile and get discovered</span>
            </li>
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Be discovered when new patients are actively choosing a clinic</span>
            </li>
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Access tools to support your growth and visibility</span>
            </li>
          </ul>
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-white font-semibold w-max">List Your Services</button>
        </div>

      </div>
    </section>
  )
}
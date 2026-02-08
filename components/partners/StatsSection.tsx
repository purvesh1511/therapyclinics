export default function StatsSection() {
  return (
    <section className="py-16 bg-primary from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Be visible to high-intent patients
          </h2>
          <p className="text-xl text-white mb-12 text-center">
            Ensure your practice is visible to the thousands of patients searching on<br /> our platform weekly
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 rounded-full bg-[var(--color-primary-300)] opacity-30" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7 text-primary-foreground"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="text-6xl font-bold mb-2">1,200+</div>
              <p className="text-white text-xl mt-4">Active patient users per week</p>
            </div>
            <div className="text-center">
              <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 rounded-full bg-[var(--color-primary-300)] opacity-30" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-eye h-7 w-7 text-primary-foreground"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div className="text-6xl font-bold mb-2">110,000+</div>
              <p className="text-white text-xl mt-4">Monthly organic impressions on Google</p>
            </div>
            <div className="text-center">
              <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 rounded-full bg-[var(--color-primary-300)] opacity-30" />

                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative z-10 h-7 w-7 text-white"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
              <div className="text-6xl font-bold mb-2">28%</div>
              <p className="text-white text-xl mt-4">More qualified enquiries without changing how you operate</p>
            </div>
          </div>

          <div className="relative p-8 rounded-xl text-center overflow-hidden">
            {/* Background layer */}
            <div className="absolute inset-0 bg-[var(--color-primary-300)] opacity-20 rounded-xl" />

            {/* Content layer */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold font-arial text-white mb-4">
                Increase visibility in AI-assisted patient research
              </h3>
              <p className="text-ml font-bold text-white font-arial">
                Our pages are cited in over 28% of AI-assisted clinic searches
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Check } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";

export default function ProviderSection() {
  return (
    <section className="gradient-bg rounded-2xl p-8 mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-xl md:text-xl text-primary font-arial font-bold text-gray-800 mb-4">
            FOR HEALTHCARE PROVIDERS
          </h1>
          <h2 className="text-5xl md:text-5xl font-bold mb-6">
            Join UK's largest healthcare & wellness platform
          </h2>
          <p className="text-2xl text-gray-700 mb-6">
            Connect with thousands of patients actively searching for practitioners like you
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <Check className="h-6 w-6 text-green-500 flex-shrink-0 mr-2" />
              <span>Be discovered when new patients are actively choosing a clinic</span>
            </div>
            <div className="flex items-start">
              <Check className="h-6 w-6 text-green-500 flex-shrink-0 mr-2" />
              <span>Increase revenue while protecting your regulars</span>
            </div>
            <div className="flex items-start">
              <Check className="h-6 w-6 text-green-500 flex-shrink-0 mr-2" />
              <span>Attract qualified enquiries without changing your workflow</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Ready to grow your practice?
          </h3>
          <p className="text-gray-600 mb-6">
            Fill out the form below and we'll be in touch.
          </p>

          <form className="rounded-xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First name *</label>
                <Input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                <Input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone number*</label>
                <Input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Practice Name*</label>
                <Input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Practice Email*</label>
                <Input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Practice Website</label>
              <div className="flex">
                <Input
                  type="text"
                  placeholder="https://"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="flex items-start">
                <Checkbox
                  className="mt-1 mr-3 w-5 h-5 text-primary rounded focus:ring-primary"
                />
                <span className="text-primmary">
                  I agree to receive marketing and other communications from Therapy Clinics.
                  <br />
                  <span className="text-primmary text-sm">
                    For more information, please review our <a href="#" className="text-primmary hover:underline">Terms of Use</a> and <a href="#" className="text-primmary hover:underline">Privacy Policy</a>.
                  </span>
                </span>
              </label>
            </div>

            <button className="w-full text-white font-semibold py-2 px-6 rounded-lg bg-[var(--color-primary-700)] hover:bg-[var(--color-primary-600)] transition duration-200 text-lg">
              List Your Clinic
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
